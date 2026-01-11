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
  },
  {
    icon: BarChart3,
    title: 'Powerful Analytics',
    description: 'Real-time dashboards and comprehensive reporting to measure campaign performance and ROI.',
  },
  {
    icon: Bot,
    title: 'AI-Powered Tools',
    description: 'Intelligent chatbots, automated responses, and smart recommendations to streamline operations.',
  },
  {
    icon: Zap,
    title: 'Instant Engagement',
    description: 'Push notifications, email campaigns, and in-app messaging to reach students instantly.',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'GDPR compliant with enterprise-grade security, SSO integration, and data protection.',
  },
  {
    icon: Puzzle,
    title: 'Seamless Integration',
    description: 'Connect with your existing tools through our robust API and pre-built integrations.',
  },
];

export function FeatureGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
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
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card hover className="h-full">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
