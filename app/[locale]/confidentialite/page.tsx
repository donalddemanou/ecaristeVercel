import type { Metadata } from 'next';
import { config } from '@/lib/config';
import { buildAlternates, getDictionary, isLocale, type Locale } from '@/lib/i18n';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const safe: Locale = isLocale(locale) ? locale : 'fr';
  const dict = getDictionary(safe);
  return {
    title: dict.meta.privacy.title,
    description: dict.meta.privacy.description,
    alternates: buildAlternates(safe, '/confidentialite'),
    openGraph: { title: dict.meta.privacy.title, description: dict.meta.privacy.description, url: `/${safe}/confidentialite`, locale: dict.ogLocale },
  };
}

export default async function ConfidentialitePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const safe: Locale = isLocale(locale) ? locale : 'fr';
  const dict = getDictionary(safe);
  const p = dict.privacy;

  return (
    <main>
      <section style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
        <div className="container" style={{ maxWidth: '760px' }}>
          <h1>{p.title}</h1>

          <p
            style={{
              marginTop: '1rem',
              padding: '1rem',
              background: 'var(--gray-50)',
              borderRadius: 'var(--radius-sm)',
              fontSize: '0.9rem',
            }}
          >
            {p.disclaimer}
          </p>

          <h2 style={{ marginTop: '2rem' }}>{p.collectedTitle}</h2>
          <p>{p.collectedText}</p>

          <h2 style={{ marginTop: '2rem' }}>{p.useTitle}</h2>
          <p>{p.useText}</p>

          <h2 style={{ marginTop: '2rem' }}>{p.rightsTitle}</h2>
          <p>
            {p.rightsTextBefore}
            <a href={`mailto:${config.contact.email}`}>{config.contact.email}</a>
            {p.rightsTextAfter}
          </p>
        </div>
      </section>
    </main>
  );
}
