import {
  Hero,
  StatsBar,
  LogoCarousel,
  BusinessTypeSelector,
  FeatureGrid,
  HowItWorks,
  Testimonials,
  CTABanner,
  FAQSection,
  homepageFAQs,
} from '@/components/sections';

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <LogoCarousel />
      <BusinessTypeSelector />
      <FeatureGrid />
      <HowItWorks />
      <Testimonials />
      <FAQSection faqs={homepageFAQs} />
      <CTABanner />
    </>
  );
}
