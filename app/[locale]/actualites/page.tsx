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
    title: dict.meta.news.title,
    description: dict.meta.news.description,
    alternates: buildAlternates(safe, '/actualites'),
    openGraph: { title: dict.meta.news.title, description: dict.meta.news.description, url: `/${safe}/actualites`, locale: dict.ogLocale },
  };
}

function formatDate(iso: string, locale: Locale): string {
  return new Intl.DateTimeFormat(locale, { day: '2-digit', month: '2-digit', year: 'numeric' }).format(new Date(iso));
}

export default async function ActualitesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const safe: Locale = isLocale(locale) ? locale : 'fr';
  const dict = getDictionary(safe);

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
            <Icon name="doc" /> {dict.news.eyebrow}
          </span>
          <h2 style={{ color: 'var(--white)', marginTop: '1rem' }}>{dict.news.title}</h2>
          <p style={{ color: 'rgba(255,255,255,0.75)', maxWidth: '560px', margin: '0.75rem auto 0' }}>
            {dict.news.text}
          </p>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="service-cards">
            {config.articles.map((article) => {
              const content = dict.articles[article.slug as keyof typeof dict.articles];
              return (
                <article className="service-card" key={article.slug}>
                  <div className="service-card__media photo-placeholder">
                    <Icon name="doc" />
                    <span>{formatDate(article.date, safe)}</span>
                  </div>
                  <div className="service-card__body">
                    <h3>{content.title}</h3>
                    <p style={{ marginTop: '0.75rem' }}>{content.excerpt}</p>
                    <Link
                      href={`/${safe}/actualites/${article.slug}`}
                      className="btn btn--dark btn--sm"
                      style={{ marginTop: '1.25rem' }}
                    >
                      {dict.news.readArticle} <Icon name="arrow-right" />
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
