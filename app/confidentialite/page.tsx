import type { Metadata } from 'next';
import { config } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Politique de confidentialité — ECARISTE',
  description: 'Politique de confidentialité et protection des données du site ECARISTE.',
  alternates: { canonical: '/confidentialite' },
  openGraph: {
    title: 'Politique de confidentialité — ECARISTE',
    description: 'Politique de confidentialité et protection des données du site ECARISTE.',
    url: '/confidentialite',
  },
};

export default function ConfidentialitePage() {
  return (
    <main>
      <section style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
        <div className="container" style={{ maxWidth: '760px' }}>
          <h1>Politique de confidentialité</h1>

          <p
            style={{
              marginTop: '1rem',
              padding: '1rem',
              background: 'var(--gray-50)',
              borderRadius: 'var(--radius-sm)',
              fontSize: '0.9rem',
            }}
          >
            Modèle à faire valider par un conseil juridique avant mise en ligne, notamment sur la durée de conservation
            des données et les droits applicables (RGPD / LPD suisse).
          </p>

          <h2 style={{ marginTop: '2rem' }}>Données collectées</h2>
          <p>
            Le formulaire de contact du site collecte votre nom, votre e-mail, votre téléphone (facultatif) et le
            message envoyé, dans le seul but de répondre à votre demande.
          </p>

          <h2 style={{ marginTop: '2rem' }}>Utilisation des données</h2>
          <p>
            Ces données sont transmises par e-mail à l&apos;équipe ECARISTE et ne sont ni revendues, ni partagées avec
            des tiers à des fins commerciales.
          </p>

          <h2 style={{ marginTop: '2rem' }}>Vos droits</h2>
          <p>
            Vous pouvez demander l&apos;accès, la rectification ou la suppression de vos données en nous contactant à{' '}
            <a href={`mailto:${config.contact.email}`}>{config.contact.email}</a>.
          </p>
        </div>
      </section>
    </main>
  );
}
