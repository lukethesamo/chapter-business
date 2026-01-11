'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Target,
  BarChart3,
  Bot,
  Zap,
  Shield,
  Puzzle,
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card';

const features = [
  {
    icon: Target,
    title: 'Targeted Reach',
    description: 'Access detailed student demographics to target your ideal audience by university, course, year, and interests.',
    gradient: 'from-primary to-accent',
    delay: 0,
  },
  {
    icon: BarChart3,
    title: 'Powerful Analytics',
    description: 'Real-time dashboards and comprehensive reporting to measure campaign performance and ROI.',
    gradient: 'from-violet to-primary',
    delay: 0.1,
  },
  {
    icon: Bot,
    title: 'AI-Powered Tools',
    description: 'Intelligent chatbots, automated responses, and smart recommendations to streamline operations.',
    gradient: 'from-coral to-violet',
    delay: 0.2,
  },
  {
    icon: Zap,
    title: 'Instant Engagement',
    description: 'Push notifications, email campaigns, and in-app messaging to reach students instantly.',
    gradient: 'from-amber to-coral',
    delay: 0.1,
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'GDPR compliant with enterprise-grade security, SSO integration, and data protection.',
    gradient: 'from-emerald to-accent',
    delay: 0.2,
  },
  {
    icon: Puzzle,
    title: 'Seamless Integration',
    description: 'Connect with your existing tools through our robust API and pre-built integrations.',
    gradient: 'from-primary to-violet',
    delay: 0.3,
  },
];

function FeatureCard({
  feature,
  index,
  isInView
}: {
  feature: typeof features[0];
  index: number;
  isInView: boolean;
}) {
  // Alternate entrance directions
  const directions = [
    { x: -30, y: 0 },    // Left
    { x: 0, y: 30 },     // Bottom
    { x: 30, y: 0 },     // Right
    { x: -30, y: 30 },   // Bottom-left
    { x: 0, y: 30 },     // Bottom
    { x: 30, y: 30 },    // Bottom-right
  ];

  const direction = directions[index % directions.length];

  return (
    <motion.div
      initial={{ opacity: 0, x: direction.x, y: direction.y }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{
        duration: 0.7,
        delay: feature.delay,
        ease: [0.16, 1, 0.3, 1]
      }}
      className="group"
    >
      <Card hover className="h-full relative overflow-hidden">
        {/* Animated gradient border on hover */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
          style={{ padding: '1px' }}
        >
          <div className="absolute inset-[1px] bg-card rounded-2xl" />
        </motion.div>

        <CardHeader className="relative z-10">
          {/* Icon with rotating gradient background */}
          <div className="relative w-14 h-14 mb-5">
            <motion.div
              className={`absolute inset-0 rounded-xl bg-gradient-to-br ${feature.gradient} opacity-20 group-hover:opacity-30 transition-opacity`}
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <div className={`relative w-full h-full rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-lg`}>
              <feature.icon className="h-7 w-7 text-white" />
            </div>

            {/* Glow effect on hover */}
            <motion.div
              className={`absolute inset-0 rounded-xl bg-gradient-to-br ${feature.gradient} blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500`}
            />
          </div>

          <CardTitle className="group-hover:text-primary transition-colors duration-300">
            {feature.title}
          </CardTitle>
          <CardDescription className="leading-relaxed">
            {feature.description}
          </CardDescription>
        </CardHeader>

        {/* Decorative corner gradient */}
        <div className={`absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-br ${feature.gradient} rounded-full blur-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
      </Card>
    </motion.div>
  );
}

export function FeatureGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-28 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/5 via-violet/5 to-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Everything You Need to <span className="gradient-text">Succeed</span>
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Powerful features designed to help you connect with students
            and achieve your business goals.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              feature={feature}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
