'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/Tabs';
import { Button } from '@/components/ui/Button';
import { serviceCategories } from '@/lib/navigation';
import { getIcon } from '@/lib/icons';

const businessTypeContent: Record<string, {
  title: string;
  description: string;
  benefits: string[];
  href: string;
}> = {
  universities: {
    title: 'Engage Students at Every Stage',
    description: 'From recruitment to graduation, Chapter provides the tools universities need to connect with students. Our platform integrates seamlessly with your existing systems to enhance student experience and outcomes.',
    benefits: [
      'Increase prospective student engagement by 40%',
      'Streamline communication with AI-powered support',
      'Track student success with comprehensive analytics',
      'Boost event attendance and campus engagement',
    ],
    href: '/universities',
  },
  accommodation: {
    title: 'Fill Every Room, Every Year',
    description: 'Connect directly with students searching for their perfect home. Our platform puts your properties in front of qualified tenants at the right time, with tools to manage the entire journey.',
    benefits: [
      'Reach 1M+ students actively searching for accommodation',
      'Reduce vacancy rates with targeted marketing',
      'Automate tenant support with AI agents',
      'Manage bookings and viewings efficiently',
    ],
    href: '/accommodation',
  },
  employers: {
    title: 'Recruit the Best Graduate Talent',
    description: 'Access the UK\'s largest pool of student and graduate talent. From apprenticeships to graduate schemes, Chapter helps you build your future workforce with targeted recruitment tools.',
    benefits: [
      'Post to 150+ university career portals instantly',
      'Filter candidates by skills, course, and location',
      'Build employer brand awareness with students',
      'Track applications with ATS integration',
    ],
    href: '/employers',
  },
  'student-unions': {
    title: 'Supercharge Your Student Community',
    description: 'Everything your union, society, or sports club needs to thrive. From ticketing to merchandise, Chapter provides the tools to engage members and grow your organization.',
    benefits: [
      'Sell event tickets with zero platform fees',
      'Design and sell custom merchandise',
      'Manage memberships and communications',
      'Raise funds for causes that matter',
    ],
    href: '/student-unions',
  },
  brands: {
    title: 'Connect With Generation Z',
    description: 'Reach the most valuable consumer demographic through authentic engagement. Chapter provides brands with direct access to students through sponsored content, sampling, and ambassador programs.',
    benefits: [
      'Target students by university, course, and interests',
      'Launch product sampling campaigns at scale',
      'Build ambassador networks on campus',
      'Measure brand awareness and campaign ROI',
    ],
    href: '/brands',
  },
};

export function BusinessTypeSelector() {
  return (
    <section className="py-24 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Solutions for <span className="gradient-text">Every Business</span>
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Whether you&apos;re a university, accommodation provider, employer, student union, or brand,
            Chapter has the tools you need to succeed.
          </p>
        </motion.div>

        <Tabs defaultValue="universities" className="w-full">
          <TabsList className="flex flex-wrap justify-center gap-2 mb-8">
            {serviceCategories.map((category) => {
              const key = category.href.replace('/', '');
              const Icon = getIcon(category.iconName);
              return (
                <TabsTrigger key={key} value={key} className="px-4 py-2">
                  <Icon className="h-4 w-4 mr-2" />
                  {category.name.replace('For ', '')}
                </TabsTrigger>
              );
            })}
          </TabsList>

          {Object.entries(businessTypeContent).map(([key, content]) => {
            const category = serviceCategories.find(c => c.href === `/${key}`);
            const Icon = category ? getIcon(category.iconName) : null;

            return (
              <TabsContent key={key} value={key}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="grid lg:grid-cols-2 gap-12 items-center"
                >
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold mb-4">{content.title}</h3>
                    <p className="text-muted mb-6">{content.description}</p>
                    <ul className="space-y-3 mb-8">
                      {content.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full gradient-bg flex items-center justify-center flex-shrink-0 mt-0.5">
                            <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href={content.href}>
                      <Button rightIcon={<ArrowRight className="h-5 w-5" />}>
                        Learn More
                      </Button>
                    </Link>
                  </div>
                  <div className="relative">
                    <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-border overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center p-8">
                          <div className="w-16 h-16 mx-auto rounded-2xl gradient-bg flex items-center justify-center mb-4">
                            {Icon && <Icon className="w-8 h-8 text-white" />}
                          </div>
                          <p className="text-muted text-sm">Dashboard Preview</p>
                        </div>
                      </div>
                    </div>
                    <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
                    <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/10 rounded-full blur-2xl" />
                  </div>
                </motion.div>
              </TabsContent>
            );
          })}
        </Tabs>
      </div>
    </section>
  );
}
