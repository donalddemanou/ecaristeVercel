import type { Metadata } from 'next';
import './globals.css';
import { config } from '@/lib/config';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = {
  metadataBase: new URL(config.site_url),
  title: {
    default: config.default_title,
    template: '%s',
  },
  description: config.default_description,
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: '/assets/img/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/assets/img/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/assets/img/favicon/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
    ],
    apple: '/assets/img/favicon/favicon-48x48.png',
  },
  openGraph: {
    type: 'website',
    siteName: config.site_name,
    title: config.default_title,
    description: config.default_description,
    url: config.site_url,
    locale: 'fr_FR',
  },
  twitter: { card: 'summary' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MovingCompany',
  name: config.site_name,
  description: config.default_description,
  url: config.site_url,
  telephone: config.contact.phone,
  email: config.contact.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: config.contact.address_line,
    addressLocality: 'Sion',
    postalCode: '1950',
    addressCountry: 'CH',
  },
  openingHours: 'Mo-Fr 08:00-18:00',
  sameAs: [config.social.facebook, config.social.linkedin],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ScrollReveal />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
