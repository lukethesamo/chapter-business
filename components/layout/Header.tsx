'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { MegaMenu } from './MegaMenu';
import { MobileNav } from './MobileNav';
import { mainNavigation } from '@/lib/navigation';
import { cn } from '@/lib/utils';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Check for system preference or saved preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', isDarkMode ? 'light' : 'dark');
  };

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled ? 'glass shadow-lg' : 'bg-transparent'
        )}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">C</span>
                </div>
                <span className="text-xl font-bold text-foreground">Chapter</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {mainNavigation.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.hasMenu && setIsMegaMenuOpen(true)}
                >
                  {item.hasMenu ? (
                    <button
                      className="flex items-center gap-1 text-sm font-medium text-muted hover:text-foreground transition-colors"
                      onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
                    >
                      {item.name}
                      <ChevronDown
                        className={cn(
                          'h-4 w-4 transition-transform',
                          isMegaMenuOpen && 'rotate-180'
                        )}
                      />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-sm font-medium text-muted hover:text-foreground transition-colors"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-4">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg hover:bg-secondary transition-colors"
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </button>
              <Button variant="ghost" size="sm">
                Log In
              </Button>
              <Button variant="primary" size="sm">
                Get Started
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg hover:bg-secondary transition-colors"
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg hover:bg-secondary transition-colors"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </nav>

        {/* Mega Menu */}
        <AnimatePresence>
          {isMegaMenuOpen && (
            <MegaMenu isOpen={isMegaMenuOpen} onClose={() => setIsMegaMenuOpen(false)} />
          )}
        </AnimatePresence>
      </header>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileNav isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
        )}
      </AnimatePresence>
    </>
  );
}
