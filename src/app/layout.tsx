import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: {
    default: 'Eiendomsanalyse - Roger Vodal',
    template: '%s | Roger Vodal',
  },
  description: 'Placeanalyser og eiendomsinformasjon for Roger Vodals eiendomsportefølje i Oslo',
  keywords: ['Oslo', 'eiendom', 'placeanalyse', 'Roger Vodal'],
  authors: [{ name: 'Natural State' }, { name: 'Roger Vodal' }],
  openGraph: {
    type: 'website',
    locale: 'nb_NO',
    siteName: 'Eiendomsanalyse - Roger Vodal',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nb" className={inter.variable}>
      <body className="flex min-h-screen flex-col bg-lokka-light text-lokka-neutral antialiased">
        <Header />
        <main className="flex-1 pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
