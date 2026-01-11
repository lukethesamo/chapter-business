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
  title: 'For Brands | Chapter',
  description: 'Connect with the student market through sponsored content, ambassador programs, product sampling, and targeted advertising.',
};

const brandsCategory = serviceCategories.find(c => c.href === '/brands')!;

const benefits = [
  {
    title: 'Access Gen Z',
    description: 'Reach over 1 million UK university students - the most valuable consumer demographic.',
  },
  {
    title: 'Authentic Engagement',
    description: 'Connect with students through native content, not intrusive ads. Build genuine brand affinity.',
  },
  {
    title: 'Precise Targeting',
    description: 'Target by university, course, interests, spending habits, and more.',
  },
  {
    title: 'Campus Presence',
    description: 'Build brand awareness through sponsorships, events, and ambassador programs.',
  },
  {
    title: 'Product Sampling',
    description: 'Get your products directly into students\' hands through targeted sampling campaigns.',
  },
  {
    title: 'Measurable Results',
    description: 'Track brand awareness, engagement, conversions, and ROI with comprehensive analytics.',
  },
];

const faqs = [
  {
    question: 'What types of campaigns can I run?',
    answer: 'You can run sponsored content, display advertising, email campaigns, product sampling, influencer partnerships, event sponsorships, and market research surveys.',
  },
  {
    question: 'How does targeting work?',
    answer: 'Target students by university, course of study, year, location, interests, and behaviors. Our segmentation tools help you reach your ideal audience.',
  },
  {
    question: 'Can I recruit student ambassadors?',
    answer: 'Yes! Our ambassador program tools help you recruit, manage, and track student brand ambassadors across UK universities.',
  },
  {
    question: 'How does product sampling work?',
    answer: 'We can distribute samples through university partnerships, events, and direct-to-student shipping. Campaigns can be targeted to specific demographics.',
  },
  {
    question: 'What kind of ROI can I expect?',
    answer: 'ROI varies by campaign type, but our clients typically see 3-5x return on ad spend for direct response campaigns and significant brand lift for awareness campaigns.',
  },
];

export default function BrandsPage() {
  return (
    <>
      <ServiceCategoryHero
        badge="For Brands"
        title="Connect With Generation "
        highlightedWord="Z"
        description="Reach the most valuable consumer demographic through authentic engagement. Chapter provides brands with direct access to students through sponsored content, sampling, and ambassador programs."
        iconName="megaphone"
        iconColor="text-pink-500"
      />

      <ServiceGrid
        title="Brand Services"
        subtitle="Effective ways to reach and engage students"
        services={brandsCategory.services}
      />

      <BenefitsSection
        title="Why Brands Choose Chapter"
        subtitle="Trusted by leading consumer brands"
        benefits={benefits}
      />

      <Testimonials />

      <FAQSection
        title="Brand FAQs"
        subtitle="Common questions about marketing to students"
        faqs={faqs}
      />

      <CTABanner />
    </>
  );
}
