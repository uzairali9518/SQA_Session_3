import { motion } from 'framer-motion';

export default function SectionHeading({ subtitle, title, description, align = 'center' }) {
  const alignClass =
    align === 'center'
      ? 'text-center mx-auto'
      : align === 'left'
        ? 'text-left'
        : 'text-right';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
      className={`mb-12 md:mb-16 max-w-3xl ${alignClass}`}
    >
      {subtitle && (
        <span className="inline-block text-sm font-semibold tracking-widest uppercase text-primary mb-3">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-[Sora] mb-4">
        {title.includes(' ') ? (
          <>
            {title.split(' ').slice(0, -1).join(' ')}{' '}
            <span className="gradient-text">{title.split(' ').slice(-1)}</span>
          </>
        ) : (
          <span className="gradient-text">{title}</span>
        )}
      </h2>
      {description && (
        <p className="text-muted text-base md:text-lg leading-relaxed">{description}</p>
      )}
    </motion.div>
  );
}
