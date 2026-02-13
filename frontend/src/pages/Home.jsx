import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Database, BookOpen, Briefcase } from 'lucide-react';
import { groupCompanies } from '../mock/mockData';

const Home = () => {
  const iconComponents = {
    Database: Database,
    BookOpen: BookOpen,
    Stethoscope: Briefcase
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section with Clear Background Image - No Overlay */}
      <section 
        className="relative pt-0 pb-0 overflow-hidden"
        style={{
          height: '85vh',
          minHeight: '600px',
          backgroundImage: 'url(/images/hero-image.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 35%',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Light gradient for text readability - very subtle */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(255,255,255,0.05) 0%, rgba(26, 58, 82, 0.75) 100%)'
          }}
        />
        
        <div className="container mx-auto h-full flex items-end pb-20 relative z-10">
          <div className="max-w-3xl animate-fade-in">
            <div className="inline-block px-4 py-2 mb-6 text-xs font-medium tracking-widest uppercase"
              style={{ 
                borderLeft: '3px solid var(--aretion-tan)',
                paddingLeft: '1rem',
                color: 'white',
                backgroundColor: 'rgba(0, 0, 0, 0.3)',
                backdropFilter: 'blur(10px)',
                letterSpacing: '0.15em'
              }}
            >
              Healthcare since 1986
            </div>
            <h1 className="mb-6" style={{ color: 'white', lineHeight: '1.1', fontWeight: 300 }}>
              ARETION Global
            </h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.95)', maxWidth: '700px', lineHeight: '1.6' }}>
              A UK-based healthcare group bringing together specialist companies in informatics, publishing and consulting
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/group-companies"
                className="px-8 py-4 font-medium transition-all inline-flex items-center space-x-2 text-sm"
                style={{
                  backgroundColor: 'white',
                  color: 'var(--aretion-navy)',
                  letterSpacing: '0.05em',
                  border: '1px solid white'
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
                <span>Explore Group Companies</span>
                <ArrowRight size={16} />
              </Link>
              <Link 
                to="/contact"
                className="px-8 py-4 font-medium border transition-all text-sm"
                style={{
                  borderColor: 'rgba(255, 255, 255, 0.6)',
                  color: 'white',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  letterSpacing: '0.05em'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
                  e.currentTarget.style.borderColor = 'white';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.6)';
                }}
              >
                Contact the Group
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* UK Heritage Section */}
      <section className="py-24 md:py-32" style={{ backgroundColor: '#f8f8f8' }}>
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="mb-6 font-light tracking-tight" style={{ color: 'var(--aretion-navy)' }}>
                Rooted in British Excellence
              </h2>
              <p className="text-lg max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)', lineHeight: '1.75' }}>
                Our heritage reflects the highest standards of British professional practice, combining traditional rigour 
                with contemporary innovation across our specialist domains.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="group overflow-hidden" style={{ backgroundColor: 'white' }}>
                <div className="overflow-hidden" style={{ height: '280px' }}>
                  <img 
                    src="/images/london-arch-1.jpg" 
                    alt="London Architecture" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-8">
                  <h4 className="mb-3 font-light" style={{ color: 'var(--aretion-navy)' }}>London Headquarters</h4>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    Based in the heart of London, our registered office exemplifies our commitment to British professional standards.
                  </p>
                </div>
              </div>
              
              <div className="group overflow-hidden" style={{ backgroundColor: 'white' }}>
                <div className="overflow-hidden" style={{ height: '280px' }}>
                  <img 
                    src="/images/london-arch-2.jpg" 
                    alt="UK Innovation" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-8">
                  <h4 className="mb-3 font-light" style={{ color: 'var(--aretion-navy)' }}>Heritage & Innovation</h4>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    Combining traditional values with forward-thinking approaches to healthcare informatics and research.
                  </p>
                </div>
              </div>
              
              <div className="group overflow-hidden" style={{ backgroundColor: 'white' }}>
                <div className="overflow-hidden" style={{ height: '280px' }}>
                  <img 
                    src="/images/london-arch-3.jpg" 
                    alt="British Excellence" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-8">
                  <h4 className="mb-3 font-light" style={{ color: 'var(--aretion-navy)' }}>Global Reach</h4>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    Whilst rooted in the UK, our work extends internationally with expansion into the Gulf region.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 md:py-32" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block mb-4">
                <div 
                  className="w-16 h-0.5 mx-auto"
                  style={{ backgroundColor: 'var(--aretion-rust)' }}
                />
              </div>
              <h2 className="mb-6 font-light tracking-tight" style={{ color: 'var(--aretion-navy)' }}>ARETION Global – Overview</h2>
            </div>
            <div className="space-y-6 text-lg leading-relaxed" style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
              <p>
                ARETION Global originated in 1986 as a small team providing independent support to healthcare organisations. 
                Over time, its work has broadened to encompass data and digital health, specialist publishing and strategic consulting, 
                whilst retaining a clear focus on strengthening health and care systems.
              </p>
              <p>
                Today, the group works with public, private and voluntary sector partners across the globe. Its companies support 
                clinicians, managers, researchers and policymakers with practical, evidence-based solutions that are designed to work 
                in real-world settings.
              </p>
              <p>
                ARETION Global provides strategic direction and governance for the group, setting shared expectations for quality, 
                ethics and long-term partnership. Each subsidiary operates with a high degree of autonomy in its specialist field, 
                whilst collaborating closely on programmes where combined expertise adds particular value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Group Companies Section */}
      <section className="py-20 md:py-32" style={{ backgroundColor: '#f8f8f8' }}>
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <div 
                className="w-16 h-0.5 mx-auto"
                style={{ backgroundColor: 'var(--aretion-rust)' }}
              />
            </div>
            <h2 className="mb-6 font-light tracking-tight" style={{ color: 'var(--aretion-navy)' }}>ARETION Group Companies</h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Three specialist companies working across the lifecycle of healthcare knowledge
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {groupCompanies.map((company, index) => {
              const IconComponent = iconComponents[company.icon];
              return (
                <div
                  key={company.id}
                  className="bg-white p-10 transition-all hover:shadow-xl group border"
                  style={{
                    animationDelay: `${index * 100}ms`,
                    borderColor: 'rgba(26, 58, 82, 0.06)',
                    borderTop: '3px solid var(--aretion-navy)'
                  }}
                >
                  <div 
                    className="w-14 h-14 mb-8 flex items-center justify-center transition-colors"
                    style={{ backgroundColor: 'var(--aretion-cream)' }}
                  >
                    <IconComponent 
                      size={26} 
                      style={{ color: 'var(--aretion-navy)' }}
                    />
                  </div>
                  <h3 className="text-xl font-normal mb-4 tracking-tight" style={{ color: 'var(--aretion-navy)' }}>
                    {company.name}
                  </h3>
                  <p className="text-sm font-medium mb-4 uppercase tracking-wider" style={{ color: 'var(--aretion-rust)', letterSpacing: '0.1em' }}>
                    {company.tagline}
                  </p>
                  <p className="text-sm mb-8 leading-relaxed" style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                    {company.description}
                  </p>
                  <a
                    href={company.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-sm font-medium transition-all group-hover:translate-x-1 uppercase tracking-wide"
                    style={{ color: 'var(--aretion-navy)', letterSpacing: '0.05em' }}
                  >
                    <span>Learn more</span>
                    <ArrowRight size={16} />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Social Responsibility Section */}
      <section className="py-20 md:py-32" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block mb-4">
                <div 
                  className="w-16 h-0.5 mx-auto"
                  style={{ backgroundColor: 'var(--aretion-rust)' }}
                />
              </div>
              <h2 className="mb-6 font-light tracking-tight" style={{ color: 'var(--aretion-navy)' }}>
                Social Responsibility & Partnerships
              </h2>
            </div>
            <div className="space-y-6 text-lg leading-relaxed mb-12" style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
              <p>
                ARETION Global was founded with a commitment to strengthening health and care systems, particularly where resources 
                are constrained. Across the group, companies work with partners to improve access to reliable information, support 
                better use of data and enable sustainable improvements in services and outcomes.
              </p>
              <p>
                The group prioritises work that combines measurable impact for patients and communities with lasting benefits for 
                local organisations. This includes initiatives that build skills and capability, encourage knowledge sharing and 
                help decision-makers to apply evidence in day-to-day practice.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-normal mb-6" style={{ color: 'var(--aretion-navy)' }}>Our Commitments</h3>
                <ul className="space-y-3">
                  {[
                    'Advancing equity in health',
                    'Strengthening health systems',
                    'Responsible use of data',
                    'Building local capability'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 rounded-full mt-2.5 flex-shrink-0" style={{ backgroundColor: 'var(--aretion-rust)' }} />
                      <span style={{ color: 'var(--text-secondary)' }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-normal mb-6" style={{ color: 'var(--aretion-navy)' }}>How We Put This Into Practice</h3>
                <ul className="space-y-3">
                  {[
                    'Long-term partnerships with health organisations',
                    'Collaborative projects bringing together expertise',
                    'Contributions to open or low-cost resources',
                    'Support for learning networks and development programmes'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 rounded-full mt-2.5 flex-shrink-0" style={{ backgroundColor: 'var(--aretion-rust)' }} />
                      <span style={{ color: 'var(--text-secondary)' }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 md:py-24" style={{ backgroundColor: 'var(--aretion-navy)' }}>
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6" style={{ color: 'var(--text-light)' }}>Get in Touch</h2>
            <p className="text-lg mb-8" style={{ color: 'rgba(255, 255, 255, 0.85)' }}>
              For general information, partnership opportunities or careers
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:contact@aretion.org"
                className="px-8 py-4 font-medium border transition-all"
                style={{
                  borderColor: 'rgba(255, 255, 255, 0.4)',
                  color: 'white',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
                  e.currentTarget.style.borderColor = 'white';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.4)';
                }}
              >
                contact@aretion.org
              </a>
              <Link 
                to="/contact"
                className="px-8 py-4 font-medium transition-all"
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
                Contact Form
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
