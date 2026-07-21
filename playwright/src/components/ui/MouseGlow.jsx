import { motion } from 'framer-motion';
import { useMousePosition } from '../../hooks/useMousePosition';

export default function MouseGlow() {
  const { x, y } = useMousePosition();

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
      style={{
        background: `radial-gradient(600px circle at ${x}px ${y}px, rgba(59,130,246,0.06), transparent 40%)`,
      }}
      aria-hidden="true"
    />
  );
}
