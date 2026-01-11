export interface ServiceDetails {
  slug: string;
  category: string;
  name: string;
  tagline: string;
  description: string;
  features: {
    title: string;
    description: string;
  }[];
  benefits: string[];
  integrations?: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const serviceDetails: Record<string, ServiceDetails> = {
  'student-recruitment': {
    slug: 'student-recruitment',
    category: 'universities',
    name: 'Student Recruitment Marketing',
    tagline: 'Attract the best students to your university',
    description: 'Comprehensive student recruitment marketing tools that help you reach prospective students at the right time in their decision-making journey. From awareness to enrollment, we provide the insights and channels you need.',
    features: [
      {
        title: 'Targeted Campaigns',
        description: 'Reach prospective students based on their location, interests, predicted grades, and course preferences.',
      },
      {
        title: 'Multi-Channel Outreach',
        description: 'Engage students through email, push notifications, in-app messaging, and social media integration.',
      },
      {
        title: 'Open Day Promotion',
        description: 'Promote open days and campus visits with registration tracking and automated reminders.',
      },
      {
        title: 'Application Tracking',
        description: 'Monitor the student journey from first contact to enrollment with comprehensive conversion tracking.',
      },
      {
        title: 'A/B Testing',
        description: 'Optimize your messaging with built-in A/B testing for subject lines, content, and send times.',
      },
      {
        title: 'Lead Scoring',
        description: 'Prioritize high-intent prospects with AI-powered lead scoring based on engagement behavior.',
      },
    ],
    benefits: [
      'Increase application rates by up to 40%',
      'Reduce cost-per-enrollment',
      'Improve offer holder conversion',
      'Target under-represented demographics',
      'Benchmark against sector averages',
      'Automate nurture campaigns',
    ],
    integrations: ['UCAS', 'Salesforce', 'Microsoft Dynamics', 'HubSpot', 'Mailchimp'],
    faqs: [
      {
        question: 'How do you access prospective student data?',
        answer: 'We work with students who have opted in to receive university communications. You can also import your own leads and use our platform for engagement.',
      },
      {
        question: 'Can we segment by predicted grades?',
        answer: 'Yes, students can share their predicted grades and you can target campaigns accordingly. We also offer contextual data to support widening participation goals.',
      },
      {
        question: 'How does open day tracking work?',
        answer: 'Students register through your branded landing page. We track registrations, send reminders, check-in attendees on the day, and follow up with personalized content.',
      },
    ],
  },
  'analytics': {
    slug: 'analytics',
    category: 'universities',
    name: 'Data Analytics & Insights Dashboard',
    tagline: 'Make data-driven decisions',
    description: 'Comprehensive analytics platform providing real-time insights into student engagement, campaign performance, and institutional benchmarking. Turn data into actionable intelligence.',
    features: [
      {
        title: 'Real-Time Dashboards',
        description: 'Monitor key metrics in real-time with customizable dashboards and alerts.',
      },
      {
        title: 'Student Engagement Analytics',
        description: 'Track how students interact with your content, events, and communications.',
      },
      {
        title: 'Campaign Performance',
        description: 'Measure open rates, click-through rates, conversions, and ROI for all campaigns.',
      },
      {
        title: 'Cohort Analysis',
        description: 'Compare engagement across different student cohorts, courses, and demographics.',
      },
      {
        title: 'Predictive Analytics',
        description: 'AI-powered predictions for student outcomes, retention risk, and engagement trends.',
      },
      {
        title: 'Custom Reports',
        description: 'Build custom reports and schedule automated delivery to stakeholders.',
      },
    ],
    benefits: [
      'Identify at-risk students early',
      'Optimize resource allocation',
      'Prove marketing ROI',
      'Benchmark against peers',
      'Support strategic planning',
      'Enable data-driven culture',
    ],
    integrations: ['Power BI', 'Tableau', 'Google Analytics', 'Student Record Systems'],
    faqs: [
      {
        question: 'Can we export data to our own BI tools?',
        answer: 'Yes, all data can be exported via API or scheduled data feeds. We also offer native integrations with popular BI platforms.',
      },
      {
        question: 'How is student privacy protected?',
        answer: 'We follow strict data governance protocols and are fully GDPR compliant. Analytics are aggregated where appropriate and access is role-based.',
      },
      {
        question: 'What benchmarking data is available?',
        answer: 'We provide sector benchmarks for engagement rates, campaign performance, and student satisfaction metrics, anonymized across our university network.',
      },
    ],
  },
  'ticketing': {
    slug: 'ticketing',
    category: 'student-unions',
    name: 'Event Ticketing Platform',
    tagline: 'Sell tickets with zero platform fees',
    description: 'A comprehensive event ticketing solution designed specifically for student unions and societies. Sell tickets, manage entry, and track attendance without losing money to platform fees.',
    features: [
      {
        title: 'Zero Platform Fees',
        description: 'Keep more of your ticket revenue. Pay only standard payment processing fees.',
      },
      {
        title: 'Branded Event Pages',
        description: 'Create beautiful, customizable event pages that match your union or society branding.',
      },
      {
        title: 'Multiple Ticket Types',
        description: 'Offer early bird, standard, VIP, and member pricing with flexible capacity controls.',
      },
      {
        title: 'QR Code Check-In',
        description: 'Fast, contactless check-in with our mobile app. Track real-time attendance.',
      },
      {
        title: 'Refund Management',
        description: 'Handle refund requests easily with automated processing and communication.',
      },
      {
        title: 'Post-Event Analytics',
        description: 'Understand your audience with detailed attendance and engagement data.',
      },
    ],
    benefits: [
      'Keep 100% of ticket revenue (minus payment processing)',
      'Reduce queue times with mobile check-in',
      'Increase attendance with automated reminders',
      'Understand your audience better',
      'Handle high-demand sales without crashes',
      'Integrate with social media promotion',
    ],
    faqs: [
      {
        question: 'What are the actual costs?',
        answer: 'You pay standard payment processing fees (approximately 2.9% + 20p per transaction). There are no additional platform fees, ticketing fees, or hidden charges.',
      },
      {
        question: 'Can we sell tickets for multiple events?',
        answer: 'Absolutely. Create unlimited events, manage them all from one dashboard, and even create event series for recurring events.',
      },
      {
        question: 'How does the check-in app work?',
        answer: 'Download our free app, log in with your account, and scan QR codes to check in attendees. Works offline too for venues with poor signal.',
      },
    ],
  },
  'merchandise': {
    slug: 'merchandise',
    category: 'student-unions',
    name: 'Custom Merchandise Design Studio',
    tagline: 'Design, sell, and ship custom merch',
    description: 'Create and sell custom merchandise for your society, sports club, or union. No minimum orders, no upfront costs, and we handle all printing and fulfillment.',
    features: [
      {
        title: 'Online Design Studio',
        description: 'Design custom apparel, accessories, and more with our easy-to-use design tools.',
      },
      {
        title: 'No Minimum Orders',
        description: 'Print on demand means no minimum quantities and no unsold inventory risk.',
      },
      {
        title: 'Quality Products',
        description: 'Choose from premium hoodies, t-shirts, caps, bags, and more from trusted suppliers.',
      },
      {
        title: 'Branded Storefront',
        description: 'Get your own branded online store to sell merchandise to members.',
      },
      {
        title: 'Automated Fulfillment',
        description: 'We handle printing, packing, and shipping directly to your customers.',
      },
      {
        title: 'Profit Tracking',
        description: 'Track sales, profits, and popular items with detailed analytics.',
      },
    ],
    benefits: [
      'No upfront investment required',
      'No inventory risk',
      'Professional quality prints',
      'Direct shipping to customers',
      'Set your own profit margins',
      'Easy committee handovers',
    ],
    faqs: [
      {
        question: 'How much can we earn per item?',
        answer: 'You set your own prices. Base costs vary by product (e.g., £12-18 for hoodies). If you sell at £25, you keep the difference. Most societies earn £5-10 per item.',
      },
      {
        question: 'Can we upload our own designs?',
        answer: 'Yes! Upload your society logo, event artwork, or create something new in our design studio. We support PNG, SVG, and PDF formats.',
      },
      {
        question: 'What about bulk orders for sports teams?',
        answer: 'For bulk orders (20+ items), we offer discounted base prices and can arrange for centralized delivery to your university.',
      },
    ],
  },
};

export function getServiceBySlug(category: string, slug: string): ServiceDetails | undefined {
  const service = Object.values(serviceDetails).find(
    s => s.category === category && s.slug === slug
  );
  return service;
}

export function getServicesByCategory(category: string): ServiceDetails[] {
  return Object.values(serviceDetails).filter(s => s.category === category);
}
