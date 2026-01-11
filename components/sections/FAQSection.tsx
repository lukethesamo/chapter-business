'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/Accordion';

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title?: string;
  subtitle?: string;
  faqs: FAQ[];
}

export function FAQSection({
  title = "Frequently Asked Questions",
  subtitle = "Everything you need to know about Chapter",
  faqs
}: FAQSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            {title}
          </h2>
          <p className="text-lg text-muted">
            {subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Accordion type="single" defaultValue={['faq-0']}>
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`}>
                <AccordionTrigger value={`faq-${index}`}>
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent value={`faq-${index}`}>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}

export const homepageFAQs: FAQ[] = [
  {
    question: "What types of businesses can use Chapter?",
    answer: "Chapter is designed for universities, accommodation providers, employers, student unions, societies, sports clubs, and brands who want to reach UK university students. Our platform offers tailored solutions for each business type."
  },
  {
    question: "How many students can I reach through Chapter?",
    answer: "Chapter connects you with over 1 million active UK university students across 150+ partner universities. You can target students by university, course, year, location, and interests."
  },
  {
    question: "How does pricing work?",
    answer: "We offer tiered pricing plans based on your business needs, starting from our Starter plan. Enterprise customers receive custom pricing with dedicated support. Contact our sales team for a personalized quote."
  },
  {
    question: "Can I integrate Chapter with my existing systems?",
    answer: "Yes! Chapter offers robust API access and pre-built integrations with popular CRM, ATS, and marketing platforms. Our team will help you set up seamless data flows during onboarding."
  },
  {
    question: "How long does it take to get started?",
    answer: "Most clients are up and running within 1-2 weeks. After an initial consultation, our team handles account setup, integrations, and strategy development. You'll have ongoing support to ensure success."
  },
  {
    question: "Is my data secure with Chapter?",
    answer: "Absolutely. We're fully GDPR compliant and use enterprise-grade security measures including encryption, SSO support, and regular security audits. Your data and your students' data is protected."
  },
];
