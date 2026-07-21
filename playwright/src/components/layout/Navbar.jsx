import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';
import { navLinks, personalInfo } from '../../utils/data';
import { useActiveSection } from '../../hooks/useActiveSection';
import MagneticButton from '../ui/MagneticButton';

const sectionIds = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setIsMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'glass-strong shadow-lg shadow-black/20 py-3' : 'bg-transparent py-5'
      }`}
      role="banner"
    >
      <nav className="container-custom flex items-center justify-between" aria-label="Main navigation">
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
          className="text-xl font-bold font-[Sora] gradient-text"
          aria-label="Uzair Ali - Home"
        >
          UA<span className="text-primary">.</span>
        </a>

        <ul className="hidden lg:flex items-center gap-1" role="list">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-lg ${
                  activeSection === link.href.slice(1)
                    ? 'text-text'
                    : 'text-muted hover:text-text'
                }`}
              >
                {link.name}
                {activeSection === link.href.slice(1) && (
                  <motion.span
                    layoutId="activeNav"
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full"
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <MagneticButton
            href="/resume.pdf"
            download
            className="px-5 py-2.5 text-sm font-semibold rounded-full bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/25 hover:shadow-primary/40"
            aria-label="Download Resume"
          >
            <Download size={16} />
            Resume
          </MagneticButton>
        </div>

        <button
          className="lg:hidden p-2 text-text rounded-lg glass"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileOpen}
        >
          {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass-strong border-t border-white/5 mt-3"
          >
            <ul className="container-custom py-4 flex flex-col gap-1" role="list">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                    className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                      activeSection === link.href.slice(1)
                        ? 'text-primary bg-primary/10'
                        : 'text-muted hover:text-text hover:bg-white/5'
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <MagneticButton
                  href="/resume.pdf"
                  download
                  className="w-full px-5 py-3 text-sm font-semibold rounded-full bg-gradient-to-r from-primary to-secondary text-white"
                >
                  <Download size={16} />
                  Download Resume
                </MagneticButton>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
