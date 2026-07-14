import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import '../globals.css';
import { config } from '@/lib/config';
import { getDictionary, isLocale, locales, type Locale } from '@/lib/i18n';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import BackToTop from '@/components/BackToTop';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const safe: Locale = isLocale(locale) ? locale : 'fr';
  const dict = getDictionary(safe);
  return {
    metadataBase: new URL(config.site_url),
    title: { default: dict.meta.default.title, template: '%s' },
    description: dict.meta.default.description,
    robots: { index: true, follow: true },
    icons: {
      icon: [
        { url: '/assets/img/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
        { url: '/assets/img/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
        { url: '/assets/img/favicon/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
      ],
      apple: '/assets/img/favicon/favicon-48x48.png',
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MovingCompany',
    name: config.site_name,
    description: dict.meta.default.description,
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

  return (
    <html lang={dict.htmlLang}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <ScrollReveal />
        <Header locale={locale} dict={dict} />
        {children}
        <Footer locale={locale} dict={dict} />
        <BackToTop label={dict.common.backToTop} />
      </body>
    </html>
  );
}
