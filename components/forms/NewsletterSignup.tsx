'use client';

import { useState } from 'react';
import { Mail, Check } from 'lucide-react';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';

export function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="flex items-center gap-2 text-emerald-500">
        <Check className="h-5 w-5" />
        <span className="text-sm font-medium">Thanks for subscribing!</span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <Input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="flex-grow"
      />
      <Button type="submit" isLoading={isSubmitting} size="md">
        <Mail className="h-4 w-4" />
      </Button>
    </form>
  );
}
