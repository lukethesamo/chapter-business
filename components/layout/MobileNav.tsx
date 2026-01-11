'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { serviceCategories, mainNavigation } from '@/lib/navigation';
import { getIcon } from '@/lib/icons';
import { cn } from '@/lib/utils';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [expandedServices, setExpandedServices] = useState(false);

  const toggleCategory = (categoryName: string) => {
    setExpandedCategory(expandedCategory === categoryName ? null : categoryName);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: '100%' }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: '100%' }}
      transition={{ type: 'spring', damping: 25, stiffness: 200 }}
      className="fixed inset-0 z-40 lg:hidden"
    >
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      />

      {/* Drawer */}
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-background shadow-xl overflow-y-auto"
      >
        <div className="p-6 pt-20">
          {/* Main Navigation */}
          <nav className="space-y-2">
            {/* Services Accordion */}
            <div className="border-b border-border pb-2">
              <button
                onClick={() => setExpandedServices(!expandedServices)}
                className="flex items-center justify-between w-full py-3 text-lg font-medium"
              >
                Services
                <ChevronDown
                  className={cn(
                    'h-5 w-5 transition-transform',
                    expandedServices && 'rotate-180'
                  )}
                />
              </button>

              <AnimatePresence>
                {expandedServices && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="pl-4 pb-4 space-y-2">
                      {serviceCategories.map((category) => {
                        const Icon = getIcon(category.iconName);
                        return (
                          <div key={category.name}>
                            <button
                              onClick={() => toggleCategory(category.name)}
                              className="flex items-center justify-between w-full py-2 text-muted hover:text-foreground transition-colors"
                            >
                              <div className="flex items-center gap-3">
                                <div className={cn('p-1.5 rounded-md bg-secondary', category.color)}>
                                  <Icon className="h-4 w-4" />
                                </div>
                                <span className="font-medium">{category.name}</span>
                              </div>
                              <ChevronRight
                                className={cn(
                                  'h-4 w-4 transition-transform',
                                  expandedCategory === category.name && 'rotate-90'
                                )}
                              />
                            </button>

                            <AnimatePresence>
                              {expandedCategory === category.name && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: 'auto', opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.2 }}
                                  className="overflow-hidden"
                                >
                                  <div className="pl-10 py-2 space-y-1">
                                    {category.services.map((service) => (
                                      <Link
                                        key={service.name}
                                        href={service.href}
                                        onClick={onClose}
                                        className="block py-1.5 text-sm text-muted hover:text-foreground transition-colors"
                                      >
                                        {service.name}
                                      </Link>
                                    ))}
                                    <Link
                                      href={category.href}
                                      onClick={onClose}
                                      className="block py-1.5 text-sm font-medium text-primary"
                                    >
                                      View all services
                                    </Link>
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Other Navigation Items */}
            {mainNavigation
              .filter((item) => !item.hasMenu)
              .map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={onClose}
                  className="block py-3 text-lg font-medium border-b border-border"
                >
                  {item.name}
                </Link>
              ))}
          </nav>

          {/* Auth Buttons */}
          <div className="mt-8 space-y-3">
            <Button variant="outline" className="w-full">
              Log In
            </Button>
            <Button variant="primary" className="w-full">
              Get Started
            </Button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
