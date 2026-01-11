'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MessageSquare, Settings, Rocket } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Tell Us Your Goals',
    description: 'Schedule a call with our team to discuss your objectives, target audience, and how Chapter can help you reach UK students.',
  },
  {
    number: '02',
    icon: Settings,
    title: 'Custom Setup',
    description: 'We\'ll configure your account, set up integrations, and create a tailored strategy to maximize your impact on the platform.',
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Launch & Grow',
    description: 'Go live with your campaigns, track performance in real-time, and scale your student engagement with ongoing support.',
  },
];

export function HowItWorks() {
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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Getting started with Chapter is simple. We&apos;ll guide you through
            every step of the process.
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-primary -translate-y-1/2" />

          <div className="grid lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative"
              >
                <div className="bg-card rounded-2xl p-8 border border-border relative z-10">
                  <div className="absolute -top-4 left-8 px-3 py-1 rounded-full gradient-bg text-white text-sm font-bold">
                    {step.number}
                  </div>

                  <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center mb-6 mt-2">
                    <step.icon className="h-8 w-8 text-primary" />
                  </div>

                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-muted">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
