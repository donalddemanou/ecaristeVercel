import { config } from '@/lib/config';
import fr, { type Dictionary } from './dictionaries/fr';
import en from './dictionaries/en';
import de from './dictionaries/de';

export const locales = ['fr', 'en', 'de'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'fr';

const dictionaries: Record<Locale, Dictionary> = { fr, en, de };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries[defaultLocale];
}

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** Construit un href localisé à partir d'un chemin de config (ex: '/services'). */
export function localizedHref(locale: Locale, href: string): string {
  if (href === '/') return `/${locale}`;
  return `/${locale}${href}`;
}

/**
 * Bloc `alternates` pour les métadonnées (canonical + hreflang).
 * `path` est le chemin sans préfixe de langue (ex: '' pour l'accueil, '/services').
 */
export function buildAlternates(locale: Locale, path: string) {
  const clean = path === '/' ? '' : path;
  const languages: Record<string, string> = {};
  for (const l of locales) {
    languages[l] = `/${l}${clean}`;
  }
  languages['x-default'] = `/${defaultLocale}${clean}`;
  return {
    canonical: `/${locale}${clean}`,
    languages,
  };
}

export type { Dictionary };
export { config };
