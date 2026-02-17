import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  // Determine which logo to use based on current route
  const isHomePage = location.pathname === '/';
  const logoSrc = isHomePage ? '/images/logo-orange.png' : '/images/logo-blue.png';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/group-companies', label: 'Group Companies' },
    { path: '/governance', label: 'Governance & Leadership' },
    { path: '/standards', label: 'Standards & Policies' },
    { path: '/careers', label: 'Careers' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-sm' 
          : 'bg-transparent'
      }`}
      style={{
        borderBottom: isScrolled ? '1px solid rgba(26, 58, 82, 0.1)' : 'none',
        fontFamily: 'var(--font-body)'
      }}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 flex items-center justify-center">
              <img 
                src={logoSrc} 
                alt="ARETION & Company" 
                className="w-full h-full transition-all duration-300"
                style={{ objectFit: 'contain' }}
              />
            </div>
            <div className="text-xl md:text-2xl font-light tracking-tight transition-colors duration-300">
              <span style={{ color: 'var(--aretion-tan)', fontWeight: 300 }}>ARETION</span>
              <span style={{ color: 'var(--aretion-rust)', fontWeight: 400 }}> & </span>
              <span style={{ color: 'var(--aretion-tan)', fontWeight: 300 }}>Company</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  location.pathname === link.path
                    ? 'text-[var(--aretion-navy)] border-b-2 border-[var(--aretion-rust)]'
                    : 'text-[var(--text-secondary)] hover:text-[var(--aretion-navy)]'
                }`}
                style={{
                  letterSpacing: '0.02em'
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-[var(--aretion-navy)] hover:bg-[var(--aretion-cream)] rounded transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden pb-6 animate-fade-in">
            <nav className="flex flex-col space-y-2 bg-white rounded-lg shadow-lg p-4 mt-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-4 py-3 text-sm font-medium rounded transition-colors ${
                    location.pathname === link.path
                      ? 'bg-[var(--aretion-cream)] text-[var(--aretion-navy)]'
                      : 'text-[var(--text-secondary)] hover:bg-[var(--aretion-cream)] hover:text-[var(--aretion-navy)]'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
