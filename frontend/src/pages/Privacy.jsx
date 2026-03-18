import React from 'react';

const Privacy = () => {
  return (
    <div className="min-h-screen pt-24">
      <section className="py-16 md:py-24">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h1 style={{ color: 'var(--aretion-navy)' }}>Privacy Notice</h1>
            <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
              Last updated: December 2025
            </p>

            <h2 style={{ color: 'var(--aretion-navy)' }}>Who we are</h2>
            <p>
              ARETION & Company (Company number: 17021760) is the data controller for the purposes 
              of UK GDPR and the Data Protection Act 2018.
            </p>

            <h2 style={{ color: 'var(--aretion-navy)' }}>What information we collect</h2>
            <p>We may collect the following types of personal information:</p>
            <ul>
              <li>Contact information provided through enquiry forms or email correspondence</li>
              <li>Career registration information including CVs and application details</li>
              <li>Technical data such as IP addresses, browser type, and device information</li>
            </ul>

            <h2 style={{ color: 'var(--aretion-navy)' }}>How we use your information</h2>
            <p>We use your information to:</p>
            <ul>
              <li>Respond to enquiries and provide requested information</li>
              <li>Manage communications with stakeholders and partners</li>
              <li>Operate and secure our website</li>
              <li>Process career registrations and applications</li>
            </ul>

            <h2 style={{ color: 'var(--aretion-navy)' }}>Lawful basis</h2>
            <p>
              We process your personal information based on legitimate interests (to respond to enquiries 
              and operate our business), steps taken to enter into a contract, or legal obligations.
            </p>

            <h2 style={{ color: 'var(--aretion-navy)' }}>Sharing your information</h2>
            <p>
              We may share your information with trusted service providers who assist in operating our 
              website and conducting our business, subject to appropriate confidentiality agreements.
            </p>

            <h2 style={{ color: 'var(--aretion-navy)' }}>Data retention</h2>
            <p>
              We retain your personal information for as long as necessary to fulfil the purposes for 
              which it was collected, or as required by law.
            </p>

            <h2 style={{ color: 'var(--aretion-navy)' }}>Your rights</h2>
            <p>Under UK GDPR, you have the right to:</p>
            <ul>
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Object to processing or request restriction</li>
              <li>Lodge a complaint with the Information Commissioner's Office (ICO)</li>
            </ul>

            <h2 style={{ color: 'var(--aretion-navy)' }}>Contact</h2>
            <p>
              For questions about this Privacy Notice or to exercise your rights, please contact us at:
              <br />
              <a href="mailto:post@aretion.co.uk" style={{ color: 'var(--aretion-steel-blue)' }}>
                post@aretion.co.uk
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
