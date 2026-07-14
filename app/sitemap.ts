import type { MetadataRoute } from 'next';
import { config } from '@/lib/config';
import { locales, defaultLocale } from '@/lib/i18n';

const BASE = config.site_url;

/** Chemins (sans préfixe de langue) à inclure dans le sitemap. */
const paths = [
  '',
  '/services',
  '/suivi-colis',
  '/actualites',
  '/a-propos',
  '/contact',
  ...config.articles.map((a) => `/actualites/${a.slug}`),
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const path of paths) {
    for (const locale of locales) {
      const languages: Record<string, string> = {};
      for (const l of locales) languages[l] = `${BASE}/${l}${path}`;
      languages['x-default'] = `${BASE}/${defaultLocale}${path}`;

      entries.push({
        url: `${BASE}/${locale}${path}`,
        changeFrequency: path === '' ? 'monthly' : path.startsWith('/actualites') ? 'weekly' : 'monthly',
        priority: path === '' ? 1 : 0.7,
        alternates: { languages },
      });
    }
  }

  return entries;
}
