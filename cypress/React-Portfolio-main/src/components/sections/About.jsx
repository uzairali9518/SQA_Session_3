import { motion } from 'framer-motion';
import { MapPin, GraduationCap } from 'lucide-react';
import { personalInfo, stats } from '../../utils/data';
import { staggerContainer, fadeInUp } from '../../utils/animations';
import SectionHeading from '../ui/SectionHeading';
import GlassCard from '../ui/GlassCard';
import AnimatedCounter from '../ui/AnimatedCounter';

const specializations = [
  'Full Stack Django Development',
  'Machine Learning',
  'REST APIs',
  'QA Automation',
  'Python Development',
  'Responsive Frontend Development',
];

export default function About() {
  return (
    <section id="about" className="section-padding relative" aria-label="About section">
      <div className="container-custom">
        <SectionHeading
          subtitle="About Me"
          title="Who I Am"
          description="Passionate about building software that makes a difference."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="space-y-6"
          >
            <motion.div variants={fadeInUp}>
              <GlassCard className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <GraduationCap className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-muted">Education</p>
                    <p className="font-semibold">{personalInfo.university}</p>
                  </div>
                </div>
                <p className="text-muted leading-relaxed mb-4">
                  I am a Computer Science student at Lahore Garrison University with a CGPA of{' '}
                  <span className="text-primary font-semibold">{personalInfo.cgpa}</span>.
                  I enjoy solving real-world problems using software engineering and AI.
                </p>
                <p className="text-muted leading-relaxed">
                  I continuously learn new technologies and enjoy building production-ready applications
                  that deliver real value to users and businesses.
                </p>
              </GlassCard>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex items-center gap-2 text-muted">
              <MapPin size={18} className="text-primary shrink-0" />
              <span>{personalInfo.location}</span>
            </motion.div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
          >
            <motion.div variants={fadeInUp} className="mb-8">
              <h3 className="text-xl font-semibold font-[Sora] mb-4">I specialize in</h3>
              <div className="flex flex-wrap gap-3">
                {specializations.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full glass text-sm text-text/90 hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((stat) => (
                <GlassCard key={stat.label} className="text-center p-6">
                  <p className="text-3xl md:text-4xl font-bold font-[Sora] gradient-text mb-1">
                    <AnimatedCounter
                      value={stat.value}
                      suffix={stat.suffix}
                      decimals={stat.decimals}
                    />
                  </p>
                  <p className="text-sm text-muted">{stat.label}</p>
                </GlassCard>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
