'use client';

import Link from 'next/link';
import { Twitter, Linkedin, Instagram, Youtube, Mail } from 'lucide-react';
import { footerNavigation } from '@/lib/navigation';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';

const socialLinks = [
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'YouTube', icon: Youtube, href: '#' },
];

export function Footer() {
  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2">
            <Link href="/" className="inline-flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center">
                <span className="text-white font-bold text-lg">C</span>
              </div>
              <span className="text-xl font-bold text-foreground">Chapter</span>
            </Link>
            <p className="text-muted text-sm max-w-xs mb-6">
              The leading platform connecting businesses with over 1 million UK university students.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="p-2 rounded-lg bg-secondary hover:bg-primary hover:text-white transition-all duration-200"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Services</h3>
            <ul className="space-y-3">
              {footerNavigation.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-3">
              {footerNavigation.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerNavigation.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Stay Updated</h3>
            <p className="text-sm text-muted mb-4">
              Subscribe for industry insights and product updates.
            </p>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <Input
                type="email"
                placeholder="Enter your email"
                className="text-sm"
              />
              <Button variant="primary" size="sm" className="w-full">
                <Mail className="h-4 w-4 mr-2" />
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted">
            &copy; {new Date().getFullYear()} Chapter Technologies Ltd. All rights reserved.
          </p>
          <div className="flex gap-6">
            {footerNavigation.legal.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm text-muted hover:text-foreground transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
