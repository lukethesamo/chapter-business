import { Metadata } from 'next';
import { ArrowRight, Check, Ticket } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { FAQSection, CTABanner } from '@/components/sections';
import { serviceDetails } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Event Ticketing Platform | Chapter for Student Unions',
  description: 'Sell event tickets with zero platform fees. The ticketing solution built for student unions and societies.',
};

const service = serviceDetails['ticketing'];

function ServiceHero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <Link href="/student-unions">
            <Badge variant="secondary" className="mb-4 hover:bg-secondary/80 cursor-pointer">
              ← Back to Student Union Services
            </Badge>
          </Link>

          <Badge variant="success" className="mb-4 ml-2">
            Zero Platform Fees
          </Badge>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            {service.name}
          </h1>

          <p className="text-xl text-muted mb-8">
            {service.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact">
              <Button size="lg" rightIcon={<ArrowRight className="h-5 w-5" />}>
                Start Selling Tickets
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
            Everything You Need for <span className="gradient-text">Events</span>
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            From small society socials to major SU events, we&apos;ve got you covered
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {service.features.map((feature) => (
            <Card key={feature.title} hover>
              <CardHeader>
                <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center mb-4">
                  <Ticket className="h-5 w-5 text-white" />
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

function ComparisonSection() {
  return (
    <section className="py-24 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Compare the <span className="gradient-text">Savings</span>
          </h2>
          <p className="text-lg text-muted">
            See how much more you keep with Chapter
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-card rounded-2xl border border-border overflow-hidden">
            <div className="p-6 border-b border-border">
              <h3 className="font-semibold mb-4">Selling 500 tickets at £10 each</h3>
              <div className="text-3xl font-bold">£5,000 <span className="text-lg font-normal text-muted">gross sales</span></div>
            </div>

            <div className="grid grid-cols-2 divide-x divide-border">
              <div className="p-6">
                <div className="text-sm text-muted mb-2">Other Platforms</div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Platform fee (10%)</span>
                    <span className="text-destructive">-£500</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Processing (2.9% + 20p)</span>
                    <span className="text-destructive">-£245</span>
                  </div>
                  <div className="flex justify-between font-semibold pt-2 border-t border-border">
                    <span>You keep</span>
                    <span>£4,255</span>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-primary/5">
                <div className="text-sm text-muted mb-2">Chapter</div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Platform fee</span>
                    <span className="text-emerald-500">£0</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Processing (2.9% + 20p)</span>
                    <span className="text-destructive">-£245</span>
                  </div>
                  <div className="flex justify-between font-semibold pt-2 border-t border-border">
                    <span>You keep</span>
                    <span className="gradient-text">£4,755</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 bg-emerald-500/10 text-center">
              <div className="text-2xl font-bold text-emerald-600">Save £500</div>
              <div className="text-sm text-muted">on this single event</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BenefitsSection() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-orange-500/10 to-primary/10 border border-border flex items-center justify-center">
              <div className="text-center p-8">
                <Ticket className="h-16 w-16 mx-auto text-orange-500 mb-4" />
                <p className="text-muted">Event page preview</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Built for Student Events
            </h2>
            <p className="text-muted mb-8">
              We understand the unique needs of student unions and societies.
              That&apos;s why we built a platform that puts your needs first.
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
        </div>
      </div>
    </section>
  );
}

export default function TicketingPage() {
  return (
    <>
      <ServiceHero />
      <FeaturesSection />
      <ComparisonSection />
      <BenefitsSection />
      <FAQSection
        title="Ticketing FAQs"
        subtitle="Common questions about our event ticketing platform"
        faqs={service.faqs}
      />
      <CTABanner />
    </>
  );
}
