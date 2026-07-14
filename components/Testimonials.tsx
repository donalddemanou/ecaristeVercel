'use client';

import { useEffect, useRef, useState } from 'react';
import { config } from '@/lib/config';
import type { Dictionary } from '@/lib/i18n';
import { Icon } from './Icon';

/** Carousel de témoignages : flèches, points et lecture auto (6s). */
export default function Testimonials({ dict }: { dict: Dictionary }) {
  const slides = config.testimonialAuthors.map((name, i) => ({
    name,
    text: dict.testimonials[i] ?? '',
  }));
  const [current, setCurrent] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const show = (index: number) => setCurrent((index + slides.length) % slides.length);

  useEffect(() => {
    const track = trackRef.current;
    const autoplay = setInterval(() => setCurrent((c) => (c + 1) % slides.length), 6000);
    const stop = () => clearInterval(autoplay);
    if (track) track.addEventListener('mouseenter', stop);
    return () => {
      clearInterval(autoplay);
      if (track) track.removeEventListener('mouseenter', stop);
    };
  }, [slides.length]);

  return (
    <div className="testimonials reveal" style={{ padding: 'clamp(2rem, 5vw, 3.5rem)' }}>
      <div className="section-head section-head--center">
        <span className="eyebrow">
          <Icon name="star" /> {dict.home.testimonialsEyebrow}
        </span>
        <h2>{dict.home.testimonialsTitle}</h2>
        <p>{dict.home.testimonialsText}</p>
      </div>

      <div className="testimonial-track" id="testimonialTrack" ref={trackRef}>
        {slides.map((t, i) => (
          <div className={`testimonial-slide${i === current ? ' is-active' : ''}`} key={t.name}>
            <div className="stars">
              {Array.from({ length: 5 }).map((_, s) => (
                <Icon name="star" key={s} />
              ))}
            </div>
            <p>&ldquo;{t.text}&rdquo;</p>
            <strong>{t.name}</strong>
          </div>
        ))}
      </div>

      <div className="testimonial-nav">
        <button type="button" id="testimonialPrev" aria-label="Prev" onClick={() => show(current - 1)}>
          <Icon name="chevron-left" />
        </button>
        <button type="button" id="testimonialNext" aria-label="Next" onClick={() => show(current + 1)}>
          <Icon name="chevron-right" />
        </button>
      </div>
      <div className="testimonial-dots" id="testimonialDots">
        {slides.map((t, i) => (
          <button
            type="button"
            key={t.name}
            className={i === current ? 'is-active' : ''}
            aria-label={`${i + 1}`}
            onClick={() => show(i)}
          />
        ))}
      </div>
    </div>
  );
}
