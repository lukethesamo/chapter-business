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
  title: 'For Employers | Chapter',
  description: 'Recruit the best graduate talent. Access the UK\'s largest pool of students for apprenticeships, placements, and graduate roles.',
};

const employersCategory = serviceCategories.find(c => c.href === '/employers')!;

const benefits = [
  {
    title: 'Access Top Talent',
    description: 'Reach over 1 million students across 150+ UK universities, filtered by course, skills, and interests.',
  },
  {
    title: 'Build Employer Brand',
    description: 'Create a compelling employer profile that showcases your culture, values, and opportunities.',
  },
  {
    title: 'Targeted Recruitment',
    description: 'Target specific demographics based on university, course, year, location, and skills.',
  },
  {
    title: 'Streamline Applications',
    description: 'Integrate with your ATS to manage applications seamlessly from Chapter.',
  },
  {
    title: 'Host Virtual Events',
    description: 'Run recruitment events, webinars, and virtual career fairs through our platform.',
  },
  {
    title: 'Measure ROI',
    description: 'Track campaign performance, application quality, and cost-per-hire metrics.',
  },
];

const faqs = [
  {
    question: 'What types of roles can I advertise?',
    answer: 'You can advertise apprenticeships, internships, placements, graduate schemes, and entry-level positions. Our platform is designed for early careers recruitment.',
  },
  {
    question: 'How does skills-based matching work?',
    answer: 'Students complete skills assessments and list their interests on Chapter. Our matching algorithm connects your roles with students who have the right skills and interests.',
  },
  {
    question: 'Can I integrate with our ATS?',
    answer: 'Yes, we integrate with major ATS platforms including Workday, Greenhouse, Lever, and more. Applications can flow directly into your existing workflow.',
  },
  {
    question: 'How do campus events work?',
    answer: 'You can create and promote recruitment events through Chapter. Students can register, attend virtually or in-person, and you can follow up with attendees.',
  },
  {
    question: 'What\'s the cost per job posting?',
    answer: 'Pricing varies based on your recruitment volume and targeting requirements. We offer packages from single postings to unlimited annual plans. Contact sales for details.',
  },
];

export default function EmployersPage() {
  return (
    <>
      <ServiceCategoryHero
        badge="For Employers"
        title="Recruit the Best Graduate "
        highlightedWord="Talent"
        description="Access the UK's largest pool of student and graduate talent. From apprenticeships to graduate schemes, Chapter helps you build your future workforce."
        iconName="briefcase"
        iconColor="text-purple-500"
      />

      <ServiceGrid
        title="Employer Services"
        subtitle="Comprehensive tools for early careers recruitment"
        services={employersCategory.services}
      />

      <BenefitsSection
        title="Why Employers Choose Chapter"
        subtitle="Trusted by leading employers across all industries"
        benefits={benefits}
      />

      <Testimonials />

      <FAQSection
        title="Employer FAQs"
        subtitle="Common questions about Chapter for employers"
        faqs={faqs}
      />

      <CTABanner />
    </>
  );
}
