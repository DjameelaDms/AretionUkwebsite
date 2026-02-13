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
- **Styling:** TailwindCSS with custom CSS theme (brand colors)
- **Components:** Shadcn UI components
- **Forms:** Frontend-only with localStorage (no backend integration yet)
- **Deployment:** Single page application

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
   - Professional footer with company info and offices
   - All navigation links functional
   - **Conditional Logo Display:** Orange/rust logo on homepage, blue logo on all other pages
   - **Loading Spinner:** Full-screen loading animation with spinning logo on page load

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

3. **Interactive Forms (Frontend-only)**
   - Career Interest Registration Form
     - Fields: Name, email, area of interest, CV upload
     - Form validation
     - Toast notifications
     - Data stored in localStorage
   
   - Contact Form
     - Fields: Enquiry type, name, organization, country, email, message
     - Consent checkbox
     - Form validation
     - Toast notifications
     - Data stored in localStorage

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
- None - MVP complete for frontend-only phase

### P1 Features (High Priority - Backend Phase)
- Backend API development
- Database integration (MongoDB)
- Form submission handlers (contact, careers)
- Admin panel for content management
- Email notification system
- CV/file upload handling

### P2 Features (Nice to Have)
- Insights article CMS
- Newsletter subscription
- Search functionality
- Multi-language support (Arabic for Gulf office)
- Accessibility audit and improvements
- SEO optimization
- Analytics integration

## Next Tasks
1. ✅ User to review frontend-only website
2. ✅ Conditional logo display (orange on homepage, blue elsewhere)
3. ✅ Loading spinner with company logo
4. Upon approval, proceed with backend development
5. Integrate forms with backend API
6. Add file upload capability for CVs

## Deferred Items
- Backend development (awaiting frontend approval)
- Actual image assets (placeholders acceptable for now)
- Content for Insights articles section
- Detailed career listings page
- Sitemap, Cookie Policy, Accessibility, Modern Slavery Statement pages

## Technical Notes
- All forms currently use localStorage for demo purposes
- Mock data in `/app/frontend/src/mock/mockData.js`
- Forms include proper validation and user feedback
- Color palette extracted from client branding board
- Responsive breakpoints: mobile (<768px), tablet (768-1024px), desktop (>1024px)

---
**Last Updated:** February 2026
