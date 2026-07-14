import type { Metadata } from 'next';
import Link from 'next/link';
import { config } from '@/lib/config';
import { buildAlternates, getDictionary, isLocale, type Locale } from '@/lib/i18n';
import { Icon } from '@/components/Icon';
import ServiceAccordion from '@/components/ServiceAccordion';
import Testimonials from '@/components/Testimonials';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const safe: Locale = isLocale(locale) ? locale : 'fr';
  const dict = getDictionary(safe);
  return {
    title: dict.meta.home.title,
    description: dict.meta.home.description,
    alternates: buildAlternates(safe, '/'),
    openGraph: { title: dict.meta.home.title, description: dict.meta.home.description, url: `/${safe}`, locale: dict.ogLocale },
  };
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const safe: Locale = isLocale(locale) ? locale : 'fr';
  const dict = getDictionary(safe);
  const h = dict.home;

  return (
    <main>
      {/* Hero */}
      <section className="hero">
        <div className="container">
          <div className="hero__inner">
            <img src="/assets/img/hero.jpg" alt="" className="hero__bg-photo" aria-hidden="true" />
            <div className="hero__overlay" aria-hidden="true"></div>
            <div className="hero__content">
              <span className="eyebrow">
                <Icon name="star" /> {h.heroEyebrow}
              </span>
              <h1>
                {h.heroTitleBefore} <mark>{h.heroMark1}</mark> {h.heroTitleMid} <mark>{h.heroMark2}</mark>
              </h1>
              <p>{h.heroText}</p>
              <div className="btn-group">
                <Link href={`/${safe}/contact`} className="btn btn--primary">
                  <Icon name="arrow-right" /> {dict.common.quote}
                </Link>
                <Link href={`/${safe}/services`} className="btn btn--ghost">
                  {h.heroServicesBtn}
                </Link>
              </div>
            </div>
            <div className="hero__badges">
              <div className="hero-badge">
                <Icon name="star" />
                <div>
                  <strong>{h.badge1Strong}</strong>
                  <span>{h.badge1Span}</span>
                </div>
              </div>
              <div className="hero-badge">
                <Icon name="check" />
                <div>
                  <strong>{h.badge2Strong}</strong>
                  <span>{h.badge2Span}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature strip */}
      <section className="feature-strip">
        <div className="container feature-strip__grid">
          {config.features.map((feature, i) => (
            <div className="feature-item reveal" style={{ transitionDelay: `${i * 0.08}s` }} key={feature.key}>
              <Icon name={feature.icon} />
              <h3>{dict.features[feature.key].title}</h3>
              <p>{dict.features[feature.key].text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section>
        <div className="container">
          <div className="services-section" style={{ padding: 'clamp(2rem, 5vw, 3.5rem)' }}>
            <div className="section-head reveal">
              <span className="eyebrow">
                <Icon name="package" /> {h.servicesEyebrow}
              </span>
              <h2>{h.servicesTitle}</h2>
              <p>{h.servicesText}</p>
            </div>

            <ServiceAccordion locale={safe} dict={dict} />

            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
              <Link href={`/${safe}/services`} className="btn btn--dark">
                {h.seeAllServices} <Icon name="arrow-right" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section>
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">
              <Icon name="star" /> {h.whyEyebrow}
            </span>
            <h2>{h.whyTitle}</h2>
          </div>
          <div className="why-grid">
            <div className="reveal reveal--left">
              <p className="text-muted">{h.whyText}</p>
              <ul className="why-list">
                {h.whyList.map((item) => (
                  <li key={item}>
                    <Icon name="check" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link href={`/${safe}/a-propos`} className="btn btn--dark" style={{ marginTop: '1.75rem' }}>
                {dict.common.learnMore} <Icon name="arrow-right" />
              </Link>
            </div>
            <div className="why-panel reveal reveal--right">
              <h3>{h.whyPanelTitle}</h3>
              {config.features.map((feature) => (
                <div className="why-panel__item" key={feature.key}>
                  <Icon name={feature.icon} />
                  <div>
                    <strong>{dict.features[feature.key].title}</strong>
                    <span>{dict.features[feature.key].text}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section>
        <div className="container">
          <Testimonials dict={dict} />
        </div>
      </section>
    </main>
  );
}
