import type { Metadata } from 'next';
import Link from 'next/link';
import { config } from '@/lib/config';
import { Icon } from '@/components/Icon';

export const metadata: Metadata = {
  title: 'À propos — ECARISTE Transports & Logistique',
  description:
    "Découvrez l'histoire, la mission et les valeurs d'ECARISTE, votre partenaire transport et logistique fondé par un commissionnaire agréé de transports en Union européenne.",
  alternates: { canonical: '/a-propos' },
  openGraph: {
    title: 'À propos — ECARISTE Transports & Logistique',
    description:
      "Découvrez l'histoire, la mission et les valeurs d'ECARISTE, votre partenaire transport et logistique fondé par un commissionnaire agréé de transports en Union européenne.",
    url: '/a-propos',
  },
};

export default function AProposPage() {
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
            <Icon name="star" /> À propos
          </span>
          <h2 style={{ color: 'var(--white)', marginTop: '1rem' }}>À propos d&apos;ECARISTE</h2>
          <p style={{ color: 'rgba(255,255,255,0.75)', maxWidth: '620px', margin: '0.75rem auto 0' }}>
            Découvrez notre histoire, notre vision et les valeurs qui guident notre engagement quotidien.
          </p>
        </div>
      </section>

      <section>
        <div className="container why-grid" style={{ alignItems: 'center' }}>
          <div className="reveal reveal--left">
            <h2>Notre histoire</h2>
            <p className="text-muted" style={{ marginTop: '1rem' }}>
              Fondée en 2026, ECARISTE Transports &amp; Logistique est née de la vision de Lionel FOPA, passionné par le
              monde du transport et de la logistique depuis plus de 10 ans, commissionnaire agréé de transports en Union
              européenne. Il a pour ambition de créer une entreprise reconnue pour son expertise nationale et
              internationale.
            </p>
            <p className="text-muted" style={{ marginTop: '1rem' }}>
              Dès sa création, ECARISTE s&apos;appuie sur cette expertise pour développer des solutions logistiques
              innovantes et construire, pas à pas, un réseau de partenaires solide en France et à l&apos;international.
            </p>
            <p className="text-muted" style={{ marginTop: '1rem' }}>
              Notre ambition : devenir, au fil des expéditions, un partenaire de référence pour les entreprises qui
              recherchent fiabilité, réactivité et exigence de service.
            </p>
          </div>
          <img
            src="/assets/img/about-histoire.jpg"
            alt="Entrepôt ECARISTE"
            className="img-cover reveal reveal--right"
            style={{ borderRadius: 'var(--radius-md)', height: '320px' }}
          />
        </div>
      </section>

      <section style={{ background: 'var(--gray-50)', borderRadius: 'var(--radius-lg)' }}>
        <div className="container">
          <div className="section-head section-head--center reveal">
            <span className="eyebrow">
              <Icon name="arrow-right" /> Notre mission
            </span>
            <h2>Simplifier votre transport et votre logistique</h2>
            <p>
              Offrir à chaque client, quelle que soit sa taille, un accompagnement sur mesure, une réactivité de tous les
              instants et une exigence constante de qualité — en France comme à l&apos;international.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-head section-head--center reveal">
            <span className="eyebrow">
              <Icon name="star" /> Nos valeurs
            </span>
            <h2>Ce qui guide notre travail au quotidien</h2>
          </div>
          <div className="feature-strip__grid" style={{ padding: 0 }}>
            <div className="feature-item reveal" style={{ transitionDelay: '0s' }}>
              <Icon name="check" />
              <h3>Fiabilité</h3>
              <p>Ponctualité et rigueur à chaque étape de vos expéditions.</p>
            </div>
            <div className="feature-item reveal" style={{ transitionDelay: '0.08s' }}>
              <Icon name="package" />
              <h3>Sécurité</h3>
              <p>Vos marchandises traitées avec le plus grand soin, à chaque kilomètre.</p>
            </div>
            <div className="feature-item reveal" style={{ transitionDelay: '0.16s' }}>
              <Icon name="phone" />
              <h3>Proximité</h3>
              <p>Une équipe disponible 6j/7, à l&apos;écoute de vos besoins.</p>
            </div>
            <div className="feature-item reveal" style={{ transitionDelay: '0.24s' }}>
              <Icon name="monitor" />
              <h3>Innovation</h3>
              <p>Suivi GPS, TMS intégré et dématérialisation au service de votre tranquillité.</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container why-grid">
          <div className="reveal reveal--left">
            <h2>Pourquoi choisir ECARISTE ?</h2>
            <p className="text-muted" style={{ marginTop: '1rem' }}>
              Forts de l&apos;expertise de plus de 10 ans de notre fondateur dans le transport et la logistique, nous
              mettons cette exigence au service de votre entreprise dès aujourd&apos;hui. Notre engagement : ponctualité,
              sécurité et satisfaction client.
            </p>
            <ul className="why-list">
              <li>
                <Icon name="check" />
                <span>Commissionnaire agréé de transports en Union européenne</span>
              </li>
              <li>
                <Icon name="check" />
                <span>Réseau de partenaires en France et à l&apos;international</span>
              </li>
              <li>
                <Icon name="check" />
                <span>Suivi en temps réel de vos expéditions</span>
              </li>
              <li>
                <Icon name="check" />
                <span>Équipe dédiée et réactive 6j/7</span>
              </li>
              <li>
                <Icon name="check" />
                <span>Solutions personnalisées pour chaque client</span>
              </li>
            </ul>
            <Link href="/contact" className="btn btn--dark" style={{ marginTop: '1.75rem' }}>
              Discuter de votre projet <Icon name="arrow-right" />
            </Link>
          </div>
          <div className="why-panel reveal reveal--right">
            <h3>Nos atouts technologiques</h3>
            {config.features.map((feature) => (
              <div className="why-panel__item" key={feature.title}>
                <Icon name={feature.icon} />
                <div>
                  <strong>{feature.title}</strong>
                  <span>{feature.text}</span>
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
              <Icon name="building" /> Notre équipe
            </span>
            <h2>Une équipe engagée à vos côtés</h2>
            <p>Des professionnels du transport et de la logistique, formés pour répondre à vos exigences.</p>
          </div>
          <div className="photo-placeholder reveal" style={{ borderRadius: 'var(--radius-md)', minHeight: '280px' }}>
            <div>
              <Icon name="building" />
              <br />
              Photo équipe ECARISTE (à intégrer)
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
