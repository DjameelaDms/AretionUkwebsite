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

// Code of Conduct Content (Full document from uploaded file)
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

// Publishing Ethics and Peer Review Content (Full Document)
const PublishingEthicsContent = () => (
  <div className="prose prose-sm max-w-none" style={{ fontFamily: 'var(--font-body)' }}>
    <p className="text-sm text-gray-500 mb-4">Last updated: 14 Feb 2026</p>
    
    <p><strong>Journal of Medicine, Law & Public Health (JMLPH)</strong><br />Published by ARETION Publishing Group</p>

    <h3>Table of Contents</h3>
    <ol className="text-sm mb-6">
      <li>Introduction and Scope</li>
      <li>About ARETION Publishing Group and JMLPH</li>
      <li>Legal and Regulatory Framework</li>
      <li>Open Access, Publication Charges, and Copyright</li>
      <li>Editorial and Archiving Policies</li>
      <li>Originality, Authorship, and Affiliations</li>
      <li>Handling Papers Authored by Editorial Board Members</li>
      <li>Peer Review Policy</li>
      <li>Ethical Guidance for Reviewers</li>
      <li>Ethical Guidance for the Editorial Team</li>
      <li>Redundant or Duplicate Publications and Reuse</li>
      <li>Copyediting, Production, and Metadata</li>
      <li>Conflicts of Interest</li>
      <li>Scientific Integrity, Misconduct, and Ethics</li>
      <li>Plagiarism and Overlap Policy</li>
      <li>Preprint Policy</li>
      <li>Retraction and Correction Policies</li>
      <li>Explicit Jurisdiction Framing</li>
      <li>Appeals, Complaints, and Advertising</li>
      <li>Complaint Policy with a Broader Perspective</li>
      <li>Use of Artificial Intelligence (AI) Tools</li>
      <li>Data Protection and Privacy Policy</li>
      <li>Governance and Updates</li>
    </ol>

    <h3>1. Introduction and Scope</h3>
    <p>This Publishing Policy sets out the standards, procedures, and ethical principles that govern the publication of scholarly work in the Journal of Medicine, Law & Public Health (JMLPH). It applies to all stakeholders involved in the publication process, including authors, reviewers, editors, readers, institutions, and the publisher. The policy is designed to:</p>
    <ul>
      <li>Ensure the highest standards of research integrity, publication ethics, and editorial independence</li>
      <li>Provide clear guidance on author, reviewer, and editor responsibilities</li>
      <li>Protect the rights and interests of research participants, authors, and the academic community</li>
      <li>Maintain transparency, accountability, and compliance with applicable laws and professional standards</li>
      <li>Support open access to scientific knowledge</li>
    </ul>
    <p>This policy is consistent with internationally recognised standards and guidance from:</p>
    <ul>
      <li>International Committee of Medical Journal Editors (ICMJE)</li>
      <li>Committee on Publication Ethics (COPE)</li>
      <li>World Association of Medical Editors (WAME)</li>
      <li>American Medical Association (AMA) Manual of Style</li>
    </ul>

    <h3>2. About ARETION Publishing Group and JMLPH</h3>
    <h4>2.1 Publisher Identity</h4>
    <p>The Journal of Medicine, Law & Public Health (JMLPH) is published by ARETION Publishing Group as of 2026, a subsidiary of ARETION & Company. ARETION & Company operates through three principal subsidiaries:</p>
    <ul>
      <li><strong>ARETION Informatics Solutions</strong> – providing health information technology, digital solutions, data platforms, data analytics, and technology-enabled consulting to healthcare organisations</li>
      <li><strong>ARETION Publishing Group</strong> – producing healthcare publications, research, evidence synthesis, policy analysis, and knowledge dissemination to advance healthcare practice and policy</li>
      <li><strong>ARETION Healthcare Consulting</strong> – delivering strategy consulting, operational improvement, workforce development, clinical pathway redesign, digital health implementation, and advisory services to healthcare providers, commissioners, and systems</li>
    </ul>

    <h4>2.2 Journal Mission and Scope</h4>
    <p>JMLPH publishes high-quality, peer-reviewed research at the intersection of medicine, law, and public health. The journal welcomes original research articles, reviews, case studies, policy analyses, and commentary that advance understanding of:</p>
    <ul>
      <li>Healthcare law and regulation</li>
      <li>Medical ethics and bioethics</li>
      <li>Public health law and policy</li>
      <li>Health systems governance</li>
      <li>Patient rights and healthcare access</li>
      <li>Legal and ethical aspects of medical practice</li>
      <li>Health equity and social determinants of health</li>
      <li>Global health law and comparative health systems</li>
    </ul>

    <h4>2.3 Editorial Independence</h4>
    <p>JMLPH maintains strict editorial independence. Editorial decisions are based solely on scientific merit, methodological quality, ethical standards, and relevance to the journal's scope. The journal does not accept advertising of any kind and is free from commercial influence. ARETION Publishing Group supports the editorial team but does not interfere with editorial decisions. The Editor-in-Chief and editorial board retain full autonomy over content, peer review, and publication decisions.</p>

    <h3>3. Legal and Regulatory Framework</h3>
    <h4>3.1 Primary Jurisdiction: United Kingdom</h4>
    <p>ARETION Publishing Group and JMLPH operate under the laws of England and Wales as the primary legal framework. This includes compliance with:</p>
    <ul>
      <li>UK General Data Protection Regulation (UK GDPR) and Data Protection Act 2018</li>
      <li>Copyright, Designs and Patents Act 1988</li>
      <li>Equality Act 2010</li>
      <li>Human Rights Act 1998</li>
      <li>Defamation Act 2013</li>
      <li>Computer Misuse Act 1990</li>
      <li>Common law principles governing contract, tort, and intellectual property</li>
    </ul>

    <h4>3.2 Gulf Region Context</h4>
    <p>JMLPH operates internationally and works with authors, reviewers, editors, and institutions in the Gulf region, including Saudi Arabia, United Arab Emirates, Qatar, Kuwait, Bahrain, and Oman. The journal recognises and respects applicable legal, ethical, and professional frameworks in Gulf countries.</p>

    <h4>3.3 Harmonisation and Compliance</h4>
    <p>Where research involves multiple jurisdictions, authors must clearly indicate the jurisdiction(s) in which research was conducted, confirm compliance with applicable ethics approvals, data protection laws, and regulatory requirements in all relevant jurisdictions, and describe any jurisdiction-specific constraints on data sharing, publication, or participant consent.</p>

    <h3>4. Open Access, Publication Charges, and Copyright</h3>
    <h4>4.1 Open Access Policy</h4>
    <p>JMLPH promotes unrestricted access to scientific research and encourages authors to publish under a Creative Commons Attribution 4.0 International (CC BY 4.0) licence. Users may read, download, distribute, copy, and link to full-text articles with proper attribution.</p>

    <h4>4.2 Publication Charge Policy</h4>
    <p><strong>For articles submitted before 1 June 2026:</strong> JMLPH does not charge publication fees, submission charges, peer review fees, or Article Processing Charges (APCs).</p>
    <p><strong>For articles submitted on or after 1 June 2026:</strong> JMLPH does not charge submission or peer review fees. However, a publication charge of £70 will apply to accepted articles only.</p>
    <p><strong>Exemptions:</strong> Authors affiliated with institutions in low-income and lower-middle-income countries, as classified by the World Bank, are automatically exempt from publication charges.</p>

    <h4>4.3 Copyright and Licensing</h4>
    <p>Authors retain copyright to their work and grant JMLPH the right of first publication and the right to share, reproduce, and distribute the work worldwide without fees. Under the CC BY 4.0 licence, authors and users may share (copy and redistribute the material) and adapt (remix, transform, and build upon the material for any purpose, including commercial uses).</p>

    <h3>5. Editorial and Archiving Policies</h3>
    <h4>5.1 Editorial Policy and Ethical Framework</h4>
    <p>JMLPH upholds ethical conduct and scientific integrity, following ICMJE Recommendations for the Conduct, Reporting, Editing, and Publication of Scholarly Work in Medical Journals. JMLPH does not accept advertising of any kind and maintains strict editorial independence from commercial interests.</p>

    <h4>5.2 Editorial Governance</h4>
    <ul>
      <li><strong>Editor-in-Chief:</strong> Holds final responsibility for all editorial decisions, ensures compliance with publication ethics and policies</li>
      <li><strong>Editorial Board:</strong> Provides expert guidance on journal scope and standards, handles manuscripts in their areas of expertise</li>
      <li><strong>Editorial Office:</strong> Manages submissions, correspondence, and production workflow</li>
    </ul>

    <h4>5.3 Archiving and Preservation</h4>
    <p>To ensure long-term preservation and accessibility, JMLPH uses LOCKSS, CLOCKSS, Internet Archive, and Open Journal Systems (OJS) to manage submissions, peer review, publication workflows, and metadata.</p>

    <h3>6. Originality, Authorship, and Affiliations</h3>
    <h4>6.1 Originality and Reporting Standards</h4>
    <p>Submissions must be original, not previously published or under review elsewhere, report methods and findings accurately with sufficient detail for reproducibility, and avoid overstatement or misinterpretation of results.</p>

    <h4>6.2 Authorship Criteria</h4>
    <p>Each author must have made a significant contribution to the conception, design, execution, or interpretation of the research, approved the final version for publication, and accepted responsibility and ability to publicly defend the work.</p>

    <h4>6.3 Affiliations and Impartiality</h4>
    <p>Authors should include only essential affiliations directly relevant to the research. To promote impartiality, do not include academic ranks, professional memberships, managerial positions, or honorary titles.</p>

    <h3>7. Handling Papers Authored by Editorial Board Members</h3>
    <p>JMLPH is committed to avoiding real or perceived conflicts of interest in the editorial evaluation of manuscripts authored by members of its editorial board. Any editor who is an author of a submitted manuscript must not participate in any part of the editorial decision-making for that manuscript. The manuscript will be assigned to an independent handling editor who has no conflicts of interest.</p>

    <h3>8. Peer Review Policy</h3>
    <h4>8.1 Process and Structure</h4>
    <p>JMLPH uses a rigorous double-blind peer review process for all manuscripts. Key stages include:</p>
    <ul>
      <li><strong>Initial Editorial Assessment:</strong> Check scope, originality, formatting, and ethics</li>
      <li><strong>Reviewer Assignment:</strong> At least two independent experts with relevant subject expertise</li>
      <li><strong>Manuscript Evaluation:</strong> Reviewers assess conceptual innovation, methodological robustness, structural organisation, and research ethics</li>
      <li><strong>Author Revisions:</strong> Authors respond systematically to each comment</li>
      <li><strong>Editorial Decision:</strong> Accept, conditional accept, or reject</li>
    </ul>

    <h4>8.2 Peer Review Timelines</h4>
    <ul>
      <li>Initial editorial assessment: typically 5–7 working days</li>
      <li>Peer review: typically 3–4 weeks</li>
      <li>Editorial decision: typically 1–2 weeks after receiving reviewer reports</li>
      <li>Revision deadlines: typically 30–60 days</li>
    </ul>

    <h3>9. Ethical Guidance for Reviewers</h3>
    <p>Reviewers must provide objective, evidence-based, constructive assessments. They must treat manuscripts as confidential, declare any conflicts of interest, focus criticism on the work (not individuals), and report suspected misconduct to the editor.</p>

    <h3>10. Ethical Guidance for the Editorial Team</h3>
    <p>Editors make decisions independently of sponsors or institutions, base decisions on scientific merit, maintain confidentiality of manuscripts and reviewer identities, and follow COPE guidance for allegations of misconduct.</p>

    <h3>11. Redundant or Duplicate Publications and Reuse</h3>
    <p>Authors must not submit manuscripts that substantially overlap with already-published work. When reusing previously published material, authors must obtain all necessary permissions and clearly attribute the original source.</p>

    <h3>12. Copyediting, Production, and Metadata</h3>
    <p>After acceptance, manuscripts proceed through copyediting, typesetting and proofreading, DOI assignment and metadata preparation, and online publication.</p>

    <h3>13. Conflicts of Interest</h3>
    <p>Authors must disclose all actual, potential, or perceived conflicts of interest, including financial interests, research funding sources, personal or professional relationships, and institutional affiliations that could create bias. COI declarations must be included in manuscripts at submission.</p>

    <h3>14. Scientific Integrity, Misconduct, and Ethics</h3>
    <p>Fabrication, falsification, or modification of data is strictly prohibited. Studies involving humans, animals, or sensitive data require prior ethics committee approval. Authors must obtain informed consent for human participants and protect privacy. Research involving animals must comply with ARRIVE guidelines.</p>

    <h3>15. Plagiarism and Overlap Policy</h3>
    <p>Plagiarism includes verbatim copying without quotation and citation, close paraphrasing without proper attribution, self-plagiarism, unacknowledged use of others' ideas, and image/data plagiarism. Submissions are screened using tools such as Grammarly and Turnitin. Serious offences may result in submission bans and institutional notification.</p>

    <h3>16. Preprint Policy</h3>
    <p>JMLPH supports the use of preprint servers (e.g., arXiv, bioRxiv, medRxiv, SSRN). Posting to preprint servers does not constitute prior publication and will not affect consideration by JMLPH.</p>

    <h3>17. Retraction and Correction Policies</h3>
    <p>JMLPH follows COPE Retraction Guidelines. Retractions occur in cases of proven misconduct, significant errors or inaccuracies, ethical violations, duplicate publication, or unresolved authorship disputes.</p>
    <p><strong>Types of notices:</strong></p>
    <ul>
      <li><strong>Erratum:</strong> Journal/publisher errors</li>
      <li><strong>Corrigendum:</strong> Author-originated errors</li>
      <li><strong>Addendum:</strong> Additional information</li>
      <li><strong>Expression of Concern:</strong> Pending investigation</li>
      <li><strong>Retraction:</strong> Confirmed misconduct or invalidating errors</li>
    </ul>

    <h3>18. Explicit Jurisdiction Framing</h3>
    <p>JMLPH operates under the laws of England and Wales as its primary legal framework and collaborates internationally, particularly across the Gulf region. Where conflicts arise between jurisdictional requirements, the journal will prioritise participant safety, privacy, and research integrity.</p>

    <h3>19. Appeals, Complaints, and Advertising</h3>
    <p>Authors may appeal revision or rejection decisions only after peer review (not desk rejections). Appeals must be submitted within 30 days of the decision. Only one appeal is permitted per manuscript; the final decision after appeal is conclusive.</p>

    <h3>20. Complaint Policy</h3>
    <p>JMLPH views complaints as opportunities to improve quality, transparency, and trust. Complaints may relate to editorial decisions, peer review, authorship, research ethics, patient safety, legal or public health implications, conflicts of interest, or alleged misconduct.</p>
    <p><strong>Principles:</strong> Accessibility, fairness and impartiality, confidentiality, timeliness (acknowledgement within 1–2 working days, substantive response within approximately 30 days).</p>

    <h3>21. Use of Artificial Intelligence (AI) Tools</h3>
    <p>AI systems cannot be authors or sign disclosures. Human authors remain fully responsible for all content, including AI-assisted text. Permitted uses include grammar, clarity, and formatting improvements. The primary intellectual content must originate from the authors.</p>
    <p><strong>Authors must not:</strong></p>
    <ul>
      <li>List AI as an author</li>
      <li>Cite AI outputs as primary sources</li>
      <li>Input patient-identifying or confidential data into AI tools</li>
      <li>Submit substantial AI-generated content without disclosure</li>
    </ul>

    <h3>22. Data Protection and Privacy</h3>
    <p>The journal adheres to applicable data protection laws, including UK GDPR, Data Protection Act 2018, and equivalent legislation in Gulf region jurisdictions. Authors must protect the privacy of research participants by de-identifying personal information and obtaining informed consent.</p>

    <h3>23. Policy Governance and Updates</h3>
    <p>JMLPH policies align with guidance from ICMJE, COPE, WAME, and the AMA Manual of Style. Queries may be directed to the editorial office at Editorial.Board@JMLPH.net.</p>
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
