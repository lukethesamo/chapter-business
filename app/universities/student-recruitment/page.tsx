import { Metadata } from 'next';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Target } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { FAQSection, CTABanner } from '@/components/sections';
import { serviceDetails } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Student Recruitment Marketing | Chapter for Universities',
  description: 'Comprehensive student recruitment marketing tools to attract prospective students at the right time in their decision-making journey.',
};

const service = serviceDetails['student-recruitment'];

function ServiceHero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <Link href="/universities">
            <Badge variant="secondary" className="mb-4 hover:bg-secondary/80 cursor-pointer">
              ← Back to University Services
            </Badge>
          </Link>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            {service.name}
          </h1>

          <p className="text-xl text-muted mb-8">
            {service.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact">
              <Button size="lg" rightIcon={<ArrowRight className="h-5 w-5" />}>
                Get Started
              </Button>
            </Link>
            <Link href="/pricing">
              <Button variant="outline" size="lg">
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Powerful <span className="gradient-text">Features</span>
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Everything you need to attract and convert prospective students
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {service.features.map((feature, index) => (
            <Card key={feature.title} hover>
              <CardHeader>
                <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center mb-4">
                  <Target className="h-5 w-5 text-white" />
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function BenefitsSection() {
  return (
    <section className="py-24 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Why Choose Our Recruitment Platform
            </h2>
            <p className="text-muted mb-8">
              Universities using Chapter for student recruitment see measurable improvements
              in application rates, conversion rates, and cost efficiency.
            </p>
            <ul className="space-y-4">
              {service.benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full gradient-bg flex items-center justify-center flex-shrink-0">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-border flex items-center justify-center">
              <div className="text-center p-8">
                <div className="text-6xl font-bold gradient-text mb-2">40%</div>
                <p className="text-muted">average increase in applications</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function IntegrationsSection() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Integrations</h2>
          <p className="text-lg text-muted">
            Connect with the tools you already use
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {service.integrations?.map((integration) => (
            <div
              key={integration}
              className="px-6 py-3 rounded-xl bg-secondary border border-border font-medium"
            >
              {integration}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function StudentRecruitmentPage() {
  return (
    <>
      <ServiceHero />
      <FeaturesSection />
      <BenefitsSection />
      <IntegrationsSection />
      <FAQSection
        title="Student Recruitment FAQs"
        subtitle="Common questions about our recruitment marketing tools"
        faqs={service.faqs}
      />
      <CTABanner />
    </>
  );
}
