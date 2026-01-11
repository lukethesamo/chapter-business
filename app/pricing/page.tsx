import { Metadata } from 'next';
import { PricingCards, FAQSection, CTABanner } from '@/components/sections';

export const metadata: Metadata = {
  title: 'Pricing | Chapter',
  description: 'Simple, transparent pricing for businesses of all sizes. Choose the plan that fits your needs.',
};

const pricingFaqs = [
  {
    question: 'Can I change plans at any time?',
    answer: 'Yes, you can upgrade or downgrade your plan at any time. When upgrading, you\'ll get immediate access to new features. When downgrading, changes take effect at the end of your billing cycle.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards (Visa, Mastercard, American Express) and can arrange invoice payment for annual Enterprise contracts.',
  },
  {
    question: 'Is there a free trial?',
    answer: 'Yes! All plans include a 14-day free trial with full access to features. No credit card required to start.',
  },
  {
    question: 'What counts as "student reach"?',
    answer: 'Student reach refers to the number of unique students you can target and communicate with per month through the platform, including email, push notifications, and in-app messaging.',
  },
  {
    question: 'Do you offer discounts for universities or non-profits?',
    answer: 'Yes, we offer special pricing for universities, student unions, and registered non-profit organizations. Contact our sales team for more information.',
  },
  {
    question: 'What happens if I exceed my plan limits?',
    answer: 'We\'ll notify you when you\'re approaching your limits. You can choose to upgrade or we can discuss custom options. We never cut off your service without warning.',
  },
  {
    question: 'Is there a setup fee?',
    answer: 'No setup fees for Starter and Growth plans. Enterprise plans may include implementation services which are quoted separately based on your needs.',
  },
  {
    question: 'Can I get a custom plan?',
    answer: 'Absolutely. Our Enterprise tier is fully customizable to your specific needs. Contact our sales team to discuss your requirements.',
  },
];

const comparisonFeatures = [
  { feature: 'Student Reach', starter: 'Up to 5,000', growth: 'Up to 50,000', enterprise: 'Unlimited' },
  { feature: 'User Seats', starter: '1', growth: '5', enterprise: 'Unlimited' },
  { feature: 'Email Campaigns', starter: true, growth: true, enterprise: true },
  { feature: 'Push Notifications', starter: false, growth: true, enterprise: true },
  { feature: 'AI Chatbots', starter: false, growth: true, enterprise: true },
  { feature: 'Analytics Dashboard', starter: 'Basic', growth: 'Advanced', enterprise: 'Custom' },
  { feature: 'A/B Testing', starter: false, growth: true, enterprise: true },
  { feature: 'API Access', starter: true, growth: true, enterprise: true },
  { feature: 'Custom Integrations', starter: false, growth: true, enterprise: true },
  { feature: 'Dedicated Account Manager', starter: false, growth: false, enterprise: true },
  { feature: 'SLA Guarantee', starter: false, growth: false, enterprise: true },
  { feature: 'Support', starter: 'Standard', growth: 'Priority', enterprise: '24/7 Dedicated' },
];

function FeatureComparison() {
  return (
    <section className="py-24 bg-secondary/20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Compare Plans</h2>
          <p className="text-lg text-muted">See which plan is right for you</p>
        </div>

        <div className="bg-card rounded-2xl border border-border overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-4 font-semibold">Feature</th>
                  <th className="text-center p-4 font-semibold">Starter</th>
                  <th className="text-center p-4 font-semibold bg-primary/5">Growth</th>
                  <th className="text-center p-4 font-semibold">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((row, index) => (
                  <tr key={row.feature} className={index % 2 === 0 ? 'bg-secondary/30' : ''}>
                    <td className="p-4 font-medium">{row.feature}</td>
                    <td className="text-center p-4">
                      {typeof row.starter === 'boolean' ? (
                        row.starter ? (
                          <span className="text-emerald-500">✓</span>
                        ) : (
                          <span className="text-muted">—</span>
                        )
                      ) : (
                        row.starter
                      )}
                    </td>
                    <td className="text-center p-4 bg-primary/5">
                      {typeof row.growth === 'boolean' ? (
                        row.growth ? (
                          <span className="text-emerald-500">✓</span>
                        ) : (
                          <span className="text-muted">—</span>
                        )
                      ) : (
                        row.growth
                      )}
                    </td>
                    <td className="text-center p-4">
                      {typeof row.enterprise === 'boolean' ? (
                        row.enterprise ? (
                          <span className="text-emerald-500">✓</span>
                        ) : (
                          <span className="text-muted">—</span>
                        )
                      ) : (
                        row.enterprise
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function PricingPage() {
  return (
    <div className="pt-20">
      <PricingCards />
      <FeatureComparison />
      <FAQSection
        title="Pricing FAQs"
        subtitle="Everything you need to know about our pricing"
        faqs={pricingFaqs}
      />
      <CTABanner />
    </div>
  );
}
