import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { config } from '@/lib/config';
import { buildAlternates, getDictionary, isLocale, locales, type Locale } from '@/lib/i18n';
import { Icon } from '@/components/Icon';

export function generateStaticParams() {
  return locales.flatMap((locale) => config.articles.map((a) => ({ locale, slug: a.slug })));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const safe: Locale = isLocale(locale) ? locale : 'fr';
  const dict = getDictionary(safe);
  const article = dict.articles[slug as keyof typeof dict.articles];
  if (!article) return {};
  return {
    title: article.metaTitle,
    description: article.metaDescription,
    alternates: buildAlternates(safe, `/actualites/${slug}`),
    openGraph: { title: article.metaTitle, description: article.metaDescription, url: `/${safe}/actualites/${slug}`, locale: dict.ogLocale },
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  const safe: Locale = isLocale(locale) ? locale : 'fr';
  const dict = getDictionary(safe);
  const article = dict.articles[slug as keyof typeof dict.articles];
  if (!article) notFound();

  return (
    <main>
      <section style={{ paddingTop: '3rem', paddingBottom: '2rem' }}>
        <div className="container" style={{ maxWidth: '760px' }}>
          <Link href={`/${safe}/actualites`} className="btn btn--ghost btn--sm" style={{ marginBottom: '1.5rem' }}>
            <Icon name="chevron-left" /> {dict.news.backToNews}
          </Link>
          <p className="text-muted" style={{ fontSize: '0.9rem' }}>
            {article.displayDate}
          </p>
          <h1 style={{ marginTop: '0.5rem' }}>{article.title}</h1>

          <div
            className="photo-placeholder"
            style={{ borderRadius: 'var(--radius-md)', minHeight: '280px', margin: '2rem 0' }}
          >
            <div>
              <Icon name="doc" />
              <br />
              {dict.news.articleImagePlaceholder}
            </div>
          </div>

          {article.paragraphs.map((p, i) => (
            <p key={i} style={i === 0 ? undefined : { marginTop: '1rem' }} dangerouslySetInnerHTML={{ __html: p }} />
          ))}
        </div>
      </section>
    </main>
  );
}
