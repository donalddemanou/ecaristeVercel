'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { config } from '@/lib/config';
import { localizedHref, type Dictionary, type Locale } from '@/lib/i18n';
import { Icon } from './Icon';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const pathname = usePathname();
  const [navOpen, setNavOpen] = useState(false);

  const isActive = (href: string) => {
    const target = localizedHref(locale, href);
    return href === '/' ? pathname === target : pathname === target || pathname.startsWith(target + '/');
  };

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link href={localizedHref(locale, '/')} className="logo">
          <img
            src="/assets/img/logo.png"
            alt={`${config.site_name} — ${dict.common.baseline}`}
            className="logo__image"
          />
        </Link>

        <nav className="main-nav" aria-label="Navigation">
          <button
            className="nav-toggle"
            id="navToggle"
            aria-expanded={navOpen}
            aria-controls="mainNavList"
            aria-label={dict.header.openMenu}
            onClick={() => setNavOpen((v) => !v)}
          >
            <Icon name="menu" className="nav-toggle__open" />
            <Icon name="close" className="nav-toggle__close" />
          </button>
          <ul className={`main-nav__list${navOpen ? ' is-open' : ''}`} id="mainNavList">
            {config.nav.map((item) => (
              <li key={item.key}>
                <Link
                  href={localizedHref(locale, item.href)}
                  className={isActive(item.href) ? 'is-active' : ''}
                  onClick={() => setNavOpen(false)}
                >
                  {dict.nav[item.key]}
                </Link>
              </li>
            ))}
            <li className="main-nav__cta">
              <Link
                href={localizedHref(locale, '/contact')}
                className="btn btn--primary btn--sm"
                onClick={() => setNavOpen(false)}
              >
                {dict.common.quote}
              </Link>
            </li>
            <li className="main-nav__lang">
              <LanguageSwitcher locale={locale} />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
