import type { Metadata } from 'next';
import Link from 'next/link';
import { articles, formatDateFr } from '@/lib/articles';
import { Icon } from '@/components/Icon';

export const metadata: Metadata = {
  title: 'Actualités — ECARISTE Transports & Logistique',
  description: "Les actualités et l'actualité du secteur du transport et de la logistique par ECARISTE.",
  alternates: { canonical: '/actualites' },
  openGraph: {
    title: 'Actualités — ECARISTE Transports & Logistique',
    description: "Les actualités et l'actualité du secteur du transport et de la logistique par ECARISTE.",
    url: '/actualites',
  },
};

export default function ActualitesPage() {
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
            <Icon name="doc" /> Actualités
          </span>
          <h2 style={{ color: 'var(--white)', marginTop: '1rem' }}>Actualités</h2>
          <p style={{ color: 'rgba(255,255,255,0.75)', maxWidth: '560px', margin: '0.75rem auto 0' }}>
            Les dernières nouvelles d&apos;ECARISTE et du secteur du transport et de la logistique.
          </p>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="service-cards">
            {articles.map((article) => (
              <article className="service-card" key={article.slug}>
                <div className="service-card__media photo-placeholder">
                  <Icon name="doc" />
                  <span>{formatDateFr(article.date)}</span>
                </div>
                <div className="service-card__body">
                  <h3>{article.title}</h3>
                  <p style={{ marginTop: '0.75rem' }}>{article.excerpt}</p>
                  <Link
                    href={`/actualites/${article.slug}`}
                    className="btn btn--dark btn--sm"
                    style={{ marginTop: '1.25rem' }}
                  >
                    Lire l&apos;article <Icon name="arrow-right" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
