import { Metadata } from 'next';
import {
  ServiceCategoryHero,
  ServiceGrid,
  BenefitsSection,
  Testimonials,
  FAQSection,
  CTABanner,
} from '@/components/sections';
import { serviceCategories } from '@/lib/navigation';

export const metadata: Metadata = {
  title: 'For Accommodation Providers | Chapter',
  description: 'Connect with students searching for their perfect home. Showcase properties, automate tenant support, and maximize occupancy.',
};

const accommodationCategory = serviceCategories.find(c => c.href === '/accommodation')!;

const benefits = [
  {
    title: 'Reach Qualified Tenants',
    description: 'Access over 1 million students actively searching for accommodation near their university.',
  },
  {
    title: 'Reduce Vacancy Rates',
    description: 'Fill rooms faster with targeted marketing campaigns timed to the student rental cycle.',
  },
  {
    title: 'Automate Support',
    description: 'AI-powered tenant support agents handle inquiries 24/7, reducing staff workload.',
  },
  {
    title: 'Streamline Operations',
    description: 'Manage viewings, bookings, and tenant communications from a single dashboard.',
  },
  {
    title: 'Build Trust',
    description: 'Collect and showcase verified reviews to build credibility with prospective tenants.',
  },
  {
    title: 'Track Performance',
    description: 'Comprehensive analytics on listing performance, conversion rates, and occupancy trends.',
  },
];

const faqs = [
  {
    question: 'How do students find our properties?',
    answer: 'Your properties are displayed in Chapter\'s accommodation search, which students can filter by location, price, amenities, and more. You can also run targeted advertising campaigns to boost visibility.',
  },
  {
    question: 'How does the AI tenant support work?',
    answer: 'Our AI agents are trained on your property information, policies, and FAQs. They can answer tenant questions, schedule viewings, and handle maintenance requests 24/7, escalating to your team when needed.',
  },
  {
    question: 'Can I integrate with my existing property management system?',
    answer: 'Yes, Chapter integrates with popular PMS platforms including MRI, Yardi, and Arthur. We also offer API access for custom integrations.',
  },
  {
    question: 'What\'s the cost per listing?',
    answer: 'Pricing depends on your portfolio size and requirements. We offer plans suitable for single properties to large portfolios. Contact our sales team for a custom quote.',
  },
  {
    question: 'How do reviews work?',
    answer: 'Students who have lived in your properties can leave verified reviews. You can respond to reviews and showcase positive feedback on your listings.',
  },
];

export default function AccommodationPage() {
  return (
    <>
      <ServiceCategoryHero
        badge="For Accommodation Providers"
        title="Fill Every Room, Every "
        highlightedWord="Year"
        description="Connect directly with students searching for their perfect home. Our platform puts your properties in front of qualified tenants with tools to manage the entire journey."
        iconName="building-2"
        iconColor="text-emerald-500"
      />

      <ServiceGrid
        title="Accommodation Services"
        subtitle="Everything you need to attract and manage student tenants"
        services={accommodationCategory.services}
      />

      <BenefitsSection
        title="Why Accommodation Providers Choose Chapter"
        subtitle="Trusted by leading student accommodation providers across the UK"
        benefits={benefits}
      />

      <Testimonials />

      <FAQSection
        title="Accommodation FAQs"
        subtitle="Common questions about Chapter for accommodation providers"
        faqs={faqs}
      />

      <CTABanner />
    </>
  );
}
