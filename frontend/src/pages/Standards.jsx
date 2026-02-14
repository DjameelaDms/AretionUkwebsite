import React from 'react';
import { FileText } from 'lucide-react';
import { usePolicyModals } from '../components/PolicyModals';

// Define the policies with their modal handlers
const policiesConfig = [
  { name: 'Conflicts of Interest', modalKey: 'conflicts' },
  { name: 'Privacy Notice (UK GDPR)', modalKey: 'privacy' },
  { name: 'Information Security and Confidentiality', modalKey: 'security' },
  { name: 'Publishing Ethics and Peer Review', modalKey: 'publishing' },
  { name: 'Complaints Handling', modalKey: 'complaints' },
];

const Standards = () => {
  const { 
    openConflictsOfInterest, 
    openPrivacyNotice, 
    openInformationSecurity, 
    openComplaintsHandling, 
    openPublishingEthics, 
    PolicyModals 
  } = usePolicyModals();

  // Map modal keys to their handlers
  const modalHandlers = {
    conflicts: openConflictsOfInterest,
    privacy: openPrivacyNotice,
    security: openInformationSecurity,
    publishing: openPublishingEthics,
    complaints: openComplaintsHandling,
  };

  const handlePolicyClick = (modalKey) => {
    const handler = modalHandlers[modalKey];
    if (handler) {
      handler();
    }
  };

  return (
    <div className="min-h-screen pt-24">
      {/* Policy Modals */}
      <PolicyModals />

      {/* Hero with Image */}
      <section className="relative min-h-[400px] md:min-h-[500px] flex items-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(/images/standards-hero.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div 
            className="absolute inset-0"
            style={{ backgroundColor: 'rgba(26, 58, 82, 0.65)' }}
          />
        </div>
        
        {/* Content */}
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="mb-6 font-light" style={{ color: 'white' }}>
              Standards & Policies
            </h1>
            <p className="text-xl leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
              Group standards supporting responsible conduct, confidentiality, and quality assurance
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg leading-relaxed mb-8" style={{ color: 'var(--text-secondary)' }}>
              ARETION & Company maintains comprehensive group standards to ensure consistent, 
              responsible practice across all operating entities. These policies guide our approach 
              to governance, ethics, quality assurance, and stakeholder relationships.
            </p>
          </div>
        </div>
      </section>

      {/* Policies List */}
      <section className="py-16 md:py-24" style={{ backgroundColor: 'var(--aretion-cream)' }}>
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-12 text-center" style={{ color: 'var(--aretion-navy)' }}>
              Our Policies
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {policiesConfig.map((policy, index) => (
                <button
                  key={index}
                  onClick={() => handlePolicyClick(policy.modalKey)}
                  className="bg-white rounded-lg p-6 border transition-all hover:shadow-md cursor-pointer group text-left w-full"
                  style={{ borderColor: 'rgba(26, 58, 82, 0.08)' }}
                  data-testid={`policy-card-${policy.modalKey}`}
                >
                  <div className="flex items-start space-x-4">
                    <div 
                      className="p-3 rounded-lg flex-shrink-0 transition-colors"
                      style={{ backgroundColor: 'var(--aretion-cream)' }}
                    >
                      <FileText 
                        size={20} 
                        style={{ color: 'var(--aretion-navy)' }}
                      />
                    </div>
                    <div className="flex-1">
                      <h3 
                        className="font-semibold mb-1 group-hover:underline transition-all" 
                        style={{ color: 'var(--aretion-navy)' }}
                      >
                        {policy.name}
                      </h3>
                      <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                        View policy document
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Commitment Statement */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div 
              className="rounded-lg p-8 md:p-12"
              style={{ 
                backgroundColor: 'var(--aretion-navy)',
                color: 'var(--text-light)'
              }}
            >
              <h2 className="mb-6" style={{ color: 'var(--text-light)' }}>
                Our Commitment
              </h2>
              <div className="space-y-4 text-lg leading-relaxed" style={{ opacity: 0.9 }}>
                <p>
                  We are committed to maintaining the highest standards of professional conduct, 
                  transparency, and accountability across all our operations.
                </p>
                <p>
                  These policies are regularly reviewed and updated to reflect evolving best practices, 
                  regulatory requirements, and stakeholder expectations.
                </p>
                <p>
                  All employees, contractors, and partners are expected to understand and adhere to 
                  these standards in their work with ARETION & Company and its operating entities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact for Queries */}
      <section className="py-16 md:py-24" style={{ backgroundColor: 'var(--aretion-cream)' }}>
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6" style={{ color: 'var(--aretion-navy)' }}>
              Questions About Our Policies?
            </h2>
            <p className="text-lg mb-8" style={{ color: 'var(--text-secondary)' }}>
              For enquiries about our standards and policies, please contact us
            </p>
            <a 
              href="mailto:post@aretion.co.uk"
              className="inline-flex items-center space-x-2 px-8 py-4 font-medium rounded border-2 transition-all"
              style={{
                borderColor: 'var(--aretion-navy)',
                color: 'var(--aretion-navy)',
                backgroundColor: 'white'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--aretion-navy)';
                e.currentTarget.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'white';
                e.currentTarget.style.color = 'var(--aretion-navy)';
              }}
              data-testid="contact-email-btn"
            >
              post@aretion.co.uk
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Standards;
