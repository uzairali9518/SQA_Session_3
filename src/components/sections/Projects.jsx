import { motion } from 'framer-motion';
import { ExternalLink, Star } from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';
import { projects } from '../../utils/data';
import { staggerContainer, fadeInUp } from '../../utils/animations';
import SectionHeading from '../ui/SectionHeading';
import TiltCard from '../ui/TiltCard';
import MagneticButton from '../ui/MagneticButton';

export default function Projects() {
  const featured = projects.find((p) => p.featured);

  return (
    <section id="projects" className="section-padding relative" aria-label="Projects section">
      <div className="container-custom">
        <SectionHeading
          subtitle="Portfolio"
          title="Featured Projects"
          description="A showcase of my best work in web development, machine learning, and software engineering."
        />

        {featured && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <TiltCard>
              <div className={`glass rounded-3xl overflow-hidden bg-gradient-to-br ${featured.gradient} p-1`}>
                <div className="glass-strong rounded-[22px] p-8 md:p-10">
                  <div className="flex items-center gap-2 text-accent text-sm font-medium mb-4">
                    <Star size={16} fill="currentColor" />
                    Featured Project
                  </div>
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <span className="text-5xl mb-4 block">{featured.icon}</span>
                      <h3 className="text-2xl md:text-3xl font-bold font-[Sora] mb-3">{featured.title}</h3>
                      <p className="text-muted leading-relaxed mb-4">{featured.description}</p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {featured.tech.map((t) => (
                          <span key={t} className="px-3 py-1 rounded-full text-xs bg-primary/10 text-primary border border-primary/20">
                            {t}
                          </span>
                        ))}
                      </div>
                      {featured.github && (
                        <MagneticButton
                          href={featured.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-5 py-2.5 rounded-full bg-gradient-to-r from-primary to-secondary text-white text-sm font-semibold"
                        >
                          <FaGithub size={16} />
                          View on GitHub
                        </MagneticButton>
                      )}
                    </div>
                    <div className="space-y-2">
                      {featured.features.map((f) => (
                        <div key={f} className="flex items-center gap-3 glass px-4 py-3 rounded-xl">
                          <div className="w-2 h-2 rounded-full bg-success" />
                          <span className="text-sm">{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </TiltCard>
          </motion.div>
        )}

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={fadeInUp}>
              <TiltCard className="h-full">
                <div className={`h-full glass rounded-2xl overflow-hidden group bg-gradient-to-br ${project.gradient} p-[1px]`}>
                  <div className="h-full glass-strong rounded-[15px] p-6 flex flex-col">
                    <div className="flex items-start justify-between mb-4">
                      <span className="text-4xl">{project.icon}</span>
                      <div className="flex gap-2">
                        {project.github && (
                          <MagneticButton
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-9 h-9 rounded-lg glass flex items-center justify-center text-muted hover:text-primary"
                            aria-label={`${project.title} GitHub`}
                          >
                            <FaGithub size={16} />
                          </MagneticButton>
                        )}
                        {project.live && (
                          <MagneticButton
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-9 h-9 rounded-lg glass flex items-center justify-center text-muted hover:text-accent"
                            aria-label={`${project.title} Live Demo`}
                          >
                            <ExternalLink size={16} />
                          </MagneticButton>
                        )}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold font-[Sora] mb-2 group-hover:gradient-text transition-all">
                      {project.title}
                    </h3>
                    <p className="text-muted text-sm leading-relaxed mb-4 flex-grow">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tech.map((t) => (
                        <span key={t} className="px-2.5 py-1 rounded-md text-xs bg-white/5 text-muted">
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.features.slice(0, 3).map((f) => (
                        <span key={f} className="text-xs text-muted flex items-center gap-1">
                          <span className="w-1 h-1 rounded-full bg-accent" />
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
