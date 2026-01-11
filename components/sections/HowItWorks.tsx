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
    gradient: 'from-primary to-accent',
  },
  {
    number: '02',
    icon: Settings,
    title: 'Custom Setup',
    description: 'We\'ll configure your account, set up integrations, and create a tailored strategy to maximize your impact on the platform.',
    gradient: 'from-violet to-primary',
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Launch & Grow',
    description: 'Go live with your campaigns, track performance in real-time, and scale your student engagement with ongoing support.',
    gradient: 'from-coral to-rose',
  },
];

export function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/40 via-transparent to-secondary/40" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
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
          {/* Connecting line - Desktop */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-primary via-violet to-coral"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformOrigin: 'left' }}
            />
          </div>

          {/* Connecting line - Mobile (vertical) */}
          <div className="lg:hidden absolute top-0 left-8 bottom-0 w-1 overflow-hidden">
            <motion.div
              className="w-full h-full bg-gradient-to-b from-primary via-violet to-coral"
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : {}}
              transition={{ duration: 1.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformOrigin: 'top' }}
            />
          </div>

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.7,
                  delay: 0.3 + index * 0.2,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className="relative pl-20 lg:pl-0"
              >
                {/* Step number badge */}
                <motion.div
                  className="absolute left-0 lg:left-1/2 lg:-translate-x-1/2 -top-2 lg:-top-8 z-20"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{
                    delay: 0.8 + index * 0.2,
                    type: "spring",
                    stiffness: 300,
                    damping: 20
                  }}
                >
                  <div className={`relative px-4 py-2 rounded-full bg-gradient-to-r ${step.gradient} text-white text-sm font-bold shadow-lg`}>
                    {step.number}

                    {/* Pulse ring animation */}
                    <motion.div
                      className={`absolute inset-0 rounded-full bg-gradient-to-r ${step.gradient}`}
                      initial={{ scale: 1, opacity: 0.5 }}
                      animate={{ scale: 2, opacity: 0 }}
                      transition={{
                        delay: 1 + index * 0.2,
                        duration: 1.5,
                        repeat: Infinity,
                        repeatDelay: 3
                      }}
                    />
                  </div>
                </motion.div>

                {/* Card */}
                <div className="bg-card rounded-2xl p-8 border border-border shadow-premium relative overflow-hidden group">
                  {/* Gradient accent on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                  <div className="relative z-10">
                    {/* Icon */}
                    <motion.div
                      className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center mb-6 mt-4 lg:mt-8 relative overflow-hidden"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                      <step.icon className={`h-8 w-8 text-muted-foreground group-hover:text-primary transition-colors duration-300`} />
                    </motion.div>

                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-muted leading-relaxed">{step.description}</p>
                  </div>

                  {/* Corner decoration */}
                  <div className={`absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br ${step.gradient} rounded-full blur-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
