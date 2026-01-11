'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Play, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { useRef } from 'react';

// Floating shape component with parallax effect
function FloatingShape({
  className,
  delay = 0,
  duration = 6,
  gradient = 'from-primary/30 to-violet/30'
}: {
  className?: string;
  delay?: number;
  duration?: number;
  gradient?: string;
}) {
  return (
    <motion.div
      className={`absolute rounded-full bg-gradient-to-br ${gradient} blur-3xl animate-morph ${className}`}
      animate={{
        y: [0, -30, 0],
        x: [0, 15, 0],
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

// Animated text with character reveal
function AnimatedHeading({ children }: { children: string }) {
  const words = children.split(' ');

  return (
    <span className="inline-flex flex-wrap justify-center gap-x-3">
      {words.map((word, wordIndex) => (
        <motion.span
          key={wordIndex}
          initial={{ opacity: 0, y: 40, rotateX: -90 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{
            duration: 0.8,
            delay: wordIndex * 0.1,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="inline-block"
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Animated Gradient Mesh Background */}
      <div className="absolute inset-0 -z-10">
        {/* Base gradient mesh */}
        <div className="absolute inset-0 gradient-mesh opacity-70" />

        {/* Animated gradient overlay */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at 50% 50%, rgba(2, 179, 255, 0.15) 0%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Floating morphing shapes */}
        <FloatingShape
          className="top-1/4 left-1/4 w-[500px] h-[500px]"
          delay={0}
          gradient="from-primary/25 to-accent/20"
        />
        <FloatingShape
          className="bottom-1/4 right-1/4 w-[600px] h-[600px]"
          delay={2}
          gradient="from-violet/20 to-primary/15"
        />
        <FloatingShape
          className="top-1/2 right-1/3 w-[300px] h-[300px]"
          delay={4}
          gradient="from-coral/15 to-violet/10"
        />

        {/* Grid pattern with noise */}
        <div
          className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        {/* Noise overlay for texture */}
        <div className="absolute inset-0 noise-overlay" />
      </div>

      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32"
        style={{ y, opacity }}
      >
        <div className="text-center max-w-4xl mx-auto">
          {/* Animated Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full mb-8"
          >
            {/* Animated gradient border */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-violet to-primary bg-[length:200%_100%] animate-gradient p-[1.5px]">
              <div className="w-full h-full rounded-full bg-background/95 backdrop-blur-sm" />
            </div>

            <div className="relative flex items-center gap-2">
              <motion.div
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <Sparkles className="h-4 w-4 text-primary" />
              </motion.div>
              <span className="text-sm font-medium gradient-text">Trusted by 150+ UK Universities</span>
            </div>
          </motion.div>

          {/* Main Heading with staggered animation */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight mb-6"
          >
            <AnimatedHeading>Reach</AnimatedHeading>{' '}
            <motion.span
              className="gradient-text-multi relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              1M+ UK Students
              {/* Glow effect */}
              <span className="absolute inset-0 gradient-text-multi blur-2xl opacity-50" aria-hidden="true">
                1M+ UK Students
              </span>
            </motion.span>
            <br />
            <AnimatedHeading>Through One Platform</AnimatedHeading>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg sm:text-xl text-muted max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Chapter connects universities, accommodation providers, employers, and brands
            with the UK&apos;s largest student audience. Powerful tools, actionable insights,
            and direct engagement.
          </motion.p>

          {/* CTAs with shimmer */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/pricing">
              <Button
                size="lg"
                rightIcon={<ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />}
                className="group btn-shimmer relative"
              >
                Explore Services
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                size="lg"
                leftIcon={<Play className="h-5 w-5" />}
                className="backdrop-blur-sm bg-background/50 hover:bg-background/80 border-border/50"
              >
                Book a Demo
              </Button>
            </Link>
          </motion.div>

          {/* Trust Indicators with enhanced styling */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mt-16 flex flex-wrap items-center justify-center gap-8 text-muted"
          >
            {/* Avatar stack */}
            <motion.div
              className="flex items-center gap-3 px-4 py-2 rounded-full glass-subtle"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <div className="flex -space-x-3">
                {[
                  'from-primary to-accent',
                  'from-violet to-primary',
                  'from-coral to-violet',
                  'from-emerald to-primary',
                  'from-amber to-coral',
                ].map((gradient, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + i * 0.1 }}
                    className={`w-9 h-9 rounded-full bg-gradient-to-br ${gradient} border-2 border-background shadow-lg`}
                  />
                ))}
              </div>
              <span className="text-sm font-medium">Join 500+ businesses</span>
            </motion.div>

            <div className="hidden sm:block w-px h-8 bg-gradient-to-b from-transparent via-border to-transparent" />

            {/* Rating */}
            <motion.div
              className="flex items-center gap-3 px-4 py-2 rounded-full glass-subtle"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <div className="flex items-center gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <motion.svg
                    key={i}
                    className="w-5 h-5 text-amber fill-current drop-shadow-sm"
                    viewBox="0 0 20 20"
                    initial={{ opacity: 0, scale: 0, rotate: -30 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ delay: 0.9 + i * 0.1, type: "spring", stiffness: 300 }}
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </motion.svg>
                ))}
              </div>
              <span className="text-sm font-medium">4.9/5 satisfaction</span>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
