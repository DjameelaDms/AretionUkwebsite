import React, { useState, useEffect, useRef } from 'react';
import { X } from 'lucide-react';

// Privacy Notice Content
const PrivacyContent = () => (
  <div className="prose prose-sm max-w-none">
    <p className="text-sm text-gray-500 mb-4">Last updated: 9 Feb 2026</p>
    
    <p>We, ARETION & Company (the brand used on aretion.co.uk), understand that your privacy is important to you. We are committed to respecting your privacy and protecting your personal data. This Privacy Notice explains how we handle and protect personal data when we collect it through our website and through our externally facing activities, such as service enquiries, consultations, and communications.</p>
    
    <p>Depending on the nature of your relationship with ARETION, additional or different privacy information may apply to you (for example, if you receive services under separate terms, or where a client organisation controls personal data we process on its behalf).</p>

    <h3>1. Data controller</h3>
    <p>When ARETION & Company collects and processes personal data in accordance with this Privacy Notice, we do so as a data controller (or joint controller where applicable). This means we determine how and why your personal data is collected, used, protected, disclosed, and disposed of.</p>
    <p><strong>Company details:</strong></p>
    <ul>
      <li>Legal name: ARETION & Company</li>
      <li>Registered office: 71-75 Shelton Street, Covent Garden, London, WC2H 9JQ</li>
      <li>Contact email: post@aretion.co.uk</li>
      <li>Data Protection Officer: dpo@aretion.co.uk</li>
    </ul>

    <h3>2. Who this notice applies to</h3>
    <p>This Privacy Notice applies to individuals who interact with us, including:</p>
    <ul>
      <li>Website visitors</li>
      <li>People who contact us with general enquiries, service enquiries, or partnership enquiries</li>
      <li>Representatives of clients, partners, suppliers, and collaborators</li>
      <li>Individuals who request or receive psychotherapy services (where offered)</li>
      <li>Job applicants (where we receive application materials directly)</li>
    </ul>

    <h3>3. How we collect personal data</h3>
    <p>We collect personal data:</p>
    <ul>
      <li>Directly from you (for example, when you email us or submit an enquiry)</li>
      <li>Automatically when you use our website (for example, through log files and similar technical records)</li>
      <li>From your organisation (for example, where you are a representative of a client, partner, or supplier)</li>
      <li>From third parties where appropriate (for example, professional advisers, or referees in recruitment), and only where permitted by law</li>
    </ul>

    <h3>4. Categories of personal data</h3>
    <p>Depending on how you interact with us, we may collect the following categories of personal data:</p>
    <p><strong>Enquiries and communications:</strong> name, email address, telephone number; organisation and role; the content of your message and our correspondence with you.</p>
    <p><strong>Service-related data:</strong> information needed to provide consulting services and manage engagements.</p>
    <p><strong>Website technical and usage data:</strong> IP address; date and time of access; pages requested; browser and operating system information.</p>
    <p><strong>Recruitment data:</strong> CV, cover letter, work and education history; interview notes; right-to-work information.</p>

    <h3>5. Why we use personal data</h3>
    <p>We process personal data for providing and securing the website, responding to enquiries, managing relationships, service delivery, recruitment, and legal compliance.</p>

    <h3>6. Your rights</h3>
    <p>Subject to conditions and exceptions under UK GDPR, you may have the right to:</p>
    <ul>
      <li>Request access to personal data we hold about you</li>
      <li>Request rectification</li>
      <li>Request erasure</li>
      <li>Request restriction of processing</li>
      <li>Object to processing</li>
      <li>Request data portability</li>
      <li>Withdraw consent where processing is based on consent</li>
    </ul>

    <h3>7. Contact and complaints</h3>
    <p><strong>Contact:</strong> post@aretion.co.uk (please include "Privacy" in the subject line).</p>
    <p><strong>Complaints:</strong> You have the right to lodge a complaint with the UK supervisory authority, the Information Commissioner's Office (ICO). We encourage you to contact us first so we can try to resolve your concern.</p>
  </div>
);

// Terms of Use Content
const TermsContent = () => (
  <div className="prose prose-sm max-w-none">
    <p className="text-sm text-gray-500 mb-4">Last updated: 7 Feb 2026</p>
    
    <p>These Terms of Use apply to your access to and use of the ARETION & Company website at aretion.org (the Site). By using the Site, you agree to these Terms. If you do not agree, you must not use the Site.</p>

    <h3>1. About these Terms</h3>
    <p>These Terms apply to your use of the Site and all content and functionality made available through the Site (together, Site Content). Separate terms may apply to any services we provide to you.</p>

    <h3>2. About us and contact details</h3>
    <p>The Site is operated by ARETION & Company.</p>
    <ul>
      <li>Contact: post@aretion.co.uk</li>
      <li>Registered office: 71-75 Shelton Street, Covent Garden, London, WC2H 9JQ</li>
    </ul>

    <h3>3. Copyright and intellectual property</h3>
    <p>All Site Content, including text, graphics, logos, icons, images, videos, and the selection and arrangement of the foregoing, is owned by or licensed to ARETION and is protected by applicable intellectual property laws.</p>
    <p>Except as expressly permitted by these Terms, you may not copy, reproduce, modify, reverse engineer, alter, publish, upload, post, transmit, distribute, or otherwise exploit any Site Content without our prior written permission.</p>

    <h3>4. Trademarks</h3>
    <p>The trademarks, service marks, designs, and logos displayed on the Site are the property of ARETION or its licensors. You must not use or reproduce any trademarks in any manner that is likely to cause confusion or imply endorsement by ARETION.</p>

    <h3>5. Use of Site Content</h3>
    <p>We grant you a limited, non-exclusive, non-transferable, revocable licence to access and use the Site and to download, display, and print one copy of Site Content solely for your internal, non-commercial use.</p>
    <p><strong>Restrictions:</strong> You may not access, search, collect, mine, or extract data from the Site by any means (automated or otherwise); "mirror" the Site Content; or use the Site Content to develop any AI tool or machine learning system.</p>

    <h3>6. User submissions</h3>
    <p>If the Site allows you to submit materials to us, you are responsible for ensuring they are lawful and do not infringe the rights of any third party.</p>

    <h3>7. Third-party websites</h3>
    <p>The Site may contain links to third-party websites or resources. We have no responsibility for third-party websites, which are governed by their own terms of use and privacy policies.</p>

    <h3>8. Privacy</h3>
    <p>For information about how we collect and use personal data, please read our Privacy Notice.</p>

    <h3>9. Disclaimers</h3>
    <p>The Site and Site Content are provided for general information only and should not be relied upon as professional advice. To the extent permitted by applicable law, all Site Content and functionality are provided "as is" and "as available", without warranty of any kind.</p>

    <h3>10. Limitation of liability</h3>
    <p>Subject to applicable law, ARETION will not be liable for any loss or damage arising out of or in connection with your use of, or inability to use, the Site, including indirect, incidental, consequential, or punitive losses.</p>

    <h3>11. Governing law</h3>
    <p>These Terms are governed by the laws of England and Wales, and the courts of England and Wales shall have exclusive jurisdiction.</p>

    <h3>12. Contact</h3>
    <p>Questions about these Terms should be sent to: compliance@aretion.co.uk</p>
  </div>
);

// Code of Conduct Content (Full document from uploaded file)
const CodeOfConductContent = () => (
  <div className="prose prose-sm max-w-none">
    <p className="text-sm text-gray-500 mb-4">Last updated: 10 Feb 2026</p>
    
    <p>ARETION & Company and its subsidiaries—ARETION Informatics Solutions, ARETION Publishing Group, and ARETION Healthcare Consulting—are committed to the highest standards of ethical conduct, professional integrity, and legal compliance.</p>

    <h3>Our Promise</h3>
    <p>This Code of Conduct reflects our promise to our clients, patients, partners, employees, and the public that we will:</p>
    <ul>
      <li>Act with honesty and transparency in all dealings</li>
      <li>Prioritise patient safety and wellbeing in all advice and recommendations</li>
      <li>Provide independent, objective, evidence-based guidance free from conflicts of interest</li>
      <li>Comply strictly with applicable laws and regulations</li>
      <li>Respect human rights, dignity, and equality</li>
      <li>Operate sustainably and responsibly</li>
      <li>Speak up about misconduct without fear of retaliation</li>
    </ul>

    <h3>1. Purpose, Scope, and Applicability</h3>
    <p>This Code of Conduct sets out the ethical principles, behavioural standards, and legal obligations that govern all activities undertaken by or on behalf of ARETION & Company and its subsidiaries. It applies to:</p>
    <ul>
      <li>All employees of ARETION & Company and its subsidiaries (full-time, part-time, fixed-term, and temporary)</li>
      <li>Officers, directors, and partners</li>
      <li>Contractors, consultants, secondees, and agency workers</li>
      <li>Anyone representing ARETION & Company, including agents, intermediaries, and business partners acting on our behalf</li>
    </ul>
    <p>This Code applies globally, including to our operations and personnel in the United Kingdom, Saudi Arabia, UAE, Qatar, and Kuwait, and to all activities undertaken on behalf of ARETION regardless of location.</p>

    <h3>2. Core Values and Ethical Principles</h3>
    <p><strong>Integrity:</strong> We act with honesty, fairness, and transparency in all our dealings. We keep our commitments, acknowledge mistakes, and are accountable for our actions.</p>
    <p><strong>Patient-Centred Impact:</strong> Healthcare is our business. Everything we do must ultimately benefit patients and improve health outcomes. We prioritise patient safety, dignity, equity, and access to care in all recommendations.</p>
    <p><strong>Independence and Objectivity:</strong> We provide impartial, evidence-based advice. We do not allow conflicts of interest, personal relationships, financial ties, or client preferences to compromise our professional judgment.</p>
    <p><strong>Respect:</strong> We value the dignity, rights, autonomy, and wellbeing of everyone we work with. We treat all people fairly, regardless of background, identity, or beliefs.</p>
    <p><strong>Accountability:</strong> We take responsibility for the quality and integrity of our work, the accuracy of our analysis, and the impact of our projects.</p>
    <p><strong>Sustainability:</strong> We consider the long-term environmental and social impact of our work and seek to contribute positively to society.</p>
    <p><strong>Transparency:</strong> We communicate openly and honestly with clients, regulators, employees, and the public, within the bounds of confidentiality obligations.</p>

    <h3>3. Compliance with Laws, Regulations, and Professional Standards</h3>
    <p>ARETION & Company and its subsidiaries are committed to strict compliance with all applicable laws and regulations in every jurisdiction where we operate. Key areas include:</p>
    <ul>
      <li><strong>Anti-corruption:</strong> Bribery Act 2010 (UK); US Foreign Corrupt Practices Act (FCPA); anti-corruption laws in Saudi Arabia, UAE, Qatar, and Kuwait</li>
      <li><strong>Data protection and privacy:</strong> UK GDPR and Data Protection Act 2018; PDPL (Saudi Arabia); and equivalent laws in UAE, Qatar, Kuwait</li>
      <li><strong>Human rights:</strong> Modern Slavery Act 2015 (UK); Human Rights Act 1998; ILO Conventions</li>
      <li><strong>Equality and discrimination:</strong> Equality Act 2010 (UK); local labour laws on non-discrimination in Gulf states</li>
      <li><strong>Health and safety:</strong> Health and Safety at Work etc. Act 1974 (UK); local H&S laws in Gulf countries</li>
      <li><strong>Financial regulation:</strong> Financial Conduct Authority (FCA) rules where applicable; anti-money laundering (AML) laws</li>
      <li><strong>Competition and antitrust:</strong> Competition Act 1998 (UK); EU competition law; GCC Competition Framework</li>
      <li><strong>Professional standards:</strong> Guidance from professional bodies (e.g., GMC, NMC, GPhC, HCPC, CQC in UK healthcare; SCFHS, DHA, MOHAP, MOH in Gulf countries)</li>
    </ul>

    <h3>4. Anti-Bribery and Anti-Corruption</h3>
    <p>ARETION & Company and its subsidiaries have a zero-tolerance policy on bribery and corruption. We do not tolerate bribery in any form—whether offered by us, to us, or by anyone acting on our behalf.</p>
    <p><strong>Prohibited conduct includes:</strong></p>
    <ul>
      <li>Offering, promising, or giving anything of value to obtain an improper advantage</li>
      <li>Requesting, accepting, or agreeing to accept anything of value in exchange for improper conduct</li>
      <li>Making facilitation payments (small payments to expedite routine government actions)</li>
      <li>Using agents, intermediaries, or third parties to do anything prohibited</li>
    </ul>
    <p><strong>Gifts and hospitality:</strong> We permit modest, reasonable gifts and hospitality that are lawful, proportionate, transparent, properly approved and recorded, not connected to a pending business decision or contract, and not involving government officials without prior written compliance approval.</p>
    <p><strong>Red flags include:</strong> requests for cash or untraceable payments; requests to make payments to third parties or unusual accounts; excessive hospitality or gifts; pressure to circumvent approval processes; and any suggestion of a "kickback" arrangement.</p>

    <h3>5. Conflicts of Interest</h3>
    <p>A conflict of interest arises where your personal or financial interests, relationships, or commitments could—or could be perceived to—influence your professional judgment, create a breach of duty to ARETION or our clients, or compromise our independence and objectivity.</p>
    <p><strong>Common situations include:</strong></p>
    <ul>
      <li>Financial interests in clients, competitors, or suppliers</li>
      <li>Close relationships with clients, regulators, or competitors</li>
      <li>Outside employment, board positions, or advisory roles</li>
      <li>Personal relationships with colleagues in reporting lines</li>
      <li>Advising competing clients on related matters</li>
    </ul>
    <p><strong>Your obligation:</strong> Disclose any actual or potential conflict of interest immediately to your manager and Compliance (compliance@aretion.co.uk). We will assess the conflict and determine appropriate management measures.</p>

    <h3>6. Confidentiality, Data Protection, and Information Security</h3>
    <p>ARETION handles sensitive and confidential information—including patient data, client strategic information, proprietary research, financial data, and employee personal information. Everyone is responsible for protecting confidential and personal information.</p>
    <p><strong>Key obligations:</strong></p>
    <ul>
      <li>Do not disclose confidential information to anyone without authorisation</li>
      <li>Use confidential information only for its intended purpose</li>
      <li>Protect personal data in accordance with UK GDPR and equivalent laws</li>
      <li>Do not access, copy, or transmit data beyond what is necessary for your work</li>
      <li>Follow IT security policies—including password management, encryption, and device security</li>
      <li>Report any suspected data breach or security incident immediately</li>
    </ul>

    <h3>7. Professional Conduct with Clients and Protection of Patients' Interests</h3>
    <p>Our clients trust us to provide expert, independent, and objective advice. We must protect that trust at all times.</p>
    <p><strong>Patient-centred principles:</strong> Patient safety is paramount in all recommendations. We base clinical guidance on best available evidence and established standards. We ensure our advice considers equity of access and the needs of vulnerable populations. We identify and disclose any potential harm or risk. We support informed consent and shared decision-making principles.</p>
    <p><strong>Professional conduct:</strong> We provide honest, accurate, and well-researched advice. We do not guarantee outcomes or make promises we cannot keep. We respect client confidentiality but never at the expense of patient safety or legal obligations. We report concerns about unsafe practices or potential patient harm immediately.</p>

    <h3>8. Fair Treatment, Diversity, Equity, Inclusion, and Anti-Harassment</h3>
    <p>ARETION & Company is committed to creating a workplace that is fair, respectful, inclusive, and free from discrimination and harassment. We do not tolerate discrimination or harassment based on age, disability, gender reassignment, marriage or civil partnership, pregnancy or maternity, race (including colour, nationality, ethnic or national origin), religion or belief, sex, sexual orientation, or any other protected characteristic.</p>
    <p><strong>Harassment</strong> includes unwanted conduct that has the purpose or effect of violating a person's dignity or creating a hostile, degrading, humiliating, or offensive environment. This includes verbal abuse, offensive jokes, physical intimidation, unwanted sexual attention, and bullying.</p>

    <h3>9. Human Rights, Modern Slavery, and Responsible Supply Chain</h3>
    <p>ARETION is committed to respecting human rights in our operations and supply chain. We have zero tolerance for modern slavery, human trafficking, forced labour, and child labour. We expect suppliers and partners to uphold equivalent standards.</p>
    <p><strong>Our commitments:</strong></p>
    <ul>
      <li>Respect and support the protection of internationally recognised human rights</li>
      <li>Never use or benefit from forced, bonded, or child labour</li>
      <li>Conduct due diligence on suppliers and partners</li>
      <li>Report concerns about human rights abuses in our operations or supply chain</li>
    </ul>

    <h3>10. Health, Safety, and Wellbeing at Work</h3>
    <p>ARETION is committed to providing a safe, healthy workplace and protecting the physical and mental health of all personnel.</p>
    <p><strong>Responsibilities:</strong></p>
    <ul>
      <li>Follow all health and safety policies, procedures, and instructions</li>
      <li>Report hazards, near-misses, and incidents immediately</li>
      <li>Do not work under the influence of alcohol, illegal drugs, or substances that impair judgment</li>
      <li>Raise concerns about unsafe working conditions</li>
      <li>Support colleagues' mental health and wellbeing</li>
    </ul>

    <h3>11. Use of Company Assets, Technology, Intellectual Property, and Acceptable Use</h3>
    <p>ARETION provides technology, equipment, and resources to support your work. These are valuable assets that must be used responsibly.</p>
    <p><strong>You must:</strong></p>
    <ul>
      <li>Use ARETION technology and equipment only for authorised business purposes</li>
      <li>Protect devices and data from loss, theft, or unauthorised access</li>
      <li>Not install unauthorised software or applications</li>
      <li>Not use ARETION systems for illegal, offensive, or inappropriate purposes</li>
      <li>Respect intellectual property rights—including ARETION's proprietary materials, client materials, and third-party IP</li>
    </ul>
    <p><strong>AI and automation:</strong> Do not input confidential, personal, or sensitive information into external AI tools (such as ChatGPT, Copilot, Gemini, or similar) without prior written approval from IT and Compliance.</p>

    <h3>12. Insider Information, Market Abuse, and Handling Sensitive Commercial Information</h3>
    <p>Through our work, we may obtain material non-public information about clients, their strategies, or market-moving events. Trading, or advising others to trade, on the basis of insider information is illegal. Disclosing insider information to anyone outside the engagement team is prohibited.</p>

    <h3>13. Research Ethics, Data Analytics, and AI/Algorithmic Fairness</h3>
    <p>ARETION engages in research, data analytics, and technology-enabled consulting. We must conduct this work ethically and responsibly.</p>
    <p><strong>Key principles:</strong></p>
    <ul>
      <li>Research involving human subjects must have ethics approval and informed consent</li>
      <li>Data analytics must respect privacy, accuracy, and transparency</li>
      <li>AI and algorithmic systems must be fair, explainable, and free from bias</li>
      <li>Publication and dissemination of research must be honest and accurate</li>
    </ul>

    <h3>14. Environmental and Social Responsibility</h3>
    <p>ARETION is committed to minimising our environmental impact and contributing positively to society. We integrate ESG considerations into our consulting advice and recommendations. We reduce energy consumption, waste, and carbon emissions in our operations. We encourage sustainable practices among employees, clients, and partners.</p>

    <h3>15. Record-Keeping, Documentation, and Reporting Accuracy</h3>
    <p>Accurate records are essential for regulatory compliance, financial integrity, and client trust.</p>
    <p><strong>You must:</strong></p>
    <ul>
      <li>Keep accurate, complete, and honest records of all work and transactions</li>
      <li>Never falsify, alter, or destroy records improperly</li>
      <li>Follow document retention and destruction policies</li>
      <li>Report any suspected financial irregularities or fraudulent record-keeping</li>
    </ul>

    <h3>16. Speaking Up, Whistleblowing, and Non-Retaliation</h3>
    <p>We encourage and support employees, contractors, and partners to speak up about concerns without fear of retaliation. We welcome concerns about: illegal conduct, breaches of this Code, health and safety risks, discrimination or harassment, fraud, bribery, or financial misconduct, data protection breaches, environmental harm, or any other conduct that violates law or ethics.</p>
    <p><strong>How to report:</strong></p>
    <ul>
      <li>Your manager or HR</li>
      <li>Compliance and Ethics team: compliance@aretion.co.uk</li>
      <li>External Whistleblowing Hotline: +44 20 3985 0907</li>
    </ul>
    <p><strong>Non-retaliation:</strong> ARETION prohibits retaliation against anyone who raises a concern in good faith. Retaliation is itself a serious breach of this Code.</p>

    <h3>17. Responsibilities of Managers and Leaders</h3>
    <p>Managers and leaders have additional responsibilities to promote a culture of ethics and compliance. This includes leading by example, ensuring that team members understand and comply with this Code, creating an environment where concerns can be raised safely, taking concerns seriously, and supporting training and awareness.</p>

    <h3>18. Monitoring, Accountability, and Consequences of Breaches</h3>
    <p>ARETION monitors compliance with this Code through audits, reviews, and investigations. Breaches of this Code are taken seriously and may result in:</p>
    <ul>
      <li>Disciplinary action, up to and including dismissal</li>
      <li>Referral to professional regulators (e.g., GMC, NMC)</li>
      <li>Referral to law enforcement authorities</li>
      <li>Civil liability</li>
      <li>Termination of contracts with external parties</li>
    </ul>
    <p>Ignorance of this Code is not a defence.</p>

    <h3>19. Changes to This Code and Questions</h3>
    <p>ARETION reserves the right to update this Code at any time. Updates will be communicated to all personnel and published internally. If you have questions about this Code, contact Compliance and Ethics: compliance@aretion.co.uk</p>
  </div>
);

// Anti-Bribery and Anti-Corruption Content (New)
const AntiBriberyContent = () => (
  <div className="prose prose-sm max-w-none">
    <p className="text-sm text-gray-500 mb-4">Last updated: 14 Feb 2026</p>
    
    <h3>1. Policy Statement</h3>
    <p>ARETION & Company and its subsidiaries have zero tolerance for bribery and corruption in any form. We are committed to conducting business ethically, transparently, and in full compliance with all applicable anti-bribery and anti-corruption laws, including the UK Bribery Act 2010 and applicable laws in Saudi Arabia, UAE, Qatar, and Kuwait.</p>
    <p>This policy applies to all employees, officers, directors, contractors, consultants, agents, partners, and anyone acting on behalf of ARETION & Company in all jurisdictions where we operate.</p>

    <h3>2. What is Bribery and Corruption?</h3>
    <p><strong>Bribery</strong> is the offer, promise, giving, requesting, or acceptance of any advantage (financial or non-financial) with the intention of inducing someone to perform an improper function or activity, rewarding them for having done so, or influencing them to act improperly in their position of trust.</p>
    <p>An advantage can include:</p>
    <ul>
      <li>Cash payments or loans</li>
      <li>Gifts (tangible items of value)</li>
      <li>Hospitality, entertainment, or travel</li>
      <li>Employment opportunities or contracts</li>
      <li>Donations or sponsorships</li>
      <li>Preferential treatment or services</li>
    </ul>
    <p><strong>Corruption</strong> includes the misuse of entrusted power or position for private gain, including bribery, embezzlement, fraud, extortion, abuse of discretion, and nepotism.</p>

    <h3>3. Prohibited Conduct</h3>
    <p>ARETION & Company strictly prohibits:</p>
    <ul>
      <li><strong>Offering or Giving Bribes:</strong> Offering, promising, or giving anything of value to improperly influence a business decision</li>
      <li><strong>Receiving or Soliciting Bribes:</strong> Requesting, accepting, or agreeing to accept anything of value in exchange for improper performance of duties</li>
      <li><strong>Using Third Parties for Bribery:</strong> Using agents, intermediaries, consultants, or partners to offer or pay bribes on our behalf</li>
      <li><strong>Facilitation Payments:</strong> Small payments to government officials to expedite routine administrative actions are strictly prohibited</li>
    </ul>

    <h3>4. Gifts and Hospitality</h3>
    <p>Modest, reasonable gifts and hospitality may be appropriate in certain business contexts, provided they:</p>
    <ul>
      <li>Are of modest value (typically under £50 GBP or equivalent)</li>
      <li>Are not cash, cash equivalents, or loans</li>
      <li>Are not connected to a pending business decision or contract</li>
      <li>Are transparent and properly recorded</li>
      <li>Do not create a perception of impropriety</li>
    </ul>
    <p>The following are never acceptable: cash or gift cards, gifts to influence a specific decision, lavish or extravagant gifts, or anything that could reasonably be perceived as a bribe.</p>

    <h3>5. Dealings with Government Officials</h3>
    <p>Interactions with government officials, public sector employees, and representatives of state-owned enterprises require heightened care. Before providing any gift, hospitality, donation, or other benefit to a government official, you must obtain prior written approval from the Compliance and Ethics team.</p>

    <h3>6. Reporting Suspected Bribery</h3>
    <p>If you suspect, become aware of, or are offered a bribe, you must report it immediately to:</p>
    <ul>
      <li>Compliance and Ethics team: compliance@aretion.co.uk</li>
      <li>External Whistleblowing Hotline: +44 20 3985 0907</li>
    </ul>
    <p>ARETION prohibits retaliation against anyone who reports concerns in good faith.</p>

    <h3>7. Consequences of Breaches</h3>
    <p>Breaches of this policy are serious and may result in:</p>
    <ul>
      <li>Disciplinary action, up to and including dismissal</li>
      <li>Referral to law enforcement authorities</li>
      <li>Criminal prosecution (imprisonment, fines)</li>
      <li>Civil liability and damages</li>
      <li>Regulatory sanctions against ARETION</li>
    </ul>

    <h3>8. Contact</h3>
    <p>For questions, guidance, or to report concerns:</p>
    <ul>
      <li>Compliance and Ethics Team: compliance@aretion.co.uk</li>
      <li>External Whistleblowing Hotline: +44 20 3985 0907</li>
    </ul>
  </div>
);

// Modal Component
const LegalModal = ({ isOpen, onClose, title, children }) => {
  const modalRef = useRef(null);
  const closeButtonRef = useRef(null);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
      closeButtonRef.current?.focus();
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      data-testid="legal-modal-overlay"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      
      {/* Modal */}
      <div 
        ref={modalRef}
        className="relative bg-white rounded-lg shadow-2xl w-full max-w-3xl max-h-[85vh] flex flex-col"
        style={{ fontFamily: 'var(--font-body)' }}
        data-testid="legal-modal-content"
      >
        {/* Header */}
        <div 
          className="flex items-center justify-between px-6 py-4 border-b"
          style={{ borderColor: 'rgba(26, 58, 82, 0.1)' }}
        >
          <h2 
            id="modal-title"
            className="text-xl font-semibold"
            style={{ color: 'var(--aretion-navy)', fontFamily: 'var(--font-heading)' }}
          >
            {title}
          </h2>
          <button
            ref={closeButtonRef}
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2"
            style={{ focusRingColor: 'var(--aretion-navy)' }}
            aria-label="Close modal"
            data-testid="legal-modal-close-btn"
          >
            <X size={20} style={{ color: 'var(--aretion-navy)' }} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {children}
        </div>

        {/* Footer */}
        <div 
          className="px-6 py-4 border-t flex justify-end"
          style={{ borderColor: 'rgba(26, 58, 82, 0.1)' }}
        >
          <button
            onClick={onClose}
            className="px-6 py-2 rounded font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2"
            style={{ 
              backgroundColor: 'var(--aretion-navy)', 
              color: 'white',
            }}
            onMouseEnter={(e) => e.target.style.opacity = '0.9'}
            onMouseLeave={(e) => e.target.style.opacity = '1'}
            data-testid="legal-modal-close-footer-btn"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

// Export modal types and hook
export const useLegalModals = () => {
  const [activeModal, setActiveModal] = useState(null);

  const openPrivacy = () => setActiveModal('privacy');
  const openTerms = () => setActiveModal('terms');
  const openCodeOfConduct = () => setActiveModal('code');
  const openAntiBribery = () => setActiveModal('antibribery');
  const closeModal = () => setActiveModal(null);

  const LegalModals = () => (
    <>
      <LegalModal 
        isOpen={activeModal === 'privacy'} 
        onClose={closeModal} 
        title="Privacy Notice"
      >
        <PrivacyContent />
      </LegalModal>
      
      <LegalModal 
        isOpen={activeModal === 'terms'} 
        onClose={closeModal} 
        title="Terms of Use"
      >
        <TermsContent />
      </LegalModal>
      
      <LegalModal 
        isOpen={activeModal === 'code'} 
        onClose={closeModal} 
        title="Code of Conduct"
      >
        <CodeOfConductContent />
      </LegalModal>
      
      <LegalModal 
        isOpen={activeModal === 'antibribery'} 
        onClose={closeModal} 
        title="Anti-Bribery and Anti-Corruption Policy"
      >
        <AntiBriberyContent />
      </LegalModal>
    </>
  );

  return { openPrivacy, openTerms, openCodeOfConduct, openAntiBribery, LegalModals };
};

export default LegalModal;
