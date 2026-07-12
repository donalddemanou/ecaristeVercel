'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { config } from '@/lib/config';
import { Icon } from './Icon';

export default function Header() {
  const pathname = usePathname();
  const [navOpen, setNavOpen] = useState(false);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(href + '/');

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link href="/" className="logo">
          <img
            src="/assets/img/logo.png"
            alt={`${config.site_name} — ${config.site_baseline}`}
            className="logo__image"
          />
        </Link>

        <nav className="main-nav" aria-label="Navigation principale">
          <button
            className="nav-toggle"
            id="navToggle"
            aria-expanded={navOpen}
            aria-controls="mainNavList"
            aria-label="Ouvrir le menu"
            onClick={() => setNavOpen((v) => !v)}
          >
            <Icon name="menu" className="nav-toggle__open" />
            <Icon name="close" className="nav-toggle__close" />
          </button>
          <ul className={`main-nav__list${navOpen ? ' is-open' : ''}`} id="mainNavList">
            {config.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={isActive(item.href) ? 'is-active' : ''}
                  onClick={() => setNavOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="main-nav__cta">
              <Link href="/contact" className="btn btn--primary btn--sm" onClick={() => setNavOpen(false)}>
                Demander un devis
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
