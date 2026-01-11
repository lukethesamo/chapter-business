'use client';

import { motion } from 'framer-motion';
import { ArrowRight, GraduationCap, Building2, Briefcase, Users, Megaphone } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import Link from 'next/link';

type IconName = 'graduation-cap' | 'building-2' | 'briefcase' | 'users' | 'megaphone';

const iconMap: Record<IconName, React.ComponentType<{ className?: string }>> = {
  'graduation-cap': GraduationCap,
  'building-2': Building2,
  'briefcase': Briefcase,
  'users': Users,
  'megaphone': Megaphone,
};

interface ServiceCategoryHeroProps {
  badge?: string;
  title: string;
  highlightedWord?: string;
  description: string;
  primaryCta?: { text: string; href: string };
  secondaryCta?: { text: string; href: string };
  iconName: IconName;
  iconColor: string;
}

export function ServiceCategoryHero({
  badge,
  title,
  highlightedWord,
  description,
  primaryCta = { text: 'Get Started', href: '/contact' },
  secondaryCta = { text: 'View Pricing', href: '/pricing' },
  iconName,
  iconColor,
}: ServiceCategoryHeroProps) {
  const titleParts = highlightedWord
    ? title.split(highlightedWord)
    : [title];

  const Icon = iconMap[iconName];

  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {badge && (
              <Badge variant="primary" className="mb-4">
                {badge}
              </Badge>
            )}

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              {highlightedWord ? (
                <>
                  {titleParts[0]}
                  <span className="gradient-text">{highlightedWord}</span>
                  {titleParts[1]}
                </>
              ) : (
                title
              )}
            </h1>

            <p className="text-lg text-muted mb-8 max-w-xl">
              {description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href={primaryCta.href}>
                <Button size="lg" rightIcon={<ArrowRight className="h-5 w-5" />}>
                  {primaryCta.text}
                </Button>
              </Link>
              <Link href={secondaryCta.href}>
                <Button variant="outline" size="lg">
                  {secondaryCta.text}
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square max-w-md mx-auto rounded-3xl bg-gradient-to-br from-primary/10 to-accent/10 border border-border flex items-center justify-center">
              <div className={`p-8 rounded-2xl bg-card shadow-xl ${iconColor}`}>
                <Icon className="w-24 h-24" />
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/20 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
