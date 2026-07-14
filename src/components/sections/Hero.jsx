import { motion } from 'framer-motion';
import { ChevronDown, Download, FolderOpen, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { SiPython, SiDjango, SiReact, SiJavascript, SiGit, SiDocker } from 'react-icons/si';
import { personalInfo } from '../../utils/data';
import ProfileImage from '../ui/ProfileImage';
import TypingAnimation from '../ui/TypingAnimation';
import MagneticButton from '../ui/MagneticButton';

const floatingTech = [
  { Icon: SiPython, label: 'Python', position: 'top-[15%] left-[8%]', delay: 0 },
  { Icon: SiDjango, label: 'Django', position: 'top-[25%] right-[10%]', delay: 0.5 },
  { Icon: SiReact, label: 'React', position: 'bottom-[30%] left-[5%]', delay: 1 },
  { Icon: SiJavascript, label: 'JavaScript', position: 'bottom-[20%] right-[8%]', delay: 1.5 },
  { Icon: SiGit, label: 'Git', position: 'top-[45%] left-[3%]', delay: 2 },
  { Icon: SiDocker, label: 'Docker', position: 'top-[40%] right-[5%]', delay: 2.5 },
];

function Particles() {
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 4 + 3,
    delay: Math.random() * 2,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-primary/30"
          style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size }}
          animate={{ y: [0, -30, 0], opacity: [0.2, 0.8, 0.2] }}
          transition={{ duration: p.duration, repeat: Infinity, delay: p.delay }}
        />
      ))}
    </div>
  );
}

export default function Hero() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden mesh-bg"
      aria-label="Hero section"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="blob absolute top-20 left-10 w-72 h-72 bg-primary/30 rounded-full" />
        <div className="blob absolute bottom-20 right-10 w-96 h-96 bg-secondary/25 rounded-full" style={{ animationDelay: '2s' }} />
        <div className="blob absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/15 rounded-full" style={{ animationDelay: '4s' }} />
      </div>

      <Particles />

      {floatingTech.map(({ Icon, label, position, delay }) => (
        <motion.div
          key={label}
          className={`absolute hidden lg:flex items-center gap-2 glass px-3 py-2 rounded-full text-xs text-muted ${position}`}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, delay }}
          aria-hidden="true"
        >
          <Icon className="text-primary" size={16} />
          {label}
        </motion.div>
      ))}

      <div className="container-custom relative z-10 pt-28 pb-20 lg:pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="order-2 lg:order-1"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm text-muted mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
              Available for opportunities
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-muted text-lg mb-2"
            >
              Hello, I&apos;m
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-[Sora] leading-tight mb-4"
            >
              <span className="gradient-text">{personalInfo.name}</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-xl sm:text-2xl md:text-3xl font-medium text-text/90 mb-6 h-10 sm:h-12"
            >
              <TypingAnimation texts={personalInfo.titles} />
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-muted text-base md:text-lg leading-relaxed max-w-xl mb-8"
            >
              {personalInfo.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <MagneticButton
                href="/resume.pdf"
                download
                className="px-6 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-semibold text-sm shadow-lg shadow-primary/30 hover:shadow-primary/50"
              >
                <Download size={18} />
                Download Resume
              </MagneticButton>
              <MagneticButton
                onClick={() => scrollToSection('projects')}
                className="px-6 py-3 rounded-full glass text-text font-semibold text-sm hover:bg-white/10"
              >
                <FolderOpen size={18} />
                View Projects
              </MagneticButton>
              <MagneticButton
                onClick={() => scrollToSection('contact')}
                className="px-6 py-3 rounded-full border border-primary/30 text-primary font-semibold text-sm hover:bg-primary/10"
              >
                <Mail size={18} />
                Contact Me
              </MagneticButton>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex items-center gap-4"
            >
              <span className="text-sm text-muted">Follow me:</span>
              <div className="flex gap-3">
                {[
                  { href: personalInfo.github, Icon: FaGithub, label: 'GitHub' },
                  { href: personalInfo.linkedin, Icon: FaLinkedin, label: 'LinkedIn' },
                  { href: `mailto:${personalInfo.email}`, Icon: Mail, label: 'Email' },
                ].map(({ href, Icon, label }) => (
                  <MagneticButton
                    key={label}
                    href={href}
                    target={label !== 'Email' ? '_blank' : undefined}
                    rel={label !== 'Email' ? 'noopener noreferrer' : undefined}
                    className="w-10 h-10 rounded-full glass flex items-center justify-center text-muted hover:text-primary transition-colors"
                    aria-label={label}
                  >
                    <Icon size={18} />
                  </MagneticButton>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="order-1 lg:order-2"
          >
            <ProfileImage />
          </motion.div>
        </div>
      </div>

      <motion.button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted hover:text-primary transition-colors cursor-pointer"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        aria-label="Scroll to about section"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown size={20} />
      </motion.button>
    </section>
  );
}
