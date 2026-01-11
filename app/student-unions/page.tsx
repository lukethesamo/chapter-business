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
  title: 'For Student Unions & Societies | Chapter',
  description: 'Empower your student community with ticketing, merchandise, membership management, and fundraising tools.',
};

const studentUnionsCategory = serviceCategories.find(c => c.href === '/student-unions')!;

const benefits = [
  {
    title: 'Zero Platform Fees',
    description: 'Sell event tickets without losing money to platform fees. Keep more of your ticket revenue.',
  },
  {
    title: 'Custom Merchandise',
    description: 'Design and sell society merchandise with our easy-to-use studio. No minimum orders.',
  },
  {
    title: 'Manage Members',
    description: 'Track memberships, collect dues, and communicate with your members all in one place.',
  },
  {
    title: 'Boost Fundraising',
    description: 'Run crowdfunding campaigns, charity drives, and sponsorship initiatives.',
  },
  {
    title: 'Event Promotion',
    description: 'Reach students across your university and beyond with targeted event promotion.',
  },
  {
    title: 'Engagement Analytics',
    description: 'Understand what your members want with detailed engagement and attendance data.',
  },
];

const faqs = [
  {
    question: 'Is there really no platform fee for ticketing?',
    answer: 'Yes! Student unions and societies pay no platform fees for ticket sales. You only pay standard payment processing fees (around 2.9% + 20p per transaction).',
  },
  {
    question: 'How does the merchandise studio work?',
    answer: 'Upload your designs or create them in our studio. Set your prices and we handle printing, fulfillment, and delivery. You earn the margin on every sale.',
  },
  {
    question: 'Can multiple committee members access the platform?',
    answer: 'Yes, you can add multiple users with different permission levels. Perfect for committee handovers too.',
  },
  {
    question: 'Do you integrate with our university\'s systems?',
    answer: 'We integrate with most university student management systems for membership verification. Contact us about your specific setup.',
  },
  {
    question: 'What payment methods are supported?',
    answer: 'We support all major credit/debit cards, Apple Pay, Google Pay, and we can set up direct debit for recurring memberships.',
  },
];

export default function StudentUnionsPage() {
  return (
    <>
      <ServiceCategoryHero
        badge="For Student Unions & Societies"
        title="Supercharge Your Student "
        highlightedWord="Community"
        description="Everything your union, society, or sports club needs to thrive. From ticketing to merchandise, Chapter provides the tools to engage members and grow."
        iconName="users"
        iconColor="text-orange-500"
      />

      <ServiceGrid
        title="Student Union Services"
        subtitle="Tools built specifically for student organizations"
        services={studentUnionsCategory.services}
      />

      <BenefitsSection
        title="Why Student Unions Choose Chapter"
        subtitle="Trusted by unions and societies across the UK"
        benefits={benefits}
      />

      <Testimonials />

      <FAQSection
        title="Student Union FAQs"
        subtitle="Common questions about Chapter for student unions"
        faqs={faqs}
      />

      <CTABanner />
    </>
  );
}
