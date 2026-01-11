'use client';

import { forwardRef, InputHTMLAttributes, TextareaHTMLAttributes, SelectHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, helperText, id, ...props }, ref) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, '-');

    return (
      <div className="space-y-2">
        {label && (
          <label htmlFor={inputId} className="block text-sm font-medium">
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={cn(
            'w-full px-4 py-3 rounded-xl border bg-background text-foreground transition-colors',
            'placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent',
            error && 'border-destructive focus:ring-destructive',
            className
          )}
          {...props}
        />
        {error && <p className="text-sm text-destructive">{error}</p>}
        {helperText && !error && <p className="text-sm text-muted">{helperText}</p>}
      </div>
    );
  }
);

Input.displayName = 'Input';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, helperText, id, ...props }, ref) => {
    const textareaId = id || label?.toLowerCase().replace(/\s+/g, '-');

    return (
      <div className="space-y-2">
        {label && (
          <label htmlFor={textareaId} className="block text-sm font-medium">
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={textareaId}
          className={cn(
            'w-full px-4 py-3 rounded-xl border bg-background text-foreground transition-colors resize-y min-h-[120px]',
            'placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent',
            error && 'border-destructive focus:ring-destructive',
            className
          )}
          {...props}
        />
        {error && <p className="text-sm text-destructive">{error}</p>}
        {helperText && !error && <p className="text-sm text-muted">{helperText}</p>}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  helperText?: string;
  options: { value: string; label: string }[];
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, label, error, helperText, id, options, ...props }, ref) => {
    const selectId = id || label?.toLowerCase().replace(/\s+/g, '-');

    return (
      <div className="space-y-2">
        {label && (
          <label htmlFor={selectId} className="block text-sm font-medium">
            {label}
          </label>
        )}
        <select
          ref={ref}
          id={selectId}
          className={cn(
            'w-full px-4 py-3 rounded-xl border bg-background text-foreground transition-colors appearance-none',
            'focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent',
            error && 'border-destructive focus:ring-destructive',
            className
          )}
          {...props}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {error && <p className="text-sm text-destructive">{error}</p>}
        {helperText && !error && <p className="text-sm text-muted">{helperText}</p>}
      </div>
    );
  }
);

Select.displayName = 'Select';
