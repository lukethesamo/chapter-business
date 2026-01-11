import { Metadata } from 'next';
import { motion } from 'framer-motion';
import { Target, Heart, Lightbulb, Users, Award, Globe } from 'lucide-react';
import { CTABanner } from '@/components/sections';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'About Us | Chapter',
  description: 'Learn about Chapter\'s mission to connect businesses with the UK student community.',
};

const values = [
  {
    icon: Target,
    title: 'Mission-Driven',
    description: 'We\'re passionate about helping students succeed and connecting them with opportunities that matter.',
  },
  {
    icon: Heart,
    title: 'Student-First',
    description: 'Every decision we make considers the impact on the student experience first and foremost.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'We continuously push the boundaries of what\'s possible in student engagement technology.',
  },
  {
    icon: Users,
    title: 'Partnership',
    description: 'We succeed when our partners succeed. True partnership is at the heart of everything we do.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We hold ourselves to the highest standards in product quality, security, and customer service.',
  },
  {
    icon: Globe,
    title: 'Inclusivity',
    description: 'We believe in equal opportunities and work to make education more accessible to all.',
  },
];

const timeline = [
  {
    year: '2020',
    title: 'Founded in Derby',
    description: 'Chapter was born from a simple idea: students deserve better tools to navigate university life.',
  },
  {
    year: '2021',
    title: 'First University Partners',
    description: 'We partnered with our first 10 universities, proving our concept and refining our platform.',
  },
  {
    year: '2022',
    title: '100K Students',
    description: 'Reached our first major milestone of 100,000 active students using Chapter daily.',
  },
  {
    year: '2023',
    title: 'B2B Platform Launch',
    description: 'Launched our comprehensive B2B platform for universities, employers, and accommodation providers.',
  },
  {
    year: '2024',
    title: '1M+ Students',
    description: 'Surpassed 1 million active students across 150+ UK universities.',
  },
  {
    year: '2025',
    title: 'AI Integration',
    description: 'Launched AI-powered tools including intelligent chatbots and predictive analytics.',
  },
];

const stats = [
  { value: '1M+', label: 'Active Students' },
  { value: '150+', label: 'University Partners' },
  { value: '500+', label: 'Business Partners' },
  { value: '50+', label: 'Team Members' },
];

function AboutHero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
          Our <span className="gradient-text">Mission</span>
        </h1>
        <p className="text-xl text-muted max-w-3xl mx-auto mb-12">
          We&apos;re building the future of student engagement, connecting businesses with the
          UK&apos;s largest student community through innovative technology and meaningful partnerships.
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl lg:text-5xl font-bold gradient-text mb-2">{stat.value}</div>
              <div className="text-muted">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StorySection() {
  return (
    <section className="py-24 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">The Chapter Story</h2>
            <div className="space-y-4 text-muted">
              <p>
                Chapter began with a simple observation: the university experience was fragmented.
                Students juggled dozens of apps, websites, and platforms just to manage their
                academic and social lives.
              </p>
              <p>
                Founded in 2020 by a team of university graduates who experienced these challenges
                firsthand, we set out to build a unified platform that would make university life
                simpler, more connected, and more rewarding.
              </p>
              <p>
                Today, Chapter serves over 1 million students across the UK, while providing
                powerful tools for universities, employers, accommodation providers, and brands
                to meaningfully engage with this valuable audience.
              </p>
              <p>
                Our vision extends beyond just connecting students with services. We&apos;re building
                an ecosystem where students can discover opportunities, universities can better
                support their communities, and businesses can build authentic relationships with
                the next generation.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 border border-border flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto rounded-2xl gradient-bg flex items-center justify-center mb-4">
                  <span className="text-4xl font-bold text-white">C</span>
                </div>
                <p className="text-muted">Chapter HQ, Derby</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ValuesSection() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Values</h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            The principles that guide everything we do
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value) => (
            <Card key={value.title} hover>
              <CardHeader>
                <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-4">
                  <value.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle>{value.title}</CardTitle>
                <CardDescription>{value.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function TimelineSection() {
  return (
    <section className="py-24 bg-secondary/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Journey</h2>
          <p className="text-lg text-muted">From startup to the UK&apos;s leading student platform</p>
        </div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary" />

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={item.year} className="relative pl-20">
                <div className="absolute left-5 w-6 h-6 rounded-full gradient-bg flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-white" />
                </div>
                <div className="bg-card rounded-xl p-6 border border-border">
                  <span className="text-sm font-bold text-primary">{item.year}</span>
                  <h3 className="font-semibold mt-1 mb-2">{item.title}</h3>
                  <p className="text-muted text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <StorySection />
      <ValuesSection />
      <TimelineSection />
      <CTABanner />
    </>
  );
}
