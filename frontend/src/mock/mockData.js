// Mock data for ARETION & Company website

export const groupCompanies = [
  {
    id: 1,
    name: "ARETION Informatics Solutions",
    tagline: "Health Information Systems (HIS)",
    description: "Design and delivery support for HIS and healthcare digital platforms.",
    link: "https://informatics.aretion.co.uk",
    icon: "Database"
  },
  {
    id: 2,
    name: "ARETION Publishing Group",
    tagline: "Medicine, Law & Public Health",
    description: "Publishing across medicine, law and public health, with emphasis on editorial governance and research integrity.",
    link: "https://publishing.aretion.co.uk",
    icon: "BookOpen"
  },
  {
    id: 3,
    name: "ARETION Healthcare Consulting",
    tagline: "Governance & Medical Law Research",
    description: "Advisory and project support across healthcare governance and medical law research themes.",
    link: "https://Aretion.org",
    icon: "Stethoscope"
  }
];

export const newsroomArticles = [
  {
    id: 1,
    date: "2025",
    title: "ARETION & Company Acquires Journal of Medicine, Law and Public Health",
    excerpt: "ARETION & Company announces the acquisition of the peer-reviewed Journal of Medicine, Law and Public Health (JMLPH), strengthening its publishing portfolio.",
    category: "Acquisition"
  },
  {
    id: 2,
    date: "2025",
    title: "Expansion into the Gulf Region",
    excerpt: "ARETION & Company establishes Gulf office at King Abdullah Financial District, marking strategic expansion into the Middle East.",
    category: "Expansion"
  },
  {
    id: 3,
    date: "2022",
    title: "Funded Initiative: iniziativa dei comitati dell'autorità sanitaria",
    excerpt: "ARETION & Company supports major health authority committee initiative.",
    category: "Initiative"
  }
];

export const leadershipTeam = [
  {
    name: "James Patterson",
    role: "Chief Executive Officer",
    email: "jpatterson@aretion.co.uk"
  },
  {
    name: "Michael Bennett",
    role: "Chief Technology Officer",
    email: "mbennett@aretion.co.uk"
  },
  {
    name: "David Thompson",
    role: "Chief Operating Officer",
    email: "dthompson@aretion.co.uk"
  },
  {
    name: "Charlotte Moore",
    role: "Director of Research, Innovation & New Service Development",
    email: "cmoore@aretion.co.uk"
  },
  {
    name: "William Carter",
    role: "Director of Quality Assurance",
    email: "wcarter@aretion.co.uk"
  },
  {
    name: "Emma Watson",
    role: "Head of Business Development",
    email: "ewatson@aretion.co.uk"
  }
];

export const policiesAndStandards = [
  "Conflicts of Interest",
  "Privacy Notice (UK GDPR)",
  "Information Security and Confidentiality",
  "Publishing Ethics and Peer Review",
  "Complaints Handling"
];

export const milestones = [
  {
    year: "1986",
    event: "Concept born"
  },
  {
    year: "2022",
    event: "iniziativa dei comitati dell'autorità sanitaria funding"
  },
  {
    year: "2025",
    event: "Journal of Medicine, Law and Public Health acquisition"
  },
  {
    year: "2025–present",
    event: "Gulf region expansion"
  }
];

// Form submission handlers (frontend-only)
export const handleContactForm = (formData) => {
  console.log("Contact form submitted:", formData);
  // Store in localStorage for demo purposes
  const submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
  submissions.push({
    ...formData,
    timestamp: new Date().toISOString()
  });
  localStorage.setItem('contactSubmissions', JSON.stringify(submissions));
  return { success: true, message: "Thank you for your enquiry. We will respond shortly." };
};

export const handleCareerForm = (formData) => {
  console.log("Career form submitted:", formData);
  // Store in localStorage for demo purposes
  const submissions = JSON.parse(localStorage.getItem('careerSubmissions') || '[]');
  submissions.push({
    ...formData,
    timestamp: new Date().toISOString()
  });
  localStorage.setItem('careerSubmissions', JSON.stringify(submissions));
  return { success: true, message: "Thank you for your interest. We have received your registration." };
};
