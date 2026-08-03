import { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { profile, navLinks } from '../data/profile';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Detect scroll for background change
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Active section detection using IntersectionObserver
  useEffect(() => {
    const sections = navLinks.map((link) => link.href.replace('#', ''));
    const observers: IntersectionObserver[] = [];

    sections.forEach((sectionId) => {
      const el = document.getElementById(sectionId);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(sectionId);
            }
          });
        },
        { threshold: 0.4, rootMargin: '-80px 0px -60% 0px' }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      role="banner"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-bg-primary/90 backdrop-blur-md border-b border-border-subtle shadow-[0_1px_20px_rgba(0,0,0,0.4)]'
          : 'bg-transparent'
      }`}
    >
      <nav
        className="container-main flex items-center justify-between h-16"
        aria-label="Main navigation"
      >
        {/* Brand */}
        <button
          onClick={() => handleNavClick('#hero')}
          className="flex items-center gap-2 group focus-visible:outline-accent"
          aria-label="Back to top"
        >
          <span className="font-mono text-accent text-sm font-semibold opacity-70 group-hover:opacity-100 transition-opacity">
            {'<'}
          </span>
          <span className="font-semibold text-text-primary text-[0.95rem] tracking-tight group-hover:text-accent transition-colors">
            Hasnain Ahmed
          </span>
          <span className="font-mono text-accent text-sm font-semibold opacity-70 group-hover:opacity-100 transition-opacity">
            {'/>'}
          </span>
        </button>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const sectionId = link.href.replace('#', '');
            const isActive = activeSection === sectionId;
            return (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`nav-link px-3 py-2 rounded-md ${
                  isActive ? 'text-accent' : 'text-text-secondary hover:text-text-primary'
                }`}
                aria-current={isActive ? 'page' : undefined}
              >
                {link.label}
                {isActive && (
                  <span className="absolute -bottom-0.5 left-3 right-3 h-px bg-accent" />
                )}
              </button>
            );
          })}
          <a
            href={profile.resumePath}
            download="Hasnain_Ahmed_Resume.pdf"
            className="btn-primary ml-4 text-xs px-4 py-2"
            aria-label="Download Hasnain Ahmed's resume"
          >
            <Download size={14} />
            Resume
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden btn-icon"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
        aria-hidden={!isOpen}
      >
        <div className="bg-bg-secondary border-b border-border-subtle px-6 py-4 space-y-1">
          {navLinks.map((link) => {
            const sectionId = link.href.replace('#', '');
            const isActive = activeSection === sectionId;
            return (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`block w-full text-left px-3 py-2.5 rounded-lg text-sm transition-colors ${
                  isActive
                    ? 'text-accent bg-accent-glow font-medium'
                    : 'text-text-secondary hover:text-text-primary hover:bg-bg-card'
                }`}
              >
                {link.label}
              </button>
            );
          })}
          <div className="pt-2">
            <a
              href={profile.resumePath}
              download="Hasnain_Ahmed_Resume.pdf"
              className="btn-primary w-full justify-center text-sm"
              onClick={() => setIsOpen(false)}
            >
              <Download size={15} />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
