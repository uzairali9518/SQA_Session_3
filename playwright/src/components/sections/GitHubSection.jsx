import { motion } from 'framer-motion';
import { ExternalLink, GitCommit } from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';
import { githubStats, personalInfo } from '../../utils/data';
import { staggerContainer, fadeInUp } from '../../utils/animations';
import SectionHeading from '../ui/SectionHeading';
import GlassCard from '../ui/GlassCard';
import MagneticButton from '../ui/MagneticButton';

export default function GitHubSection() {
  return (
    <section id="github" className="section-padding relative mesh-bg" aria-label="GitHub section">
      <div className="container-custom">
        <SectionHeading
          subtitle="Open Source"
          title="GitHub Activity"
          description="Explore my code contributions and open source projects."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
        >
          <motion.div variants={fadeInUp} className="lg:col-span-2">
            <GlassCard className="p-6 md:p-8 h-full">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold font-[Sora] flex items-center gap-2">
                  <GitCommit className="text-primary" size={20} />
                  Contribution Graph
                </h3>
                <span className="text-xs text-muted">@{githubStats.username}</span>
              </div>
              <div className="grid grid-cols-12 gap-1 mb-4" aria-hidden="true">
                {Array.from({ length: 84 }, (_, i) => {
                  const intensity = Math.random();
                  return (
                    <div
                      key={i}
                      className="aspect-square rounded-sm"
                      style={{
                        backgroundColor:
                          intensity > 0.7
                            ? '#22C55E'
                            : intensity > 0.4
                              ? '#3B82F6'
                              : intensity > 0.2
                                ? 'rgba(59,130,246,0.3)'
                                : 'rgba(148,163,184,0.1)',
                      }}
                    />
                  );
                })}
              </div>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { label: 'Repositories', value: githubStats.repos },
                  { label: 'Contributions', value: `${githubStats.contributions}+` },
                  { label: 'Followers', value: githubStats.followers },
                ].map((stat) => (
                  <div key={stat.label} className="text-center p-3 rounded-xl bg-white/5">
                    <p className="text-2xl font-bold gradient-text">{stat.value}</p>
                    <p className="text-xs text-muted mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </GlassCard>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <GlassCard className="p-6 md:p-8 h-full">
              <h3 className="text-lg font-semibold font-[Sora] mb-6">Top Languages</h3>
              <div className="space-y-4 mb-8">
                {githubStats.topLanguages.map((lang) => (
                  <div key={lang.name}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-text/90">{lang.name}</span>
                      <span className="text-muted">{lang.percentage}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        style={{ backgroundColor: lang.color }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${lang.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <MagneticButton
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-5 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-semibold text-sm flex items-center justify-center gap-2"
              >
                <FaGithub size={18} />
                View GitHub Profile
                <ExternalLink size={14} />
              </MagneticButton>
            </GlassCard>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
