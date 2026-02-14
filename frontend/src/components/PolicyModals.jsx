import React, { useState, useEffect, useRef } from 'react';
import { X } from 'lucide-react';

// Anti-Bribery and Anti-Corruption Content
const AntiBriberyContent = () => (
  <div className="prose prose-sm max-w-none" style={{ fontFamily: 'var(--font-body)' }}>
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

    <h3>6. Third-Party Intermediaries</h3>
    <p>We are responsible for the conduct of agents, consultants, distributors, subcontractors, joint venture partners, and other intermediaries acting on our behalf. Before engaging any third party, we must conduct proportionate due diligence and ensure they understand and agree to comply with this policy.</p>

    <h3>7. Reporting Suspected Bribery</h3>
    <p>If you suspect, become aware of, or are offered a bribe, you must report it immediately to:</p>
    <ul>
      <li>Compliance and Ethics team: compliance@aretion.co.uk</li>
      <li>External Whistleblowing Hotline: +44 20 3985 0907</li>
    </ul>
    <p>ARETION prohibits retaliation against anyone who reports concerns in good faith.</p>

    <h3>8. Consequences of Breaches</h3>
    <p>Breaches of this policy are serious and may result in:</p>
    <ul>
      <li>Disciplinary action, up to and including dismissal</li>
      <li>Referral to law enforcement authorities</li>
      <li>Criminal prosecution (imprisonment, fines)</li>
      <li>Civil liability and damages</li>
      <li>Regulatory sanctions against ARETION</li>
    </ul>

    <h3>9. Contact</h3>
    <p>For questions, guidance, or to report concerns:</p>
    <ul>
      <li>Compliance and Ethics Team: compliance@aretion.co.uk</li>
      <li>External Whistleblowing Hotline: +44 20 3985 0907</li>
    </ul>
  </div>
);

// Code of Conduct Content
const CodeOfConductContent = () => (
  <div className="prose prose-sm max-w-none" style={{ fontFamily: 'var(--font-body)' }}>
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

    <h3>Who This Code Applies To</h3>
    <p>This Code applies to all employees of ARETION & Company and its subsidiaries (full-time, part-time, fixed-term, and temporary), officers, directors, partners, contractors, consultants, and anyone representing ARETION & Company in any capacity.</p>

    <h3>Our Core Values</h3>
    <p><strong>Integrity:</strong> We act with honesty, fairness, and transparency in all our dealings. We keep our commitments, acknowledge mistakes, and are accountable for our actions.</p>
    <p><strong>Patient-Centred Impact:</strong> Healthcare is our business. Everything we do must ultimately benefit patients and improve health outcomes. We prioritise patient safety, dignity, equity, and access to care in all recommendations.</p>
    <p><strong>Independence and Objectivity:</strong> We provide impartial, evidence-based advice. We do not allow conflicts of interest, personal relationships, financial ties, or client preferences to compromise our professional judgment.</p>
    <p><strong>Respect:</strong> We value the dignity, rights, autonomy, and wellbeing of everyone we work with. We treat all people fairly, regardless of background.</p>
    <p><strong>Accountability:</strong> We take responsibility for the quality and integrity of our work, the accuracy of our analysis, and the impact of our projects.</p>
    <p><strong>Sustainability:</strong> We consider the long-term environmental and social impact of our work.</p>
    <p><strong>Transparency:</strong> We communicate openly and honestly with clients, regulators, employees, and the public.</p>

    <h3>Anti-Bribery and Anti-Corruption</h3>
    <p>ARETION & Company and its subsidiaries have a zero-tolerance policy on bribery and corruption. We do not tolerate bribery in any form, whether offered by us, to us, or by anyone acting on our behalf.</p>

    <h3>Conflicts of Interest</h3>
    <p>A conflict of interest arises where your personal or financial interests, relationships, or commitments could, or could be perceived to, influence your professional judgment. You must disclose any actual or potential conflict of interest immediately.</p>

    <h3>Confidentiality and Data Protection</h3>
    <p>ARETION & Company handles sensitive and confidential information including patient data, client strategic information, and employee personal information. Everyone is responsible for protecting confidential and personal information.</p>

    <h3>Fair Treatment and Inclusion</h3>
    <p>ARETION & Company is committed to creating a workplace that is fair, respectful, inclusive, and free from discrimination and harassment. We do not tolerate discrimination or harassment in any form.</p>

    <h3>Speaking Up</h3>
    <p>We encourage and support employees, contractors, and partners to speak up about concerns without fear of retaliation. Report concerns to:</p>
    <ul>
      <li>Compliance and Ethics team: compliance@aretion.co.uk</li>
      <li>External Whistleblowing Hotline: +44 20 3985 0907</li>
    </ul>

    <h3>Consequences of Breaches</h3>
    <p>Breaches of this Code are taken seriously and may result in disciplinary action up to and including dismissal, referral to professional regulators, referral to law enforcement, and civil liability.</p>
  </div>
);

// Conflicts of Interest Policy Content
const ConflictsOfInterestContent = () => (
  <div className="prose prose-sm max-w-none" style={{ fontFamily: 'var(--font-body)' }}>
    <p className="text-sm text-gray-500 mb-4">Last updated: 15 Feb 2026</p>
    
    <h3>1. Policy Statement</h3>
    <p>ARETION & Company and its subsidiaries are committed to identifying, disclosing, and managing conflicts of interest fairly, transparently, and in accordance with the highest ethical standards. A conflict of interest arises where personal or financial interests, relationships, or commitments could—or could be perceived to—influence professional judgment, create a breach of duty to ARETION or our clients, or compromise our independence and objectivity.</p>
    <p>This policy applies to all employees, officers, directors, contractors, consultants, agents, partners, and anyone representing ARETION & Company in the United Kingdom, Gulf countries (Saudi Arabia, UAE, Qatar, and Kuwait), and all other jurisdictions where we operate.</p>

    <h3>2. Our Commitment to Independence and Objectivity</h3>
    <p>Our core values include Independence and Objectivity. We provide impartial, evidence-based advice and do not allow conflicts of interest, personal relationships, financial ties, or client preferences to compromise our professional judgment. Conflicts of interest are common in professional life and are not necessarily prohibited. However, they must be disclosed and properly managed.</p>

    <h3>3. What is a Conflict of Interest?</h3>
    <p>A conflict of interest exists when:</p>
    <ul>
      <li>Your personal interests conflict with your duties to ARETION or our clients</li>
      <li>You have competing loyalties or obligations</li>
      <li>Your judgment could reasonably be perceived to be compromised</li>
      <li>You could personally benefit (directly or indirectly) from a decision or action</li>
      <li>Your relationship with another person or organization creates actual or perceived bias</li>
    </ul>
    <p>A conflict can be:</p>
    <ul>
      <li><strong>Actual:</strong> a real conflict exists now</li>
      <li><strong>Potential:</strong> circumstances could develop into a conflict</li>
      <li><strong>Perceived:</strong> a reasonable observer might perceive a conflict exists, even if it does not</li>
    </ul>
    <p>All three types must be disclosed and managed.</p>

    <h3>4. Types of Conflicts of Interest</h3>
    <h4>4.1 Financial Conflicts</h4>
    <ul>
      <li>Ownership of shares, securities, or financial interest in a client, competitor, supplier, or organization we advise</li>
      <li>Financial interest in a company, product, or technology that we recommend to clients</li>
      <li>Receipt of personal payment, commission, referral fee, or financial benefit from a third party connected to our work</li>
      <li>Investment portfolios that could be affected by advice we give</li>
    </ul>

    <h4>4.2 Relational Conflicts</h4>
    <ul>
      <li>Family relationships (spouse, partner, parent, child, sibling, or other close relative) with clients, competitors, suppliers, government officials, or colleagues in positions of influence</li>
      <li>Close personal friendships or intimate relationships that could influence professional judgment</li>
      <li>Previous close working relationships with clients or their representatives</li>
    </ul>

    <h4>4.3 Professional Conflicts</h4>
    <ul>
      <li>Outside employment, consultancy, advisory work, or business interests with clients, competitors, or related organizations</li>
      <li>Board positions, trustee roles, or advisory positions with organizations that could conflict with ARETION's interests</li>
      <li>Simultaneous advice to competing clients on related or overlapping matters</li>
    </ul>

    <h3>5. Your Obligation to Disclose</h3>
    <p>You must disclose any actual, potential, or perceived conflict of interest:</p>
    <ul>
      <li>At recruitment: During the hiring process</li>
      <li>Before joining a project: If you have or become aware of a conflict relevant to a new project</li>
      <li>As soon as you become aware: If circumstances change and a new conflict arises</li>
      <li>Annually: All employees must complete an annual conflicts of interest declaration</li>
    </ul>
    <p>Disclose conflicts by emailing compliance@aretion.co.uk with full details or informing your manager verbally and following up in writing.</p>

    <h3>6. How We Manage Conflicts of Interest</h3>
    <p>Once a conflict is disclosed, ARETION will assess it and take one or more of the following steps:</p>
    <ul>
      <li><strong>No Action Required:</strong> If the conflict is minimal or can be quickly resolved</li>
      <li><strong>Enhanced Due Diligence:</strong> Higher-risk activities require enhanced due diligence, approval, and monitoring</li>
    </ul>

    <h3>7. Independence in Healthcare Consulting</h3>
    <p>Given ARETION's role in healthcare consulting and advisory services, maintaining independence is critical to patient safety and ethical practice. When providing advice that affects patient care, clinical pathways, or health system operations, we ensure patient safety is paramount in all recommendations and that clinical decisions are based on evidence, not commercial relationships.</p>

    <h3>8. Consequences of Non-Compliance</h3>
    <p>Failure to disclose or properly manage conflicts of interest is a serious breach of this policy and the Code of Conduct. Consequences may include:</p>
    <ul>
      <li>Disciplinary action, up to and including dismissal</li>
      <li>Removal from projects or client engagements</li>
      <li>Loss of professional registration or regulatory sanctions</li>
      <li>Legal liability (civil or criminal, depending on circumstances)</li>
    </ul>

    <h3>9. Contact and Questions</h3>
    <p>If you have questions about conflicts of interest or need guidance:</p>
    <ul>
      <li>Compliance and Ethics Team: compliance@aretion.co.uk</li>
      <li>Your Manager or HR Department</li>
      <li>External Whistleblowing Hotline: +44 20 3985 0907</li>
    </ul>
  </div>
);

// Privacy Notice (UK GDPR) Content
const PrivacyNoticeContent = () => (
  <div className="prose prose-sm max-w-none" style={{ fontFamily: 'var(--font-body)' }}>
    <p className="text-sm text-gray-500 mb-4">Last updated: 9 Feb 2026</p>
    
    <p>We, ARETION & Company (the brand used on aretion.co.uk), understand that your privacy is important to you. We are committed to respecting your privacy and protecting your personal data. This Privacy Notice explains how we handle and protect personal data when we collect it through our website and through our externally facing activities, such as service enquiries, consultations, and communications.</p>

    <h3>1. Data Controller</h3>
    <p>When ARETION & Company collects and processes personal data in accordance with this Privacy Notice, we do so as a data controller (or joint controller where applicable). This means we determine how and why your personal data is collected, used, protected, disclosed, and disposed of.</p>
    <p><strong>Company details:</strong></p>
    <ul>
      <li>Legal name: ARETION & Company</li>
      <li>Registered office: 71-75 Shelton Street, Covent Garden, London, WC2H 9JQ</li>
      <li>Contact email: post@aretion.co.uk</li>
      <li>Data Protection Officer: dpo@aretion.co.uk</li>
    </ul>

    <h3>2. Who This Notice Applies To</h3>
    <p>This Privacy Notice applies to individuals who interact with us, including:</p>
    <ul>
      <li>Website visitors</li>
      <li>People who contact us with general enquiries, service enquiries, or partnership enquiries</li>
      <li>Representatives of clients, partners, suppliers, and collaborators</li>
      <li>Individuals who request or receive psychotherapy services (where offered)</li>
      <li>Job applicants (where we receive application materials directly)</li>
    </ul>

    <h3>3. How We Collect Personal Data</h3>
    <p>We collect personal data:</p>
    <ul>
      <li>Directly from you (for example, when you email us or submit an enquiry)</li>
      <li>Automatically when you use our website (for example, through log files and similar technical records)</li>
      <li>From your organisation (for example, where you are a representative of a client, partner, or supplier)</li>
      <li>From third parties where appropriate (for example, professional advisers, or referees in recruitment), and only where permitted by law</li>
    </ul>

    <h3>4. Categories of Personal Data</h3>
    <p>Depending on how you interact with us, we may collect the following categories of personal data:</p>
    <p><strong>Enquiries and communications:</strong> name, email address, telephone number; organisation and role; the content of your message and our correspondence with you.</p>
    <p><strong>Service-related data:</strong> information needed to provide consulting services and manage engagements.</p>
    <p><strong>Website technical and usage data:</strong> IP address; date and time of access; pages requested; browser and operating system information.</p>
    <p><strong>Recruitment data:</strong> CV, cover letter, work and education history; interview notes; right-to-work information.</p>

    <h3>5. Why We Use Personal Data</h3>
    <p>We process personal data for providing and securing the website, responding to enquiries, managing relationships, service delivery, recruitment, and legal compliance.</p>

    <h3>6. Your Rights</h3>
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

    <h3>7. International Data Transfers</h3>
    <p>ARETION may operate internationally and may use service providers located outside the UK. If personal data is transferred outside the UK and UK GDPR applies, we will implement appropriate safeguards.</p>

    <h3>8. Security</h3>
    <p>We use appropriate technical and organisational measures designed to protect personal data against accidental or unlawful loss, misuse, alteration, and unauthorised access. Access to personal data is limited to authorised personnel and trusted service providers on a need-to-know basis.</p>

    <h3>9. Contact and Complaints</h3>
    <p><strong>Contact:</strong> post@aretion.co.uk (please include "Privacy" in the subject line).</p>
    <p><strong>Complaints:</strong> You have the right to lodge a complaint with the UK supervisory authority, the Information Commissioner's Office (ICO). We encourage you to contact us first so we can try to resolve your concern.</p>
  </div>
);

// Information Security and Confidentiality Content
const InformationSecurityContent = () => (
  <div className="prose prose-sm max-w-none" style={{ fontFamily: 'var(--font-body)' }}>
    <p className="text-sm text-gray-500 mb-4">Last updated: 13 Feb 2026</p>
    
    <h3>1. Policy Statement</h3>
    <p>ARETION & Company and its subsidiaries are committed to protecting the confidentiality, integrity, and availability of all information assets entrusted to us by clients, patients, employees, partners, and stakeholders. Information security is fundamental to our business, our professional obligations, and our legal compliance.</p>
    <p>We handle highly sensitive information including patient data, health records, client strategic and commercial information, proprietary research, financial data, and employee personal information.</p>
    <p>This policy applies to all employees, officers, directors, contractors, consultants, agents, partners, and anyone representing ARETION & Company in the United Kingdom, Gulf countries (Saudi Arabia, UAE, Qatar, and Kuwait), and all other jurisdictions where we operate.</p>

    <h3>2. Information Assets Covered</h3>
    <p>This policy applies to all information assets, regardless of format or location, including:</p>
    <ul>
      <li><strong>Patient and Health Information:</strong> Patient data, health records, clinical data, public health surveillance data</li>
      <li><strong>Client Information:</strong> Strategic plans, financial and operational data, confidential commercial information</li>
      <li><strong>Proprietary Information:</strong> ARETION's methodologies, tools, intellectual property, unpublished research</li>
      <li><strong>Personal Data:</strong> Employee information, contact details, recruitment and HR records</li>
      <li><strong>Technical Information:</strong> System credentials, network architecture, encryption keys</li>
    </ul>

    <h3>3. Information Classification</h3>
    <p>Information is classified according to sensitivity:</p>
    <ul>
      <li><strong>Public:</strong> Information approved for public disclosure</li>
      <li><strong>Internal:</strong> Routine business information for internal use</li>
      <li><strong>Confidential:</strong> Sensitive business information requiring protection</li>
      <li><strong>Restricted:</strong> Highly sensitive information requiring maximum protection</li>
    </ul>

    <h3>4. Data Protection and Privacy</h3>
    <p>ARETION complies with UK GDPR, Data Protection Act 2018, and equivalent data protection laws in all jurisdictions where we operate. We have appointed a Data Protection Officer who oversees compliance: dpo@aretion.co.uk</p>
    <p>Data protection principles:</p>
    <ul>
      <li>Lawfulness, fairness, and transparency</li>
      <li>Purpose limitation (data used only for specified purposes)</li>
      <li>Data minimisation (collect only what is necessary)</li>
      <li>Accuracy</li>
      <li>Storage limitation (retain only as long as necessary)</li>
      <li>Integrity and confidentiality (appropriate security)</li>
      <li>Accountability</li>
    </ul>

    <h3>5. Access Control and Authentication</h3>
    <p>Access to information and systems is granted on a need-to-know and least privilege basis. All users must authenticate using strong methods including:</p>
    <ul>
      <li>Passwords: Minimum 12 characters with combination of uppercase, lowercase, numbers, and symbols</li>
      <li>Multi-Factor Authentication (MFA): Required for all remote access to ARETION systems</li>
    </ul>

    <h3>6. Device and Endpoint Security</h3>
    <p>ARETION-provided devices are subject to security controls including:</p>
    <ul>
      <li>Full disk encryption enabled</li>
      <li>Automatic screen lock (maximum 10 minutes inactivity)</li>
      <li>Anti-malware and endpoint protection software</li>
      <li>Operating system and applications kept up to date</li>
    </ul>

    <h3>7. Incident Response and Breach Notification</h3>
    <p>All security incidents must be reported immediately to:</p>
    <ul>
      <li>IT Security team: itsecurity@aretion.co.uk</li>
      <li>Your manager</li>
      <li>Data Protection Officer (for data breaches): dpo@aretion.co.uk</li>
    </ul>

    <h3>8. Confidentiality Obligations</h3>
    <p>All personnel owe a duty of confidentiality to ARETION, our clients, and patients. You must:</p>
    <ul>
      <li>Protect confidential information from unauthorized disclosure</li>
      <li>Use confidential information only for authorized purposes</li>
      <li>Not disclose confidential information without authorization</li>
      <li>Return or destroy confidential information when no longer needed</li>
      <li>Maintain confidentiality after leaving ARETION's employment</li>
    </ul>

    <h3>9. Contact and Questions</h3>
    <ul>
      <li>IT Security Team: itsecurity@aretion.co.uk</li>
      <li>Data Protection Officer: dpo@aretion.co.uk</li>
      <li>Compliance and Ethics Team: compliance@aretion.co.uk</li>
    </ul>
  </div>
);

// Complaints Handling Policy Content
const ComplaintsHandlingContent = () => (
  <div className="prose prose-sm max-w-none" style={{ fontFamily: 'var(--font-body)' }}>
    <p className="text-sm text-gray-500 mb-4">Last updated: 14 Feb 2026</p>
    
    <h3>1. Policy Statement</h3>
    <p>ARETION & Company and its subsidiaries are committed to delivering high-quality services and maintaining the highest standards of professional conduct, integrity, and client care. We value feedback from clients, patients, employees, partners, and stakeholders, and we are committed to handling complaints fairly, promptly, transparently, and in accordance with applicable legal and professional standards.</p>

    <h3>2. Who This Policy Applies To</h3>
    <p>This policy applies to complaints from:</p>
    <ul>
      <li>Clients and client representatives</li>
      <li>Patients receiving psychotherapy or healthcare-related services</li>
      <li>Partners, collaborators, and suppliers</li>
      <li>Members of the public</li>
      <li>Employees and contractors (regarding service delivery issues)</li>
    </ul>

    <h3>3. What is a Complaint?</h3>
    <p>A complaint is an expression of dissatisfaction about our services, conduct, decisions, or operations, whether justified or not, that requires a response. Examples include:</p>
    <ul>
      <li>Services not delivered as agreed or to expected standard</li>
      <li>Delays or failures in delivery</li>
      <li>Professional conduct concerns</li>
      <li>Billing disputes or unexpected fees</li>
      <li>Breach of confidentiality or data protection</li>
      <li>Discrimination, harassment, or disrespectful treatment</li>
    </ul>

    <h3>4. Our Commitment</h3>
    <p>ARETION & Company is committed to:</p>
    <ul>
      <li><strong>Accessibility:</strong> Making it easy to complain through multiple channels</li>
      <li><strong>Fairness:</strong> Handling complaints impartially and without bias or retaliation</li>
      <li><strong>Promptness:</strong> Responding quickly and resolving complaints within reasonable timeframes</li>
      <li><strong>Transparency:</strong> Explaining how complaints are handled</li>
      <li><strong>Accountability:</strong> Taking responsibility for mistakes</li>
      <li><strong>Learning:</strong> Using complaints to identify improvements</li>
      <li><strong>Non-retaliation:</strong> Ensuring no adverse consequences for complainants</li>
    </ul>

    <h3>5. How to Make a Complaint</h3>
    <p>You should raise a complaint as soon as possible after the issue occurs. We will accept complaints within 12 months of the incident or becoming aware of the issue.</p>
    <p><strong>How to complain:</strong></p>
    <ul>
      <li>Email (preferred method): complaints@aretion.co.uk</li>
      <li>Postal address: Complaints Team, ARETION & Company, 71-75 Shelton Street, Covent Garden, London, WC2H 9JQ</li>
      <li>Telephone: +44 20 3985 0907</li>
    </ul>

    <h3>6. Complaints Handling Process</h3>
    <p><strong>Acknowledgment:</strong> We will acknowledge your complaint within 2 working days of receipt.</p>
    <p><strong>Investigation:</strong> We will investigate your complaint fairly, thoroughly, and impartially.</p>
    <p><strong>Timeframes:</strong></p>
    <ul>
      <li>Standard complaints: within 20 working days</li>
      <li>Complex complaints: within 40 working days</li>
      <li>Urgent complaints involving patient safety: within 5 working days</li>
    </ul>

    <h3>7. Possible Outcomes</h3>
    <ul>
      <li><strong>Complaint upheld:</strong> We agree there was a failure. We will apologize and take appropriate action.</li>
      <li><strong>Complaint partially upheld:</strong> Some elements are valid. We will address the valid elements.</li>
      <li><strong>Complaint not upheld:</strong> We do not find evidence to support the complaint.</li>
    </ul>

    <h3>8. Remedies</h3>
    <p>Where a complaint is upheld, we may offer:</p>
    <ul>
      <li>A sincere, meaningful apology</li>
      <li>Clear explanation of what happened</li>
      <li>Correction or completion of work</li>
      <li>Financial remedy (refund, compensation)</li>
      <li>Service improvements</li>
    </ul>

    <h3>9. External Review</h3>
    <p>If you remain dissatisfied after internal escalation, you may refer your complaint to external bodies including professional regulators, the Information Commissioner's Office (ICO), or consumer protection organizations.</p>

    <h3>10. Contact Information</h3>
    <ul>
      <li>Email: complaints@aretion.co.uk</li>
      <li>Telephone: +44 20 3985 0907</li>
      <li>Data Protection Officer: dpo@aretion.co.uk</li>
      <li>Compliance and Ethics Team: compliance@aretion.co.uk</li>
    </ul>
  </div>
);

// Publishing Ethics and Peer Review Content
const PublishingEthicsContent = () => (
  <div className="prose prose-sm max-w-none" style={{ fontFamily: 'var(--font-body)' }}>
    <p className="text-sm text-gray-500 mb-4">Last updated: 14 Feb 2026</p>
    
    <p>Journal of Medicine, Law & Public Health (JMLPH) — Published by ARETION Publishing Group</p>

    <h3>1. Introduction and Scope</h3>
    <p>This Publishing Policy sets out the standards, procedures, and ethical principles that govern the publication of scholarly work in the Journal of Medicine, Law & Public Health (JMLPH). It applies to all stakeholders involved in the publication process, including authors, reviewers, editors, readers, institutions, and the publisher.</p>
    <p>This policy is consistent with internationally recognised standards and guidance from:</p>
    <ul>
      <li>International Committee of Medical Journal Editors (ICMJE)</li>
      <li>Committee on Publication Ethics (COPE)</li>
      <li>World Association of Medical Editors (WAME)</li>
      <li>American Medical Association (AMA) Manual of Style</li>
    </ul>

    <h3>2. About ARETION Publishing Group and JMLPH</h3>
    <p>The Journal of Medicine, Law & Public Health (JMLPH) is published by ARETION Publishing Group, a subsidiary of ARETION & Company. JMLPH publishes high-quality, peer-reviewed research at the intersection of medicine, law, and public health.</p>
    <p>The journal welcomes original research articles, reviews, case studies, policy analyses, and commentary that advance understanding of healthcare law and regulation, medical ethics, public health law and policy, and health systems governance.</p>

    <h3>3. Editorial Independence</h3>
    <p>JMLPH maintains strict editorial independence. Editorial decisions are based solely on scientific merit, methodological quality, ethical standards, and relevance to the journal's scope. The journal does not accept advertising of any kind and is free from commercial influence.</p>

    <h3>4. Open Access and Copyright</h3>
    <p>JMLPH promotes unrestricted access to scientific research and encourages authors to publish under a Creative Commons Attribution 4.0 International (CC BY 4.0) licence. Authors retain copyright to their work and grant JMLPH the right of first publication.</p>
    <p><strong>Publication charges:</strong></p>
    <ul>
      <li>For articles submitted before 1 June 2026: No publication fees, submission charges, or APCs</li>
      <li>For articles submitted on or after 1 June 2026: A publication charge of £70 applies to accepted articles</li>
      <li>Authors affiliated with institutions in low-income countries are automatically exempt from publication charges</li>
    </ul>

    <h3>5. Originality and Authorship</h3>
    <p>Submissions must be original, not previously published or under review elsewhere. Each author must have:</p>
    <ul>
      <li>Made a significant contribution to the conception, design, execution, or interpretation of the research</li>
      <li>Approved the final version for publication</li>
      <li>Accepted responsibility and ability to publicly defend the work</li>
    </ul>

    <h3>6. Peer Review Policy</h3>
    <p>JMLPH uses a rigorous double-blind peer review process for all manuscripts. Key stages:</p>
    <ul>
      <li>Initial editorial assessment and triage</li>
      <li>Reviewer identification and assignment (at least two independent experts)</li>
      <li>Comprehensive manuscript evaluation</li>
      <li>Author revisions</li>
      <li>Editorial decision</li>
    </ul>
    <p><strong>Peer Review Timelines:</strong></p>
    <ul>
      <li>Initial editorial assessment: typically 5–7 working days</li>
      <li>Peer review: typically 3–4 weeks</li>
      <li>Editorial decision: typically 1–2 weeks after receiving reviewer reports</li>
    </ul>

    <h3>7. Ethical Standards</h3>
    <p>All articles undergo rigorous peer review. Fabrication, falsification, or modification of data is strictly prohibited. Studies involving humans, animals, or sensitive data require prior ethics committee approval. Authors must obtain informed consent for human participants and protect privacy.</p>

    <h3>8. Conflicts of Interest</h3>
    <p>Authors must disclose all actual, potential, or perceived conflicts of interest, including financial interests, research funding sources, and personal or professional relationships. COI declarations must be included in manuscripts at submission.</p>

    <h3>9. Retraction and Correction Policies</h3>
    <p>JMLPH follows COPE Retraction Guidelines. Retractions occur in cases of:</p>
    <ul>
      <li>Proven misconduct (plagiarism, data fabrication, manipulation)</li>
      <li>Significant errors that undermine validity</li>
      <li>Ethical violations</li>
      <li>Duplicate publication</li>
    </ul>

    <h3>10. Contact</h3>
    <p>Editorial enquiries: Editorial.Board@JMLPH.net</p>
  </div>
);

// Modal Component
const PolicyModal = ({ isOpen, onClose, title, children }) => {
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
      aria-labelledby="policy-modal-title"
      data-testid="policy-modal-overlay"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      
      {/* Modal */}
      <div 
        ref={modalRef}
        className="relative bg-white rounded-lg shadow-2xl w-full max-w-3xl max-h-[85vh] flex flex-col"
        style={{ fontFamily: 'var(--font-body)' }}
        data-testid="policy-modal-content"
      >
        {/* Header */}
        <div 
          className="flex items-center justify-between px-6 py-4 border-b"
          style={{ borderColor: 'rgba(26, 58, 82, 0.1)' }}
        >
          <h2 
            id="policy-modal-title"
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
            data-testid="policy-modal-close-btn"
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
            data-testid="policy-modal-close-footer-btn"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

// Export modal types and hook
export const usePolicyModals = () => {
  const [activeModal, setActiveModal] = useState(null);

  const openConflictsOfInterest = () => setActiveModal('conflicts');
  const openPrivacyNotice = () => setActiveModal('privacy');
  const openInformationSecurity = () => setActiveModal('security');
  const openComplaintsHandling = () => setActiveModal('complaints');
  const openPublishingEthics = () => setActiveModal('publishing');
  const openAntiBribery = () => setActiveModal('antibribery');
  const openCodeOfConduct = () => setActiveModal('code');
  const closeModal = () => setActiveModal(null);

  const PolicyModals = () => (
    <>
      <PolicyModal 
        isOpen={activeModal === 'antibribery'} 
        onClose={closeModal} 
        title="Anti-Bribery and Anti-Corruption Policy"
      >
        <AntiBriberyContent />
      </PolicyModal>
      
      <PolicyModal 
        isOpen={activeModal === 'code'} 
        onClose={closeModal} 
        title="Code of Conduct"
      >
        <CodeOfConductContent />
      </PolicyModal>
      
      <PolicyModal 
        isOpen={activeModal === 'conflicts'} 
        onClose={closeModal} 
        title="Conflicts of Interest Policy"
      >
        <ConflictsOfInterestContent />
      </PolicyModal>
      
      <PolicyModal 
        isOpen={activeModal === 'privacy'} 
        onClose={closeModal} 
        title="Privacy Notice (UK GDPR)"
      >
        <PrivacyNoticeContent />
      </PolicyModal>
      
      <PolicyModal 
        isOpen={activeModal === 'security'} 
        onClose={closeModal} 
        title="Information Security and Confidentiality"
      >
        <InformationSecurityContent />
      </PolicyModal>
      
      <PolicyModal 
        isOpen={activeModal === 'complaints'} 
        onClose={closeModal} 
        title="Complaints Handling Policy"
      >
        <ComplaintsHandlingContent />
      </PolicyModal>
      
      <PolicyModal 
        isOpen={activeModal === 'publishing'} 
        onClose={closeModal} 
        title="Publishing Ethics and Peer Review"
      >
        <PublishingEthicsContent />
      </PolicyModal>
    </>
  );

  return { 
    openConflictsOfInterest, 
    openPrivacyNotice, 
    openInformationSecurity, 
    openComplaintsHandling, 
    openPublishingEthics,
    openAntiBribery,
    openCodeOfConduct,
    closeModal,
    PolicyModals 
  };
};

export default PolicyModal;
