import type { Metadata } from 'next';
import { Space_Grotesk, Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { ReactNode } from 'react';

const display = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
});

const body = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
});

const baseUrl = 'https://iwaqar.com';
const title = 'Waqar Imtiaz | Full-Stack Developer & Frontend Lead';
const description =
  'Portfolio of Waqar Imtiaz — senior full-stack engineer and frontend lead crafting fast, reliable, user-centered web applications.';

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL(baseUrl),
  openGraph: {
    title,
    description,
    url: baseUrl,
    siteName: 'Waqar Imtiaz Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    creator: '@iwaqar',
  },
  alternates: {
    canonical: baseUrl,
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Waqar Imtiaz',
    url: baseUrl,
    jobTitle: 'Full-Stack Developer & Frontend Lead',
    email: 'hello@iwaqar.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Lahore',
      addressCountry: 'Pakistan',
    },
    sameAs: ['https://linkedin.com/in/iwaqar', 'https://github.com/waqar-imtiaz'],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`${display.variable} ${body.variable}`}>
        <ThemeProvider>
          <div className="min-h-screen">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
