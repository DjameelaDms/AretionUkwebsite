import React from 'react';
import { policiesAndStandards } from '../mock/mockData';
import { FileText } from 'lucide-react';

const Standards = () => {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <section className="py-16 md:py-24" style={{ backgroundColor: 'var(--aretion-off-white)' }}>
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h1 className="mb-6 font-light" style={{ color: 'var(--aretion-navy)' }}>
              Standards & Policies
            </h1>
            <p className="text-xl leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
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
              {policiesAndStandards.map((policy, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-lg p-6 border transition-all hover:shadow-md cursor-pointer group"
                  style={{ borderColor: 'rgba(26, 58, 82, 0.08)' }}
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
                        {policy}
                      </h3>
                      <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                        View policy document
                      </p>
                    </div>
                  </div>
                </div>
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
              href="mailto:contact@aretion.org"
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
            >
              contact@aretion.org
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Standards;
