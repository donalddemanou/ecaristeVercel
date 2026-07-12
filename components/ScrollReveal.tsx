'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Animations au scroll : révèle les éléments .reveal quand ils entrent dans le
 * viewport. Rejoué à chaque changement de page (navigation côté client).
 */
export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const revealEls = document.querySelectorAll<HTMLElement>('.reveal');
    if (!revealEls.length) return;

    if ('IntersectionObserver' in window) {
      const revealObserver = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              obs.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
      );
      revealEls.forEach((el) => revealObserver.observe(el));
      return () => revealObserver.disconnect();
    }

    revealEls.forEach((el) => el.classList.add('is-visible'));
  }, [pathname]);

  return null;
}
