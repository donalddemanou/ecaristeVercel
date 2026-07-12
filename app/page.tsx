import type { Metadata } from 'next';
import Link from 'next/link';
import { config } from '@/lib/config';
import { Icon } from '@/components/Icon';
import ServiceAccordion from '@/components/ServiceAccordion';
import Testimonials from '@/components/Testimonials';

export const metadata: Metadata = {
  title: "ECARISTE — Transports & Logistique en France et à l'international",
  description: config.default_description,
  alternates: { canonical: '/' },
  openGraph: {
    title: "ECARISTE — Transports & Logistique en France et à l'international",
    description: config.default_description,
    url: '/',
  },
};

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section className="hero">
        <div className="container">
          <div className="hero__inner">
            <img src="/assets/img/hero.jpg" alt="" className="hero__bg-photo" aria-hidden="true" />
            <div className="hero__overlay" aria-hidden="true"></div>
            <div className="hero__content">
              <span className="eyebrow">
                <Icon name="star" /> Votre partenaire logistique
              </span>
              <h1>
                Votre partenaire de confiance en <mark>transport</mark> et <mark>logistique</mark>
              </h1>
              <p>
                ECARISTE vous propose des solutions sur mesure pour le transport de marchandises, la logistique et
                l&apos;affrètement en France et à l&apos;international.
              </p>
              <div className="btn-group">
                <Link href="/contact" className="btn btn--primary">
                  <Icon name="arrow-right" /> Demander un devis
                </Link>
                <Link href="/services" className="btn btn--ghost">
                  Nos services
                </Link>
              </div>
            </div>
            <div className="hero__badges">
              <div className="hero-badge">
                <Icon name="star" />
                <div>
                  <strong>Agréé UE</strong>
                  <span>commissionnaire de transports</span>
                </div>
              </div>
              <div className="hero-badge">
                <Icon name="check" />
                <div>
                  <strong>6j/7</strong>
                  <span>équipe disponible</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature strip */}
      <section className="feature-strip">
        <div className="container feature-strip__grid">
          {config.features.map((feature, i) => (
            <div className="feature-item reveal" style={{ transitionDelay: `${i * 0.08}s` }} key={feature.title}>
              <Icon name={feature.icon} />
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section>
        <div className="container">
          <div className="services-section" style={{ padding: 'clamp(2rem, 5vw, 3.5rem)' }}>
            <div className="section-head reveal">
              <span className="eyebrow">
                <Icon name="package" /> Nos services
              </span>
              <h2>Des solutions logistiques complètes adaptées à vos besoins</h2>
              <p>Du transport national à l&apos;entreposage, ECARISTE couvre toute votre chaîne logistique.</p>
            </div>

            <ServiceAccordion />

            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
              <Link href="/services" className="btn btn--dark">
                Voir tous les services <Icon name="arrow-right" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section>
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">
              <Icon name="star" /> Pourquoi ECARISTE
            </span>
            <h2>Pourquoi choisir ECARISTE ?</h2>
          </div>
          <div className="why-grid">
            <div className="reveal reveal--left">
              <p className="text-muted">
                Forts de l&apos;expertise de plus de 10 ans de notre fondateur dans le transport et la logistique, nous
                mettons cette exigence au service de votre entreprise dès aujourd&apos;hui. Notre engagement :
                ponctualité, sécurité et satisfaction client.
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
              <Link href="/a-propos" className="btn btn--dark" style={{ marginTop: '1.75rem' }}>
                En savoir plus <Icon name="arrow-right" />
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
        </div>
      </section>

      {/* Testimonials */}
      <section>
        <div className="container">
          <Testimonials />
        </div>
      </section>
    </main>
  );
}
