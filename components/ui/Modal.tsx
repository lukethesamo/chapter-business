'use client';

import { ReactNode, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const sizes = {
  sm: 'max-w-md',
  md: 'max-w-lg',
  lg: 'max-w-2xl',
  xl: 'max-w-4xl',
};

export function Modal({ isOpen, onClose, children, className, size = 'md' }: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div
              className={cn(
                'relative w-full bg-card rounded-2xl shadow-2xl',
                sizes[size],
                className
              )}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-lg hover:bg-secondary transition-colors"
              >
                <X className="h-5 w-5 text-muted" />
              </button>
              {children}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export function ModalHeader({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn('p-6 pb-0', className)}>{children}</div>;
}

export function ModalTitle({ children, className }: { children: ReactNode; className?: string }) {
  return <h2 className={cn('text-2xl font-bold', className)}>{children}</h2>;
}

export function ModalDescription({ children, className }: { children: ReactNode; className?: string }) {
  return <p className={cn('text-muted mt-2', className)}>{children}</p>;
}

export function ModalContent({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn('p-6', className)}>{children}</div>;
}

export function ModalFooter({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn('p-6 pt-0 flex gap-3 justify-end', className)}>{children}</div>;
}
