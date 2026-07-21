import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import { skillCategories } from '../../utils/data';
import { staggerContainer, fadeInUp } from '../../utils/animations';
import SectionHeading from '../ui/SectionHeading';
import GlassCard from '../ui/GlassCard';

function SkillBar({ name, level, delay }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => setWidth(level), delay * 100);
      return () => clearTimeout(timer);
    }
  }, [inView, level, delay]);

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="text-text/90">{name}</span>
        <span className="text-muted">{level}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-primary to-secondary"
          initial={{ width: 0 }}
          animate={{ width: inView ? `${width}%` : 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: delay * 0.1 }}
          style={{ boxShadow: '0 0 10px rgba(59,130,246,0.4)' }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section-padding relative mesh-bg" aria-label="Skills section">
      <div className="container-custom">
        <SectionHeading
          subtitle="Expertise"
          title="My Skills"
          description="Technologies and tools I use to bring ideas to life."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, catIndex) => (
            <motion.div key={category.title} variants={fadeInUp}>
              <GlassCard className="h-full p-6 hover:shadow-lg hover:shadow-primary/5 group">
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity`}>
                    <span className="text-white text-xs font-bold">{category.title[0]}</span>
                  </div>
                  <h3 className="text-lg font-semibold font-[Sora]">{category.title}</h3>
                </div>
                <div className="space-y-4">
                  {category.skills.map((skill, i) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      delay={catIndex + i}
                    />
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
