'use client';

import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { cn } from '@/lib/utils';

const testimonials = [
  {
    quote: "Chapter has transformed how we engage with prospective students. Our open day registrations increased by 60% in the first semester.",
    author: "Dr. Sarah Mitchell",
    role: "Director of Student Recruitment",
    company: "University of Bristol",
  },
  {
    quote: "The AI tenant support agents have reduced our response time from hours to seconds. Our tenant satisfaction scores have never been higher.",
    author: "James Morrison",
    role: "Operations Director",
    company: "Unite Students",
  },
  {
    quote: "We filled all 50 graduate positions in record time. Chapter's targeted campaigns connected us with exactly the candidates we were looking for.",
    author: "Emma Thompson",
    role: "Head of Early Careers",
    company: "Deloitte UK",
  },
  {
    quote: "Our Freshers' Week ticket sales doubled year-over-year. The merchandise studio has been a game-changer for our society funding.",
    author: "Alex Chen",
    role: "President",
    company: "Manchester SU",
  },
  {
    quote: "The student insights from Chapter helped us refine our Gen Z marketing strategy. Our brand awareness on campus increased by 45%.",
    author: "Rebecca Foster",
    role: "Marketing Manager",
    company: "Red Bull UK",
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section ref={ref} className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
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
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="bg-card rounded-2xl p-8 lg:p-12 border border-border relative"
            >
              <Quote className="absolute top-8 left-8 h-12 w-12 text-primary/10" />

              <div className="relative z-10">
                <p className="text-xl lg:text-2xl text-foreground mb-8 italic">
                  &ldquo;{testimonials[currentIndex].quote}&rdquo;
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center text-white font-bold">
                    {testimonials[currentIndex].author[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonials[currentIndex].author}
                    </div>
                    <div className="text-sm text-muted">
                      {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-between mt-8">
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={cn(
                    'w-2 h-2 rounded-full transition-all',
                    index === currentIndex
                      ? 'w-8 gradient-bg'
                      : 'bg-muted hover:bg-muted-foreground'
                  )}
                />
              ))}
            </div>

            <div className="flex gap-2">
              <button
                onClick={prev}
                className="p-2 rounded-lg border border-border hover:bg-secondary transition-colors"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={next}
                className="p-2 rounded-lg border border-border hover:bg-secondary transition-colors"
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
