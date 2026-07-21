import { motion } from 'framer-motion';
import { ArrowUp, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { personalInfo, navLinks } from '../../utils/data';
import MagneticButton from '../ui/MagneticButton';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/5 bg-surface/50" role="contentinfo">
      <div className="container-custom section-padding pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          <div>
            <a href="#home" className="text-2xl font-bold font-[Sora] gradient-text mb-4 inline-block">
              UA<span className="text-primary">.</span>
            </a>
            <p className="text-muted text-sm leading-relaxed max-w-xs">
              {personalInfo.tagline}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-text mb-4">Navigation</h3>
            <ul className="grid grid-cols-2 gap-2" role="list">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-text mb-4">Connect</h3>
            <div className="flex gap-3">
              <MagneticButton
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full glass flex items-center justify-center text-muted hover:text-primary hover:border-primary/30 transition-colors"
                aria-label="GitHub"
              >
                <FaGithub size={18} />
              </MagneticButton>
              <MagneticButton
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full glass flex items-center justify-center text-muted hover:text-primary hover:border-primary/30 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={18} />
              </MagneticButton>
              <MagneticButton
                href={`mailto:${personalInfo.email}`}
                className="w-10 h-10 rounded-full glass flex items-center justify-center text-muted hover:text-primary hover:border-primary/30 transition-colors"
                aria-label="Email"
              >
                <Mail size={18} />
              </MagneticButton>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/5">
          <p className="text-sm text-muted">
            &copy; {currentYear} {personalInfo.name}. All rights reserved.
          </p>
          <MagneticButton
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full glass flex items-center justify-center text-muted hover:text-primary transition-colors"
            aria-label="Back to top"
          >
            <motion.div whileHover={{ y: -3 }} transition={{ type: 'spring' }}>
              <ArrowUp size={18} />
            </motion.div>
          </MagneticButton>
        </div>
      </div>
    </footer>
  );
}
