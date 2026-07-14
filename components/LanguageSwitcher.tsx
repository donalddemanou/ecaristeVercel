'use client';

import { useEffect, useId, useRef, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { locales, type Locale } from '@/lib/i18n';
import { Icon } from './Icon';

const NATIVE_NAME: Record<Locale, string> = {
  fr: 'Français',
  en: 'English',
  de: 'Deutsch',
};

/** Petits drapeaux SVG (ids uniques par instance pour éviter les collisions). */
function Flag({ code }: { code: Locale }) {
  const uid = useId().replace(/:/g, '');
  if (code === 'fr') {
    return (
      <span className="flag" aria-hidden="true">
        <svg viewBox="0 0 3 2">
          <rect width="3" height="2" fill="#fff" />
          <rect width="1" height="2" fill="#0055A4" />
          <rect x="2" width="1" height="2" fill="#EF4135" />
        </svg>
      </span>
    );
  }
  if (code === 'de') {
    return (
      <span className="flag" aria-hidden="true">
        <svg viewBox="0 0 5 3">
          <rect width="5" height="3" fill="#000" />
          <rect y="1" width="5" height="1" fill="#DD0000" />
          <rect y="2" width="5" height="1" fill="#FFCE00" />
        </svg>
      </span>
    );
  }
  // en → Union Jack
  return (
    <span className="flag" aria-hidden="true">
      <svg viewBox="0 0 60 30">
        <clipPath id={`s${uid}`}>
          <path d="M0,0 v30 h60 v-30 z" />
        </clipPath>
        <clipPath id={`t${uid}`}>
          <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" />
        </clipPath>
        <g clipPath={`url(#s${uid})`}>
          <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
          <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
          <path d="M0,0 L60,30 M60,0 L0,30" clipPath={`url(#t${uid})`} stroke="#C8102E" strokeWidth="4" />
          <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
          <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
        </g>
      </svg>
    </span>
  );
}

export default function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', onClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onClick);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const switchTo = (target: Locale) => {
    setOpen(false);
    if (target === locale) return;
    const rest = pathname.replace(/^\/(fr|en|de)(?=\/|$)/, '') || '';
    document.cookie = `NEXT_LOCALE=${target};path=/;max-age=${60 * 60 * 24 * 365}`;
    router.push(`/${target}${rest}`);
  };

  return (
    <div className={`lang-dropdown${open ? ' is-open' : ''}`} ref={rootRef}>
      <button
        type="button"
        className="lang-dropdown__btn"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={NATIVE_NAME[locale]}
        onClick={() => setOpen((v) => !v)}
      >
        <Flag code={locale} />
        <span className="lang-dropdown__code">{locale.toUpperCase()}</span>
        <Icon name="chevron-down" className="lang-dropdown__chevron" />
      </button>

      {open && (
        <ul className="lang-dropdown__menu" role="listbox">
          {locales.map((l) => (
            <li key={l} role="option" aria-selected={l === locale}>
              <button
                type="button"
                className={`lang-dropdown__item${l === locale ? ' is-active' : ''}`}
                onClick={() => switchTo(l)}
              >
                <Flag code={l} />
                <span>{NATIVE_NAME[l]}</span>
                {l === locale && <Icon name="check" className="lang-dropdown__check" />}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
