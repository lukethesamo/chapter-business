'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Check, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { cn } from '@/lib/utils';
import Link from 'next/link';

interface PricingTier {
  name: string;
  description: string;
  monthlyPrice: number;
  yearlyPrice: number;
  features: string[];
  highlighted?: boolean;
  cta: string;
  ctaHref: string;
}

const pricingTiers: PricingTier[] = [
  {
    name: 'Starter',
    description: 'Perfect for small teams getting started with student engagement',
    monthlyPrice: 299,
    yearlyPrice: 249,
    features: [
      'Up to 5,000 student reach',
      'Basic analytics dashboard',
      'Email campaign tools',
      '1 user seat',
      'Standard support',
      'API access',
    ],
    cta: 'Get Started',
    ctaHref: '/contact',
  },
  {
    name: 'Growth',
    description: 'For growing organizations with advanced needs',
    monthlyPrice: 799,
    yearlyPrice: 665,
    features: [
      'Up to 50,000 student reach',
      'Advanced analytics & reporting',
      'Email & push notifications',
      'AI chatbot integration',
      '5 user seats',
      'Priority support',
      'Custom integrations',
      'A/B testing tools',
    ],
    highlighted: true,
    cta: 'Get Started',
    ctaHref: '/contact',
  },
  {
    name: 'Enterprise',
    description: 'Custom solutions for large organizations',
    monthlyPrice: 0,
    yearlyPrice: 0,
    features: [
      'Unlimited student reach',
      'Custom analytics & BI',
      'All communication channels',
      'Dedicated AI solutions',
      'Unlimited user seats',
      'Dedicated account manager',
      'SLA guarantee',
      'Custom development',
      'On-premise option',
    ],
    cta: 'Contact Sales',
    ctaHref: '/contact',
  },
];

export function PricingCards() {
  const [isYearly, setIsYearly] = useState(true);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Simple, Transparent <span className="gradient-text">Pricing</span>
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto mb-8">
            Choose the plan that fits your needs. All plans include a 14-day free trial.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center gap-4 p-1 rounded-xl bg-secondary">
            <button
              onClick={() => setIsYearly(false)}
              className={cn(
                'px-4 py-2 rounded-lg text-sm font-medium transition-all',
                !isYearly ? 'bg-card shadow-sm text-foreground' : 'text-muted'
              )}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={cn(
                'px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2',
                isYearly ? 'bg-card shadow-sm text-foreground' : 'text-muted'
              )}
            >
              Yearly
              <Badge variant="success" size="sm">Save 20%</Badge>
            </button>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                className={cn(
                  'h-full flex flex-col relative',
                  tier.highlighted && 'border-primary shadow-xl shadow-primary/10'
                )}
              >
                {tier.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge variant="primary" className="flex items-center gap-1">
                      <Sparkles className="h-3 w-3" />
                      Most Popular
                    </Badge>
                  </div>
                )}

                <div className="p-6 border-b border-border">
                  <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
                  <p className="text-muted text-sm mb-4">{tier.description}</p>

                  <div className="flex items-baseline gap-1">
                    {tier.monthlyPrice === 0 ? (
                      <span className="text-4xl font-bold">Custom</span>
                    ) : (
                      <>
                        <span className="text-4xl font-bold">
                          £{isYearly ? tier.yearlyPrice : tier.monthlyPrice}
                        </span>
                        <span className="text-muted">/month</span>
                      </>
                    )}
                  </div>
                  {tier.monthlyPrice > 0 && isYearly && (
                    <p className="text-sm text-muted mt-1">
                      Billed annually (£{tier.yearlyPrice * 12}/year)
                    </p>
                  )}
                </div>

                <div className="p-6 flex-grow">
                  <ul className="space-y-3">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full gradient-bg flex items-center justify-center flex-shrink-0">
                          <Check className="h-3 w-3 text-white" />
                        </div>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-6 pt-0">
                  <Link href={tier.ctaHref}>
                    <Button
                      variant={tier.highlighted ? 'primary' : 'outline'}
                      className="w-full"
                    >
                      {tier.cta}
                    </Button>
                  </Link>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
