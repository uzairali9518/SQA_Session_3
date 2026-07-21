import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';
import MagneticButton from '../ui/MagneticButton';

export default function CTA() {
  return (
    <section className="section-padding relative overflow-hidden" aria-label="Call to action">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10" aria-hidden="true" />
      <div className="container-custom relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-[Sora] mb-4">
            Let&apos;s Work <span className="gradient-text">Together</span>
          </h2>
          <p className="text-muted text-base md:text-lg max-w-2xl mx-auto mb-8">
            I&apos;m always excited to collaborate on innovative projects. Whether you need a web application,
            ML solution, or QA automation — let&apos;s build something extraordinary.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <MagneticButton
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-semibold shadow-lg shadow-primary/30"
            >
              <Mail size={18} />
              Start a Project
              <ArrowRight size={18} />
            </MagneticButton>
            <MagneticButton
              href="mailto:u617845@gmail.com"
              className="px-8 py-3.5 rounded-full glass text-text font-semibold hover:bg-white/10"
            >
              Email Me Directly
            </MagneticButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
