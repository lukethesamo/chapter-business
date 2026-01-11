'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Pause, Play } from 'lucide-react';
import { cn } from '@/lib/utils';

const testimonials = [
  {
    quote: "Chapter has transformed how we engage with prospective students. Our open day registrations increased by 60% in the first semester.",
    author: "Dr. Sarah Mitchell",
    role: "Director of Student Recruitment",
    company: "University of Bristol",
    gradient: 'from-primary to-accent',
  },
  {
    quote: "The AI tenant support agents have reduced our response time from hours to seconds. Our tenant satisfaction scores have never been higher.",
    author: "James Morrison",
    role: "Operations Director",
    company: "Unite Students",
    gradient: 'from-coral to-rose',
  },
  {
    quote: "We filled all 50 graduate positions in record time. Chapter's targeted campaigns connected us with exactly the candidates we were looking for.",
    author: "Emma Thompson",
    role: "Head of Early Careers",
    company: "Deloitte UK",
    gradient: 'from-violet to-primary',
  },
  {
    quote: "Our Freshers' Week ticket sales doubled year-over-year. The merchandise studio has been a game-changer for our society funding.",
    author: "Alex Chen",
    role: "President",
    company: "Manchester SU",
    gradient: 'from-emerald to-accent',
  },
  {
    quote: "The student insights from Chapter helped us refine our Gen Z marketing strategy. Our brand awareness on campus increased by 45%.",
    author: "Rebecca Foster",
    role: "Marketing Manager",
    company: "Red Bull UK",
    gradient: 'from-amber to-coral',
  },
];

const AUTO_PLAY_DURATION = 6000; // 6 seconds

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setProgress(0);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setProgress(0);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isPlaying || !isInView) return;

    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          next();
          return 0;
        }
        return p + (100 / (AUTO_PLAY_DURATION / 100));
      });
    }, 100);

    return () => clearInterval(interval);
  }, [isPlaying, isInView]);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section ref={ref} className="py-28 overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className={`absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-br ${currentTestimonial.gradient} opacity-5 blur-3xl`}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Loved by <span className="gradient-text">Our Partners</span>
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            See what universities, businesses, and student organizations
            are saying about Chapter.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              exit={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="bg-card rounded-3xl p-8 lg:p-12 border border-border shadow-premium relative overflow-hidden"
            >
              {/* Gradient accent */}
              <div className={`absolute inset-0 bg-gradient-to-br ${currentTestimonial.gradient} opacity-[0.03]`} />

              {/* Floating quote mark */}
              <motion.div
                className="absolute top-6 left-6 lg:top-8 lg:left-8"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <Quote className={`h-16 w-16 fill-current bg-gradient-to-r ${currentTestimonial.gradient} bg-clip-text text-transparent opacity-20`} />
              </motion.div>

              <div className="relative z-10 pt-8">
                <motion.p
                  className="text-xl lg:text-2xl text-foreground mb-10 italic leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  &ldquo;{currentTestimonial.quote}&rdquo;
                </motion.p>

                <motion.div
                  className="flex items-center gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {/* Avatar with gradient ring */}
                  <div className="relative">
                    <motion.div
                      className={`absolute inset-0 rounded-full bg-gradient-to-r ${currentTestimonial.gradient}`}
                      animate={{ rotate: 360 }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                      style={{ padding: '2px' }}
                    />
                    <div className={`relative w-14 h-14 rounded-full bg-gradient-to-br ${currentTestimonial.gradient} flex items-center justify-center text-white font-bold text-lg`}>
                      {currentTestimonial.author[0]}
                    </div>
                  </div>

                  <div>
                    <div className="font-semibold text-foreground text-lg">
                      {currentTestimonial.author}
                    </div>
                    <div className="text-sm text-muted">
                      {currentTestimonial.role} at <span className="font-medium">{currentTestimonial.company}</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-between mt-8">
            {/* Progress dots */}
            <div className="flex gap-2 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index);
                    setProgress(0);
                  }}
                  className="relative h-2 overflow-hidden transition-all duration-300"
                  style={{ width: index === currentIndex ? 48 : 8 }}
                >
                  <div className={cn(
                    'absolute inset-0 rounded-full',
                    index === currentIndex
                      ? 'bg-border'
                      : 'bg-muted hover:bg-muted-foreground transition-colors'
                  )} />

                  {index === currentIndex && (
                    <motion.div
                      className={`absolute top-0 left-0 h-full rounded-full bg-gradient-to-r ${currentTestimonial.gradient}`}
                      style={{ width: `${progress}%` }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Navigation buttons */}
            <div className="flex gap-2">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className={cn(
                  "p-2.5 rounded-xl border border-border transition-all duration-300",
                  isPlaying
                    ? "bg-secondary hover:bg-secondary/80"
                    : "bg-primary/10 border-primary/20 hover:bg-primary/20"
                )}
              >
                {isPlaying ? (
                  <Pause className="h-4 w-4" />
                ) : (
                  <Play className="h-4 w-4" />
                )}
              </button>
              <button
                onClick={prev}
                className="p-2.5 rounded-xl border border-border hover:bg-secondary hover:border-primary/20 transition-all duration-300"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={next}
                className="p-2.5 rounded-xl border border-border hover:bg-secondary hover:border-primary/20 transition-all duration-300"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
