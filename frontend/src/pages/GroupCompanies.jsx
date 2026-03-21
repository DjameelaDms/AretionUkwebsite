import React from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { groupCompanies } from '../mock/mockData';

const GroupCompanies = () => {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero with Image */}
      <section className="relative min-h-[400px] md:min-h-[500px] flex items-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(/images/group-companies-hero.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div 
            className="absolute inset-0"
            style={{ backgroundColor: 'rgba(26, 58, 82, 0.7)' }}
          />
        </div>
        
        {/* Content */}
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="mb-6 font-light" style={{ color: 'white' }}>
              ARETION Group
            </h1>
            <p className="text-xl leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
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
              ARETION & Company operates three distinct business units, each with defined governance structures, 
              clear performance metrics, and aligned commercial objectives.
            </p>
          </div>
        </div>
      </section>

      {/* ARETION Solutions */}
      <section className="py-16 md:py-24" style={{ backgroundColor: 'var(--aretion-cream)' }}>
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-5 gap-8">
              <div className="md:col-span-2">
                <div className="text-sm font-medium mb-2" style={{ color: 'var(--aretion-rust)' }}>
                  CRITICAL INFRASTRUCTURE TECHNOLOGY
                </div>
                <h2 className="mb-4" style={{ color: 'var(--aretion-navy)' }}>
                  ARETION Solutions
                </h2>
              </div>
              <div className="md:col-span-3">
                <p className="text-lg mb-4 font-medium" style={{ color: 'var(--aretion-navy)' }}>
                  Scalable technology platforms for facility safety and operational resilience
                </p>
                <p className="mb-6 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  Proprietary systems delivering measurable ROI through reduced downtime, enhanced safety compliance, and integrated emergency response capabilities.
                </p>
                <div className="mb-6">
                  <div className="text-sm font-medium mb-3" style={{ color: 'var(--aretion-navy)' }}>
                    Core Capabilities:
                  </div>
                  <ul className="space-y-2">
                    {[
                      'Early Warning Detection – Predictive monitoring reducing incident response time by up to 40%',
                      'Fire & Safety Networks – Integrated detection systems with automated command protocols',
                      'Critical Infrastructure Security – 24/7 surveillance with automated failover',
                      'Secure Operations Centres – Hardened command facilities for business continuity',
                      'All-Hazard Response Platform – Unified threat management across multiple risk vectors'
                    ].map((service, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <span style={{ color: 'var(--aretion-rust)' }}>•</span>
                        <span style={{ color: 'var(--text-secondary)' }}>{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mb-6">
                  <div className="text-sm font-medium mb-3" style={{ color: 'var(--aretion-navy)' }}>
                    Deployed Products:
                  </div>
                  <ul className="space-y-2">
                    {[
                      'DisasterMs – Enterprise facility safety platform with predictive analytics',
                      'Tele-Intubation – Remote clinical support reducing specialist deployment costs',
                      'EM:CC – Regional coordination platform optimizing patient flow',
                      'Protocol Designer – AI-powered emergency protocol automation'
                    ].map((service, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <span style={{ color: 'var(--aretion-rust)' }}>•</span>
                        <span style={{ color: 'var(--text-secondary)' }}>{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  href="https://solutions.aretion.co.uk"
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
                  <span>Visit Solutions.aretion.co.uk</span>
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ARETION Healthcare Consulting */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-5 gap-8">
              <div className="md:col-span-2">
                <div className="text-sm font-medium mb-2" style={{ color: 'var(--aretion-rust)' }}>
                  STRATEGIC ADVISORY
                </div>
                <h2 className="mb-4" style={{ color: 'var(--aretion-navy)' }}>
                  ARETION Healthcare Consulting
                </h2>
              </div>
              <div className="md:col-span-3">
                <p className="text-lg mb-4 font-medium" style={{ color: 'var(--aretion-navy)' }}>
                  End-to-end consulting delivering measurable operational improvements
                </p>
                <p className="mb-6 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  Full-spectrum advisory services supporting healthcare organizations through strategic transformation, regulatory compliance, and performance optimization.
                </p>
                <div className="mb-6">
                  <div className="text-sm font-medium mb-3" style={{ color: 'var(--aretion-navy)' }}>
                    Service Categories:
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <div className="text-sm font-medium mb-2" style={{ color: 'var(--aretion-rust)' }}>Operations & Quality</div>
                      <ul className="space-y-1">
                        {[
                          'Quality Management & Accreditation',
                          'Operations Strategy & Capacity Planning',
                          'Supply Chain Optimization',
                          'Health Informatics & HIMS'
                        ].map((service, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <span style={{ color: 'var(--aretion-rust)' }}>•</span>
                            <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>{service}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <div className="text-sm font-medium mb-2" style={{ color: 'var(--aretion-rust)' }}>Finance & Risk</div>
                      <ul className="space-y-1">
                        {[
                          'Financial Management Advisory',
                          'Capital Planning & Economics',
                          'Risk Management & Insurance',
                          'Valuation & Due Diligence Support'
                        ].map((service, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <span style={{ color: 'var(--aretion-rust)' }}>•</span>
                            <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>{service}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <div className="text-sm font-medium mb-2" style={{ color: 'var(--aretion-rust)' }}>Technology & Analytics</div>
                      <ul className="space-y-1">
                        {[
                          'AI & Machine Learning Advisory',
                          'Business Analytics & Visualization',
                          'Digital Transformation',
                          'Applied Analytics & Optimization'
                        ].map((service, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <span style={{ color: 'var(--aretion-rust)' }}>•</span>
                            <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>{service}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <div className="text-sm font-medium mb-2" style={{ color: 'var(--aretion-rust)' }}>Leadership & Growth</div>
                      <ul className="space-y-1">
                        {[
                          'Strategic Project Management',
                          'Change Management Consulting',
                          'Leadership Development',
                          'Market Research & Growth Strategy'
                        ].map((service, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <span style={{ color: 'var(--aretion-rust)' }}>•</span>
                            <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>{service}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <a
                  href="https://Aretion.org"
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
                  <span>Visit Aretion.org</span>
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ARETION Publishing Group */}
      <section className="py-16 md:py-24" style={{ backgroundColor: 'var(--aretion-cream)' }}>
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
                  href="https://publishing.aretion.co.uk"
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
                  <span>Visit publishing.aretion.co.uk</span>
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
              Partner with ARETION
            </h2>
            <p className="text-lg mb-8" style={{ color: 'rgba(255, 255, 255, 0.85)' }}>
              Explore investment opportunities and strategic partnerships across our portfolio
            </p>
            <a 
              href="mailto:post@aretion.co.uk"
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
