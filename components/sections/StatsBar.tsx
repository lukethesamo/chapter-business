'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';

interface Stat {
  value: number;
  suffix: string;
  label: string;
  gradient: string;
}

const stats: Stat[] = [
  { value: 150, suffix: '+', label: 'Partner Universities', gradient: 'from-primary to-accent' },
  { value: 1, suffix: 'M+', label: 'Active Students', gradient: 'from-violet to-primary' },
  { value: 500, suffix: '+', label: 'Business Partners', gradient: 'from-coral to-violet' },
  { value: 98, suffix: '%', label: 'Client Satisfaction', gradient: 'from-emerald to-primary' },
];

function AnimatedCounter({ value, suffix, inView, gradient }: {
  value: number;
  suffix: string;
  inView: boolean;
  gradient: string;
}) {
  const springValue = useSpring(0, {
    stiffness: 50,
    damping: 20,
    mass: 1
  });

  const displayValue = useTransform(springValue, (latest) => Math.floor(latest));
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    if (inView) {
      springValue.set(value);
    }
  }, [inView, value, springValue]);

  useEffect(() => {
    const unsubscribe = displayValue.on('change', (latest) => {
      setCurrentValue(latest);
    });
    return () => unsubscribe();
  }, [displayValue]);

  return (
    <span className={`bg-gradient-to-r ${gradient} bg-clip-text text-transparent relative`}>
      {currentValue}
      {suffix}
      {/* Glow effect */}
      <span
        className={`absolute inset-0 bg-gradient-to-r ${gradient} bg-clip-text text-transparent blur-xl opacity-50`}
        aria-hidden="true"
      >
        {currentValue}{suffix}
      </span>
    </span>
  );
}

export function StatsBar() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section ref={ref} className="relative py-20 overflow-hidden">
      {/* Background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-secondary/50 via-transparent to-secondary/50" />

      {/* Animated line accents */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
      />
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet/50 to-transparent"
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 1.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1]
              }}
              className="relative text-center group"
            >
              {/* Decorative dot */}
              <motion.div
                className={`absolute -top-2 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-gradient-to-r ${stat.gradient}`}
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: 0.5 + index * 0.1, type: "spring", stiffness: 300 }}
              />

              {/* Connecting line on desktop */}
              {index < stats.length - 1 && (
                <motion.div
                  className="hidden lg:block absolute top-1/2 -right-6 w-12 h-px bg-gradient-to-r from-border to-transparent"
                  initial={{ scaleX: 0, originX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                />
              )}

              <div className="text-4xl lg:text-6xl font-bold mb-3 relative">
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  inView={isInView}
                  gradient={stat.gradient}
                />
              </div>

              <motion.div
                className="text-muted text-sm lg:text-base font-medium"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                {stat.label}
              </motion.div>

              {/* Hover gradient line */}
              <motion.div
                className={`absolute -bottom-2 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r ${stat.gradient} rounded-full`}
                initial={{ width: 0 }}
                whileHover={{ width: '60%' }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
