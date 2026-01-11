'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AccordionContextType {
  openItems: string[];
  toggleItem: (value: string) => void;
  type: 'single' | 'multiple';
}

const AccordionContext = createContext<AccordionContextType | undefined>(undefined);

function useAccordionContext() {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error('Accordion components must be used within an Accordion provider');
  }
  return context;
}

interface AccordionProps {
  type?: 'single' | 'multiple';
  defaultValue?: string[];
  children: ReactNode;
  className?: string;
}

export function Accordion({ type = 'single', defaultValue = [], children, className }: AccordionProps) {
  const [openItems, setOpenItems] = useState<string[]>(defaultValue);

  const toggleItem = (value: string) => {
    if (type === 'single') {
      setOpenItems((prev) => (prev.includes(value) ? [] : [value]));
    } else {
      setOpenItems((prev) =>
        prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
      );
    }
  };

  return (
    <AccordionContext.Provider value={{ openItems, toggleItem, type }}>
      <div className={cn('space-y-2', className)}>{children}</div>
    </AccordionContext.Provider>
  );
}

interface AccordionItemProps {
  value: string;
  children: ReactNode;
  className?: string;
}

export function AccordionItem({ value, children, className }: AccordionItemProps) {
  return (
    <div className={cn('border border-border rounded-xl overflow-hidden', className)} data-value={value}>
      {children}
    </div>
  );
}

interface AccordionTriggerProps {
  value: string;
  children: ReactNode;
  className?: string;
}

export function AccordionTrigger({ value, children, className }: AccordionTriggerProps) {
  const { openItems, toggleItem } = useAccordionContext();
  const isOpen = openItems.includes(value);

  return (
    <button
      onClick={() => toggleItem(value)}
      className={cn(
        'flex items-center justify-between w-full px-6 py-4 text-left font-medium transition-colors hover:bg-secondary/50',
        className
      )}
    >
      {children}
      <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
        <ChevronDown className="h-5 w-5 text-muted" />
      </motion.div>
    </button>
  );
}

interface AccordionContentProps {
  value: string;
  children: ReactNode;
  className?: string;
}

export function AccordionContent({ value, children, className }: AccordionContentProps) {
  const { openItems } = useAccordionContext();
  const isOpen = openItems.includes(value);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="overflow-hidden"
        >
          <div className={cn('px-6 pb-4 text-muted', className)}>{children}</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
