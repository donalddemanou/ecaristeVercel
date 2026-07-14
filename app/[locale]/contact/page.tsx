import type { Metadata } from 'next';
import { Suspense } from 'react';
import { config } from '@/lib/config';
import { buildAlternates, getDictionary, isLocale, type Locale } from '@/lib/i18n';
import { Icon } from '@/components/Icon';
import ContactForm from '@/components/ContactForm';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const safe: Locale = isLocale(locale) ? locale : 'fr';
  const dict = getDictionary(safe);
  return {
    title: dict.meta.contact.title,
    description: dict.meta.contact.description,
    alternates: buildAlternates(safe, '/contact'),
    openGraph: { title: dict.meta.contact.title, description: dict.meta.contact.description, url: `/${safe}/contact`, locale: dict.ogLocale },
  };
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const safe: Locale = isLocale(locale) ? locale : 'fr';
  const dict = getDictionary(safe);
  const c = dict.contact;

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
            <Icon name="mail" /> {c.eyebrow}
          </span>
          <h2 style={{ color: 'var(--white)', marginTop: '1rem' }}>{c.title}</h2>
          <p style={{ color: 'rgba(255,255,255,0.75)', maxWidth: '560px', margin: '0.75rem auto 0' }}>{c.text}</p>
        </div>
      </section>

      <section>
        <div className="container form-grid">
          <Suspense fallback={<div className="contact-card" />}>
            <ContactForm locale={safe} dict={dict} />
          </Suspense>

          <div>
            <div className="info-card" style={{ marginBottom: '1.5rem' }}>
              <ul className="info-list">
                <li>
                  <Icon name="pin" />
                  <div>
                    <strong>{c.infoAddress}</strong>
                    <span>
                      {config.contact.address_line}, {config.contact.address_city}
                    </span>
                  </div>
                </li>
                <li>
                  <Icon name="phone" />
                  <div>
                    <strong>{c.infoPhone}</strong>
                    <a href={`tel:${config.contact.phone_href}`}>{config.contact.phone}</a>
                  </div>
                </li>
                <li>
                  <Icon name="mail" />
                  <div>
                    <strong>{c.infoEmail}</strong>
                    <a href={`mailto:${config.contact.email}`}>{config.contact.email}</a>
                  </div>
                </li>
                <li>
                  <Icon name="clock" />
                  <div>
                    <strong>{c.infoHours}</strong>
                    <span>{dict.common.hours}</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="map-embed">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2759.972098061498!2d7.365187712644528!3d46.23089957097622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478edc289d88de3f%3A0xf30129f2b72294dc!2sAv.%20de%20Tourbillon%2072%2C%201950%20Sion%2C%20Suisse!5e0!3m2!1sfr!2sca!4v1783470611386!5m2!1sfr!2sca"
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                title={c.mapTitle}
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
