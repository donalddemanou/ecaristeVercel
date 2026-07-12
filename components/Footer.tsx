import Link from 'next/link';
import { config } from '@/lib/config';
import { Icon } from './Icon';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <>
      <section className="cta-band reveal reveal--scale">
        <div className="container cta-band__inner">
          <h2>Prêt à expédier avec nous ?</h2>
          <p>Contactez-nous dès aujourd&apos;hui pour un devis personnalisé ou une solution logistique sur mesure.</p>
          <div className="btn-group">
            <a href={`tel:${config.contact.phone_href}`} className="btn btn--primary">
              <Icon name="phone" /> Demander un devis
            </a>
            <Link href="/contact" className="btn btn--ghost">
              <Icon name="mail" /> Nous écrire
            </Link>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div className="footer-col footer-col--about">
            <Link href="/" className="logo logo--footer">
              <img
                src="/assets/img/logo-white.png"
                alt={`${config.site_name} — ${config.site_baseline}`}
                className="logo__image"
              />
            </Link>
            <p>
              Votre partenaire de confiance pour le transport de marchandises et la logistique. Expertise nationale et
              internationale au service de votre entreprise.
            </p>
            <div className="social-links">
              <a href={config.social.facebook} aria-label="Facebook">
                <Icon name="facebook" />
              </a>
              <a href={config.social.linkedin} aria-label="LinkedIn">
                <Icon name="linkedin" />
              </a>
              <a href={config.social.whatsapp} aria-label="WhatsApp">
                <Icon name="whatsapp" />
              </a>
            </div>
          </div>

          <nav className="footer-col" aria-label="Liens rapides">
            <h3>Liens rapides</h3>
            <ul>
              {config.nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>
                    <Icon name="chevron-right" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="footer-col" aria-label="Nos services">
            <h3>Services</h3>
            <ul>
              {config.services.map((service) => (
                <li key={service.slug}>
                  <Link href={`/services#${service.slug}`}>
                    <Icon name="chevron-right" />
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="footer-col">
            <h3>Contact</h3>
            <ul className="footer-contact">
              <li>
                <Icon name="pin" />
                <span>
                  {config.contact.address_line}, {config.contact.address_city}
                </span>
              </li>
              <li>
                <Icon name="phone" />
                <a href={`tel:${config.contact.phone_href}`}>{config.contact.phone}</a>
              </li>
              <li>
                <Icon name="mail" />
                <a href={`mailto:${config.contact.email}`}>{config.contact.email}</a>
              </li>
              <li>
                <Icon name="clock" />
                <span>{config.contact.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="container footer-bottom">
          <p>
            &copy; {year} {config.site_name} Transport &amp; Logistique. Tous droits réservés.
          </p>
          <div className="footer-bottom__links">
            <Link href="/mentions-legales">Mentions légales</Link>
            <Link href="/confidentialite">Politique de confidentialité</Link>
          </div>
        </div>
      </footer>
    </>
  );
}
