'use client';

import { forwardRef, HTMLAttributes } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

interface CardProps extends Omit<HTMLMotionProps<'div'>, 'ref'> {
  variant?: 'default' | 'glass' | 'elevated' | 'outline';
  hover?: boolean;
}

const variants = {
  default: 'bg-card border border-border',
  glass: 'glass',
  elevated: 'bg-card shadow-xl shadow-black/5',
  outline: 'bg-transparent border-2 border-border',
};

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', hover = false, children, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        className={cn(
          'rounded-2xl p-6',
          variants[variant],
          hover && 'transition-all duration-300 hover:shadow-lg hover:-translate-y-1',
          className
        )}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

Card.displayName = 'Card';

export const CardHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('mb-4', className)} {...props} />
  )
);
CardHeader.displayName = 'CardHeader';

export const CardTitle = forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3 ref={ref} className={cn('text-xl font-semibold text-card-foreground', className)} {...props} />
  )
);
CardTitle.displayName = 'CardTitle';

export const CardDescription = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn('text-muted mt-1', className)} {...props} />
  )
);
CardDescription.displayName = 'CardDescription';

export const CardContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('', className)} {...props} />
  )
);
CardContent.displayName = 'CardContent';

export const CardFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('mt-4 flex items-center', className)} {...props} />
  )
);
CardFooter.displayName = 'CardFooter';
