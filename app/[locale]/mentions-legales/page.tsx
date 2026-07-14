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
    title: dict.meta.legal.title,
    description: dict.meta.legal.description,
    alternates: buildAlternates(safe, '/mentions-legales'),
    openGraph: { title: dict.meta.legal.title, description: dict.meta.legal.description, url: `/${safe}/mentions-legales`, locale: dict.ogLocale },
  };
}

export default async function MentionsLegalesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const safe: Locale = isLocale(locale) ? locale : 'fr';
  const dict = getDictionary(safe);
  const l = dict.legal;

  return (
    <main>
      <section style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
        <div className="container" style={{ maxWidth: '760px' }}>
          <h1>{l.title}</h1>

          <p
            style={{
              marginTop: '1rem',
              padding: '1rem',
              background: 'var(--gray-50)',
              borderRadius: 'var(--radius-sm)',
              fontSize: '0.9rem',
            }}
          >
            {l.disclaimer}
          </p>

          <h2 style={{ marginTop: '2rem' }}>{l.editorTitle}</h2>
          <p>
            {config.site_name} — {dict.common.baseline}
            <br />
            {config.contact.address_line}, {config.contact.address_city}
            <br />
            {l.phoneLabel} {config.contact.phone}
            <br />
            {l.emailLabel} {config.contact.email}
            <br />
            {l.ideLabel} <em>{l.toComplete}</em>
          </p>

          <h2 style={{ marginTop: '2rem' }}>{l.hostingTitle}</h2>
          <p>
            {l.hostingText} <em>{l.toComplete}</em>.
          </p>

          <h2 style={{ marginTop: '2rem' }}>{l.ipTitle}</h2>
          <p>{l.ipText}</p>
        </div>
      </section>
    </main>
  );
}
