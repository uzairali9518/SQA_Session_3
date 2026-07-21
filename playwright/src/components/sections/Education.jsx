import { motion } from 'framer-motion';
import { BookOpen, Award } from 'lucide-react';
import { education, certifications } from '../../utils/data';
import { staggerContainer, fadeInUp } from '../../utils/animations';
import SectionHeading from '../ui/SectionHeading';
import GlassCard from '../ui/GlassCard';

export default function Education() {
  return (
    <section id="education" className="section-padding relative mesh-bg" aria-label="Education section">
      <div className="container-custom">
        <SectionHeading
          subtitle="Academic Background"
          title="Education"
          description="My academic journey and continuous learning path."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-2 relative"
          >
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-accent hidden md:block" aria-hidden="true" />

            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div key={edu.degree} variants={fadeInUp} className="relative md:pl-16">
                  <div className="absolute left-4 top-6 w-4 h-4 rounded-full bg-primary border-4 border-bg hidden md:block" aria-hidden="true" />
                  <GlassCard className="p-6 md:p-8">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                          <BookOpen className="text-primary" size={20} />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold font-[Sora]">{edu.degree}</h3>
                          <p className="text-muted text-sm">{edu.institution}</p>
                        </div>
                      </div>
                      <span className="px-3 py-1 rounded-full text-xs glass text-primary font-medium">
                        {edu.period}
                      </span>
                    </div>
                    {(edu.cgpa || edu.score) && (
                      <p className="text-sm text-muted mb-3">
                        {edu.cgpa ? `CGPA: ${edu.cgpa}` : `Score: ${edu.score}`}
                      </p>
                    )}
                    {edu.courses.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {edu.courses.map((course) => (
                          <span key={course} className="px-3 py-1 rounded-full text-xs bg-white/5 text-muted">
                            {course}
                          </span>
                        ))}
                      </div>
                    )}
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold font-[Sora] mb-6 flex items-center gap-2">
              <Award className="text-secondary" size={20} />
              Certifications
            </h3>
            {certifications.map((cert) => (
              <motion.div key={cert.title} variants={fadeInUp}>
                <GlassCard className="p-6 mb-4 gradient-border">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center mb-4">
                    <Award className="text-secondary" size={24} />
                  </div>
                  <h4 className="font-semibold mb-1">{cert.title}</h4>
                  <p className="text-sm text-muted">{cert.issuer}</p>
                  <p className="text-xs text-primary mt-2">{cert.platform}</p>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
