'use client';

import { motion } from 'framer-motion';

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

export function LogoCarousel() {
  return (
    <section className="py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-muted"
        >
          Trusted by leading universities and institutions across the UK
        </motion.p>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

        <motion.div
          className="flex gap-8"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        >
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={`${logo}-${index}`}
              className="flex-shrink-0 px-8 py-4 rounded-xl bg-secondary/50 border border-border"
            >
              <span className="text-muted font-medium whitespace-nowrap">{logo}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
