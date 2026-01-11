'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { serviceCategories, type ServiceCategory } from '@/lib/navigation';
import { getIcon } from '@/lib/icons';
import { cn } from '@/lib/utils';

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MegaMenu({ isOpen, onClose }: MegaMenuProps) {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
      className="absolute top-full left-0 right-0 z-50"
      onMouseLeave={onClose}
    >
      <div className="glass border-b border-border shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-5 gap-8">
            {serviceCategories.map((category) => (
              <CategoryColumn key={category.name} category={category} onClose={onClose} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function CategoryColumn({ category, onClose }: { category: ServiceCategory; onClose: () => void }) {
  const Icon = getIcon(category.iconName);

  return (
    <div>
      <Link
        href={category.href}
        onClick={onClose}
        className="group flex items-center gap-3 mb-4 pb-3 border-b border-border"
      >
        <div className={cn('p-2 rounded-lg bg-secondary', category.color)}>
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <span className="font-semibold text-foreground group-hover:text-primary transition-colors">
            {category.name}
          </span>
          <p className="text-xs text-muted">{category.description}</p>
        </div>
      </Link>
      <ul className="space-y-1">
        {category.services.slice(0, 6).map((service) => {
          const ServiceIcon = getIcon(service.iconName);
          return (
            <li key={service.name}>
              <Link
                href={service.href}
                onClick={onClose}
                className="group flex items-center gap-2 py-1.5 text-sm text-muted hover:text-foreground transition-colors"
              >
                <ServiceIcon className="h-4 w-4 text-muted group-hover:text-primary transition-colors" />
                <span>{service.name}</span>
              </Link>
            </li>
          );
        })}
        {category.services.length > 6 && (
          <li>
            <Link
              href={category.href}
              onClick={onClose}
              className="inline-flex items-center gap-1 mt-2 text-sm font-medium text-primary hover:underline"
            >
              View all
              <ChevronRight className="h-3 w-3" />
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
}
