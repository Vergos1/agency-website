import '@/styles/_styles.scss';
import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import AppHeader from '@/components/AppHeader/AppHeader';
import AppFooter from '@/components/AppFooter/AppFooter';
import Favicon from '/public/favicon.ico';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'VinArt Studio',
  description: 'VinArt Studio - Web Design and Development',
  keywords: [
    'VinArt Studio',
    'Web Design',
    'Web Development',
    'Web Design Studio',
    'Web Development Studio',
  ],
  authors: [
    { name: 'VinArt Studio', url: 'https://vinartstudio.com' },
  ],
  creator: 'VinArt Studio',
  publisher: 'VinArt Studio',
  themeColor: '#0a0a0a',
  colorScheme: 'dark',
  viewport: 'width=device-width, initial-scale=1',
  icons: [{ rel: 'icon', url: Favicon.src }],
  metadataBase: new URL('https://example.com'),
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
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppHeader />
        <main className="main">{children}</main>
        <AppFooter />
      </body>
    </html>
  );
}
