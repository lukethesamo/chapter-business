'use client';

import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

const logos = [
  'University of Oxford',
  'University of Cambridge',
  'Imperial College',
  'UCL',
  'LSE',
  'University of Manchester',
  'University of Edinburgh',
  'Kings College',
  'University of Bristol',
  'University of Warwick',
  'Durham University',
  'University of Glasgow',
];

function LogoItem({ name, index }: { name: string; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="flex-shrink-0 px-8 py-4 rounded-xl bg-card/50 border border-border/50 backdrop-blur-sm relative overflow-hidden cursor-pointer transition-all duration-300"
      whileHover={{
        scale: 1.05,
        borderColor: 'rgba(2, 179, 255, 0.3)',
        boxShadow: '0 0 30px rgba(2, 179, 255, 0.15)',
      }}
    >
      {/* Shimmer effect on hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
        initial={{ x: '-100%' }}
        animate={isHovered ? { x: '100%' } : { x: '-100%' }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      />

      <motion.span
        className="relative text-muted font-medium whitespace-nowrap transition-colors duration-300"
        animate={isHovered ? {
          background: 'linear-gradient(90deg, #02b3ff, #8B5CF6)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        } : {}}
      >
        {name}
      </motion.span>
    </motion.div>
  );
}

export function LogoCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const x = useMotionValue(0);

  // Double the logos for seamless loop
  const duplicatedLogos = [...logos, ...logos];

  useEffect(() => {
    let animationId: number;
    let startTime: number;
    const duration = 40000; // 40 seconds for full loop
    const totalWidth = logos.length * 220; // Approximate width per logo

    const animateCarousel = (timestamp: number) => {
      if (!startTime) startTime = timestamp;

      if (!isPaused) {
        const elapsed = timestamp - startTime;
        const progress = (elapsed % duration) / duration;
        x.set(-progress * totalWidth);
      } else {
        startTime = timestamp - ((-x.get() / totalWidth) * duration);
      }

      animationId = requestAnimationFrame(animateCarousel);
    };

    animationId = requestAnimationFrame(animateCarousel);

    return () => cancelAnimationFrame(animationId);
  }, [isPaused, x]);

  return (
    <section className="py-20 overflow-hidden relative">
      {/* Section header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-muted"
        >
          <span className="text-foreground font-medium">Trusted by leading universities</span>
          {' '}and institutions across the UK
        </motion.p>
      </div>

      <div
        ref={containerRef}
        className="relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Enhanced gradient fades */}
        <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-background via-background/80 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-background via-background/80 to-transparent z-10" />

        <motion.div
          className="flex gap-6"
          style={{ x }}
        >
          {duplicatedLogos.map((logo, index) => (
            <LogoItem key={`${logo}-${index}`} name={logo} index={index} />
          ))}
        </motion.div>
      </div>

      {/* Pause indicator */}
      <motion.div
        className="text-center mt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: isPaused ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      >
        <span className="text-xs text-muted-foreground">Hover to explore</span>
      </motion.div>
    </section>
  );
}
