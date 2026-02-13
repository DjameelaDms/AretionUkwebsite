import React from 'react';
import { leadershipTeam } from '../mock/mockData';

const Governance = () => {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero with Image */}
      <section className="relative min-h-[400px] md:min-h-[500px] flex items-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(/images/governance-hero.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center bottom'
          }}
        >
          <div 
            className="absolute inset-0"
            style={{ backgroundColor: 'rgba(26, 58, 82, 0.6)' }}
          />
        </div>
        
        {/* Content */}
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="mb-6 font-light" style={{ color: 'white' }}>
              Governance & Leadership
            </h1>
            <p className="text-xl leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
              Leadership team and governance approach
            </p>
          </div>
        </div>
      </section>

      {/* In Memoriam */}
      <section className="py-12" style={{ backgroundColor: 'var(--aretion-cream)' }}>
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <p className="italic" style={{ color: 'var(--text-secondary)' }}>
              In Memoriam: <strong style={{ color: 'var(--aretion-navy)' }}>Gerhard Hoffmann</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-12 text-center" style={{ color: 'var(--aretion-navy)' }}>
              Leadership Team
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {leadershipTeam.map((member, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-lg p-6 border transition-all hover:shadow-md"
                  style={{ borderColor: 'rgba(26, 58, 82, 0.08)' }}
                >
                  <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--aretion-navy)' }}>
                    {member.name}
                  </h3>
                  <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                    {member.role}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Governance Approach */}
      <section className="py-16 md:py-24" style={{ backgroundColor: 'var(--aretion-cream)' }}>
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-8" style={{ color: 'var(--aretion-navy)' }}>
              Governance Approach
            </h2>
            <div className="space-y-6">
              <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                ARETION & Company maintains group standards across all operating entities, 
                ensuring consistent, responsible, and high-quality practice.
              </p>
              
              <div className="bg-white rounded-lg p-8 border" style={{ borderColor: 'rgba(26, 58, 82, 0.08)' }}>
                <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--aretion-navy)' }}>
                  Our Standards Focus On:
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    'Quality assurance',
                    'Confidentiality',
                    'Integrity',
                    'Conflicts of interest management'
                  ].map((standard, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div 
                        className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                        style={{ backgroundColor: 'var(--aretion-cream)' }}
                      >
                        <div 
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: 'var(--aretion-rust)' }}
                        />
                      </div>
                      <p className="font-medium" style={{ color: 'var(--text-primary)' }}>
                        {standard}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Our operating entities deliver services under their own leadership teams, aligned with 
                these group-wide standards and supported by centralized governance oversight.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Governance Principles */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-8" style={{ color: 'var(--aretion-navy)' }}>
              Our Governance Principles
            </h2>
            <div className="space-y-4">
              {[
                {
                  title: 'Clear Accountability',
                  description: 'Defined roles, responsibilities, and reporting structures across all entities'
                },
                {
                  title: 'Quality Assurance',
                  description: 'Systematic review processes and quality controls embedded in all operations'
                },
                {
                  title: 'Responsible Conduct',
                  description: 'Ethical practice, transparency, and compliance with regulatory requirements'
                },
                {
                  title: 'Long-term Value Creation',
                  description: 'Strategic decisions prioritizing sustainable growth and stakeholder benefit'
                }
              ].map((principle, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-lg p-6 border"
                  style={{ borderColor: 'rgba(26, 58, 82, 0.08)' }}
                >
                  <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--aretion-navy)' }}>
                    {principle.title}
                  </h3>
                  <p style={{ color: 'var(--text-secondary)' }}>
                    {principle.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24" style={{ backgroundColor: 'var(--aretion-navy)' }}>
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6" style={{ color: 'var(--text-light)' }}>
              Review Our Standards & Policies
            </h2>
            <p className="text-lg mb-8" style={{ color: 'rgba(255, 255, 255, 0.85)' }}>
              Learn more about the policies and standards that guide our operations
            </p>
            <a
              href="/standards"
              className="inline-flex items-center space-x-2 px-8 py-4 font-medium rounded border-2 transition-all"
              style={{
                borderColor: 'var(--aretion-tan)',
                color: 'var(--aretion-tan)',
                backgroundColor: 'transparent'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(184, 153, 104, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              View Standards & Policies
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Governance;
