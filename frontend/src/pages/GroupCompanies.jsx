import React from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { groupCompanies } from '../mock/mockData';

const GroupCompanies = () => {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <section className="py-16 md:py-24" style={{ backgroundColor: 'var(--aretion-off-white)' }}>
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h1 className="mb-6 font-light" style={{ color: 'var(--aretion-navy)' }}>
              Group Companies
            </h1>
            <p className="text-xl leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Operating entities within the ARETION group
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              ARETION & Company oversees three operating entities, each managed with defined accountabilities 
              and aligned to group standards for quality, governance, and responsible conduct.
            </p>
          </div>
        </div>
      </section>

      {/* ARETION Informatics Solutions */}
      <section className="py-16 md:py-24" style={{ backgroundColor: 'var(--aretion-cream)' }}>
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-5 gap-8">
              <div className="md:col-span-2">
                <div className="text-sm font-medium mb-2" style={{ color: 'var(--aretion-rust)' }}>
                  INFORMATICS
                </div>
                <h2 className="mb-4" style={{ color: 'var(--aretion-navy)' }}>
                  ARETION Informatics Solutions
                </h2>
              </div>
              <div className="md:col-span-3">
                <p className="text-lg mb-4 font-medium" style={{ color: 'var(--aretion-navy)' }}>
                  Health Information Systems (HIS) and digital platforms
                </p>
                <p className="mb-6 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  Design and delivery support for HIS and healthcare digital platforms, emphasizing 
                  operational usability and disciplined delivery.
                </p>
                <div className="mb-6">
                  <div className="text-sm font-medium mb-3" style={{ color: 'var(--aretion-navy)' }}>
                    Services include:
                  </div>
                  <ul className="space-y-2">
                    {[
                      'HIS architecture and design',
                      'Implementation support',
                      'Integration and interoperability',
                      'Reporting and analytics enablement',
                      'Documentation and operational adoption'
                    ].map((service, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <span style={{ color: 'var(--aretion-rust)' }}>•</span>
                        <span style={{ color: 'var(--text-secondary)' }}>{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  href="https://informatics.aretion.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-6 py-3 font-medium rounded border-2 transition-all"
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
                  <span>Visit informatics.aretion.org</span>
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ARETION Publishing Group */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-5 gap-8">
              <div className="md:col-span-2">
                <div className="text-sm font-medium mb-2" style={{ color: 'var(--aretion-rust)' }}>
                  PUBLISHING
                </div>
                <h2 className="mb-4" style={{ color: 'var(--aretion-navy)' }}>
                  ARETION Publishing Group
                </h2>
              </div>
              <div className="md:col-span-3">
                <p className="text-lg mb-4 font-medium" style={{ color: 'var(--aretion-navy)' }}>
                  Medicine, law and public health
                </p>
                <p className="mb-6 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  Publishing across medicine, law and public health, with emphasis on editorial governance 
                  and research integrity.
                </p>
                <div 
                  className="rounded-lg p-6 mb-6"
                  style={{ 
                    backgroundColor: 'var(--aretion-navy)',
                    color: 'white'
                  }}
                >
                  <div className="text-sm font-medium mb-2" style={{ color: 'var(--aretion-tan)' }}>
                    FEATURED JOURNAL
                  </div>
                  <h3 className="text-xl mb-2" style={{ color: 'white' }}>Journal of Medicine, Law and Public Health (JMLPH)</h3>
                  <p className="text-sm mb-4" style={{ color: 'white', opacity: 0.9 }}>
                    Peer-reviewed journal acquired in 2025
                  </p>
                  <a
                    href="https://jmlph.net"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-sm font-medium hover:underline"
                    style={{ color: 'var(--aretion-tan)' }}
                  >
                    <span>Visit JMLPH.net</span>
                    <ExternalLink size={14} />
                  </a>
                </div>
                <a
                  href="https://publishing.aretion.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-6 py-3 font-medium rounded border-2 transition-all"
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
                  <span>Visit publishing.aretion.org</span>
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ARETION Healthcare Consulting */}
      <section className="py-16 md:py-24" style={{ backgroundColor: 'var(--aretion-cream)' }}>
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-5 gap-8">
              <div className="md:col-span-2">
                <div className="text-sm font-medium mb-2" style={{ color: 'var(--aretion-rust)' }}>
                  CONSULTING
                </div>
                <h2 className="mb-4" style={{ color: 'var(--aretion-navy)' }}>
                  ARETION Healthcare Consulting
                </h2>
              </div>
              <div className="md:col-span-3">
                <p className="text-lg mb-4 font-medium" style={{ color: 'var(--aretion-navy)' }}>
                  Healthcare governance and medical law research themes
                </p>
                <p className="mb-6 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  Advisory and project support across healthcare governance and medical law research themes, 
                  delivered with confidentiality and disciplined execution.
                </p>
                <div className="mb-6">
                  <div className="text-sm font-medium mb-3" style={{ color: 'var(--aretion-navy)' }}>
                    Current themes:
                  </div>
                  <ul className="space-y-2">
                    {[
                      'Healthcare governance and assurance support',
                      'Medical law research support (non-legal)',
                      'Programme support',
                      'Post-graduate programmes in Nigeria, Cameroon, and Kenya'
                    ].map((theme, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <span style={{ color: 'var(--aretion-rust)' }}>•</span>
                        <span style={{ color: 'var(--text-secondary)' }}>{theme}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  href="https://healthcare.aretion.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-6 py-3 font-medium rounded border-2 transition-all"
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
                  <span>Visit healthcare.aretion.org</span>
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24" style={{ backgroundColor: 'var(--aretion-navy)' }}>
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6" style={{ color: 'var(--text-light)' }}>
              Interested in working with us?
            </h2>
            <p className="text-lg mb-8" style={{ color: 'rgba(255, 255, 255, 0.85)' }}>
              Contact us to discuss how our group companies can support your needs
            </p>
            <a 
              href="mailto:contact@aretion.org"
              className="inline-flex items-center space-x-2 px-8 py-4 font-medium rounded transition-all"
              style={{
                backgroundColor: 'var(--aretion-tan)',
                color: 'white'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--aretion-rust)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--aretion-tan)';
              }}
            >
              <span>Get in touch</span>
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GroupCompanies;
