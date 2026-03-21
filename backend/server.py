from fastapi import FastAPI, APIRouter, HTTPException, UploadFile, File, Form
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
import asyncio
import resend
import requests
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# Configure logging early so it's available everywhere
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Resend configuration
resend.api_key = os.environ.get('RESEND_API_KEY')
SENDER_EMAIL = os.environ.get('SENDER_EMAIL', 'onboarding@resend.dev')

# Object Storage configuration
STORAGE_URL = "https://integrations.emergentagent.com/objstore/api/v1/storage"
EMERGENT_LLM_KEY = os.environ.get('EMERGENT_LLM_KEY')
APP_NAME = "aretion-corporate"
storage_key = None

# Allowed file types for CV upload
ALLOWED_CV_EXTENSIONS = {'pdf', 'doc', 'docx'}
ALLOWED_CV_MIME_TYPES = {
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
}
MAX_CV_SIZE = 5 * 1024 * 1024  # 5MB

def init_storage():
    """Initialize storage and return storage_key. Called once at startup."""
    global storage_key
    if storage_key:
        return storage_key
    if not EMERGENT_LLM_KEY:
        logger.warning("EMERGENT_LLM_KEY not set - file uploads will be disabled")
        return None
    try:
        resp = requests.post(
            f"{STORAGE_URL}/init",
            json={"emergent_key": EMERGENT_LLM_KEY},
            timeout=30
        )
        resp.raise_for_status()
        storage_key = resp.json()["storage_key"]
        logger.info("Object storage initialized successfully")
        return storage_key
    except Exception as e:
        logger.error(f"Failed to initialize storage: {e}")
        return None

def put_object(path: str, data: bytes, content_type: str) -> dict:
    """Upload file to object storage. Returns {"path": "...", "size": 123, "etag": "..."}"""
    key = init_storage()
    if not key:
        raise HTTPException(status_code=503, detail="Storage service unavailable")
    resp = requests.put(
        f"{STORAGE_URL}/objects/{path}",
        headers={"X-Storage-Key": key, "Content-Type": content_type},
        data=data,
        timeout=120
    )
    resp.raise_for_status()
    return resp.json()

def get_object(path: str) -> tuple:
    """Download file from object storage. Returns (content_bytes, content_type)."""
    key = init_storage()
    if not key:
        raise HTTPException(status_code=503, detail="Storage service unavailable")
    resp = requests.get(
        f"{STORAGE_URL}/objects/{path}",
        headers={"X-Storage-Key": key},
        timeout=60
    )
    resp.raise_for_status()
    return resp.content, resp.headers.get("Content-Type", "application/octet-stream")

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

# Career Interest Registration Endpoint with File Upload
@api_router.post("/careers/register")
async def register_career_interest(
    name: str = Form(...),
    email: str = Form(...),
    areaOfInterest: str = Form(...),
    cvFile: Optional[UploadFile] = File(None)
):
    email_sent = False
    email_id = None
    email_error = None
    cv_storage_path = None
    cv_file_name = None
    
    try:
        # Handle CV file upload if provided
        if cvFile and cvFile.filename:
            # Validate file extension
            ext = cvFile.filename.split(".")[-1].lower() if "." in cvFile.filename else ""
            if ext not in ALLOWED_CV_EXTENSIONS:
                raise HTTPException(
                    status_code=400, 
                    detail=f"Invalid file type. Allowed types: {', '.join(ALLOWED_CV_EXTENSIONS)}"
                )
            
            # Validate content type
            if cvFile.content_type and cvFile.content_type not in ALLOWED_CV_MIME_TYPES:
                raise HTTPException(
                    status_code=400, 
                    detail="Invalid file type. Please upload a PDF or Word document."
                )
            
            # Read file content
            file_content = await cvFile.read()
            
            # Validate file size
            if len(file_content) > MAX_CV_SIZE:
                raise HTTPException(
                    status_code=400, 
                    detail=f"File too large. Maximum size is {MAX_CV_SIZE // (1024*1024)}MB."
                )
            
            # Upload to object storage
            file_uuid = str(uuid.uuid4())
            storage_path = f"{APP_NAME}/careers/cv/{file_uuid}.{ext}"
            
            try:
                result = put_object(
                    storage_path, 
                    file_content, 
                    cvFile.content_type or "application/octet-stream"
                )
                cv_storage_path = result["path"]
                cv_file_name = cvFile.filename
                logger.info(f"CV uploaded successfully: {cv_storage_path}")
            except Exception as upload_error:
                logger.warning(f"CV upload failed (will continue without file): {upload_error}")
                # Continue without file - don't fail the entire registration
        
        # Map area of interest to readable format
        area_labels = {
            'informatics': 'Informatics',
            'publishing': 'Publishing',
            'healthcare-consulting': 'Healthcare Consulting',
            'corporate': 'Corporate / Group',
            'solutions': 'Solutions'
        }
        area_display = area_labels.get(areaOfInterest, areaOfInterest)
        
        # Create HTML email content
        cv_info = f"Yes - {cv_file_name}" if cv_file_name else "No"
        html_content = f"""
        <html>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <h2 style="color: #1a3a52;">New Career Interest Registration</h2>
            <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
                <tr>
                    <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Name:</td>
                    <td style="padding: 10px; border-bottom: 1px solid #eee;">{name}</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Email:</td>
                    <td style="padding: 10px; border-bottom: 1px solid #eee;">{email}</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Area of Interest:</td>
                    <td style="padding: 10px; border-bottom: 1px solid #eee;">{area_display}</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">CV Attached:</td>
                    <td style="padding: 10px; border-bottom: 1px solid #eee;">{cv_info}</td>
                </tr>
            </table>
            <p style="margin-top: 20px; color: #666; font-size: 12px;">
                This registration was submitted from the ARETION & Company careers page.
                {f'<br>CV file path: {cv_storage_path}' if cv_storage_path else ''}
            </p>
        </body>
        </html>
        """
        
        params = {
            "from": SENDER_EMAIL,
            "to": ["post@aretion.co.uk"],
            "subject": f"Career Interest: {name} - {area_display}",
            "html": html_content,
            "reply_to": email
        }
        
        # Try to send email
        try:
            email_result = await asyncio.to_thread(resend.Emails.send, params)
            email_sent = True
            email_id = email_result.get("id")
            logger.info(f"Career interest email sent successfully: {email_id}")
        except Exception as email_error_exc:
            email_error = str(email_error_exc)
            logger.warning(f"Email sending failed (will still store submission): {email_error}")
        
        # Store submission in database
        submission_doc = {
            "id": str(uuid.uuid4()),
            "name": name,
            "email": email,
            "areaOfInterest": areaOfInterest,
            "cvFileName": cv_file_name,
            "cvStoragePath": cv_storage_path,
            "timestamp": datetime.now(timezone.utc).isoformat(),
            "email_sent": email_sent,
            "email_id": email_id,
            "email_error": email_error
        }
        await db.career_registrations.insert_one(submission_doc)
        
        logger.info(f"Career interest registration stored: {submission_doc['id']}")
        
        return {
            "status": "success",
            "message": "Thank you for registering your interest. We will be in touch when relevant opportunities arise.",
            "cvUploaded": bool(cv_storage_path)
        }
        
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Failed to process career registration: {str(e)}")
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

@app.on_event("startup")
async def startup_event():
    """Initialize services on startup."""
    try:
        init_storage()
        logger.info("Application startup complete")
    except Exception as e:
        logger.error(f"Startup error: {e}")

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()