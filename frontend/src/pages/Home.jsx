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
              Established 1986
            </div>
            <h1 className="mb-6" style={{ color: 'white', lineHeight: '1.1', fontWeight: 300 }}>
              ARETION & Company
            </h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.95)', maxWidth: '600px', lineHeight: '1.6' }}>
              A UK-based group overseeing specialist entities in informatics, publishing, and healthcare consulting
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
                <span>Our Companies</span>
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
                Contact
              </Link>
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
              <h2 className="mb-6 font-light tracking-tight" style={{ color: 'var(--aretion-navy)' }}>Group Overview</h2>
            </div>
            <p className="text-lg md:text-xl leading-relaxed text-center max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
              ARETION & Company provides group oversight and governance across its portfolio, 
              establishing rigorous standards for quality assurance, responsible conduct, and disciplined execution 
              across all operating entities.
            </p>
          </div>
        </div>
      </section>

      {/* Group Companies Section */}
      <section className="py-20 md:py-32" style={{ backgroundColor: 'var(--aretion-cream)' }}>
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <div 
                className="w-16 h-0.5 mx-auto"
                style={{ backgroundColor: 'var(--aretion-rust)' }}
              />
            </div>
            <h2 className="mb-6 font-light tracking-tight" style={{ color: 'var(--aretion-navy)' }}>Group Companies</h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Three specialist entities delivering excellence in their respective fields
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
                  <h3 className="text-xl font-semibold mb-4 tracking-tight" style={{ color: 'var(--aretion-navy)' }}>
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

      {/* Acquisition Highlight */}
      <section className="py-20 md:py-32" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto">
            <div 
              className="p-12 md:p-16 border-l-4"
              style={{ 
                backgroundColor: 'var(--aretion-navy)',
                color: 'var(--text-light)',
                borderColor: 'var(--aretion-tan)'
              }}
            >
              <div className="text-xs font-semibold mb-6 uppercase tracking-widest" style={{ color: 'var(--aretion-tan)', letterSpacing: '0.2em' }}>
                2025 ACQUISITION
              </div>
              <h3 className="text-3xl md:text-4xl font-light mb-6 tracking-tight">
                Journal of Medicine, Law and Public Health
              </h3>
              <p className="mb-8 text-lg leading-relaxed" style={{ opacity: 0.9, lineHeight: '1.8' }}>
                ARETION & Company has acquired the peer-reviewed Journal of Medicine, Law and Public Health (JMLPH), 
                strengthening our commitment to publishing excellence and research integrity.
              </p>
              <Link 
                to="/newsroom"
                className="inline-flex items-center space-x-2 text-sm font-medium hover:underline uppercase tracking-wide"
                style={{ color: 'var(--aretion-tan)', letterSpacing: '0.1em' }}
              >
                <span>Read Announcement</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Track Record & Initiatives */}
      <section className="py-16 md:py-24" style={{ backgroundColor: 'var(--aretion-cream)' }}>
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-12" style={{ color: 'var(--aretion-navy)' }}>
              Track Record & Initiatives
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 md:p-8 border" style={{ borderColor: 'rgba(26, 58, 82, 0.08)' }}>
                <div className="text-sm font-medium mb-2" style={{ color: 'var(--aretion-rust)' }}>
                  2022
                </div>
                <p className="leading-relaxed" style={{ color: 'var(--text-primary)' }}>
                  Funded initiative: <em>iniziativa dei comitati dell'autorità sanitaria</em>
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 md:p-8 border" style={{ borderColor: 'rgba(26, 58, 82, 0.08)' }}>
                <div className="text-sm font-medium mb-2" style={{ color: 'var(--aretion-rust)' }}>
                  ONGOING
                </div>
                <p className="leading-relaxed" style={{ color: 'var(--text-primary)' }}>
                  Ongoing support for medical law research and post-graduate programmes across 
                  <strong> Nigeria, Cameroon, and Kenya</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footprint */}
      <section className="py-16 md:py-24" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-8" style={{ color: 'var(--aretion-navy)' }}>Our Footprint</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-8 border" style={{ borderColor: 'rgba(26, 58, 82, 0.08)' }}>
                <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--aretion-navy)' }}>
                  United Kingdom
                </h3>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                  London (Registered Office)
                </p>
              </div>
              <div className="bg-white rounded-lg p-8 border" style={{ borderColor: 'rgba(26, 58, 82, 0.08)' }}>
                <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--aretion-navy)' }}>
                  Gulf Region
                </h3>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                  King Abdullah Financial District
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Governance Teaser */}
      <section className="py-16 md:py-24" style={{ backgroundColor: 'var(--aretion-navy)' }}>
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6" style={{ color: 'var(--text-light)' }}>
              Governance & Leadership
            </h2>
            <p className="text-lg mb-8 leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.85)' }}>
              Our governance approach emphasizes clear accountability, quality assurance, 
              responsible conduct, and long-term value creation.
            </p>
            <Link 
              to="/governance"
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
              <span>Learn about our governance</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 md:py-24" style={{ backgroundColor: 'var(--aretion-cream)' }}>
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-4" style={{ color: 'var(--aretion-navy)' }}>Get in Touch</h2>
            <p className="text-lg mb-8" style={{ color: 'var(--text-secondary)' }}>
              For corporate enquiries, partnerships, and media requests
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:contact@aretion.org"
                className="px-8 py-4 font-medium rounded border-2 transition-all"
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
              <Link 
                to="/contact"
                className="px-8 py-4 font-medium rounded transition-all"
                style={{
                  backgroundColor: 'var(--aretion-rust)',
                  color: 'white'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--aretion-tan)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--aretion-rust)';
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
