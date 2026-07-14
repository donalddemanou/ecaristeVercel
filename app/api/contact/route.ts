import { NextResponse } from 'next/server';
import { config } from '@/lib/config';
import { getDictionary, isLocale, defaultLocale } from '@/lib/i18n';

/**
 * Traitement du formulaire de contact : validation, anti-spam (honeypot) et
 * envoi de l'e-mail. Réponse JSON { success, errors } pour l'appel AJAX.
 * Les messages d'erreur sont localisés selon le champ `locale` du formulaire.
 *
 * Envoi d'e-mail sur Vercel : la fonction mail() de PHP n'existe pas ici.
 * On utilise l'API Resend (offre gratuite, https://resend.com) via `fetch`,
 * configurée par variables d'environnement :
 *   - RESEND_API_KEY : clé d'API Resend (obligatoire pour l'envoi réel)
 *   - CONTACT_TO     : destinataire (défaut : contact@ecariste.com)
 *   - CONTACT_FROM   : expéditeur vérifié (défaut : onboarding@resend.dev)
 */

const strip = (v: unknown) =>
  String(v ?? '')
    .replace(/<[^>]*>/g, '')
    .trim();

const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

export async function POST(request: Request) {
  const form = await request.formData();

  const localeRaw = String(form.get('locale') ?? '');
  const locale = isLocale(localeRaw) ? localeRaw : defaultLocale;
  const t = getDictionary(locale).contact;

  // Honeypot : champ invisible que seuls les robots remplissent.
  if (strip(form.get('website')) !== '') {
    return NextResponse.json({ success: true, errors: {} });
  }

  const name = strip(form.get('name'));
  const email = String(form.get('email') ?? '').trim();
  const phone = strip(form.get('phone'));
  const service = strip(form.get('service'));
  const message = strip(form.get('message'));

  const errors: Record<string, string> = {};
  if (name === '' || name.length < 2) errors.name = t.errName;
  if (email === '' || !isEmail(email)) errors.email = t.errEmail;
  if (message === '' || message.length < 10) errors.message = t.errMessage;

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ success: false, errors }, { status: 422 });
  }

  const to = process.env.CONTACT_TO || config.contact.email;
  const from = process.env.CONTACT_FROM || 'ECARISTE <onboarding@resend.dev>';
  const subject = '[Site ECARISTE] Nouvelle demande de contact' + (service !== '' ? ' — ' + service : '');

  const body =
    'Nouvelle demande reçue depuis le site ecariste.com\n\n' +
    `Langue : ${locale}\n` +
    `Nom : ${name}\n` +
    `E-mail : ${email}\n` +
    `Téléphone : ${phone !== '' ? phone : 'non renseigné'}\n` +
    `Service concerné : ${service !== '' ? service : 'non précisé'}\n\n` +
    `Message :\n${message}\n`;

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn('[contact] RESEND_API_KEY manquant : e-mail non envoyé.', { name, email });
    return NextResponse.json({ success: false, errors: { form: t.errForm } }, { status: 500 });
  }

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ from, to: [to], reply_to: `${name} <${email}>`, subject, text: body }),
    });

    if (!res.ok) {
      const detail = await res.text();
      console.error('[contact] Échec Resend', res.status, detail);
      return NextResponse.json({ success: false, errors: { form: t.errForm } }, { status: 500 });
    }

    return NextResponse.json({ success: true, errors: {} });
  } catch (err) {
    console.error('[contact] Erreur réseau Resend', err);
    return NextResponse.json({ success: false, errors: { form: t.errForm } }, { status: 500 });
  }
}

export function GET() {
  return NextResponse.json({ success: false, errors: { form: 'Invalid request.' } }, { status: 405 });
}
