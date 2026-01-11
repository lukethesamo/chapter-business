import { Metadata } from 'next';
import { ArrowRight, Check, Shirt } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { FAQSection, CTABanner } from '@/components/sections';
import { serviceDetails } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Custom Merchandise Studio | Chapter for Student Unions',
  description: 'Design, sell, and ship custom merchandise for your society or club. No minimum orders, no upfront costs.',
};

const service = serviceDetails['merchandise'];

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
            No Minimum Orders
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
                Start Designing
              </Button>
            </Link>
            <Link href="/pricing">
              <Button variant="outline" size="lg">
                View Products
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
            Design to <span className="gradient-text">Delivery</span>
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            We handle everything so you can focus on your society
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {service.features.map((feature) => (
            <Card key={feature.title} hover>
              <CardHeader>
                <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center mb-4">
                  <Shirt className="h-5 w-5 text-white" />
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

function ProductsPreview() {
  const products = [
    { name: 'Hoodies', basePrice: '£15', sellFor: '£25-30' },
    { name: 'T-Shirts', basePrice: '£8', sellFor: '£15-20' },
    { name: 'Caps', basePrice: '£6', sellFor: '£12-15' },
    { name: 'Tote Bags', basePrice: '£4', sellFor: '£8-12' },
    { name: 'Stickers', basePrice: '£1', sellFor: '£3-5' },
    { name: 'Water Bottles', basePrice: '£8', sellFor: '£15-18' },
  ];

  return (
    <section className="py-24 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Popular <span className="gradient-text">Products</span>
          </h2>
          <p className="text-lg text-muted">
            Quality items your members will love
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.name}
              className="bg-card rounded-2xl p-6 border border-border text-center"
            >
              <div className="w-20 h-20 mx-auto rounded-xl bg-secondary flex items-center justify-center mb-4">
                <Shirt className="h-10 w-10 text-muted" />
              </div>
              <h3 className="font-semibold mb-2">{product.name}</h3>
              <div className="text-sm text-muted mb-1">
                Base cost: <span className="text-foreground">{product.basePrice}</span>
              </div>
              <div className="text-sm text-muted">
                Typical sell price: <span className="text-emerald-500 font-medium">{product.sellFor}</span>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-muted mt-8">
          Plus many more products available. Contact us for the full catalogue.
        </p>
      </div>
    </section>
  );
}

function HowItWorksSection() {
  const steps = [
    {
      number: '01',
      title: 'Design Your Merch',
      description: 'Upload your logo or create designs in our studio. Preview on different products.',
    },
    {
      number: '02',
      title: 'Set Your Prices',
      description: 'Choose your profit margin. We show you the base cost, you set the selling price.',
    },
    {
      number: '03',
      title: 'Launch Your Store',
      description: 'Share your branded storefront link with members. We handle everything else.',
    },
    {
      number: '04',
      title: 'Get Paid',
      description: 'Receive your profits weekly. No invoices, no hassle.',
    },
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            How It <span className="gradient-text">Works</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="w-12 h-12 mx-auto rounded-full gradient-bg flex items-center justify-center text-white font-bold mb-4">
                {step.number}
              </div>
              <h3 className="font-semibold mb-2">{step.title}</h3>
              <p className="text-muted text-sm">{step.description}</p>
            </div>
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
              Why Societies Love Our Merch Studio
            </h2>
            <p className="text-muted mb-8">
              No more ordering boxes of hoodies that never sell. No more handling
              inventory or shipping. Just design, share, and earn.
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
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-orange-500/10 to-primary/10 border border-border flex items-center justify-center">
              <div className="text-center p-8">
                <Shirt className="h-16 w-16 mx-auto text-orange-500 mb-4" />
                <p className="text-muted">Design studio preview</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function MerchandisePage() {
  return (
    <>
      <ServiceHero />
      <FeaturesSection />
      <ProductsPreview />
      <HowItWorksSection />
      <BenefitsSection />
      <FAQSection
        title="Merchandise FAQs"
        subtitle="Common questions about our merch studio"
        faqs={service.faqs}
      />
      <CTABanner />
    </>
  );
}
