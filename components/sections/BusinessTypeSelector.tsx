'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/Tabs';
import { Button } from '@/components/ui/Button';
import { serviceCategories } from '@/lib/navigation';
import { getIcon } from '@/lib/icons';
import { useState } from 'react';

const businessTypeContent: Record<string, {
  title: string;
  description: string;
  benefits: string[];
  href: string;
  accentColor: string;
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
    accentColor: 'from-primary to-accent',
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
    accentColor: 'from-coral to-rose',
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
    accentColor: 'from-violet to-primary',
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
    accentColor: 'from-emerald to-accent',
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
    accentColor: 'from-amber to-coral',
  },
};

export function BusinessTypeSelector() {
  const [activeTab, setActiveTab] = useState('universities');
  const activeContent = businessTypeContent[activeTab];

  return (
    <section className="py-28 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-transparent to-secondary/30" />
        <motion.div
          className={`absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full bg-gradient-to-br ${activeContent.accentColor} opacity-5 blur-3xl`}
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Solutions for <span className="gradient-text-multi">Every Business</span>
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Whether you&apos;re a university, accommodation provider, employer, student union, or brand,
            Chapter has the tools you need to succeed.
          </p>
        </motion.div>

        <Tabs
          defaultValue="universities"
          className="w-full"
          onValueChange={(value) => setActiveTab(value)}
        >
          {/* Tab List with animated indicator */}
          <TabsList className="flex flex-wrap justify-center gap-2 mb-12 p-2 rounded-2xl bg-secondary/50 backdrop-blur-sm border border-border/50 max-w-fit mx-auto">
            {serviceCategories.map((category) => {
              const key = category.href.replace('/', '');
              const Icon = getIcon(category.iconName);
              const isActive = activeTab === key;

              return (
                <TabsTrigger
                  key={key}
                  value={key}
                  className="relative px-5 py-3 rounded-xl transition-all duration-300"
                >
                  {/* Active background */}
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className={`absolute inset-0 bg-gradient-to-r ${businessTypeContent[key].accentColor} rounded-xl opacity-10`}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}

                  <span className="relative flex items-center gap-2">
                    <Icon className={`h-4 w-4 transition-colors ${isActive ? 'text-primary' : ''}`} />
                    <span className="hidden sm:inline">
                      {category.name.replace('For ', '')}
                    </span>
                  </span>

                  {/* Active indicator dot */}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${businessTypeContent[key].accentColor}`}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </TabsTrigger>
              );
            })}
          </TabsList>

          {/* Tab Content with morphing animation */}
          <AnimatePresence mode="wait">
            {Object.entries(businessTypeContent).map(([key, content]) => {
              const category = serviceCategories.find(c => c.href === `/${key}`);
              const Icon = category ? getIcon(category.iconName) : null;

              return (
                <TabsContent key={key} value={key} className="focus:outline-none">
                  <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.98 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
                  >
                    {/* Content side */}
                    <div>
                      <motion.h3
                        className="text-2xl sm:text-3xl font-bold mb-4"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                      >
                        {content.title}
                      </motion.h3>

                      <motion.p
                        className="text-muted mb-8 leading-relaxed"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.15 }}
                      >
                        {content.description}
                      </motion.p>

                      <ul className="space-y-4 mb-8">
                        {content.benefits.map((benefit, index) => (
                          <motion.li
                            key={index}
                            className="flex items-start gap-4"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 + index * 0.05 }}
                          >
                            <div className={`w-6 h-6 rounded-lg bg-gradient-to-br ${content.accentColor} flex items-center justify-center flex-shrink-0 mt-0.5 shadow-lg`}>
                              <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <span className="text-foreground">{benefit}</span>
                          </motion.li>
                        ))}
                      </ul>

                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                        <Link href={content.href}>
                          <Button
                            rightIcon={<ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />}
                            className="group btn-shimmer"
                          >
                            Learn More
                          </Button>
                        </Link>
                      </motion.div>
                    </div>

                    {/* Visual side with 3D card effect */}
                    <motion.div
                      className="relative tilt-container"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                    >
                      <div className="tilt-card aspect-[4/3] rounded-2xl bg-gradient-to-br from-card to-secondary border border-border/50 overflow-hidden shadow-premium relative">
                        {/* Gradient overlay */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${content.accentColor} opacity-5`} />

                        {/* Grid pattern */}
                        <div
                          className="absolute inset-0 opacity-[0.03]"
                          style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000' fill-opacity='1'%3E%3Cpath d='M0 0h40v40H0V0zm1 1v38h38V1H1z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                          }}
                        />

                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center p-8">
                            <motion.div
                              className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br ${content.accentColor} flex items-center justify-center mb-6 shadow-xl`}
                              whileHover={{ scale: 1.1, rotate: 5 }}
                              transition={{ type: "spring", stiffness: 400 }}
                            >
                              {Icon && <Icon className="w-10 h-10 text-white" />}
                            </motion.div>
                            <p className="text-muted text-sm font-medium">Dashboard Preview</p>
                          </div>
                        </div>
                      </div>

                      {/* Decorative blurs */}
                      <div className={`absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br ${content.accentColor} rounded-full blur-3xl opacity-20`} />
                      <div className={`absolute -bottom-6 -left-6 w-40 h-40 bg-gradient-to-br ${content.accentColor} rounded-full blur-3xl opacity-15`} />
                    </motion.div>
                  </motion.div>
                </TabsContent>
              );
            })}
          </AnimatePresence>
        </Tabs>
      </div>
    </section>
  );
}
