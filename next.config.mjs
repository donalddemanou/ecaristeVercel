/** @type {import('next').NextConfig} */
const nextConfig = {
  // Redirections des anciennes URLs .php (site PHP francophone historique) vers
  // les URLs propres et localisées (français) de la version Next.js, pour
  // préserver le SEO et les liens existants.
  async redirects() {
    return [
      { source: '/index.php', destination: '/fr', permanent: true },
      { source: '/services.php', destination: '/fr/services', permanent: true },
      { source: '/suivi-colis.php', destination: '/fr/suivi-colis', permanent: true },
      { source: '/actualites.php', destination: '/fr/actualites', permanent: true },
      { source: '/a-propos.php', destination: '/fr/a-propos', permanent: true },
      { source: '/contact.php', destination: '/fr/contact', permanent: true },
      { source: '/mentions-legales.php', destination: '/fr/mentions-legales', permanent: true },
      { source: '/confidentialite.php', destination: '/fr/confidentialite', permanent: true },
      { source: '/actualites/:slug.php', destination: '/fr/actualites/:slug', permanent: true },
    ];
  },
};

export default nextConfig;
