import { NextRequest, NextResponse } from 'next/server';
import { locales, defaultLocale, isLocale } from '@/lib/i18n';

const COOKIE = 'NEXT_LOCALE';

/** Détecte la meilleure langue à partir du cookie puis de l'en-tête Accept-Language. */
function detectLocale(req: NextRequest): string {
  const cookie = req.cookies.get(COOKIE)?.value;
  if (cookie && isLocale(cookie)) return cookie;

  const accept = req.headers.get('accept-language');
  if (accept) {
    const preferred = accept
      .split(',')
      .map((part) => part.split(';')[0].trim().slice(0, 2).toLowerCase());
    for (const lang of preferred) {
      if (isLocale(lang)) return lang;
    }
  }
  return defaultLocale;
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Le chemin possède-t-il déjà un préfixe de langue valide ?
  const hasLocale = locales.some(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`)
  );
  if (hasLocale) return NextResponse.next();

  // Redirige vers la langue détectée en conservant le chemin demandé.
  const locale = detectLocale(req);
  const url = req.nextUrl.clone();
  url.pathname = `/${locale}${pathname === '/' ? '' : pathname}`;

  const res = NextResponse.redirect(url);
  res.cookies.set(COOKIE, locale, { path: '/', maxAge: 60 * 60 * 24 * 365 });
  return res;
}

export const config = {
  // Exclut l'API, les fichiers Next, les assets statiques et les fichiers avec extension.
  matcher: ['/((?!api|_next|assets|.*\\..*).*)'],
};
