// Icon name mappings - use string identifiers for serialization across server/client boundary
export type IconName =
  | 'graduation-cap'
  | 'building-2'
  | 'briefcase'
  | 'users'
  | 'megaphone'
  | 'target'
  | 'bar-chart-3'
  | 'bot'
  | 'mail'
  | 'calendar'
  | 'home'
  | 'star'
  | 'line-chart'
  | 'user-check'
  | 'ticket'
  | 'shirt'
  | 'store'
  | 'heart'
  | 'share-2'
  | 'trophy'
  | 'handshake'
  | 'sparkles'
  | 'package'
  | 'clipboard-list';

export interface ServiceItem {
  name: string;
  description: string;
  href: string;
  iconName: IconName;
}

export interface ServiceCategory {
  name: string;
  description: string;
  href: string;
  iconName: IconName;
  color: string;
  services: ServiceItem[];
}

export const serviceCategories: ServiceCategory[] = [
  {
    name: 'For Universities',
    description: 'Engage and recruit students effectively',
    href: '/universities',
    iconName: 'graduation-cap',
    color: 'text-blue-500',
    services: [
      { name: 'Student Recruitment Marketing', description: 'Attract prospective students with targeted campaigns', href: '/universities/student-recruitment', iconName: 'target' },
      { name: 'Digital Advertising', description: 'Sponsored content and display advertising', href: '/universities/advertising', iconName: 'megaphone' },
      { name: 'LMS Integration', description: 'Seamless learning management integration', href: '/universities/lms', iconName: 'graduation-cap' },
      { name: 'Analytics Dashboard', description: 'Comprehensive data insights and reporting', href: '/universities/analytics', iconName: 'bar-chart-3' },
      { name: 'Attendance Tracking', description: 'Monitor student engagement and attendance', href: '/universities/attendance', iconName: 'user-check' },
      { name: 'AI Academic Advisors', description: 'Intelligent chatbots for student support', href: '/universities/ai-advisors', iconName: 'bot' },
      { name: 'Email & Push Campaigns', description: 'Reach students with targeted notifications', href: '/universities/campaigns', iconName: 'mail' },
      { name: 'Campus Event Promotion', description: 'Promote events to your student body', href: '/universities/events', iconName: 'calendar' },
    ],
  },
  {
    name: 'For Accommodation',
    description: 'Connect with student tenants',
    href: '/accommodation',
    iconName: 'building-2',
    color: 'text-emerald-500',
    services: [
      { name: 'Property Listings', description: 'Showcase your properties to students', href: '/accommodation/listings', iconName: 'home' },
      { name: 'AI Tenant Support', description: 'Automated support agents for tenants', href: '/accommodation/ai-agents', iconName: 'bot' },
      { name: 'Tenancy Management', description: 'Streamline your tenancy operations', href: '/accommodation/management', iconName: 'clipboard-list' },
      { name: 'Booking Scheduler', description: 'Manage viewings and bookings', href: '/accommodation/bookings', iconName: 'calendar' },
      { name: 'Email Marketing', description: 'Engage prospective tenants', href: '/accommodation/email', iconName: 'mail' },
      { name: 'Review Management', description: 'Build trust with verified reviews', href: '/accommodation/reviews', iconName: 'star' },
      { name: 'Occupancy Analytics', description: 'Track and optimize occupancy rates', href: '/accommodation/analytics', iconName: 'line-chart' },
    ],
  },
  {
    name: 'For Employers',
    description: 'Recruit top student talent',
    href: '/employers',
    iconName: 'briefcase',
    color: 'text-purple-500',
    services: [
      { name: 'Apprenticeship Listings', description: 'Promote apprenticeship opportunities', href: '/employers/apprenticeships', iconName: 'graduation-cap' },
      { name: 'Placement Recruitment', description: 'Find interns and placement students', href: '/employers/placements', iconName: 'briefcase' },
      { name: 'Graduate Jobs', description: 'Advertise graduate positions', href: '/employers/graduate-jobs', iconName: 'trophy' },
      { name: 'Employer Branding', description: 'Build your employer brand profile', href: '/employers/branding', iconName: 'sparkles' },
      { name: 'Campus Events', description: 'Host recruitment events', href: '/employers/events', iconName: 'calendar' },
      { name: 'ATS Integration', description: 'Connect your applicant tracking system', href: '/employers/ats', iconName: 'clipboard-list' },
      { name: 'Targeted Campaigns', description: 'Reach specific student demographics', href: '/employers/campaigns', iconName: 'target' },
      { name: 'Skills Matching', description: 'Find candidates by skills and interests', href: '/employers/skills', iconName: 'user-check' },
    ],
  },
  {
    name: 'For Student Unions',
    description: 'Empower your student community',
    href: '/student-unions',
    iconName: 'users',
    color: 'text-orange-500',
    services: [
      { name: 'Event Ticketing', description: 'Sell tickets for events and socials', href: '/student-unions/ticketing', iconName: 'ticket' },
      { name: 'Merchandise Studio', description: 'Design and sell custom merch', href: '/student-unions/merchandise', iconName: 'shirt' },
      { name: 'Online Storefront', description: 'Build your society shop', href: '/student-unions/store', iconName: 'store' },
      { name: 'Membership Management', description: 'Manage members and subscriptions', href: '/student-unions/membership', iconName: 'users' },
      { name: 'Campaign Tools', description: 'Email and notification campaigns', href: '/student-unions/campaigns', iconName: 'mail' },
      { name: 'Fundraising', description: 'Tools for fundraising initiatives', href: '/student-unions/fundraising', iconName: 'heart' },
      { name: 'Social Integration', description: 'Connect with social platforms', href: '/student-unions/social', iconName: 'share-2' },
    ],
  },
  {
    name: 'For Brands',
    description: 'Connect with the student market',
    href: '/brands',
    iconName: 'megaphone',
    color: 'text-pink-500',
    services: [
      { name: 'Sponsored Content', description: 'Native ads and sponsored posts', href: '/brands/sponsored-content', iconName: 'sparkles' },
      { name: 'Affiliate Partnerships', description: 'Commission-based promotions', href: '/brands/affiliates', iconName: 'handshake' },
      { name: 'Event Sponsorship', description: 'Sponsor student events', href: '/brands/sponsorships', iconName: 'calendar' },
      { name: 'Ambassador Programs', description: 'Student influencer partnerships', href: '/brands/ambassadors', iconName: 'users' },
      { name: 'Product Sampling', description: 'Get products into student hands', href: '/brands/sampling', iconName: 'package' },
      { name: 'Email Marketing', description: 'Direct email campaigns to students', href: '/brands/email', iconName: 'mail' },
      { name: 'Market Research', description: 'Surveys and student insights', href: '/brands/research', iconName: 'clipboard-list' },
      { name: 'Brand Analytics', description: 'Measure brand awareness', href: '/brands/analytics', iconName: 'bar-chart-3' },
    ],
  },
];

export const mainNavigation = [
  { name: 'Services', href: '#', hasMenu: true },
  { name: 'About', href: '/about' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Resources', href: '/resources' },
];

export const footerNavigation = {
  services: [
    { name: 'For Universities', href: '/universities' },
    { name: 'For Accommodation', href: '/accommodation' },
    { name: 'For Employers', href: '/employers' },
    { name: 'For Student Unions', href: '/student-unions' },
    { name: 'For Brands', href: '/brands' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Careers', href: '/careers' },
    { name: 'Press', href: '/press' },
    { name: 'Contact', href: '/contact' },
  ],
  resources: [
    { name: 'Blog', href: '/blog' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Help Center', href: '/help' },
    { name: 'API Docs', href: '/docs' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
  ],
};
