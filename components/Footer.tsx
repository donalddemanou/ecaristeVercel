import Link from 'next/link';
import { config } from '@/lib/config';
import { localizedHref, type Dictionary, type Locale } from '@/lib/i18n';
import { Icon } from './Icon';

export default function Footer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const year = new Date().getFullYear();

  return (
    <>
      <section className="cta-band reveal reveal--scale">
        <div className="container cta-band__inner">
          <h2>{dict.footer.ctaTitle}</h2>
          <p>{dict.footer.ctaText}</p>
          <div className="btn-group">
            <a href={`tel:${config.contact.phone_href}`} className="btn btn--primary">
              <Icon name="phone" /> {dict.common.quote}
            </a>
            <Link href={localizedHref(locale, '/contact')} className="btn btn--ghost">
              <Icon name="mail" /> {dict.footer.ctaWrite}
            </Link>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div className="footer-col footer-col--about">
            <Link href={localizedHref(locale, '/')} className="logo logo--footer">
              <img
                src="/assets/img/logo-white.png"
                alt={`${config.site_name} — ${dict.common.baseline}`}
                className="logo__image"
              />
            </Link>
            <p>{dict.footer.aboutText}</p>
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

          <nav className="footer-col" aria-label={dict.footer.quickLinks}>
            <h3>{dict.footer.quickLinks}</h3>
            <ul>
              {config.nav.filter((item) => !item.hidden).map((item) => (
                <li key={item.key}>
                  <Link href={localizedHref(locale, item.href)}>
                    <Icon name="chevron-right" />
                    {dict.nav[item.key]}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="footer-col" aria-label={dict.footer.servicesTitle}>
            <h3>{dict.footer.servicesTitle}</h3>
            <ul>
              {config.services.map((service) => (
                <li key={service.slug}>
                  <Link href={`${localizedHref(locale, '/services')}#${service.slug}`}>
                    <Icon name="chevron-right" />
                    {dict.servicesContent[service.slug].title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="footer-col">
            <h3>{dict.footer.contactTitle}</h3>
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
                <span>{dict.common.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="container footer-bottom">
          <p>
            &copy; {year} {config.site_name} {dict.footer.rights}
          </p>
          <div className="footer-bottom__links">
            <Link href={localizedHref(locale, '/mentions-legales')}>{dict.footer.legal}</Link>
            <Link href={localizedHref(locale, '/confidentialite')}>{dict.footer.privacy}</Link>
          </div>
        </div>
      </footer>
    </>
  );
}
