import type { Metadata } from 'next';
import Link from 'next/link';
import { config } from '@/lib/config';
import { Icon } from '@/components/Icon';

export const metadata: Metadata = {
  title: 'Nos services — Transport, logistique, affrètement | ECARISTE',
  description:
    'Découvrez les services ECARISTE : transport national et international, logistique, affrètement, livraison express et entreposage.',
  alternates: { canonical: '/services' },
  openGraph: {
    title: 'Nos services — Transport, logistique, affrètement | ECARISTE',
    description:
      'Découvrez les services ECARISTE : transport national et international, logistique, affrètement, livraison express et entreposage.',
    url: '/services',
  },
};

export default function ServicesPage() {
  return (
    <main>
      <section
        style={{
          paddingTop: '3rem',
          paddingBottom: '3rem',
          background: 'var(--navy-900)',
          color: 'var(--white)',
          textAlign: 'center',
        }}
      >
        <div className="container">
          <span
            className="eyebrow"
            style={{ background: 'rgba(255,255,255,0.1)', borderColor: 'rgba(255,255,255,0.2)', color: 'var(--white)' }}
          >
            <Icon name="package" /> Nos services
          </span>
          <h2 style={{ color: 'var(--white)', marginTop: '1rem' }}>Nos services</h2>
          <p style={{ color: 'rgba(255,255,255,0.75)', maxWidth: '560px', margin: '0.75rem auto 0' }}>
            Des solutions logistiques complètes pour tous vos besoins de transport.
          </p>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="service-cards">
            {config.services.map((service) => (
              <article className="service-card reveal" id={service.slug} key={service.slug}>
                <div className="service-card__media">
                  <img src={`/assets/img/services/${service.slug}.jpg`} alt={service.title} loading="lazy" />
                  <Icon name={service.icon} />
                  <span>{service.title}</span>
                </div>
                <div className="service-card__body">
                  <p>{service.tagline}</p>
                  <ul className="service-card__points">
                    {service.points.map((point) => (
                      <li key={point}>
                        <Icon name="check" />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <Link href={`/contact?service=${encodeURIComponent(service.slug)}`} className="btn btn--dark btn--sm">
                    En savoir plus <Icon name="arrow-right" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
