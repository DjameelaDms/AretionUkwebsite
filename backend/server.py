from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
import asyncio
import resend
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Resend configuration
resend.api_key = os.environ.get('RESEND_API_KEY')
SENDER_EMAIL = os.environ.get('SENDER_EMAIL', 'onboarding@resend.dev')

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")  # Ignore MongoDB's _id field
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str

# Contact Form Model
class ContactFormRequest(BaseModel):
    name: str
    email: EmailStr
    company: Optional[str] = None
    subject: str
    message: str

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    
    # Convert to dict and serialize datetime to ISO string for MongoDB
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    
    _ = await db.status_checks.insert_one(doc)
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    # Exclude MongoDB's _id field from the query results
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    
    # Convert ISO string timestamps back to datetime objects
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    
    return status_checks

# Contact Form Endpoint
@api_router.post("/contact")
async def submit_contact_form(request: ContactFormRequest):
    email_sent = False
    email_id = None
    email_error = None
    
    try:
        # Create HTML email content
        html_content = f"""
        <html>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <h2 style="color: #1a3a52;">New Contact Form Submission</h2>
            <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
                <tr>
                    <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Name:</td>
                    <td style="padding: 10px; border-bottom: 1px solid #eee;">{request.name}</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Email:</td>
                    <td style="padding: 10px; border-bottom: 1px solid #eee;">{request.email}</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Company:</td>
                    <td style="padding: 10px; border-bottom: 1px solid #eee;">{request.company or 'Not provided'}</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Subject:</td>
                    <td style="padding: 10px; border-bottom: 1px solid #eee;">{request.subject}</td>
                </tr>
                <tr>
                    <td style="padding: 10px; font-weight: bold; vertical-align: top;">Message:</td>
                    <td style="padding: 10px;">{request.message}</td>
                </tr>
            </table>
            <p style="margin-top: 20px; color: #666; font-size: 12px;">
                This message was sent from the ARETION & Company website contact form.
            </p>
        </body>
        </html>
        """
        
        params = {
            "from": SENDER_EMAIL,
            "to": ["post@aretion.co.uk"],
            "subject": f"Contact Form: {request.subject}",
            "html": html_content,
            "reply_to": request.email
        }
        
        # Try to send email
        try:
            email = await asyncio.to_thread(resend.Emails.send, params)
            email_sent = True
            email_id = email.get("id")
            logger.info(f"Contact form email sent successfully: {email_id}")
        except Exception as email_error_exc:
            email_error = str(email_error_exc)
            logger.warning(f"Email sending failed (will still store submission): {email_error}")
        
        # Store submission in database regardless of email status
        submission_doc = {
            "id": str(uuid.uuid4()),
            "name": request.name,
            "email": request.email,
            "company": request.company,
            "subject": request.subject,
            "message": request.message,
            "timestamp": datetime.now(timezone.utc).isoformat(),
            "email_sent": email_sent,
            "email_id": email_id,
            "email_error": email_error
        }
        await db.contact_submissions.insert_one(submission_doc)
        
        logger.info(f"Contact form submission stored: {submission_doc['id']}")
        
        return {
            "status": "success",
            "message": "Thank you for your enquiry. We will respond shortly."
        }
        
    except Exception as e:
        logger.error(f"Failed to process contact form: {str(e)}")
        raise HTTPException(status_code=500, detail=f"Failed to process your request: {str(e)}")

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()