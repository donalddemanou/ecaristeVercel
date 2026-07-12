'use client';

import { useState, type FormEvent } from 'react';
import { useSearchParams } from 'next/navigation';
import { config } from '@/lib/config';
import { Icon } from './Icon';

const KNOWN_FIELDS = ['name', 'email', 'phone', 'service', 'message'];

export default function ContactForm() {
  const searchParams = useSearchParams();
  const preselectedSlug = searchParams.get('service') ?? '';
  const preselectedTitle = config.services.find((s) => s.slug === preselectedSlug)?.title ?? '';

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [banner, setBanner] = useState<'success' | 'error' | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setErrors({});
    setBanner(null);
    setSubmitting(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        body: new FormData(form),
        headers: { 'X-Requested-With': 'XMLHttpRequest' },
      });
      const data = await res.json();

      if (data.success) {
        form.reset();
        setBanner('success');
      } else {
        const incoming: Record<string, string> = data.errors || {};
        const fieldErrors: Record<string, string> = {};
        let bannerShown = false;
        Object.keys(incoming).forEach((field) => {
          if (KNOWN_FIELDS.includes(field)) {
            fieldErrors[field] = incoming[field];
          } else {
            bannerShown = true;
          }
        });
        setErrors(fieldErrors);
        if (bannerShown) setBanner('error');
      }
    } catch {
      setBanner('error');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="contact-card">
      <div className={`form-banner form-banner--success${banner === 'success' ? ' is-visible' : ''}`} id="formSuccess">
        Votre message a bien été envoyé. Nous revenons vers vous très vite !
      </div>
      <div className={`form-banner form-banner--error${banner === 'error' ? ' is-visible' : ''}`} id="formError">
        Une erreur est survenue. Merci de réessayer ou de nous appeler directement.
      </div>

      <form id="contactForm" onSubmit={handleSubmit} noValidate>
        <div className="form-row">
          <div className={`form-group${errors.name ? ' has-error' : ''}`} data-field="name">
            <label htmlFor="name">Nom complet *</label>
            <input type="text" id="name" name="name" autoComplete="name" required />
            <span className="form-error">{errors.name || ''}</span>
          </div>
          <div className={`form-group${errors.email ? ' has-error' : ''}`} data-field="email">
            <label htmlFor="email">E-mail *</label>
            <input type="email" id="email" name="email" autoComplete="email" required />
            <span className="form-error">{errors.email || ''}</span>
          </div>
        </div>
        <div className="form-row">
          <div className={`form-group${errors.phone ? ' has-error' : ''}`} data-field="phone">
            <label htmlFor="phone">Téléphone</label>
            <input type="tel" id="phone" name="phone" autoComplete="tel" />
            <span className="form-error">{errors.phone || ''}</span>
          </div>
          <div className={`form-group${errors.service ? ' has-error' : ''}`} data-field="service">
            <label htmlFor="service">Service concerné</label>
            <select id="service" name="service" defaultValue={preselectedTitle}>
              <option value="">Sélectionner...</option>
              {config.services.map((service) => (
                <option value={service.title} key={service.slug}>
                  {service.title}
                </option>
              ))}
            </select>
            <span className="form-error">{errors.service || ''}</span>
          </div>
        </div>
        <div className={`form-group${errors.message ? ' has-error' : ''}`} data-field="message">
          <label htmlFor="message">Message *</label>
          <textarea id="message" name="message" required></textarea>
          <span className="form-error">{errors.message || ''}</span>
        </div>

        {/* Piège anti-spam : invisible pour un humain, souvent rempli par un robot */}
        <div className="form-honeypot" aria-hidden="true">
          <label htmlFor="website">Ne pas remplir ce champ</label>
          <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
        </div>

        <button type="submit" className="btn btn--primary" id="contactSubmit" disabled={submitting}>
          <Icon name="arrow-right" /> Envoyer le message
        </button>
      </form>
    </div>
  );
}
