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
  title: 'For Universities | Chapter',
  description: 'Engage students at every stage. From recruitment to graduation, Chapter provides the tools universities need to connect with students.',
};

const universityCategory = serviceCategories.find(c => c.href === '/universities')!;

const benefits = [
  {
    title: 'Increase Enrollment',
    description: 'Reach prospective students at the right time in their decision-making journey with targeted campaigns.',
  },
  {
    title: 'Improve Retention',
    description: 'Keep students engaged throughout their academic journey with personalized communications.',
  },
  {
    title: 'Streamline Operations',
    description: 'Automate routine inquiries with AI chatbots, freeing staff to focus on high-value interactions.',
  },
  {
    title: 'Data-Driven Decisions',
    description: 'Access comprehensive analytics to understand student behavior and optimize your strategies.',
  },
  {
    title: 'Enhance Student Experience',
    description: 'Provide students with the information they need, when they need it, through their preferred channels.',
  },
  {
    title: 'Seamless Integration',
    description: 'Connect with your existing SIS, CRM, and LMS systems for unified data management.',
  },
];

const faqs = [
  {
    question: 'How does Chapter integrate with our existing systems?',
    answer: 'Chapter offers native integrations with popular SIS, CRM, and LMS platforms including Banner, Salesforce, Canvas, and Blackboard. Our API also allows for custom integrations with any system.',
  },
  {
    question: 'Can we target specific student demographics?',
    answer: 'Yes, you can target students by university, course, year of study, location, interests, and more. Our detailed segmentation tools help you reach exactly the right audience.',
  },
  {
    question: 'What kind of analytics are available?',
    answer: 'Our analytics dashboard provides insights on campaign performance, student engagement, conversion rates, A/B test results, and more. You can also export data for further analysis.',
  },
  {
    question: 'How does the AI chatbot work?',
    answer: 'Our AI chatbots are trained on your university\'s specific information and FAQs. They can handle common inquiries 24/7, escalating complex questions to human staff when needed.',
  },
  {
    question: 'Is Chapter GDPR compliant?',
    answer: 'Absolutely. Chapter is fully GDPR compliant with robust data protection measures, consent management, and data portability features.',
  },
];

export default function UniversitiesPage() {
  return (
    <>
      <ServiceCategoryHero
        badge="For Universities"
        title="Engage Students at Every "
        highlightedWord="Stage"
        description="From recruitment to graduation, Chapter provides the tools universities need to connect with students. Increase enrollment, improve retention, and enhance the student experience."
        iconName="graduation-cap"
        iconColor="text-blue-500"
      />

      <ServiceGrid
        title="Our University Services"
        subtitle="Comprehensive solutions to support your student engagement goals"
        services={universityCategory.services}
      />

      <BenefitsSection
        title="Why Universities Choose Chapter"
        subtitle="Join over 150 UK universities already using Chapter"
        benefits={benefits}
      />

      <Testimonials />

      <FAQSection
        title="University FAQs"
        subtitle="Common questions about Chapter for universities"
        faqs={faqs}
      />

      <CTABanner />
    </>
  );
}
