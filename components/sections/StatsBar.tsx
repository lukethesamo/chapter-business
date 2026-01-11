'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface Stat {
  value: number;
  suffix: string;
  label: string;
}

const stats: Stat[] = [
  { value: 150, suffix: '+', label: 'Partner Universities' },
  { value: 1, suffix: 'M+', label: 'Active Students' },
  { value: 500, suffix: '+', label: 'Business Partners' },
  { value: 98, suffix: '%', label: 'Client Satisfaction' },
];

function AnimatedCounter({ value, suffix, inView }: { value: number; suffix: string; inView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const end = value;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value, inView]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export function StatsBar() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-16 bg-secondary/30 border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl lg:text-5xl font-bold gradient-text mb-2">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} inView={isInView} />
              </div>
              <div className="text-muted text-sm lg:text-base">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
