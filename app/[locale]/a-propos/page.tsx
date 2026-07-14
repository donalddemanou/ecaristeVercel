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
    title: dict.meta.about.title,
    description: dict.meta.about.description,
    alternates: buildAlternates(safe, '/a-propos'),
    openGraph: { title: dict.meta.about.title, description: dict.meta.about.description, url: `/${safe}/a-propos`, locale: dict.ogLocale },
  };
}

export default async function AProposPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const safe: Locale = isLocale(locale) ? locale : 'fr';
  const dict = getDictionary(safe);
  const a = dict.about;

  return (
    <main>
      <section
        style={{
          paddingTop: '3rem',
          paddingBottom: '2rem',
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
            <Icon name="star" /> {a.eyebrow}
          </span>
          <h2 style={{ color: 'var(--white)', marginTop: '1rem' }}>{a.title}</h2>
          <p style={{ color: 'rgba(255,255,255,0.75)', maxWidth: '620px', margin: '0.75rem auto 0' }}>{a.text}</p>
        </div>
      </section>

      <section>
        <div className="container why-grid" style={{ alignItems: 'center' }}>
          <div className="reveal reveal--left">
            <h2>{a.historyTitle}</h2>
            <p className="text-muted" style={{ marginTop: '1rem' }}>{a.historyP1}</p>
            <p className="text-muted" style={{ marginTop: '1rem' }}>{a.historyP2}</p>
            <p className="text-muted" style={{ marginTop: '1rem' }}>{a.historyP3}</p>
          </div>
          <img
            src="/assets/img/about-histoire.jpg"
            alt={a.historyImgAlt}
            className="img-cover reveal reveal--right"
            style={{ borderRadius: 'var(--radius-md)', height: '320px' }}
          />
        </div>
      </section>

      <section style={{ background: 'var(--gray-50)', borderRadius: 'var(--radius-lg)' }}>
        <div className="container">
          <div className="section-head section-head--center reveal">
            <span className="eyebrow">
              <Icon name="arrow-right" /> {a.missionEyebrow}
            </span>
            <h2>{a.missionTitle}</h2>
            <p>{a.missionText}</p>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-head section-head--center reveal">
            <span className="eyebrow">
              <Icon name="star" /> {a.valuesEyebrow}
            </span>
            <h2>{a.valuesTitle}</h2>
          </div>
          <div className="feature-strip__grid" style={{ padding: 0 }}>
            {a.values.map((value, i) => (
              <div className="feature-item reveal" style={{ transitionDelay: `${i * 0.08}s` }} key={value.title}>
                <Icon name={(['check', 'package', 'phone', 'monitor'] as const)[i] ?? 'check'} />
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container why-grid">
          <div className="reveal reveal--left">
            <h2>{a.whyTitle}</h2>
            <p className="text-muted" style={{ marginTop: '1rem' }}>{a.whyText}</p>
            <ul className="why-list">
              {a.whyList.map((item) => (
                <li key={item}>
                  <Icon name="check" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link href={`/${safe}/contact`} className="btn btn--dark" style={{ marginTop: '1.75rem' }}>
              {a.discussBtn} <Icon name="arrow-right" />
            </Link>
          </div>
          <div className="why-panel reveal reveal--right">
            <h3>{a.whyPanelTitle}</h3>
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
      </section>

      <section style={{ background: 'var(--gray-50)', borderRadius: 'var(--radius-lg)' }}>
        <div className="container">
          <div className="section-head section-head--center reveal">
            <span className="eyebrow">
              <Icon name="building" /> {a.teamEyebrow}
            </span>
            <h2>{a.teamTitle}</h2>
            <p>{a.teamText}</p>
          </div>
          <div className="photo-placeholder reveal" style={{ borderRadius: 'var(--radius-md)', minHeight: '280px' }}>
            <div>
              <Icon name="building" />
              <br />
              {a.teamPhoto}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
