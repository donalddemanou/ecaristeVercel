/**
 * Chaque article est une entrée autonome. Pour publier un nouvel article,
 * ajoutez un objet à ce tableau (le contenu peut contenir plusieurs paragraphes).
 */

export interface ArticleParagraph {
  html: string;
}

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO (YYYY-MM-DD) — utilisé pour la vignette (d/m/Y)
  displayDate: string; // date affichée en haut de l'article
  pageTitle: string;
  pageDescription: string;
  paragraphs: string[]; // peut contenir du HTML léger (<code>...)
}

export const articles: Article[] = [
  {
    slug: 'exemple-article-1',
    title: "Exemple d'article — à remplacer",
    excerpt:
      "Ceci est un article de démonstration. Remplacez-le par votre actualité (ouverture d'un nouvel entrepôt, partenariat, actualité du secteur...).",
    date: '2026-06-01',
    displayDate: '1er juin 2026',
    pageTitle: "Exemple d'article — Actualités ECARISTE",
    pageDescription: 'Article de démonstration à remplacer par votre propre actualité.',
    paragraphs: [
      "Ceci est un article de démonstration destiné à montrer la mise en page des actualités ECARISTE. Remplacez ce texte par votre propre contenu : ouverture d'un nouvel entrepôt, nouveau partenariat, actualité du secteur du transport et de la logistique, etc.",
      "Chaque article est une simple page autonome dans le dossier <code>/actualites/</code> : pour en publier un nouveau, dupliquez ce fichier, changez son contenu, puis ajoutez une entrée correspondante dans <code>actualites.php</code>.",
    ],
  },
  {
    slug: 'exemple-article-2',
    title: "Deuxième exemple d'article",
    excerpt:
      "Un second modèle d'article prêt à être personnalisé avec votre propre contenu et vos propres visuels.",
    date: '2026-05-15',
    displayDate: '15 mai 2026',
    pageTitle: "Deuxième exemple d'article — Actualités ECARISTE",
    pageDescription: 'Second article de démonstration à remplacer par votre propre actualité.',
    paragraphs: [
      "Un second modèle d'article, prêt à être personnalisé avec votre propre contenu et vos propres visuels.",
      "Chaque article est une simple page autonome dans le dossier <code>/actualites/</code> : pour en publier un nouveau, dupliquez ce fichier, changez son contenu, puis ajoutez une entrée correspondante dans <code>actualites.php</code>.",
    ],
  },
  {
    slug: 'exemple-article-3',
    title: "Troisième exemple d'article",
    excerpt:
      'Un troisième modèle, pour illustrer la mise en page de la liste des actualités avec plusieurs entrées.',
    date: '2026-04-20',
    displayDate: '20 avril 2026',
    pageTitle: "Troisième exemple d'article — Actualités ECARISTE",
    pageDescription: 'Troisième article de démonstration à remplacer par votre propre actualité.',
    paragraphs: [
      "Un troisième modèle, pour illustrer la mise en page de la liste des actualités avec plusieurs entrées.",
      "Chaque article est une simple page autonome dans le dossier <code>/actualites/</code> : pour en publier un nouveau, dupliquez ce fichier, changez son contenu, puis ajoutez une entrée correspondante dans <code>actualites.php</code>.",
    ],
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

/** Formate une date ISO en jj/mm/aaaa (comme la vignette PHP). */
export function formatDateFr(iso: string): string {
  const [y, m, d] = iso.split('-');
  return `${d}/${m}/${y}`;
}
