'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Loader2 } from 'lucide-react';
import { Input, Textarea, Select } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';

const businessTypes = [
  { value: '', label: 'Select your business type' },
  { value: 'university', label: 'University' },
  { value: 'accommodation', label: 'Accommodation Provider' },
  { value: 'employer', label: 'Employer' },
  { value: 'student-union', label: 'Student Union / Society' },
  { value: 'brand', label: 'Brand / Advertiser' },
  { value: 'other', label: 'Other' },
];

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12"
      >
        <div className="w-16 h-16 mx-auto rounded-full gradient-bg flex items-center justify-center mb-6">
          <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
        <p className="text-muted">
          We&apos;ve received your message and will get back to you within 24 hours.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid sm:grid-cols-2 gap-6">
        <Input
          label="First Name"
          placeholder="John"
          required
        />
        <Input
          label="Last Name"
          placeholder="Smith"
          required
        />
      </div>

      <Input
        label="Work Email"
        type="email"
        placeholder="john@company.com"
        required
      />

      <Input
        label="Company Name"
        placeholder="Acme Inc."
        required
      />

      <Select
        label="Business Type"
        options={businessTypes}
        required
      />

      <Textarea
        label="Message"
        placeholder="Tell us about your goals and how we can help..."
        required
      />

      <Button
        type="submit"
        className="w-full"
        isLoading={isSubmitting}
        rightIcon={!isSubmitting ? <Send className="h-4 w-4" /> : undefined}
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>

      <p className="text-xs text-muted text-center">
        By submitting this form, you agree to our{' '}
        <a href="/privacy" className="underline hover:text-foreground">Privacy Policy</a>
        {' '}and{' '}
        <a href="/terms" className="underline hover:text-foreground">Terms of Service</a>.
      </p>
    </form>
  );
}
