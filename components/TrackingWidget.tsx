'use client';

import { useState, type FormEvent } from 'react';
import { config } from '@/lib/config';
import type { Dictionary } from '@/lib/i18n';
import { Icon } from './Icon';

/** Suivi de colis : renvoie l'utilisateur vers l'équipe avec son numéro. */
export default function TrackingWidget({ dict }: { dict: Dictionary }) {
  const t = dict.tracking;
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
          <h2 style={{ color: 'var(--white)' }}>{t.title}</h2>
          <p style={{ color: 'rgba(255,255,255,0.75)', maxWidth: '520px', margin: '0.75rem auto 0' }}>{t.text}</p>

          <form className="tracking-form" id="trackingForm" onSubmit={handleSubmit}>
            <label htmlFor="trackingNumber" className="sr-only" style={{ position: 'absolute', left: '-9999px' }}>
              {t.label}
            </label>
            <input
              type="text"
              id="trackingNumber"
              name="trackingNumber"
              placeholder={t.placeholder}
              autoComplete="off"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
            <button type="submit" className="btn btn--primary">
              <Icon name="arrow-right" /> {t.submit}
            </button>
          </form>
        </div>
      </section>

      <section>
        <div className="container">
          <div className={`tracking-result${hasResult ? ' has-result' : ''}`} id="trackingResult">
            {hasResult ? (
              <>
                <h3>
                  {t.resultTitlePrefix} {submitted}
                </h3>
                <p style={{ marginTop: '0.75rem' }}>{t.resultText}</p>
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
                <p>{t.initial}</p>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
