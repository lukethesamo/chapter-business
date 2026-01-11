'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Calendar, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/Button';

// Floating particle component
function Particle({ delay }: { delay: number }) {
  return (
    <motion.div
      className="absolute w-1 h-1 rounded-full bg-white/30"
      initial={{
        x: Math.random() * 100 + '%',
        y: '100%',
        opacity: 0
      }}
      animate={{
        y: '-20%',
        opacity: [0, 1, 1, 0],
      }}
      transition={{
        duration: 8,
        delay,
        repeat: Infinity,
        ease: "linear"
      }}
    />
  );
}

export function CTABanner() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [particles] = useState(() =>
    Array.from({ length: 20 }, (_, i) => i * 0.5)
  );

  return (
    <section ref={ref} className="py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Animated gradient background */}
          <div className="absolute inset-0">
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-primary via-violet to-coral"
              animate={{
                background: [
                  'linear-gradient(135deg, #02b3ff, #8B5CF6, #FF6B47)',
                  'linear-gradient(135deg, #8B5CF6, #FF6B47, #02b3ff)',
                  'linear-gradient(135deg, #FF6B47, #02b3ff, #8B5CF6)',
                  'linear-gradient(135deg, #02b3ff, #8B5CF6, #FF6B47)',
                ]
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </div>

          {/* Noise texture overlay */}
          <div className="absolute inset-0 noise-overlay opacity-50" />

          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />

          {/* Floating particles */}
          <div className="absolute inset-0 overflow-hidden">
            {particles.map((delay, i) => (
              <Particle key={i} delay={delay} />
            ))}
          </div>

          {/* Gradient orbs */}
          <motion.div
            className="absolute top-0 right-0 w-96 h-96 bg-white/20 rounded-full blur-3xl"
            animate={{
              x: [50, 100, 50],
              y: [-50, 0, -50],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white/15 rounded-full blur-3xl"
            animate={{
              x: [-50, 0, -50],
              y: [50, 0, 50],
              scale: [1.2, 1, 1.2],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="relative z-10 px-8 py-20 lg:px-16 lg:py-24 text-center">
            {/* Sparkle badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6"
            >
              <Sparkles className="h-4 w-4 text-white" />
              <span className="text-sm font-medium text-white/90">Start your free trial today</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-6"
            >
              Ready to Reach{' '}
              <span className="relative">
                1M+ Students
                {/* Animated underline */}
                <motion.span
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-white/50 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{ delay: 0.8, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  style={{ transformOrigin: 'left' }}
                />
              </span>
              ?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg lg:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed"
            >
              Join the hundreds of universities, businesses, and organizations
              already using Chapter to connect with UK students.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link href="/contact">
                <Button
                  variant="secondary"
                  size="lg"
                  leftIcon={<Calendar className="h-5 w-5" />}
                  className="bg-white text-primary hover:bg-white/90 shadow-xl shadow-black/10 btn-shimmer"
                >
                  Book a Demo
                </Button>
              </Link>
              <Link href="/pricing">
                <Button
                  variant="ghost"
                  size="lg"
                  rightIcon={<ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />}
                  className="group text-white border-2 border-white/30 hover:bg-white/10 hover:border-white/50"
                >
                  View Pricing
                </Button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
