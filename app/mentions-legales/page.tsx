import type { Metadata } from 'next';
import { config } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Mentions légales — ECARISTE',
  description: 'Mentions légales du site ECARISTE Transports & Logistique.',
  alternates: { canonical: '/mentions-legales' },
  openGraph: {
    title: 'Mentions légales — ECARISTE',
    description: 'Mentions légales du site ECARISTE Transports & Logistique.',
    url: '/mentions-legales',
  },
};

export default function MentionsLegalesPage() {
  return (
    <main>
      <section style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
        <div className="container" style={{ maxWidth: '760px' }}>
          <h1>Mentions légales</h1>

          <p
            style={{
              marginTop: '1rem',
              padding: '1rem',
              background: 'var(--gray-50)',
              borderRadius: 'var(--radius-sm)',
              fontSize: '0.9rem',
            }}
          >
            Modèle à compléter : les champs ci-dessous (numéro d&apos;identification d&apos;entreprise IDE/UID, forme
            juridique, hébergeur) doivent être vérifiés et complétés avant mise en ligne.
          </p>

          <h2 style={{ marginTop: '2rem' }}>Éditeur du site</h2>
          <p>
            {config.site_name} — {config.site_baseline}
            <br />
            {config.contact.address_line}, {config.contact.address_city}
            <br />
            Téléphone : {config.contact.phone}
            <br />
            E-mail : {config.contact.email}
            <br />
            Numéro IDE/UID : <em>à compléter</em>
          </p>

          <h2 style={{ marginTop: '2rem' }}>Hébergement</h2>
          <p>
            Nom, adresse et contact de l&apos;hébergeur : <em>à compléter</em>.
          </p>

          <h2 style={{ marginTop: '2rem' }}>Propriété intellectuelle</h2>
          <p>
            L&apos;ensemble des contenus présents sur ce site (textes, images, logo) sont la propriété d&apos;ECARISTE,
            sauf mention contraire, et ne peuvent être reproduits sans autorisation préalable.
          </p>
        </div>
      </section>
    </main>
  );
}
