import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, ChevronDown, ChevronUp, Globe } from 'lucide-react';
import { useLegalModals } from '../LegalModals';

const Footer = () => {
  const [expandedSection, setExpandedSection] = useState(null);
  const [language, setLanguage] = useState('EN');
  const { openPrivacy, openTerms, openCodeOfConduct, LegalModals } = useLegalModals();

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const navigationSections = [
    {
      title: 'Our Group',
      links: [
        { label: 'About ARETION', path: '/about' },
        { label: 'Group Companies', path: '/group-companies' },
        { label: 'Governance & Leadership', path: '/governance' },
        { label: 'Standards & Policies', path: '/standards' },
        { label: 'Our History', path: '/about#history' },
      ]
    },
    {
      title: 'Operating Entities',
      links: [
        { label: 'ARETION Informatics', path: '/group-companies#informatics' },
        { label: 'ARETION Publishing', path: '/group-companies#publishing' },
        { label: 'ARETION Healthcare Consulting', path: '/group-companies#consulting' },
        { label: 'Journal of Medicine, Law & Public Health', path: 'https://jmlph.net', external: true },
      ]
    },
    {
      title: 'Resources',
      links: [
        { label: 'Newsroom', path: '/newsroom' },
        { label: 'Careers', path: '/careers' },
        { label: 'Contact Us', path: '/contact' },
        { label: 'Media Enquiries', path: '/contact#media' },
      ]
    }
  ];

  return (
    <footer 
      className="w-full"
      style={{ fontFamily: 'var(--font-body)' }}
      role="contentinfo"
    >
      {/* Top Brand Band */}
      <div 
        style={{ 
          backgroundColor: 'var(--aretion-navy)',
          borderBottom: '3px solid var(--aretion-tan)'
        }}
      >
        <div className="container mx-auto py-8 px-4 md:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <div className="text-2xl mb-1" style={{ fontFamily: 'var(--font-body)', fontWeight: 300 }}>
                <span style={{ color: 'white' }}>ARETION</span>
                <span style={{ color: 'var(--aretion-tan)' }}> & </span>
                <span style={{ color: 'white' }}>Company</span>
              </div>
              <p className="text-sm" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                Healthcare Informatics · Publishing · Consulting
              </p>
            </div>
            <div className="flex items-center gap-6">
              <a 
                href="mailto:post@aretion.co.uk"
                className="flex items-center gap-2 text-sm transition-opacity hover:opacity-80"
                style={{ color: 'white' }}
              >
                <Mail size={16} />
                <span>post@aretion.co.uk</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Middle Navigation Grid */}
      <div style={{ backgroundColor: '#0f2a3d' }}>
        <div className="container mx-auto py-12 px-4 md:px-8">
          {/* Desktop Grid - 4 columns */}
          <div className="hidden md:grid md:grid-cols-4 gap-8 lg:gap-12">
            {/* Navigation Sections */}
            {navigationSections.map((section, index) => (
              <div key={index}>
                <h3 
                  className="text-xs font-semibold uppercase tracking-widest pt-1.5 mb-5 pb-2"
                  style={{ 
                    color: 'var(--aretion-tan)',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
                  }}
                >
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      {link.external ? (
                        <a
                          href={link.path}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm transition-all duration-200 hover:translate-x-1 inline-block"
                          style={{ color: 'rgba(255, 255, 255, 0.85)' }}
                          onMouseEnter={(e) => e.target.style.color = 'var(--aretion-tan)'}
                          onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.85)'}
                        >
                          {link.label}
                        </a>
                      ) : (
                        <Link
                          to={link.path}
                          className="text-sm transition-all duration-200 hover:translate-x-1 inline-block"
                          style={{ color: 'rgba(255, 255, 255, 0.85)' }}
                          onMouseEnter={(e) => e.target.style.color = 'var(--aretion-tan)'}
                          onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.85)'}
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Contact Column */}
            <div>
              <h3 
                className="text-xs font-semibold uppercase tracking-widest pt-1.5 mb-5 pb-2"
                style={{ 
                  color: 'var(--aretion-tan)',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
                }}
              >
                Where We Operate
              </h3>
              
              {/* UK Office */}
              <div className="mb-6">
                <div className="text-xs font-medium uppercase tracking-wide mb-2" style={{ color: 'rgba(255, 255, 255, 0.5)' }}>
                  United Kingdom
                </div>
                <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.85)' }}>
                  71–75 Shelton Street<br />
                  Covent Garden<br />
                  London, WC2H 9JQ
                </address>
              </div>

              {/* Gulf Office */}
              <div>
                <div className="text-xs font-medium uppercase tracking-wide mb-2" style={{ color: 'rgba(255, 255, 255, 0.5)' }}>
                  Gulf Region
                </div>
                <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.85)' }}>
                  Innovation Boulevard, Al Aqeeq, King Abdullah Financial District, Building 7229, 13519
                </address>
              </div>
            </div>
          </div>

          {/* Mobile Accordion */}
          <div className="md:hidden space-y-0">
            {navigationSections.map((section, index) => (
              <div 
                key={index}
                style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}
              >
                <button
                  onClick={() => toggleSection(section.title)}
                  className="w-full flex items-center justify-between py-4 text-left focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#0f2a3d]"
                  style={{ color: 'white' }}
                  aria-expanded={expandedSection === section.title}
                >
                  <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: 'var(--aretion-tan)' }}>
                    {section.title}
                  </span>
                  {expandedSection === section.title ? (
                    <ChevronUp size={18} style={{ color: 'var(--aretion-tan)' }} />
                  ) : (
                    <ChevronDown size={18} style={{ color: 'rgba(255, 255, 255, 0.5)' }} />
                  )}
                </button>
                {expandedSection === section.title && (
                  <ul className="pb-4 pl-2 space-y-3">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        {link.external ? (
                          <a
                            href={link.path}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm"
                            style={{ color: 'rgba(255, 255, 255, 0.85)' }}
                          >
                            {link.label}
                          </a>
                        ) : (
                          <Link
                            to={link.path}
                            className="text-sm"
                            style={{ color: 'rgba(255, 255, 255, 0.85)' }}
                          >
                            {link.label}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            {/* Contact Section Mobile */}
            <div style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <button
                onClick={() => toggleSection('contact')}
                className="w-full flex items-center justify-between py-4 text-left focus:outline-none"
                aria-expanded={expandedSection === 'contact'}
              >
                <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: 'var(--aretion-tan)' }}>
                  Where We Operate
                </span>
                {expandedSection === 'contact' ? (
                  <ChevronUp size={18} style={{ color: 'var(--aretion-tan)' }} />
                ) : (
                  <ChevronDown size={18} style={{ color: 'rgba(255, 255, 255, 0.5)' }} />
                )}
              </button>
              {expandedSection === 'contact' && (
                <div className="pb-4 pl-2 space-y-4">
                  <div>
                    <div className="text-xs font-medium uppercase tracking-wide mb-1" style={{ color: 'rgba(255, 255, 255, 0.5)' }}>
                      United Kingdom
                    </div>
                    <address className="not-italic text-sm" style={{ color: 'rgba(255, 255, 255, 0.85)' }}>
                      71–75 Shelton Street, Covent Garden<br />
                      London, WC2H 9JQ
                    </address>
                  </div>
                  <div>
                    <div className="text-xs font-medium uppercase tracking-wide mb-1" style={{ color: 'rgba(255, 255, 255, 0.5)' }}>
                      Gulf Region
                    </div>
                    <address className="not-italic text-sm" style={{ color: 'rgba(255, 255, 255, 0.85)' }}>
                      Innovation Boulevard, Al Aqeeq, King Abdullah Financial District, Building 7229, 13519
                    </address>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Utility Bar */}
      <div 
        style={{ 
          backgroundColor: '#0a1f2d',
          borderTop: '1px solid rgba(255, 255, 255, 0.05)'
        }}
      >
        <div className="container mx-auto py-5 px-4 md:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            {/* Copyright */}
            <div className="text-xs" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
              © {new Date().getFullYear()} ARETION & Company. All rights reserved.
            </div>

            {/* Legal Links */}
            <nav className="flex flex-wrap gap-x-5 gap-y-2" aria-label="Legal links">
              <button
                onClick={openPrivacy}
                className="text-xs transition-colors duration-200 focus:outline-none focus:ring-1 focus:ring-white/30 rounded px-1 cursor-pointer"
                style={{ color: 'rgba(255, 255, 255, 0.6)', background: 'none', border: 'none' }}
                onMouseEnter={(e) => e.target.style.color = 'white'}
                onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.6)'}
              >
                Privacy Notice
              </button>
              <button
                onClick={openTerms}
                className="text-xs transition-colors duration-200 focus:outline-none focus:ring-1 focus:ring-white/30 rounded px-1 cursor-pointer"
                style={{ color: 'rgba(255, 255, 255, 0.6)', background: 'none', border: 'none' }}
                onMouseEnter={(e) => e.target.style.color = 'white'}
                onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.6)'}
              >
                Terms of Use
              </button>
              <button
                onClick={openCodeOfConduct}
                className="text-xs transition-colors duration-200 focus:outline-none focus:ring-1 focus:ring-white/30 rounded px-1 cursor-pointer"
                style={{ color: 'rgba(255, 255, 255, 0.6)', background: 'none', border: 'none' }}
                onMouseEnter={(e) => e.target.style.color = 'white'}
                onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.6)'}
              >
                Code of Conduct
              </button>
            </nav>

            {/* Language & Social */}
            <div className="flex items-center gap-6">
              {/* Language Selector */}
              <div className="flex items-center gap-2">
                <Globe size={14} style={{ color: 'rgba(255, 255, 255, 0.5)' }} />
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="bg-transparent text-xs cursor-pointer focus:outline-none focus:ring-1 focus:ring-white/30 rounded"
                  style={{ color: 'rgba(255, 255, 255, 0.7)' }}
                  aria-label="Select language"
                >
                  <option value="EN" style={{ backgroundColor: '#0a1f2d' }}>English</option>
                  <option value="AR" style={{ backgroundColor: '#0a1f2d' }}>العربية</option>
                </select>
              </div>

              {/* Social Icons */}
              <div className="flex items-center gap-3">
                <a
                  href="https://linkedin.com/company/aretion"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded transition-colors duration-200 focus:outline-none focus:ring-1 focus:ring-white/30"
                  style={{ color: 'rgba(255, 255, 255, 0.5)' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--aretion-tan)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.5)'}
                  aria-label="Visit ARETION on LinkedIn"
                >
                  <Linkedin size={16} />
                </a>
                <a
                  href="https://twitter.com/aretion"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded transition-colors duration-200 focus:outline-none focus:ring-1 focus:ring-white/30"
                  style={{ color: 'rgba(255, 255, 255, 0.5)' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--aretion-tan)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.5)'}
                  aria-label="Visit ARETION on Twitter"
                >
                  <Twitter size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
