'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Check } from 'lucide-react';

interface Benefit {
  title: string;
  description: string;
}

interface BenefitsSectionProps {
  title: string;
  subtitle: string;
  benefits: Benefit[];
}

export function BenefitsSection({ title, subtitle, benefits }: BenefitsSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">{subtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex gap-4"
            >
              <div className="w-8 h-8 rounded-full gradient-bg flex items-center justify-center flex-shrink-0">
                <Check className="h-4 w-4 text-white" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted text-sm">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
