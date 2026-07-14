import type { Metadata } from 'next';
import { buildAlternates, getDictionary, isLocale, type Locale } from '@/lib/i18n';
import TrackingWidget from '@/components/TrackingWidget';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const safe: Locale = isLocale(locale) ? locale : 'fr';
  const dict = getDictionary(safe);
  return {
    title: dict.meta.tracking.title,
    description: dict.meta.tracking.description,
    alternates: buildAlternates(safe, '/suivi-colis'),
    openGraph: { title: dict.meta.tracking.title, description: dict.meta.tracking.description, url: `/${safe}/suivi-colis`, locale: dict.ogLocale },
  };
}

export default async function SuiviColisPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const safe: Locale = isLocale(locale) ? locale : 'fr';
  const dict = getDictionary(safe);

  return (
    <main>
      <TrackingWidget dict={dict} />
    </main>
  );
}
