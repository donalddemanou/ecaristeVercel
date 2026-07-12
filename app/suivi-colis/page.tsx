import type { Metadata } from 'next';
import TrackingWidget from '@/components/TrackingWidget';

export const metadata: Metadata = {
  title: 'Suivi de colis — ECARISTE',
  description: 'Suivez votre expédition ECARISTE en temps réel grâce à votre numéro de suivi.',
  alternates: { canonical: '/suivi-colis' },
  openGraph: {
    title: 'Suivi de colis — ECARISTE',
    description: 'Suivez votre expédition ECARISTE en temps réel grâce à votre numéro de suivi.',
    url: '/suivi-colis',
  },
};

export default function SuiviColisPage() {
  return (
    <main>
      <TrackingWidget />
    </main>
  );
}
