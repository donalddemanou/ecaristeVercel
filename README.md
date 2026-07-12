# ECARISTE — Site vitrine (Next.js)

Version **Next.js** du site ECARISTE Transports & Logistique, déployable
gratuitement sur **Vercel**. Le design est strictement identique à la version
PHP d'origine (même feuille de style CSS, même structure HTML).

## Stack

- [Next.js 15](https://nextjs.org/) (App Router) + React 19 + TypeScript
- CSS pur (aucun framework), repris verbatim de la version PHP (`app/globals.css`)
- Fonction serverless pour le formulaire de contact (`app/api/contact`)

## Structure

```
app/
  layout.tsx            Layout racine (metadata SEO, JSON-LD, header/footer)
  page.tsx              Accueil
  services/             Nos services
  suivi-colis/          Suivi de colis
  actualites/           Liste + articles ([slug])
  a-propos/             À propos
  contact/              Contact (formulaire)
  mentions-legales/     Mentions légales
  confidentialite/      Politique de confidentialité
  api/contact/route.ts  Traitement du formulaire (envoi e-mail)
  globals.css           Design tokens + styles (identiques à la version PHP)
components/             Header, Footer, Icon, carousels, formulaires (client)
lib/                    config.ts (contenu du site) + articles.ts
public/                 Images, favicon, robots.txt, sitemap.xml
```

Le contenu du site (coordonnées, services, témoignages, navigation) est
centralisé dans `lib/config.ts` — l'équivalent de l'ancien `config.php`.

## Développement local

```bash
npm install
npm run dev      # http://localhost:3000
```

Autres commandes : `npm run build` (build de production), `npm start`
(serveur de production), `npm run lint`.

## Formulaire de contact (envoi d'e-mail)

Sur Vercel, la fonction PHP `mail()` n'existe pas. L'envoi passe par l'API
[Resend](https://resend.com) (offre gratuite). Configurez ces variables
d'environnement (voir `.env.example`) :

| Variable         | Rôle                                                        |
| ---------------- | ----------------------------------------------------------- |
| `RESEND_API_KEY` | Clé d'API Resend (obligatoire pour l'envoi réel)            |
| `CONTACT_TO`     | Destinataire des demandes (défaut : `contact@ecariste.com`) |
| `CONTACT_FROM`   | Expéditeur (adresse d'un domaine vérifié dans Resend)       |

Sans clé, la validation et l'anti-spam fonctionnent mais l'envoi renvoie une
erreur invitant à appeler.

## Déploiement sur Vercel

1. Poussez ce dépôt sur GitHub.
2. Sur [vercel.com](https://vercel.com), « New Project » → importez le dépôt.
   Vercel détecte automatiquement Next.js (aucune configuration requise).
3. Dans **Settings → Environment Variables**, ajoutez `RESEND_API_KEY`
   (et éventuellement `CONTACT_TO` / `CONTACT_FROM`).
4. **Deploy**. Ajoutez ensuite votre domaine (`ecariste.com`) dans
   **Settings → Domains** et suivez les instructions DNS.

Les anciennes URLs `.php` sont redirigées (301) vers les URLs propres
(`/index.php` → `/`, `/services.php` → `/services`, etc.) via
`next.config.mjs`, ce qui préserve le référencement existant.

## Images

Les visuels (logo, photos hero/services, favicon) doivent être placés dans
`public/assets/img/` en respectant les chemins référencés dans le code
(ex. `public/assets/img/logo.png`, `public/assets/img/services/<slug>.jpg`),
identiques à la version PHP.
