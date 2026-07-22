import { motion } from 'framer-motion';
import { Globe, Server, Brain, ShieldCheck, Smartphone, Palette } from 'lucide-react';
import { services } from '../../utils/data';
import { staggerContainer, fadeInUp } from '../../utils/animations';
import SectionHeading from '../ui/SectionHeading';
import GlassCard from '../ui/GlassCard';

const iconMap = {
  Globe,
  Server,
  Brain,
  ShieldCheck,
  Smartphone,
  Palette,
};

export default function Services() {
  return (
    <section id="services" className="section-padding relative mesh-bg" aria-label="Services section">
      <div className="container-custom">
        <SectionHeading
          subtitle="What I Offer"
          title="Services"
          description="Professional services to help bring your ideas to life."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div key={service.title} variants={fadeInUp}>
                <GlassCard className="h-full p-6 group hover:shadow-xl hover:shadow-primary/5">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <Icon className="text-primary" size={24} />
                  </div>
                  <h3 className="text-lg font-semibold font-[Sora] mb-3 group-hover:gradient-text transition-all">
                    {service.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">{service.description}</p>
                </GlassCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
