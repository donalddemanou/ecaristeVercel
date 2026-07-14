/**
 * Configuration centrale du site ECARISTE — données NON traduisibles.
 * Tout le texte visible (titres, descriptions, contenus) vit dans les
 * dictionnaires i18n (lib/i18n/dictionaries/*). Ici ne restent que les
 * données neutres : coordonnées, réseaux sociaux, slugs, icônes, images.
 */

export type IconName =
  | 'truck'
  | 'globe'
  | 'warehouse'
  | 'package'
  | 'clock'
  | 'building'
  | 'monitor'
  | 'pin'
  | 'gear'
  | 'doc'
  | 'star'
  | 'check'
  | 'arrow-right'
  | 'chevron-down'
  | 'chevron-left'
  | 'chevron-right'
  | 'menu'
  | 'close'
  | 'phone'
  | 'mail'
  | 'facebook'
  | 'linkedin'
  | 'whatsapp';

/** Clés de navigation (les libellés sont traduits dans les dictionnaires). */
export type NavKey = 'home' | 'services' | 'tracking' | 'news' | 'about' | 'contact';

/** Slugs de services (stables, utilisés dans les URLs et les clés de traduction). */
export type ServiceSlug =
  | 'transport-national'
  | 'transport-international'
  | 'logistique'
  | 'affretement'
  | 'livraison-express'
  | 'entreposage';

/** Clés d'atouts technologiques (libellés traduits dans les dictionnaires). */
export type FeatureKey = 'digital' | 'gps' | 'tms' | 'demat';

export interface NavItem {
  key: NavKey;
  href: string;
}

export interface ServiceMeta {
  slug: ServiceSlug;
  icon: IconName;
}

export interface FeatureMeta {
  key: FeatureKey;
  icon: IconName;
}

export const config = {
  site_name: 'ECARISTE',
  site_url: 'https://www.ecariste.com',

  contact: {
    address_line: 'Avenue de Tourbillon 72',
    address_city: '1950 Sion, Suisse',
    phone: '+41 78 605 10 35',
    phone_href: '+41786051035',
    email: 'contact@ecariste.com',
  },

  social: {
    facebook: 'https://facebook.com/ecariste',
    linkedin: 'https://linkedin.com/company/ecariste',
    whatsapp: 'https://wa.me/41786051035',
  },

  nav: [
    { key: 'home', href: '/' },
    { key: 'services', href: '/services' },
    { key: 'tracking', href: '/suivi-colis' },
    { key: 'news', href: '/actualites' },
    { key: 'about', href: '/a-propos' },
    { key: 'contact', href: '/contact' },
  ] as NavItem[],

  services: [
    { slug: 'transport-national', icon: 'truck' },
    { slug: 'transport-international', icon: 'globe' },
    { slug: 'logistique', icon: 'warehouse' },
    { slug: 'affretement', icon: 'package' },
    { slug: 'livraison-express', icon: 'clock' },
    { slug: 'entreposage', icon: 'building' },
  ] as ServiceMeta[],

  features: [
    { key: 'digital', icon: 'monitor' },
    { key: 'gps', icon: 'pin' },
    { key: 'tms', icon: 'gear' },
    { key: 'demat', icon: 'doc' },
  ] as FeatureMeta[],

  /** Noms des clients (propres, non traduits) ; les textes sont dans les dictionnaires. */
  testimonialAuthors: ['Dupont Industries', 'Martin Distribution', 'Lambert & Fils'],

  /** Articles : slug + date ISO (contenu traduit dans les dictionnaires). */
  articles: [
    { slug: 'exemple-article-1', date: '2026-06-01' },
    { slug: 'exemple-article-2', date: '2026-05-15' },
    { slug: 'exemple-article-3', date: '2026-04-20' },
  ],
};

export type SiteConfig = typeof config;
