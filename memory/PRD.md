# ARETION & Company Website - Product Requirements Document

## Original Problem Statement
Create a conservative website for ARETION & Company, a UK-based group. The company oversees specialist entities in informatics, publishing, and healthcare consulting. Design inspired by McKinsey's professional, conservative aesthetic.

**Company Details:**
- Established: 1986 (concept)
- Strengthened: 2025 (mergers & acquisitions)
- Capital: 100M (internal information, not displayed)
- Company Number: 17021760

## Architecture & Tech Stack
- **Frontend:** React 19 with React Router
- **Backend:** FastAPI with Pydantic models
- **Database:** MongoDB (async with motor)
- **Styling:** TailwindCSS with custom CSS theme (brand colors)
- **Components:** Shadcn UI components
- **Email:** Resend API for transactional emails
- **Storage:** Emergent Object Storage for file uploads
- **Deployment:** Kubernetes-based preview environment

## Brand Identity
**Color Palette:**
- Navy Blue: #1a3a52 (primary)
- Steel Blue: #5c8aad (secondary)
- Tan/Beige: #b89968 (accent warm)
- Rust/Terracotta: #a65a3a (accent)
- Burgundy: #4a1f1f (dark accent)

**Typography:**
- Display: Playfair Display (elegant serif)
- Headings: Inter (professional sans-serif)
- Body: Inter

**Design Principles:**
- Conservative, professional McKinsey-inspired design
- Generous whitespace
- Subtle animations and transitions
- Clear hierarchy and structure
- Legally cautious tone (British English)

## User Personas
1. **Potential Partners:** Healthcare organizations, government bodies seeking informatics/consulting services
2. **Investors/Stakeholders:** Reviewing company structure and governance
3. **Job Seekers:** Interested in careers across group entities
4. **Media/Press:** Seeking company information and announcements
5. **Academic Community:** Interested in publishing and research programmes

## Core Requirements (Static)

### Navigation Structure
- Home
- About
- Group Companies
- Governance & Leadership
- Standards & Policies
- Newsroom
- Insights
- Careers
- Contact

### Key Sections
1. **Hero Section:** Company overview with founding/strengthening dates
2. **Group Companies:** Three entities (Informatics, Publishing, Healthcare Consulting)
3. **Governance:** Leadership team display
4. **Forms:** Contact form and Career registration (frontend-only)
5. **Legal Pages:** Privacy Notice, Terms of Use

### Operating Entities
1. **ARETION Informatics Solutions**
   - Focus: Health Information Systems (HIS)
   - Services: Architecture, implementation, integration, analytics
   
2. **ARETION Publishing Group**
   - Focus: Medicine, law, public health publishing
   - Featured: Journal of Medicine, Law and Public Health (JMLPH)
   
3. **ARETION Healthcare Consulting**
   - Focus: Governance and medical law research
   - Note: Not a law firm, no legal advice provided
   - Programmes: Nigeria, Cameroon, Kenya

## What's Been Implemented (December 2025 - February 2026)

### ✅ Completed Features
1. **Layout & Navigation**
   - Fixed header with smooth scroll behavior
   - Mobile-responsive navigation menu
   - **NEW Institutional Footer**: 3-tier design (brand band, navigation grid, utility bar)
     - 4-column desktop layout with accordion on mobile
     - Links: Our Group, Operating Entities, Resources, Where We Operate
     - Language selector and social media icons
     - No logo in footer
   - All navigation links functional
   - **Conditional Logo Display:** Orange/rust logo on homepage, blue logo on all other pages
   - **Loading Spinner:** Full-screen loading animation with subtle pulse/fade effect
   - **Unified Fonts:** Header and footer use IBM Plex Sans (website body font)

2. **Standards & Policies Page - Modal System (Feb 2026)**
   - Removed obsolete tabs: "Modern Slavery Statement" and "Speak up policy"
   - Implemented modal pop-ups for 7 policy documents:
     - Anti-Bribery and Anti-Corruption Policy (NEW)
     - Code of Conduct (NEW - from uploaded document)
     - Conflicts of Interest Policy
     - Privacy Notice (UK GDPR)
     - Information Security and Confidentiality
     - Publishing Ethics and Peer Review
     - Complaints Handling Policy
   - Content sourced from user-provided DOCX documents
   - Consistent font styling with IBM Plex Sans
   - Responsive modal design with escape key and click-outside-to-close support
   
3. **Footer Legal Links (Feb 2026)**
   - Added Anti-Bribery Policy link to footer utility bar
   - Updated Code of Conduct with content from new uploaded document
   - Footer now has 4 legal links: Privacy Notice, Terms of Use, Code of Conduct, Anti-Bribery Policy

2. **Pages Created (11 total):**
   - Home (hero, company overview, group companies, initiatives)
   - About (history, milestones, operations)
   - Group Companies (detailed entity information)
   - Governance & Leadership (team, principles, In Memoriam)
   - Standards & Policies (comprehensive policy list)
   - Newsroom (press releases)
   - Insights (categories placeholder)
   - Careers (values, locations, registration form)
   - Contact (contact info + enquiry form)
   - Privacy Notice (UK GDPR compliant)
   - Terms of Use

3. **Interactive Forms (Backend-integrated)**
   - Career Interest Registration Form
     - Fields: Name, email, area of interest, CV upload
     - **CV File Upload:** Functional upload to Emergent Object Storage (PDF/DOC/DOCX, max 5MB)
     - Backend API: POST /api/careers/register (multipart form data)
     - Email notification via Resend API
     - Data stored in MongoDB (career_registrations collection)
     - Success modal on submission
   
   - Contact Form
     - Fields: Name, email, organisation, subject, message
     - Backend API: POST /api/contact
     - Email notification via Resend API
     - Data stored in MongoDB (contact_submissions collection)
     - Success modal on submission

4. **Design Implementation**
   - Custom CSS theme with brand colors
   - Typography system (Inter + Playfair Display)
   - Responsive grid layouts
   - Hover states and transitions
   - Conservative, professional aesthetic
   - Generous spacing following McKinsey style

5. **Content**
   - Complete copy from provided document
   - Leadership team (7 members)
   - 9 policies and standards listed
   - 3 press releases
   - Milestone timeline
   - Office locations (UK + Gulf)

## Prioritized Backlog

### P0 Features (Critical)
- None - MVP complete with backend integration

### P1 Features (High Priority)
- ✅ Backend API development (FastAPI)
- ✅ Database integration (MongoDB)
- ✅ Contact form backend integration
- ✅ Careers form backend integration
- ✅ Email notification system (Resend API)
- ✅ CV/file upload handling (Emergent Object Storage)
- Admin panel for content management

### P2 Features (Nice to Have)
- Insights article CMS
- Newsletter subscription
- Search functionality
- Multi-language support (Arabic for Gulf office)
- Accessibility audit and improvements
- SEO optimization
- Analytics integration

## Completed Tasks (March 2026)
1. ✅ White space fix below footer (CSS overscroll behavior)
2. ✅ Footer links update (Operating Entities external URLs, removed Media Enquiries)
3. ✅ CV File Upload for Careers page with Object Storage integration
4. ✅ Testing: Backend API tests (10/10 passed) + Frontend tests (7/7 passed)

## Next Tasks
1. **Font Style Unification (Pending User Clarification):** User requested to unify font style - awaiting confirmation if body text should change from 'IBM Plex Sans' to 'Cormorant Garamond'
2. Full end-to-end testing of all forms and modals
3. Backend refactoring (split server.py into route modules)
4. Modal component consolidation

## Deferred Items
- Backend development (awaiting frontend approval)
- Actual image assets (placeholders acceptable for now)
- Content for Insights articles section
- Detailed career listings page
- Sitemap, Cookie Policy, Accessibility, Modern Slavery Statement pages

## Technical Notes
- **Backend API:** FastAPI with /api prefix for all routes
- **Database:** MongoDB collections: contact_submissions, career_registrations
- **Email:** Resend API (test sender: onboarding@resend.dev - user needs to verify aretion.co.uk domain for production)
- **File Storage:** Emergent Object Storage at aretion-corporate/careers/cv/
- Mock data in `/app/frontend/src/mock/mockData.js`
- Forms include proper validation and user feedback
- Color palette extracted from client branding board
- Responsive breakpoints: mobile (<768px), tablet (768-1024px), desktop (>1024px)

## Known Issues
- **Pending Clarification:** Font style unification - user requested to use heading font for body text

---
**Last Updated:** 21 March 2026
