'use client';

import { useState, type FormEvent } from 'react';
import { config } from '@/lib/config';
import { Icon } from './Icon';

/**
 * Suivi de colis : reproduit le comportement de tracking.js.
 * Le suivi en ligne n'est pas encore branché : on renvoie l'utilisateur vers
 * l'équipe avec son numéro.
 */
export default function TrackingWidget() {
  const [number, setNumber] = useState('');
  const [submitted, setSubmitted] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const value = number.trim();
    setSubmitted(value ? value : null);
  };

  const hasResult = submitted !== null;

  return (
    <>
      <section
        style={{
          paddingTop: '3rem',
          paddingBottom: '2.5rem',
          background: 'var(--navy-800)',
          color: 'var(--white)',
          textAlign: 'center',
        }}
      >
        <div className="container">
          <h2 style={{ color: 'var(--white)' }}>Suivi de colis</h2>
          <p style={{ color: 'rgba(255,255,255,0.75)', maxWidth: '520px', margin: '0.75rem auto 0' }}>
            Suivez votre expédition en temps réel grâce à votre numéro de suivi.
          </p>

          <form className="tracking-form" id="trackingForm" onSubmit={handleSubmit}>
            <label htmlFor="trackingNumber" className="sr-only" style={{ position: 'absolute', left: '-9999px' }}>
              Numéro de suivi
            </label>
            <input
              type="text"
              id="trackingNumber"
              name="trackingNumber"
              placeholder="Entrez votre numéro de suivi (ex: ECR...)"
              autoComplete="off"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
            <button type="submit" className="btn btn--primary">
              <Icon name="arrow-right" /> Suivre
            </button>
          </form>
        </div>
      </section>

      <section>
        <div className="container">
          <div className={`tracking-result${hasResult ? ' has-result' : ''}`} id="trackingResult">
            {hasResult ? (
              <>
                <h3>Numéro {submitted}</h3>
                <p style={{ marginTop: '0.75rem' }}>
                  Le suivi en ligne est en cours de mise en place. Contactez notre équipe avec ce numéro pour connaître
                  le statut de votre expédition :
                </p>
                <p style={{ marginTop: '0.75rem' }}>
                  <a
                    href={`tel:${config.contact.phone_href}`}
                    className="btn btn--dark btn--sm"
                    style={{ marginRight: '0.75rem' }}
                  >
                    {config.contact.phone}
                  </a>
                  <a href={`mailto:${config.contact.email}`} className="btn btn--ghost btn--sm">
                    {config.contact.email}
                  </a>
                </p>
              </>
            ) : (
              <>
                <Icon name="truck" />
                <p>Entrez votre numéro de suivi pour suivre votre colis</p>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
