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
              ARETION & Company oversees three operating entities, each managed with defined accountabilities 
              and aligned to group standards for quality, governance, and responsible conduct.
            </p>
          </div>
        </div>
      </section>

      {/* ARETION Solution */}
      <section className="py-16 md:py-24" style={{ backgroundColor: 'var(--aretion-cream)' }}>
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-5 gap-8">
              <div className="md:col-span-2">
                <div className="text-sm font-medium mb-2" style={{ color: 'var(--aretion-rust)' }}>
                  INTELLIGENT INFRASTRUCTURE SOLUTIONS
                </div>
                <h2 className="mb-4" style={{ color: 'var(--aretion-navy)' }}>
                  ARETION Solution
                </h2>
              </div>
              <div className="md:col-span-3">
                <p className="text-lg mb-4 font-medium" style={{ color: 'var(--aretion-navy)' }}>
                  Transformative solutions for operational excellence, safety, and resilience in critical infrastructure
                </p>
                <p className="mb-6 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  Comprehensive ecosystem for facility modernisation and emergency response, delivered through integrated systems and advanced analytics.
                </p>
                <div className="mb-6">
                  <div className="text-sm font-medium mb-3" style={{ color: 'var(--aretion-navy)' }}>
                    Current Solution Themes:
                  </div>
                  <ul className="space-y-2">
                    {[
                      'Early Warning Detection Systems – Environmental monitoring and threat prediction before operational crises occur',
                      'Fire & Flame Detection Networks – Unified, intelligent fire detection across facilities with integrated command response',
                      'Data Centre & Critical Infrastructure Security – Continuous environmental and security surveillance with automated failover mechanisms',
                      'Leadership Protection & Secure Operations – Hardened command centres with secure communication during facility-wide emergencies',
                      'Holistic All-Hazard Response – Integrated threat coordination addressing floods, fires, cyber attacks, and cascading emergencies'
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
                    Specialised Service Offerings:
                  </div>
                  <ul className="space-y-2">
                    {[
                      'DisasterMs – Advanced ecosystem for facility safety with early warning and closed-loop response',
                      'Tele-Intubation – Remote expert support for critical airway management',
                      'Emergency Medicine Cluster Coverage (EM:CC) – Regional facility coordination for patient journey management',
                      'Protocol Designer – AI platform for custom disaster and emergency protocol development'
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
                  CONSULTING
                </div>
                <h2 className="mb-4" style={{ color: 'var(--aretion-navy)' }}>
                  ARETION Healthcare Consulting
                </h2>
              </div>
              <div className="md:col-span-3">
                <p className="text-lg mb-4 font-medium" style={{ color: 'var(--aretion-navy)' }}>
                  Comprehensive healthcare consulting services and strategic advisory
                </p>
                <p className="mb-6 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  Design and delivery support for healthcare organizations, emphasizing operational excellence and sustainable transformation.
                </p>
                <div className="mb-6">
                  <div className="text-sm font-medium mb-3" style={{ color: 'var(--aretion-navy)' }}>
                    Services include:
                  </div>
                  <ul className="space-y-2 grid md:grid-cols-2 gap-x-6">
                    {[
                      'Healthcare HR Consulting',
                      'Disaster Management Consulting',
                      'Healthcare Quality and National & International Accreditation',
                      'Clinical Research Services',
                      'Healthcare Legal & Legislative Services',
                      'Healthcare Technology Solutions',
                      'Project Management',
                      'Toxicology & Environmental Medicine Services',
                      'Medical & Healthcare Event Services',
                      'Telepsychology & Mental Health Services',
                      'Leadership Development & Communication Coaching',
                      'Organizational Change Management Consulting',
                      'Healthcare Financial Management Advisory',
                      'Healthcare Economics & Capital Planning Support',
                      'Risk Management & Insurance Advisory',
                      'Financial Statement Analysis & Valuation Support',
                      'Applied Analytics & Optimization Consulting',
                      'Business Analytics, Reporting & Visualization',
                      'Health Informatics & HIMS Optimization',
                      'AI & Machine Learning Advisory for Healthcare',
                      'Operations Strategy & Capacity Planning',
                      'Supply Chain & Inventory Optimization',
                      'Quality Management & TQM Program Design',
                      'Strategic Project Management & PMO Support',
                      'Healthcare Marketing, Branding & Patient-Centric Growth Strategy',
                      'Digital & Social Media Marketing Performance Advisory',
                      'Negotiation, Conflict Resolution & Partnership Support',
                      'Applied Business & Market Research Services'
                    ].map((service, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <span style={{ color: 'var(--aretion-rust)' }}>•</span>
                        <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>{service}</span>
                      </li>
                    ))}
                  </ul>
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
              Interested in working with us?
            </h2>
            <p className="text-lg mb-8" style={{ color: 'rgba(255, 255, 255, 0.85)' }}>
              Contact us to discuss how our group companies can support your needs
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
