'use client';

import { useState, type FormEvent } from 'react';
import { useSearchParams } from 'next/navigation';
import { config } from '@/lib/config';
import type { Dictionary, Locale } from '@/lib/i18n';
import { Icon } from './Icon';

const KNOWN_FIELDS = ['name', 'email', 'phone', 'service', 'message'];

export default function ContactForm({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const c = dict.contact;
  const searchParams = useSearchParams();
  const preselectedSlug = searchParams.get('service') ?? '';
  const preselectedTitle = dict.servicesContent[preselectedSlug as keyof typeof dict.servicesContent]?.title ?? '';

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
        {c.successBanner}
      </div>
      <div className={`form-banner form-banner--error${banner === 'error' ? ' is-visible' : ''}`} id="formError">
        {c.errorBanner}
      </div>

      <form id="contactForm" onSubmit={handleSubmit} noValidate>
        <input type="hidden" name="locale" value={locale} />
        <div className="form-row">
          <div className={`form-group${errors.name ? ' has-error' : ''}`} data-field="name">
            <label htmlFor="name">{c.fieldName}</label>
            <input type="text" id="name" name="name" autoComplete="name" required />
            <span className="form-error">{errors.name || ''}</span>
          </div>
          <div className={`form-group${errors.email ? ' has-error' : ''}`} data-field="email">
            <label htmlFor="email">{c.fieldEmail}</label>
            <input type="email" id="email" name="email" autoComplete="email" required />
            <span className="form-error">{errors.email || ''}</span>
          </div>
        </div>
        <div className="form-row">
          <div className={`form-group${errors.phone ? ' has-error' : ''}`} data-field="phone">
            <label htmlFor="phone">{c.fieldPhone}</label>
            <input type="tel" id="phone" name="phone" autoComplete="tel" />
            <span className="form-error">{errors.phone || ''}</span>
          </div>
          <div className={`form-group${errors.service ? ' has-error' : ''}`} data-field="service">
            <label htmlFor="service">{c.fieldService}</label>
            <select id="service" name="service" defaultValue={preselectedTitle}>
              <option value="">{c.servicePlaceholder}</option>
              {config.services.map((service) => {
                const title = dict.servicesContent[service.slug].title;
                return (
                  <option value={title} key={service.slug}>
                    {title}
                  </option>
                );
              })}
            </select>
            <span className="form-error">{errors.service || ''}</span>
          </div>
        </div>
        <div className={`form-group${errors.message ? ' has-error' : ''}`} data-field="message">
          <label htmlFor="message">{c.fieldMessage}</label>
          <textarea id="message" name="message" required></textarea>
          <span className="form-error">{errors.message || ''}</span>
        </div>

        {/* Piège anti-spam : invisible pour un humain, souvent rempli par un robot */}
        <div className="form-honeypot" aria-hidden="true">
          <label htmlFor="website">{c.honeypotLabel}</label>
          <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
        </div>

        <button type="submit" className="btn btn--primary" id="contactSubmit" disabled={submitting}>
          <Icon name="arrow-right" /> {c.submit}
        </button>
      </form>
    </div>
  );
}
