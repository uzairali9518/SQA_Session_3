import { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import profilePlaceholder from '../../assets/images/profile-placeholder.svg';

export default function ProfileImage() {
  const containerRef = useRef(null);
  const [imgSrc, setImgSrc] = useState('/profile.png');
  const [hasError, setHasError] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 150, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 20 });

  const handleMouseMove = (e) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (e.clientX - rect.left - rect.width / 2) / 20;
    const y = (e.clientY - rect.top - rect.height / 2) / 20;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const handleImageError = () => {
    if (!hasError) {
      setHasError(true);
      setImgSrc(profilePlaceholder);
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative flex items-center justify-center w-full max-w-[320px] sm:max-w-[360px] lg:max-w-[400px] mx-auto lg:mx-0"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="absolute inset-0 rounded-full animate-spin-slow"
        style={{
          background: 'conic-gradient(from 0deg, #3B82F6, #8B5CF6, #06B6D4, #3B82F6)',
          padding: '3px',
        }}
        aria-hidden="true"
      >
        <div className="w-full h-full rounded-full bg-bg" />
      </motion.div>

      <motion.div
        className="absolute -inset-4 rounded-full opacity-40 blur-2xl"
        style={{
          background: 'radial-gradient(circle, rgba(139,92,246,0.4) 0%, rgba(59,130,246,0.2) 50%, transparent 70%)',
          x: springX,
          y: springY,
        }}
        aria-hidden="true"
      />

      <motion.div
        className="relative animate-float"
        style={{ x: springX, y: springY }}
      >
        <div className="glass-strong rounded-full p-2 animate-pulse-glow">
          <div className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden border-2 border-primary/50 shadow-2xl shadow-primary/20">
            <img
              src={imgSrc}
              alt="Uzair Ali - Software Engineer"
              className="w-full h-full object-cover object-[center_20%] scale-105"
              onError={handleImageError}
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg/30 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>
      </motion.div>

      <motion.div
        className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-success shadow-lg shadow-success/50"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        aria-label="Available for work"
      />
    </div>
  );
}
