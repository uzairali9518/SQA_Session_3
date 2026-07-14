import { motion } from 'framer-motion';
import { journey } from '../../utils/data';
import { staggerContainer, fadeInUp } from '../../utils/animations';
import SectionHeading from '../ui/SectionHeading';

export default function Experience() {
  return (
    <section id="experience" className="section-padding relative" aria-label="Experience section">
      <div className="container-custom">
        <SectionHeading
          subtitle="My Journey"
          title="Experience Timeline"
          description="From student to aspiring software engineer — my path in tech."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="relative max-w-3xl mx-auto"
        >
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-accent md:-translate-x-px" aria-hidden="true" />

          {journey.map((item, index) => (
            <motion.div
              key={item.year + item.title}
              variants={fadeInUp}
              className={`relative flex flex-col md:flex-row gap-4 md:gap-8 mb-10 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className="md:w-1/2" />
              <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-bg -translate-x-[7px] md:-translate-x-2 top-2 z-10" aria-hidden="true" />
              <div className={`md:w-1/2 pl-8 md:pl-0 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary mb-2">
                  {item.year}
                </span>
                <h3 className="text-lg font-bold font-[Sora] mb-2">{item.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
