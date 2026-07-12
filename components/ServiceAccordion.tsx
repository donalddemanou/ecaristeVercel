'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { config } from '@/lib/config';
import { Icon } from './Icon';

/** Accordéon services (accueil) : un seul panneau ouvert à la fois. */
export default function ServiceAccordion() {
  const [openIndex, setOpenIndex] = useState(0);
  const panelRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    panelRefs.current.forEach((panel, i) => {
      if (!panel) return;
      panel.style.maxHeight = i === openIndex ? `${panel.scrollHeight}px` : '';
    });
  }, [openIndex]);

  return (
    <div className="service-accordion" id="serviceAccordion">
      {config.services.map((service, i) => {
        const open = i === openIndex;
        return (
          <div className={`service-row${open ? ' is-open' : ''}`} key={service.slug}>
            <button
              className="service-row__header"
              aria-expanded={open}
              onClick={() => setOpenIndex(open ? -1 : i)}
            >
              <span className="service-row__index">{String(i + 1).padStart(2, '0')}.</span>
              <span className="service-row__title">{service.title}</span>
              <span className="service-row__toggle">
                <Icon name="chevron-down" />
              </span>
            </button>
            <div
              className="service-row__panel"
              ref={(el) => {
                panelRefs.current[i] = el;
              }}
              style={open ? { maxHeight: 260 } : undefined}
            >
              <div className="service-row__panel-inner">
                <p>{service.tagline}</p>
                <ul className="service-row__points">
                  {service.points.map((point) => (
                    <li key={point}>
                      <Icon name="check" />
                      {point}
                    </li>
                  ))}
                </ul>
                <Link href={`/services#${service.slug}`} className="service-row__link btn btn--sm btn--dark">
                  En savoir plus <Icon name="arrow-right" />
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
