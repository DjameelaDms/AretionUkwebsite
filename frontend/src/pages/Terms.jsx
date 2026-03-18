import React from 'react';

const Terms = () => {
  return (
    <div className="min-h-screen pt-24">
      <section className="py-16 md:py-24">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h1 style={{ color: 'var(--aretion-navy)' }}>Terms of Use</h1>
            <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
              Last updated: December 2025
            </p>

            <h2 style={{ color: 'var(--aretion-navy)' }}>1. General Information</h2>
            <p>
              This website is operated by ARETION & Company (Company number: 17021760). By accessing 
              and using this website, you accept and agree to be bound by these Terms of Use.
            </p>

            <h2 style={{ color: 'var(--aretion-navy)' }}>2. Website Content</h2>
            <p>
              The content provided on this website is for general information purposes only. It does 
              not constitute legal, medical, or other professional advice. You should not rely on 
              information on this website as an alternative to professional advice.
            </p>

            <h2 style={{ color: 'var(--aretion-navy)' }}>3. Services</h2>
            <p>
              Services provided by ARETION & Company and its operating entities are subject to written 
              agreements. This website does not constitute an offer or invitation to enter into any 
              service agreement.
            </p>

            <h2 style={{ color: 'var(--aretion-navy)' }}>4. Intellectual Property</h2>
            <p>
              All content on this website, including text, graphics, logos, and software, is the 
              property of ARETION & Company or its licensors and is protected by copyright and other 
              intellectual property laws.
            </p>

            <h2 style={{ color: 'var(--aretion-navy)' }}>5. Acceptable Use</h2>
            <p>You must not:</p>
            <ul>
              <li>Use this website in any way that is unlawful or fraudulent</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Transmit any malicious code or harmful material</li>
              <li>Reproduce or distribute content without permission</li>
            </ul>

            <h2 style={{ color: 'var(--aretion-navy)' }}>6. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, ARETION & Company excludes all liability for 
              any loss or damage arising from use of this website or reliance on its content.
            </p>

            <h2 style={{ color: 'var(--aretion-navy)' }}>7. External Links</h2>
            <p>
              This website may contain links to external websites. We are not responsible for the 
              content or privacy practices of external sites.
            </p>

            <h2 style={{ color: 'var(--aretion-navy)' }}>8. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms of Use at any time. Continued use of the 
              website constitutes acceptance of modified terms.
            </p>

            <h2 style={{ color: 'var(--aretion-navy)' }}>9. Governing Law</h2>
            <p>
              These Terms of Use are governed by the laws of England and Wales. Any disputes shall 
              be subject to the exclusive jurisdiction of the courts of England and Wales.
            </p>

            <h2 style={{ color: 'var(--aretion-navy)' }}>Contact</h2>
            <p>
              For questions about these Terms of Use, please contact:
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

export default Terms;
