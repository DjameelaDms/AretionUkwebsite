import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const legalLinks = [
    { path: '/privacy', label: 'Privacy Notice' },
    { path: '/terms', label: 'Terms of Use' },
    { path: '/cookies', label: 'Cookie Policy' },
    { path: '/accessibility', label: 'Accessibility' },
    { path: '/modern-slavery', label: 'Modern Slavery Statement' },
    { path: '/sitemap', label: 'Sitemap' }
  ];

  return (
    <footer style={{ backgroundColor: 'var(--aretion-navy)', color: 'var(--text-light)' }}>
      {/* Main Footer Content */}
      <div className="container mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 flex items-center justify-center" style={{ backgroundColor: 'white', borderRadius: '4px', padding: '6px' }}>
                <img 
                  src="/images/logo.jpg" 
                  alt="ARETION & Company" 
                  className="w-full h-full"
                  style={{ objectFit: 'contain' }}
                />
              </div>
            </div>
            <div className="text-xl font-light mb-4">
              <span style={{ color: 'var(--aretion-off-white)' }}>ARETION</span>
              <span style={{ color: 'var(--aretion-tan)' }}> & </span>
              <span style={{ color: 'var(--aretion-off-white)' }}>Company</span>
            </div>
            <p className="text-sm opacity-80 leading-relaxed mb-4">
              A UK-based group overseeing specialist entities across informatics, publishing, and healthcare consulting.
            </p>
            <div className="flex items-start space-x-2 text-sm">
              <Mail size={16} className="mt-1 flex-shrink-0" style={{ color: 'white' }} />
              <a href="mailto:contact@aretion.org" className="hover:opacity-100 transition-opacity" style={{ color: 'white' }}>
                contact@aretion.org
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4" style={{ color: 'white' }}>
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="opacity-80 hover:opacity-100 transition-opacity">About</Link></li>
              <li><Link to="/group-companies" className="opacity-80 hover:opacity-100 transition-opacity">Group Companies</Link></li>
              <li><Link to="/governance" className="opacity-80 hover:opacity-100 transition-opacity">Governance</Link></li>
              <li><Link to="/newsroom" className="opacity-80 hover:opacity-100 transition-opacity">Newsroom</Link></li>
              <li><Link to="/careers" className="opacity-80 hover:opacity-100 transition-opacity">Careers</Link></li>
            </ul>
          </div>

          {/* Offices */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4" style={{ color: 'var(--aretion-tan)' }}>
              Offices
            </h3>
            <div className="space-y-4 text-sm">
              <div>
                <div className="font-medium mb-1">Registered Office</div>
                <div className="opacity-80 leading-relaxed">
                  71–75 Shelton Street<br />
                  Covent Garden<br />
                  London, WC2H 9JQ<br />
                  United Kingdom
                </div>
              </div>
              <div>
                <div className="font-medium mb-1">Gulf Office</div>
                <div className="opacity-80 leading-relaxed">
                  Innovation Boulevard, Al Aqeeq<br />
                  King Abdullah Financial District<br />
                  Building 7229, 13519
                </div>
              </div>
            </div>
          </div>

          {/* Company Details */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4" style={{ color: 'var(--aretion-tan)' }}>
              Company
            </h3>
            <div className="text-sm space-y-2 opacity-80">
              <p>
                <strong>ARETION & Company</strong>
              </p>
              <p className="text-xs leading-relaxed pt-4" style={{ opacity: 0.7 }}>
                Information on this website is provided for general purposes only and does not constitute legal, medical, or other professional advice.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ 
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        backgroundColor: 'rgba(0, 0, 0, 0.2)'
      }}>
        <div className="container mx-auto py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-xs opacity-70">
              © {new Date().getFullYear()} ARETION & Company. All rights reserved.
            </div>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs">
              {legalLinks.map((link) => (
                <Link 
                  key={link.path} 
                  to={link.path}
                  className="opacity-70 hover:opacity-100 transition-opacity"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
