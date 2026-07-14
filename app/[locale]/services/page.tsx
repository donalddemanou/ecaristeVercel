import type { Metadata } from 'next';
import Link from 'next/link';
import { config } from '@/lib/config';
import { buildAlternates, getDictionary, isLocale, type Locale } from '@/lib/i18n';
import { Icon } from '@/components/Icon';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const safe: Locale = isLocale(locale) ? locale : 'fr';
  const dict = getDictionary(safe);
  return {
    title: dict.meta.services.title,
    description: dict.meta.services.description,
    alternates: buildAlternates(safe, '/services'),
    openGraph: { title: dict.meta.services.title, description: dict.meta.services.description, url: `/${safe}/services`, locale: dict.ogLocale },
  };
}

export default async function ServicesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const safe: Locale = isLocale(locale) ? locale : 'fr';
  const dict = getDictionary(safe);

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
            <Icon name="package" /> {dict.services.eyebrow}
          </span>
          <h2 style={{ color: 'var(--white)', marginTop: '1rem' }}>{dict.services.title}</h2>
          <p style={{ color: 'rgba(255,255,255,0.75)', maxWidth: '560px', margin: '0.75rem auto 0' }}>
            {dict.services.text}
          </p>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="service-cards">
            {config.services.map((service) => {
              const content = dict.servicesContent[service.slug];
              return (
                <article className="service-card reveal" id={service.slug} key={service.slug}>
                  <div className="service-card__media">
                    <img src={`/assets/img/services/${service.slug}.jpg`} alt={content.title} loading="lazy" />
                    <Icon name={service.icon} />
                    <span>{content.title}</span>
                  </div>
                  <div className="service-card__body">
                    <p>{content.tagline}</p>
                    <ul className="service-card__points">
                      {content.points.map((point) => (
                        <li key={point}>
                          <Icon name="check" />
                          {point}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={`/${safe}/contact?service=${encodeURIComponent(service.slug)}`}
                      className="btn btn--dark btn--sm"
                    >
                      {dict.common.learnMore} <Icon name="arrow-right" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
