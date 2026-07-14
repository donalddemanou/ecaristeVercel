import type { FeatureKey, FleetKey, ServiceSlug } from '@/lib/config';

const fr = {
  localeName: 'Français',
  htmlLang: 'fr',
  ogLocale: 'fr_FR',

  common: {
    baseline: 'Transports & Logistique',
    quote: 'Demander un devis',
    learnMore: 'En savoir plus',
    readMore: 'En savoir plus',
    hours: 'Lun-Ven : 8h-18h',
    backToTop: 'Remonter en haut',
  },

  nav: {
    home: 'Accueil',
    services: 'Services',
    tracking: 'Suivi colis',
    news: 'Actualités',
    about: 'À propos',
    contact: 'Contact',
  },

  header: {
    openMenu: 'Ouvrir le menu',
    languageLabel: 'Langue',
  },

  footer: {
    aboutText:
      "Votre partenaire de confiance pour le transport de marchandises et la logistique. Expertise nationale et internationale au service de votre entreprise.",
    quickLinks: 'Liens rapides',
    servicesTitle: 'Services',
    contactTitle: 'Contact',
    addressLabel: 'Adresse',
    phoneLabel: 'Téléphone',
    emailLabel: 'E-mail',
    hoursLabel: 'Horaires',
    rights: 'Transport & Logistique. Tous droits réservés.',
    legal: 'Mentions légales',
    privacy: 'Politique de confidentialité',
    ctaTitle: 'Prêt à expédier avec nous ?',
    ctaText:
      "Contactez-nous dès aujourd'hui pour un devis personnalisé ou une solution logistique sur mesure.",
    ctaWrite: 'Nous écrire',
  },

  meta: {
    default: {
      title: "ECARISTE — Transports & Logistique en France et à l'international",
      description:
        "ECARISTE vous propose des solutions sur mesure pour le transport de marchandises, la logistique et l'affrètement en France et à l'international.",
    },
    home: {
      title: "ECARISTE — Transports & Logistique en France et à l'international",
      description:
        "ECARISTE vous propose des solutions sur mesure pour le transport de marchandises, la logistique et l'affrètement en France et à l'international.",
    },
    services: {
      title: 'Nos services — Transport, logistique, affrètement | ECARISTE',
      description:
        'Découvrez les services ECARISTE : transport national et international, logistique, affrètement, livraison express et entreposage.',
    },
    tracking: {
      title: 'Suivi de colis — ECARISTE',
      description: 'Suivez votre expédition ECARISTE en temps réel grâce à votre numéro de suivi.',
    },
    news: {
      title: 'Actualités — ECARISTE Transports & Logistique',
      description:
        "Les actualités et l'actualité du secteur du transport et de la logistique par ECARISTE.",
    },
    about: {
      title: 'À propos — ECARISTE Transports & Logistique',
      description:
        "Découvrez l'histoire, la mission et les valeurs d'ECARISTE, votre partenaire transport et logistique fondé par un commissionnaire agréé de transports en Union européenne.",
    },
    contact: {
      title: 'Contact — ECARISTE Transports & Logistique',
      description:
        'Contactez ECARISTE pour un devis personnalisé ou une solution logistique sur mesure. Téléphone, e-mail et formulaire de contact.',
    },
    legal: {
      title: 'Mentions légales — ECARISTE',
      description: 'Mentions légales du site ECARISTE Transports & Logistique.',
    },
    privacy: {
      title: 'Politique de confidentialité — ECARISTE',
      description: 'Politique de confidentialité et protection des données du site ECARISTE.',
    },
  },

  home: {
    heroEyebrow: 'Votre partenaire logistique',
    heroTitleBefore: 'Votre partenaire de confiance en',
    heroMark1: 'transport',
    heroTitleMid: 'et',
    heroMark2: 'logistique',
    heroText:
      "ECARISTE vous propose des solutions sur mesure pour le transport de marchandises, la logistique et l'affrètement en France et à l'international.",
    heroServicesBtn: 'Nos services',
    badge1Strong: 'Agréé UE',
    badge1Span: 'commissionnaire de transports',
    badge2Strong: '6j/7',
    badge2Span: 'équipe disponible',
    servicesEyebrow: 'Nos services',
    servicesTitle: 'Des solutions logistiques complètes adaptées à vos besoins',
    servicesText:
      "Du transport national à l'entreposage, ECARISTE couvre toute votre chaîne logistique.",
    seeAllServices: 'Voir tous les services',
    whyEyebrow: 'Pourquoi ECARISTE',
    whyTitle: 'Pourquoi choisir ECARISTE ?',
    whyText:
      "Forts de l'expertise de plus de 10 ans de notre fondateur dans le transport et la logistique, nous mettons cette exigence au service de votre entreprise dès aujourd'hui. Notre engagement : ponctualité, sécurité et satisfaction client.",
    whyList: [
      'Commissionnaire agréé de transports en Union européenne',
      "Réseau de partenaires en France et à l'international",
      'Suivi en temps réel de vos expéditions',
      'Équipe dédiée et réactive 6j/7',
      'Solutions personnalisées pour chaque client',
    ],
    whyPanelTitle: 'Nos atouts technologiques',
    clientsEyebrow: 'Ils nous font confiance',
    clientsTitle: 'Ils nous font confiance',
    clientsText: 'Des industriels et distributeurs qui nous confient leurs transports au quotidien.',
  },

  services: {
    eyebrow: 'Nos services',
    title: 'Nos services',
    text: 'Des solutions logistiques complètes pour tous vos besoins de transport.',
    fleetEyebrow: 'Notre flotte',
    fleetTitle: 'Nos moyens de transport',
    fleetText: 'Une flotte variée pour répondre à chaque type de marchandise.',
  },

  tracking: {
    title: 'Suivi de colis',
    text: 'Suivez votre expédition en temps réel grâce à votre numéro de suivi.',
    placeholder: 'Entrez votre numéro de suivi (ex: ECR...)',
    label: 'Numéro de suivi',
    submit: 'Suivre',
    initial: 'Entrez votre numéro de suivi pour suivre votre colis',
    resultTitlePrefix: 'Numéro',
    resultText:
      'Le suivi en ligne est en cours de mise en place. Contactez notre équipe avec ce numéro pour connaître le statut de votre expédition :',
  },

  news: {
    eyebrow: 'Actualités',
    title: 'Actualités',
    text:
      "Les dernières nouvelles d'ECARISTE et du secteur du transport et de la logistique.",
    readArticle: "Lire l'article",
    backToNews: 'Retour aux actualités',
    articleImagePlaceholder: "Image de l'article (à intégrer)",
  },

  about: {
    eyebrow: 'À propos',
    title: "À propos d'ECARISTE",
    text:
      'Découvrez notre histoire, notre vision et les valeurs qui guident notre engagement quotidien.',
    historyTitle: 'Notre histoire',
    historyP1:
      "Fondée en 2026, ECARISTE Transports & Logistique est née de la vision de Lionel FOPA, passionné par le monde du transport et de la logistique depuis plus de 10 ans, commissionnaire agréé de transports en Union européenne. Il a pour ambition de créer une entreprise reconnue pour son expertise nationale et internationale.",
    historyP2:
      "Dès sa création, ECARISTE s'appuie sur cette expertise pour développer des solutions logistiques innovantes et construire, pas à pas, un réseau de partenaires solide en France et à l'international.",
    historyP3:
      "Notre ambition : devenir, au fil des expéditions, un partenaire de référence pour les entreprises qui recherchent fiabilité, réactivité et exigence de service.",
    historyImgAlt: 'Entrepôt ECARISTE',
    missionEyebrow: 'Notre mission',
    missionTitle: 'Simplifier votre transport et votre logistique',
    missionText:
      "Offrir à chaque client, quelle que soit sa taille, un accompagnement sur mesure, une réactivité de tous les instants et une exigence constante de qualité — en France comme à l'international.",
    valuesEyebrow: 'Nos valeurs',
    valuesTitle: 'Ce qui guide notre travail au quotidien',
    values: [
      { title: 'Fiabilité', text: 'Ponctualité et rigueur à chaque étape de vos expéditions.' },
      { title: 'Sécurité', text: 'Vos marchandises traitées avec le plus grand soin, à chaque kilomètre.' },
      { title: 'Proximité', text: "Une équipe disponible 6j/7, à l'écoute de vos besoins." },
      { title: 'Innovation', text: 'Suivi GPS, TMS intégré et dématérialisation au service de votre tranquillité.' },
    ],
    whyTitle: 'Pourquoi choisir ECARISTE ?',
    whyText:
      "Forts de l'expertise de plus de 10 ans de notre fondateur dans le transport et la logistique, nous mettons cette exigence au service de votre entreprise dès aujourd'hui. Notre engagement : ponctualité, sécurité et satisfaction client.",
    whyList: [
      'Commissionnaire agréé de transports en Union européenne',
      "Réseau de partenaires en France et à l'international",
      'Suivi en temps réel de vos expéditions',
      'Équipe dédiée et réactive 6j/7',
      'Solutions personnalisées pour chaque client',
    ],
    whyPanelTitle: 'Nos atouts technologiques',
    discussBtn: 'Discuter de votre projet',
    teamEyebrow: 'Notre équipe',
    teamTitle: 'Une équipe engagée à vos côtés',
    teamText:
      'Des professionnels du transport et de la logistique, formés pour répondre à vos exigences.',
    teamPhoto: 'Photo équipe ECARISTE (à intégrer)',
  },

  contact: {
    eyebrow: 'Contact',
    title: 'Contactez-nous',
    text:
      'Une question, un projet de transport ou de logistique ? Notre équipe vous répond rapidement.',
    successBanner: 'Votre message a bien été envoyé. Nous revenons vers vous très vite !',
    errorBanner: 'Une erreur est survenue. Merci de réessayer ou de nous appeler directement.',
    fieldName: 'Nom complet *',
    fieldEmail: 'E-mail *',
    fieldPhone: 'Téléphone',
    fieldService: 'Service concerné',
    servicePlaceholder: 'Sélectionner...',
    fieldMessage: 'Message *',
    submit: 'Envoyer le message',
    honeypotLabel: 'Ne pas remplir ce champ',
    infoAddress: 'Adresse',
    infoPhone: 'Téléphone',
    infoEmail: 'E-mail',
    infoHours: 'Horaires',
    mapTitle: 'Localisation ECARISTE à Sion, Suisse',
    errName: "Merci d'indiquer votre nom.",
    errEmail: 'Adresse e-mail invalide.',
    errMessage: 'Merci de décrire votre demande (10 caractères minimum).',
    errForm: "L'envoi a échoué, merci de réessayer ou de nous contacter par téléphone.",
  },

  legal: {
    title: 'Mentions légales',
    disclaimer:
      "Modèle à compléter : les champs ci-dessous (numéro d'identification d'entreprise IDE/UID, forme juridique, hébergeur) doivent être vérifiés et complétés avant mise en ligne.",
    editorTitle: 'Éditeur du site',
    ideLabel: 'Numéro IDE/UID :',
    toComplete: 'à compléter',
    phoneLabel: 'Téléphone :',
    emailLabel: 'E-mail :',
    hostingTitle: 'Hébergement',
    hostingText: "Nom, adresse et contact de l'hébergeur :",
    ipTitle: 'Propriété intellectuelle',
    ipText:
      "L'ensemble des contenus présents sur ce site (textes, images, logo) sont la propriété d'ECARISTE, sauf mention contraire, et ne peuvent être reproduits sans autorisation préalable.",
  },

  privacy: {
    title: 'Politique de confidentialité',
    disclaimer:
      "Modèle à faire valider par un conseil juridique avant mise en ligne, notamment sur la durée de conservation des données et les droits applicables (RGPD / LPD suisse).",
    collectedTitle: 'Données collectées',
    collectedText:
      'Le formulaire de contact du site collecte votre nom, votre e-mail, votre téléphone (facultatif) et le message envoyé, dans le seul but de répondre à votre demande.',
    useTitle: 'Utilisation des données',
    useText:
      "Ces données sont transmises par e-mail à l'équipe ECARISTE et ne sont ni revendues, ni partagées avec des tiers à des fins commerciales.",
    rightsTitle: 'Vos droits',
    rightsTextBefore:
      "Vous pouvez demander l'accès, la rectification ou la suppression de vos données en nous contactant à ",
    rightsTextAfter: '.',
  },

  servicesContent: {
    'transport-national': {
      title: 'Transport national',
      tagline: 'Solutions de transport fiables pour toute la France.',
      points: ['Livraison en 24-48h', 'Suivi GPS en temps réel', 'Flotte de véhicules moderne', 'Assurance marchandises'],
    },
    'transport-international': {
      title: 'Transport international',
      tagline: "Expertise en transport de marchandises à l'international.",
      points: ['Europe et monde', 'Incoterms', 'Douane et réglementation', 'Groupage et complet'],
    },
    logistique: {
      title: 'Logistique',
      tagline: 'Gestion complète de vos flux logistiques.',
      points: ['Supply chain', 'Préparation de commandes', 'Gestion des stocks', 'Cross-docking'],
    },
    affretement: {
      title: 'Affrètement',
      tagline: "Solutions d'affrètement adaptées à vos besoins.",
      points: ['Affrètement routier', 'Affrètement aérien', 'Affrètement maritime', 'Négociation tarifs'],
    },
    'livraison-express': {
      title: 'Livraison express',
      tagline: 'Livraison rapide et sécurisée en express.',
      points: ['Livraison J+1', 'Colis et documents', 'Urgences traitées', 'Suivi prioritaire'],
    },
    entreposage: {
      title: 'Entreposage',
      tagline: "Solutions d'entreposage sécurisées et flexibles.",
      points: ['Entrepôts sécurisés', 'Accès 24/7', 'Climatisation', 'Gestion des stocks'],
    },
  } as Record<ServiceSlug, { title: string; tagline: string; points: string[] }>,

  features: {
    digital: { title: 'Assistance digitale', text: 'Tracking des camions et de la cargaison en temps réel' },
    gps: { title: 'Suivi GPS', text: 'Géolocalisation en temps réel de vos expéditions' },
    tms: { title: 'TMS intégré', text: 'Suivi automatisé de toute la chaîne logistique' },
    demat: { title: 'Dématérialisation', text: 'Envoi et réception des factures et CMR par mail' },
  } as Record<FeatureKey, { title: string; text: string }>,

  fleetContent: {
    tautliner: {
      title: 'Tautliner bâché',
      text: 'Semi-remorque bâchée pour un chargement latéral rapide et une protection optimale de vos marchandises.',
    },
    plateau: {
      title: 'Plateau',
      text: 'Remorque plateau pour les charges longues, lourdes ou hors gabarit.',
    },
    'camion-remorque': {
      title: 'Camion-remorque',
      text: 'Grande capacité pour vos volumes importants sur longue distance.',
    },
    fourgon: {
      title: 'Fourgon',
      text: 'Idéal pour les livraisons urbaines et les charges légères à moyennes.',
    },
    'porte-bobines': {
      title: 'Porte-bobines',
      text: 'Transport spécialisé de bobines et de charges cylindriques lourdes.',
    },
  } as Record<FleetKey, { title: string; text: string }>,

  articles: {
    'exemple-article-1': {
      title: "Exemple d'article — à remplacer",
      excerpt:
        "Ceci est un article de démonstration. Remplacez-le par votre actualité (ouverture d'un nouvel entrepôt, partenariat, actualité du secteur...).",
      displayDate: '1er juin 2026',
      metaTitle: "Exemple d'article — Actualités ECARISTE",
      metaDescription: 'Article de démonstration à remplacer par votre propre actualité.',
      paragraphs: [
        "Ceci est un article de démonstration destiné à montrer la mise en page des actualités ECARISTE. Remplacez ce texte par votre propre contenu : ouverture d'un nouvel entrepôt, nouveau partenariat, actualité du secteur du transport et de la logistique, etc.",
        "Chaque article est une simple page autonome : pour en publier un nouveau, ajoutez une entrée dans la configuration et son contenu dans les dictionnaires de traduction.",
      ],
    },
    'exemple-article-2': {
      title: "Deuxième exemple d'article",
      excerpt:
        "Un second modèle d'article prêt à être personnalisé avec votre propre contenu et vos propres visuels.",
      displayDate: '15 mai 2026',
      metaTitle: "Deuxième exemple d'article — Actualités ECARISTE",
      metaDescription: 'Second article de démonstration à remplacer par votre propre actualité.',
      paragraphs: [
        "Un second modèle d'article, prêt à être personnalisé avec votre propre contenu et vos propres visuels.",
        "Chaque article est une simple page autonome : pour en publier un nouveau, ajoutez une entrée dans la configuration et son contenu dans les dictionnaires de traduction.",
      ],
    },
    'exemple-article-3': {
      title: "Troisième exemple d'article",
      excerpt:
        'Un troisième modèle, pour illustrer la mise en page de la liste des actualités avec plusieurs entrées.',
      displayDate: '20 avril 2026',
      metaTitle: "Troisième exemple d'article — Actualités ECARISTE",
      metaDescription: 'Troisième article de démonstration à remplacer par votre propre actualité.',
      paragraphs: [
        'Un troisième modèle, pour illustrer la mise en page de la liste des actualités avec plusieurs entrées.',
        "Chaque article est une simple page autonome : pour en publier un nouveau, ajoutez une entrée dans la configuration et son contenu dans les dictionnaires de traduction.",
      ],
    },
  },
};

export type Dictionary = typeof fr;
export default fr;
