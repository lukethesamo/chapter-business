import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import localFont from 'next/font/local'

export const metadata: Metadata = {
  title: "Chapter | Reach 1M+ UK Students",
  description: "The leading B2B platform connecting universities, accommodation providers, employers, and brands with over 1 million UK university students.",
  keywords: ["student marketing", "university recruitment", "student accommodation", "graduate recruitment", "student engagement", "UK students"],
  authors: [{ name: 'Chapter Team' }],
  creator: 'Chapter',
  publisher: 'Chapter',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://business.chapteruni.com'),
  openGraph: {
    title: 'Chapter | Reach 1M+ UK Students',
    description: 'The leading B2B platform connecting universities, accommodation providers, employers, and brands with over 1 million UK university students.',
    url: 'https://business.chapteruni.com',
    siteName: 'Chapter',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Chapter App Preview',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chapter | Reach 1M+ UK Students',
    description: 'The leading B2B platform connecting universities, accommodation providers, employers, and brands with over 1 million UK university students.',
    images: ['/twitter-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const sfProRounded = localFont({
  src: [
    { path: '../fonts/SFProRounded-Ultralight.woff2', weight: '100', style: 'normal' },
    { path: '../fonts/SFProRounded-Thin.woff2', weight: '200', style: 'normal' },
    { path: '../fonts/SFProRounded-Light.woff2', weight: '300', style: 'normal' },
    { path: '../fonts/SFProRounded-Regular.woff2', weight: '400', style: 'normal' },
    { path: '../fonts/SFProRounded-Medium.woff2', weight: '500', style: 'normal' },
    { path: '../fonts/SFProRounded-Semibold.woff2', weight: '600', style: 'normal' },
    { path: '../fonts/SFProRounded-Bold.woff2', weight: '700', style: 'normal' },
    { path: '../fonts/SFProRounded-Heavy.woff2', weight: '800', style: 'normal' },
    { path: '../fonts/SFProRounded-Black.woff2', weight: '900', style: 'normal' },
  ],
  variable: '--font-sfpro-rounded',
  display: 'swap',
  fallback: ['ui-sans-serif', 'system-ui', 'Segoe UI', 'Arial'],
  preload: true,
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={sfProRounded.variable} suppressHydrationWarning>
      <body className="antialiased">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
