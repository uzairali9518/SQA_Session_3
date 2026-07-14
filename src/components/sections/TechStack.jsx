import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { SiPython, SiDjango, SiReact, SiJavascript, SiTensorflow, SiGit, SiDocker, SiMysql } from 'react-icons/si';
import { techStack } from '../../utils/data';
import SectionHeading from '../ui/SectionHeading';

const iconComponents = {
  SiPython,
  SiDjango,
  SiReact,
  SiJavascript,
  SiTensorflow,
  SiGit,
  SiDocker,
  SiMysql,
};

export default function TechStack() {
  return (
    <section id="tech-stack" className="section-padding relative overflow-hidden" aria-label="Tech stack section">
      <div className="container-custom">
        <SectionHeading
          subtitle="Technologies"
          title="Tech Stack"
          description="Tools and frameworks I work with daily."
        />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={20}
            slidesPerView={2}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            breakpoints={{
              480: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 5 },
              1280: { slidesPerView: 6 },
            }}
            className="!pb-4"
          >
            {techStack.map((tech) => {
              const Icon = iconComponents[tech.icon];
              return (
                <SwiperSlide key={tech.name}>
                  <div className="glass rounded-2xl p-6 flex flex-col items-center gap-3 hover:bg-primary/5 transition-colors group">
                    <Icon className="text-4xl text-muted group-hover:text-primary transition-colors" />
                    <span className="text-sm text-muted group-hover:text-text transition-colors">{tech.name}</span>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}
