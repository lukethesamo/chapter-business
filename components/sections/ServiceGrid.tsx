'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card';
import { type ServiceItem } from '@/lib/navigation';
import { getIcon } from '@/lib/icons';

interface ServiceGridProps {
  title: string;
  subtitle: string;
  services: ServiceItem[];
}

export function ServiceGrid({ title, subtitle, services }: ServiceGridProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">{subtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = getIcon(service.iconName);
            return (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={service.href}>
                  <Card hover className="h-full group cursor-pointer">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="flex items-center gap-2">
                        {service.name}
                        <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      </CardTitle>
                      <CardDescription>{service.description}</CardDescription>
                    </CardHeader>
                  </Card>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
