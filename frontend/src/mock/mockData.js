// Mock data for ARETION & Company website

export const groupCompanies = [
  {
    id: 1,
    name: "ARETION Solutions",
    tagline: "Critical Infrastructure Technology",
    description: "Proprietary platforms for facility safety, emergency response, and operational resilience with proven deployment across healthcare and critical infrastructure sectors.",
    link: "https://solutions.aretion.co.uk",
    icon: "Shield"
  },
  {
    id: 2,
    name: "ARETION Healthcare Consulting",
    tagline: "Strategic Advisory Services",
    description: "End-to-end consulting delivering measurable operational improvements, regulatory compliance, and strategic transformation for healthcare organizations.",
    link: "https://Aretion.org",
    icon: "Stethoscope"
  },
  {
    id: 3,
    name: "ARETION Publishing Group",
    tagline: "Medical & Scientific Publishing",
    description: "Peer-reviewed journals and evidence synthesis publications serving the medicine, law, and public health sectors with established editorial governance.",
    link: "https://publishing.aretion.co.uk",
    icon: "BookOpen"
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
    role: "Chief Technology Officer, Europe",
    email: "mbennett@aretion.co.uk"
  },
  {
    name: "Rizq Badawi",
    role: "Chief Technology Officer, Middle East & North Africa",
    email: "rbadawi@aretion.co.uk"
  },
  {
    name: "David Thompson",
    role: "Chief Operating Officer",
    email: "dthompson@aretion.co.uk"
  },
  {
    name: "Sharafaldeen Bin Nafisah",
    role: "Chief Human Resources Officer",
    email: "Sbinnafisah@aretion.co.uk"
  },
  {
    name: "William Carter",
    role: "Director of Quality Assurance",
    email: "wcarter@aretion.co.uk"
  },
  {
    name: "Charlotte Moore",
    role: "Director of Research, Innovation & New Service Development",
    email: "cmoore@aretion.co.uk"
  },
  {
    name: "Emma Watson",
    role: "Head of Business Development",
    email: "ewatson@aretion.co.uk"
  }
];

export const policiesAndStandards = [
  "Anti-Bribery and Anti-Corruption Policy",
  "Code of Conduct",
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
