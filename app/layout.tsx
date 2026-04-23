import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { FloatingWhatsApp } from '@/components/layout/floating-whatsapp';
import { Analytics } from '@vercel/analytics/next';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.parametroimaginario.pt'),
  title: {
    default: 'Parametro Imaginario Unipessoal LDA | Construção e Remodelação em Lisboa',
    template: '%s | Parametro Imaginario',
  },
  description:
    'Construtora em Lisboa e região, especializada em construção, remodelação, reabilitação e acabamentos, com clareza, compromisso e orçamento em média até 3 dias após a visita.',
  applicationName: 'Parametro Imaginario',
  keywords: [
    'construtora em Lisboa',
    'remodelações Lisboa',
    'reabilitação de imóveis Lisboa',
    'obras em Lisboa',
    'acabamentos interiores Lisboa',
    'construção de raiz Portugal',
    'Parametro Imaginario',
    'Construtora Moura',
  ],
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'pt_PT',
    url: 'https://www.parametroimaginario.pt',
    siteName: 'Parametro Imaginario Unipessoal LDA',
    title: 'Parametro Imaginario Unipessoal LDA | Construção e Remodelação em Lisboa',
    description:
      'Construção, remodelação, reabilitação e acabamentos em Lisboa e região, com experiência, clareza e acompanhamento sério do início ao fim.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Parametro Imaginario Unipessoal LDA',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Parametro Imaginario Unipessoal LDA | Construção e Remodelação em Lisboa',
    description:
      'Construção, remodelação, reabilitação e acabamentos em Lisboa e região.',
    images: ['/og-image.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Parametro Imaginario Unipessoal LDA',
    image: 'https://www.parametroimaginario.pt/og-image.jpg',
    url: 'https://www.parametroimaginario.pt',
    telephone: '+351912345678',
    areaServed: 'Lisboa e região',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Lisboa',
      addressCountry: 'PT',
    },
    sameAs: ['https://instagram.com/SEU_PERFIL'],
    description:
      'Empresa de construção, remodelação, reabilitação e acabamentos em Lisboa e região.',
  };

  return (
    <html lang="pt-PT">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        {children}
        <Footer />
        <FloatingWhatsApp />
        <Analytics />
      </body>
    </html>
  );
}