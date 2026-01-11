import { Metadata } from 'next';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { ContactForm } from '@/components/forms/ContactForm';
import { Card } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'Contact Us | Chapter',
  description: 'Get in touch with Chapter. Book a demo, ask questions, or learn how we can help you reach UK students.',
};

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    details: 'hello@chapter.io',
    description: 'Drop us an email anytime',
  },
  {
    icon: Phone,
    title: 'Phone',
    details: '+44 (0) 1234 567 890',
    description: 'Mon-Fri from 9am to 6pm',
  },
  {
    icon: MapPin,
    title: 'Office',
    details: 'Derby, United Kingdom',
    description: 'Chapter HQ',
  },
  {
    icon: Clock,
    title: 'Response Time',
    details: 'Within 24 hours',
    description: 'We\'ll get back to you fast',
  },
];

function ContactHero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
          Let&apos;s <span className="gradient-text">Talk</span>
        </h1>
        <p className="text-xl text-muted max-w-2xl mx-auto">
          Ready to reach 1M+ UK students? Book a demo, ask questions, or tell us how we can help
          your business connect with the student market.
        </p>
      </div>
    </section>
  );
}

function ContactInfo() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">Get in Touch</h2>
        <p className="text-muted">
          Have a question or want to learn more? Our team is here to help.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        {contactInfo.map((item) => (
          <div
            key={item.title}
            className="flex items-start gap-4 p-4 rounded-xl bg-secondary/50"
          >
            <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center flex-shrink-0">
              <item.icon className="h-5 w-5 text-white" />
            </div>
            <div>
              <div className="font-semibold">{item.title}</div>
              <div className="text-foreground">{item.details}</div>
              <div className="text-sm text-muted">{item.description}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="pt-6 border-t border-border">
        <h3 className="font-semibold mb-4">Book a Demo</h3>
        <p className="text-muted text-sm mb-4">
          Want to see Chapter in action? Schedule a personalized demo with our team.
        </p>
        <div className="aspect-video rounded-xl bg-secondary/50 border border-border flex items-center justify-center">
          <div className="text-center p-4">
            <div className="w-12 h-12 mx-auto rounded-xl gradient-bg flex items-center justify-center mb-3">
              <Clock className="h-6 w-6 text-white" />
            </div>
            <p className="text-sm text-muted">Calendar booking widget placeholder</p>
            <p className="text-xs text-muted mt-1">Calendly or similar integration</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <>
      <ContactHero />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
              <ContactForm />
            </Card>

            <ContactInfo />
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="py-16 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2">Visit Our Office</h2>
            <p className="text-muted">We&apos;re based in the heart of Derby</p>
          </div>

          <div className="aspect-[21/9] rounded-2xl bg-secondary border border-border flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-12 w-12 mx-auto text-muted mb-3" />
              <p className="text-muted">Map integration placeholder</p>
              <p className="text-sm text-muted">Google Maps or similar</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
