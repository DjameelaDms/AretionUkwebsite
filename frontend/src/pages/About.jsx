import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero with Image */}
      <section className="relative min-h-[400px] md:min-h-[500px] flex items-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(/images/about-hero.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
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
            <h1 className="mb-6 font-light" style={{ color: 'white' }}>About ARETION & Company</h1>
            <p className="text-xl leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
              Origins, evolution, and structure of our healthcare group
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-6 font-light" style={{ color: 'var(--aretion-navy)' }}>Who we are</h2>
            <div className="space-y-6 text-lg leading-relaxed" style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
              <p>
                ARETION & Company is a UK-based holding company overseeing three operating entities across healthcare informatics, 
                publishing, and consulting.
              </p>
              <p>
                Our group provides oversight, governance, and strategic direction, ensuring consistent standards for quality, 
                responsible conduct, and disciplined execution across all operations. We work with public, private and voluntary 
                sector partners to strengthen health and care systems through practical, evidence-based solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our History */}
      <section className="py-16 md:py-24" style={{ backgroundColor: '#fafafa' }}>
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-6 font-light" style={{ color: 'var(--aretion-navy)' }}>Our History</h2>
            <div className="space-y-6 text-lg leading-relaxed" style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
              <p>
                The concept for ARETION & Company was rooted in a vision to provide specialist expertise across 
                critical sectors of healthcare and research. What began as a small team providing independent support to 
                healthcare organisations has evolved into a comprehensive group encompassing data and digital health, 
                specialist publishing and strategic consulting.
              </p>
              <p>
                Throughout this evolution, we have retained our clear focus on strengthening health and care systems, 
                particularly where resources are constrained, and on building lasting partnerships with organisations 
                committed to improving patient outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Operate */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-6 font-light" style={{ color: 'var(--aretion-navy)' }}>How we operate</h2>
            <p className="text-lg leading-relaxed mb-8" style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
              ARETION & Company follows a governance-led approach characterised by:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Clear accountability',
                  description: 'Defined roles, responsibilities and reporting structures across all entities'
                },
                {
                  title: 'Quality assurance',
                  description: 'Systematic review processes and quality controls embedded in all operations'
                },
                {
                  title: 'Responsible conduct',
                  description: 'Ethical practice, transparency and compliance with regulatory requirements'
                },
                {
                  title: 'Long-term value creation',
                  description: 'Strategic decisions prioritising sustainable growth and stakeholder benefit'
                }
              ].map((principle, index) => (
                <div 
                  key={index}
                  className="bg-white p-6 border"
                  style={{ borderColor: 'rgba(26, 58, 82, 0.08)' }}
                >
                  <div className="flex items-start space-x-3 mb-3">
                    <div 
                      className="w-1.5 h-1.5 rounded-full mt-2.5 flex-shrink-0"
                      style={{ backgroundColor: 'var(--aretion-rust)' }}
                    />
                    <h3 className="font-normal text-lg" style={{ color: 'var(--aretion-navy)' }}>
                      {principle.title}
                    </h3>
                  </div>
                  <p className="text-sm pl-6" style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
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
            <h2 className="mb-6 font-light" style={{ color: 'var(--text-light)' }}>
              Discover Our Companies
            </h2>
            <p className="text-lg mb-8" style={{ color: 'rgba(255, 255, 255, 0.85)' }}>
              Learn more about our three specialist entities and their areas of expertise
            </p>
            <Link 
              to="/group-companies"
              className="inline-flex items-center space-x-2 px-8 py-4 font-medium transition-all"
              style={{
                backgroundColor: 'white',
                color: 'var(--aretion-navy)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--aretion-tan)';
                e.currentTarget.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'white';
                e.currentTarget.style.color = 'var(--aretion-navy)';
              }}
            >
              <span>View Group Companies</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
