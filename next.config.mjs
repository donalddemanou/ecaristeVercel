/** @type {import('next').NextConfig} */
const nextConfig = {
  // Redirections des anciennes URLs .php (site PHP historique) vers les URLs
  // propres de la version Next.js, pour préserver le SEO et les liens existants.
  async redirects() {
    return [
      { source: '/index.php', destination: '/', permanent: true },
      { source: '/services.php', destination: '/services', permanent: true },
      { source: '/suivi-colis.php', destination: '/suivi-colis', permanent: true },
      { source: '/actualites.php', destination: '/actualites', permanent: true },
      { source: '/a-propos.php', destination: '/a-propos', permanent: true },
      { source: '/contact.php', destination: '/contact', permanent: true },
      { source: '/mentions-legales.php', destination: '/mentions-legales', permanent: true },
      { source: '/confidentialite.php', destination: '/confidentialite', permanent: true },
      {
        source: '/actualites/:slug.php',
        destination: '/actualites/:slug',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
