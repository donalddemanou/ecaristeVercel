import type { FeatureKey, FleetKey, ServiceSlug } from '@/lib/config';
import type { Dictionary } from './fr';

const de: Dictionary = {
  localeName: 'Deutsch',
  htmlLang: 'de',
  ogLocale: 'de_DE',

  common: {
    baseline: 'Transport & Logistik',
    quote: 'Angebot anfordern',
    learnMore: 'Mehr erfahren',
    readMore: 'Mehr erfahren',
    hours: 'Mo-Fr: 8-18 Uhr',
    backToTop: 'Nach oben',
  },

  nav: {
    home: 'Startseite',
    services: 'Leistungen',
    tracking: 'Sendungsverfolgung',
    news: 'Aktuelles',
    about: 'Über uns',
    contact: 'Kontakt',
  },

  header: {
    openMenu: 'Menü öffnen',
    languageLabel: 'Sprache',
  },

  footer: {
    aboutText:
      'Ihr vertrauensvoller Partner für Gütertransport und Logistik. Nationale und internationale Expertise im Dienste Ihres Unternehmens.',
    quickLinks: 'Schnellzugriff',
    servicesTitle: 'Leistungen',
    contactTitle: 'Kontakt',
    addressLabel: 'Adresse',
    phoneLabel: 'Telefon',
    emailLabel: 'E-Mail',
    hoursLabel: 'Öffnungszeiten',
    rights: 'Transport & Logistik. Alle Rechte vorbehalten.',
    legal: 'Impressum',
    privacy: 'Datenschutzerklärung',
    ctaTitle: 'Bereit, mit uns zu versenden?',
    ctaText:
      'Kontaktieren Sie uns noch heute für ein individuelles Angebot oder eine massgeschneiderte Logistiklösung.',
    ctaWrite: 'Schreiben Sie uns',
  },

  meta: {
    default: {
      title: 'ECARISTE — Transport & Logistik in Frankreich und weltweit',
      description:
        'ECARISTE bietet massgeschneiderte Lösungen für Gütertransport, Logistik und Befrachtung in Frankreich und international.',
    },
    home: {
      title: 'ECARISTE — Transport & Logistik in Frankreich und weltweit',
      description:
        'ECARISTE bietet massgeschneiderte Lösungen für Gütertransport, Logistik und Befrachtung in Frankreich und international.',
    },
    services: {
      title: 'Unsere Leistungen — Transport, Logistik, Befrachtung | ECARISTE',
      description:
        'Entdecken Sie die Leistungen von ECARISTE: nationaler und internationaler Transport, Logistik, Befrachtung, Expresslieferung und Lagerung.',
    },
    tracking: {
      title: 'Sendungsverfolgung — ECARISTE',
      description: 'Verfolgen Sie Ihre ECARISTE-Sendung in Echtzeit mit Ihrer Sendungsnummer.',
    },
    news: {
      title: 'Aktuelles — ECARISTE Transport & Logistik',
      description:
        'Die neuesten Nachrichten von ECARISTE und aus der Transport- und Logistikbranche.',
    },
    about: {
      title: 'Über uns — ECARISTE Transport & Logistik',
      description:
        'Entdecken Sie die Geschichte, die Mission und die Werte von ECARISTE, Ihrem Transport- und Logistikpartner, gegründet von einem zugelassenen EU-Spediteur.',
    },
    contact: {
      title: 'Kontakt — ECARISTE Transport & Logistik',
      description:
        'Kontaktieren Sie ECARISTE für ein individuelles Angebot oder eine massgeschneiderte Logistiklösung. Telefon, E-Mail und Kontaktformular.',
    },
    legal: {
      title: 'Impressum — ECARISTE',
      description: 'Impressum der Website ECARISTE Transport & Logistik.',
    },
    privacy: {
      title: 'Datenschutzerklärung — ECARISTE',
      description: 'Datenschutzerklärung und Datenschutz der ECARISTE-Website.',
    },
  },

  home: {
    heroEyebrow: 'Ihr Logistikpartner',
    heroTitleBefore: 'Ihr vertrauensvoller Partner für',
    heroMark1: 'Transport',
    heroTitleMid: 'und',
    heroMark2: 'Logistik',
    heroText:
      'ECARISTE bietet massgeschneiderte Lösungen für Gütertransport, Logistik und Befrachtung in Frankreich und international.',
    heroServicesBtn: 'Unsere Leistungen',
    badge1Strong: 'EU-zugelassen',
    badge1Span: 'Spediteur',
    badge2Strong: '6 Tage/Woche',
    badge2Span: 'Team verfügbar',
    servicesEyebrow: 'Unsere Leistungen',
    servicesTitle: 'Komplette Logistiklösungen, zugeschnitten auf Ihre Bedürfnisse',
    servicesText:
      'Vom nationalen Transport bis zur Lagerung deckt ECARISTE Ihre gesamte Logistikkette ab.',
    seeAllServices: 'Alle Leistungen ansehen',
    whyEyebrow: 'Warum ECARISTE',
    whyTitle: 'Warum ECARISTE wählen?',
    whyText:
      'Gestützt auf die über 10-jährige Erfahrung unseres Gründers in Transport und Logistik stellen wir diesen Anspruch ab heute in den Dienst Ihres Unternehmens. Unser Versprechen: Pünktlichkeit, Sicherheit und Kundenzufriedenheit.',
    whyList: [
      'Zugelassener Spediteur in der Europäischen Union',
      'Partnernetzwerk in Frankreich und international',
      'Echtzeit-Verfolgung Ihrer Sendungen',
      'Engagiertes und reaktionsschnelles Team, 6 Tage/Woche',
      'Individuelle Lösungen für jeden Kunden',
    ],
    whyPanelTitle: 'Unsere technologischen Stärken',
    clientsEyebrow: 'Sie vertrauen uns',
    clientsTitle: 'Sie vertrauen uns',
    clientsText: 'Industrie- und Handelsunternehmen, die uns täglich ihre Transporte anvertrauen.',
  },

  services: {
    eyebrow: 'Unsere Leistungen',
    title: 'Unsere Leistungen',
    text: 'Komplette Logistiklösungen für all Ihre Transportbedürfnisse.',
    fleetEyebrow: 'Unser Fuhrpark',
    fleetTitle: 'Unsere Transportmittel',
    fleetText: 'Ein vielseitiger Fuhrpark für jede Art von Gütern.',
  },

  tracking: {
    title: 'Sendungsverfolgung',
    text: 'Verfolgen Sie Ihre Sendung in Echtzeit mit Ihrer Sendungsnummer.',
    placeholder: 'Geben Sie Ihre Sendungsnummer ein (z. B. ECR...)',
    label: 'Sendungsnummer',
    submit: 'Verfolgen',
    initial: 'Geben Sie Ihre Sendungsnummer ein, um Ihr Paket zu verfolgen',
    resultTitlePrefix: 'Nummer',
    resultText:
      'Die Online-Verfolgung wird derzeit eingerichtet. Bitte kontaktieren Sie unser Team mit dieser Nummer, um den Status Ihrer Sendung zu erfahren:',
  },

  news: {
    eyebrow: 'Aktuelles',
    title: 'Aktuelles',
    text: 'Die neuesten Nachrichten von ECARISTE und aus der Transport- und Logistikbranche.',
    readArticle: 'Artikel lesen',
    backToNews: 'Zurück zu Aktuelles',
    articleImagePlaceholder: 'Artikelbild (einzufügen)',
  },

  about: {
    eyebrow: 'Über uns',
    title: 'Über ECARISTE',
    text: 'Entdecken Sie unsere Geschichte, unsere Vision und die Werte, die unser tägliches Engagement leiten.',
    historyTitle: 'Unsere Geschichte',
    historyP1:
      'ECARISTE Transport & Logistik wurde 2026 gegründet und entstand aus der Vision von Lionel FOPA, der seit über 10 Jahren für die Welt des Transports und der Logistik brennt und zugelassener EU-Spediteur ist. Sein Ziel: ein Unternehmen aufzubauen, das für seine nationale und internationale Expertise anerkannt ist.',
    historyP2:
      'Von Anfang an stützt sich ECARISTE auf diese Expertise, um innovative Logistiklösungen zu entwickeln und Schritt für Schritt ein solides Partnernetzwerk in Frankreich und international aufzubauen.',
    historyP3:
      'Unser Anspruch: Sendung für Sendung ein massgeblicher Partner für Unternehmen zu werden, die Zuverlässigkeit, Reaktionsschnelligkeit und Servicequalität suchen.',
    historyImgAlt: 'ECARISTE-Lagerhaus',
    missionEyebrow: 'Unsere Mission',
    missionTitle: 'Ihren Transport und Ihre Logistik vereinfachen',
    missionText:
      'Jedem Kunden, unabhängig von seiner Grösse, eine massgeschneiderte Betreuung, ständige Reaktionsschnelligkeit und einen gleichbleibend hohen Qualitätsanspruch bieten — in Frankreich wie international.',
    valuesEyebrow: 'Unsere Werte',
    valuesTitle: 'Was unsere tägliche Arbeit leitet',
    values: [
      { title: 'Zuverlässigkeit', text: 'Pünktlichkeit und Sorgfalt in jeder Phase Ihrer Sendungen.' },
      { title: 'Sicherheit', text: 'Ihre Waren werden mit grösster Sorgfalt behandelt, auf jedem Kilometer.' },
      { title: 'Nähe', text: 'Ein Team, das 6 Tage/Woche verfügbar ist und auf Ihre Bedürfnisse eingeht.' },
      { title: 'Innovation', text: 'GPS-Verfolgung, integriertes TMS und papierlose Abwicklung für Ihre Sicherheit.' },
    ],
    whyTitle: 'Warum ECARISTE wählen?',
    whyText:
      'Gestützt auf die über 10-jährige Erfahrung unseres Gründers in Transport und Logistik stellen wir diesen Anspruch ab heute in den Dienst Ihres Unternehmens. Unser Versprechen: Pünktlichkeit, Sicherheit und Kundenzufriedenheit.',
    whyList: [
      'Zugelassener Spediteur in der Europäischen Union',
      'Partnernetzwerk in Frankreich und international',
      'Echtzeit-Verfolgung Ihrer Sendungen',
      'Engagiertes und reaktionsschnelles Team, 6 Tage/Woche',
      'Individuelle Lösungen für jeden Kunden',
    ],
    whyPanelTitle: 'Unsere technologischen Stärken',
    discussBtn: 'Ihr Projekt besprechen',
    teamEyebrow: 'Unser Team',
    teamTitle: 'Ein Team an Ihrer Seite',
    teamText: 'Fachleute für Transport und Logistik, geschult, um Ihre Anforderungen zu erfüllen.',
    teamPhoto: 'ECARISTE-Teamfoto (einzufügen)',
  },

  contact: {
    eyebrow: 'Kontakt',
    title: 'Kontaktieren Sie uns',
    text: 'Eine Frage, ein Transport- oder Logistikprojekt? Unser Team antwortet Ihnen schnell.',
    successBanner: 'Ihre Nachricht wurde gesendet. Wir melden uns sehr bald bei Ihnen!',
    errorBanner: 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut oder rufen Sie uns direkt an.',
    fieldName: 'Vollständiger Name *',
    fieldEmail: 'E-Mail *',
    fieldPhone: 'Telefon',
    fieldService: 'Betroffene Leistung',
    servicePlaceholder: 'Auswählen...',
    fieldMessage: 'Nachricht *',
    submit: 'Nachricht senden',
    honeypotLabel: 'Dieses Feld nicht ausfüllen',
    infoAddress: 'Adresse',
    infoPhone: 'Telefon',
    infoEmail: 'E-Mail',
    infoHours: 'Öffnungszeiten',
    mapTitle: 'ECARISTE-Standort in Sion, Schweiz',
    errName: 'Bitte geben Sie Ihren Namen an.',
    errEmail: 'Ungültige E-Mail-Adresse.',
    errMessage: 'Bitte beschreiben Sie Ihr Anliegen (mindestens 10 Zeichen).',
    errForm: 'Der Versand ist fehlgeschlagen. Bitte versuchen Sie es erneut oder kontaktieren Sie uns telefonisch.',
  },

  legal: {
    title: 'Impressum',
    disclaimer:
      'Zu vervollständigende Vorlage: Die folgenden Felder (Unternehmens-Identifikationsnummer UID/IDE, Rechtsform, Hosting-Anbieter) müssen vor der Veröffentlichung geprüft und ergänzt werden.',
    editorTitle: 'Herausgeber der Website',
    ideLabel: 'UID/IDE-Nummer:',
    toComplete: 'zu ergänzen',
    phoneLabel: 'Telefon:',
    emailLabel: 'E-Mail:',
    hostingTitle: 'Hosting',
    hostingText: 'Name, Adresse und Kontakt des Hosting-Anbieters:',
    ipTitle: 'Geistiges Eigentum',
    ipText:
      'Alle Inhalte dieser Website (Texte, Bilder, Logo) sind Eigentum von ECARISTE, sofern nicht anders angegeben, und dürfen ohne vorherige Genehmigung nicht reproduziert werden.',
  },

  privacy: {
    title: 'Datenschutzerklärung',
    disclaimer:
      'Vorlage, die vor der Veröffentlichung von einem Rechtsberater zu prüfen ist, insbesondere hinsichtlich der Speicherdauer der Daten und der geltenden Rechte (DSGVO / Schweizer DSG).',
    collectedTitle: 'Erhobene Daten',
    collectedText:
      'Das Kontaktformular der Website erfasst Ihren Namen, Ihre E-Mail, Ihre Telefonnummer (optional) und die gesendete Nachricht, ausschliesslich zum Zweck der Beantwortung Ihrer Anfrage.',
    useTitle: 'Verwendung der Daten',
    useText:
      'Diese Daten werden per E-Mail an das ECARISTE-Team übermittelt und weder verkauft noch zu kommerziellen Zwecken an Dritte weitergegeben.',
    rightsTitle: 'Ihre Rechte',
    rightsTextBefore:
      'Sie können Auskunft, Berichtigung oder Löschung Ihrer Daten verlangen, indem Sie uns unter ',
    rightsTextAfter: ' kontaktieren.',
  },

  servicesContent: {
    'transport-national': {
      title: 'Nationaler Transport',
      tagline: 'Zuverlässige Transportlösungen für ganz Frankreich.',
      points: ['Lieferung in 24-48 h', 'GPS-Verfolgung in Echtzeit', 'Moderne Fahrzeugflotte', 'Warenversicherung'],
    },
    'transport-international': {
      title: 'Internationaler Transport',
      tagline: 'Expertise im internationalen Gütertransport.',
      points: ['Europa und weltweit', 'Incoterms', 'Zoll und Vorschriften', 'Sammelgut und Komplettladung'],
    },
    logistique: {
      title: 'Logistik',
      tagline: 'Komplette Verwaltung Ihrer Logistikströme.',
      points: ['Supply Chain', 'Kommissionierung', 'Bestandsverwaltung', 'Cross-Docking'],
    },
    affretement: {
      title: 'Befrachtung',
      tagline: 'Befrachtungslösungen, zugeschnitten auf Ihre Bedürfnisse.',
      points: ['Strassenbefrachtung', 'Luftbefrachtung', 'Seebefrachtung', 'Tarifverhandlung'],
    },
    'livraison-express': {
      title: 'Expresslieferung',
      tagline: 'Schnelle und sichere Expresslieferung.',
      points: ['Lieferung am nächsten Tag', 'Pakete und Dokumente', 'Dringende Aufträge bearbeitet', 'Prioritäre Verfolgung'],
    },
    entreposage: {
      title: 'Lagerung',
      tagline: 'Sichere und flexible Lagerlösungen.',
      points: ['Sichere Lager', 'Zugang rund um die Uhr', 'Klimatisierung', 'Bestandsverwaltung'],
    },
  } as Record<ServiceSlug, { title: string; tagline: string; points: string[] }>,

  features: {
    digital: { title: 'Digitale Unterstützung', text: 'Echtzeit-Verfolgung von Lkw und Ladung' },
    gps: { title: 'GPS-Verfolgung', text: 'Echtzeit-Ortung Ihrer Sendungen' },
    tms: { title: 'Integriertes TMS', text: 'Automatisierte Verfolgung der gesamten Logistikkette' },
    demat: { title: 'Papierlose Abwicklung', text: 'Versand und Empfang von Rechnungen und CMR per E-Mail' },
  } as Record<FeatureKey, { title: string; text: string }>,

  fleetContent: {
    tautliner: {
      title: 'Tautliner (Planenauflieger)',
      text: 'Planensattelauflieger für schnelles seitliches Beladen und optimalen Schutz Ihrer Waren.',
    },
    plateau: {
      title: 'Pritsche',
      text: 'Pritschenanhänger für lange, schwere oder übergrosse Ladungen.',
    },
    'camion-remorque': {
      title: 'Lastzug',
      text: 'Hohe Kapazität für grosse Volumen über lange Strecken.',
    },
    fourgon: {
      title: 'Kastenwagen',
      text: 'Ideal für innerstädtische Lieferungen und leichte bis mittlere Ladungen.',
    },
    'porte-bobines': {
      title: 'Coiltransporter',
      text: 'Spezialtransport von Coils und schweren zylindrischen Ladungen.',
    },
  } as Record<FleetKey, { title: string; text: string }>,

  articles: {
    'exemple-article-1': {
      title: 'Beispielartikel — zu ersetzen',
      excerpt:
        'Dies ist ein Demo-Artikel. Ersetzen Sie ihn durch Ihre Neuigkeit (Eröffnung eines neuen Lagers, Partnerschaft, Branchennews...).',
      displayDate: '1. Juni 2026',
      metaTitle: 'Beispielartikel — ECARISTE Aktuelles',
      metaDescription: 'Demo-Artikel, der durch Ihre eigene Neuigkeit ersetzt werden soll.',
      paragraphs: [
        'Dies ist ein Demo-Artikel, der das Layout der ECARISTE-Neuigkeiten zeigen soll. Ersetzen Sie diesen Text durch Ihren eigenen Inhalt: Eröffnung eines neuen Lagers, eine neue Partnerschaft, Branchennews aus Transport und Logistik usw.',
        'Jeder Artikel ist eine einfache eigenständige Seite: Um einen neuen zu veröffentlichen, fügen Sie einen Eintrag in der Konfiguration und den Inhalt in den Übersetzungswörterbüchern hinzu.',
      ],
    },
    'exemple-article-2': {
      title: 'Zweiter Beispielartikel',
      excerpt:
        'Eine zweite Artikelvorlage, bereit zur Anpassung mit Ihrem eigenen Inhalt und Ihren Bildern.',
      displayDate: '15. Mai 2026',
      metaTitle: 'Zweiter Beispielartikel — ECARISTE Aktuelles',
      metaDescription: 'Zweiter Demo-Artikel, der durch Ihre eigene Neuigkeit ersetzt werden soll.',
      paragraphs: [
        'Eine zweite Artikelvorlage, bereit zur Anpassung mit Ihrem eigenen Inhalt und Ihren Bildern.',
        'Jeder Artikel ist eine einfache eigenständige Seite: Um einen neuen zu veröffentlichen, fügen Sie einen Eintrag in der Konfiguration und den Inhalt in den Übersetzungswörterbüchern hinzu.',
      ],
    },
    'exemple-article-3': {
      title: 'Dritter Beispielartikel',
      excerpt:
        'Eine dritte Vorlage, um das Layout der Nachrichtenliste mit mehreren Einträgen zu veranschaulichen.',
      displayDate: '20. April 2026',
      metaTitle: 'Dritter Beispielartikel — ECARISTE Aktuelles',
      metaDescription: 'Dritter Demo-Artikel, der durch Ihre eigene Neuigkeit ersetzt werden soll.',
      paragraphs: [
        'Eine dritte Vorlage, um das Layout der Nachrichtenliste mit mehreren Einträgen zu veranschaulichen.',
        'Jeder Artikel ist eine einfache eigenständige Seite: Um einen neuen zu veröffentlichen, fügen Sie einen Eintrag in der Konfiguration und den Inhalt in den Übersetzungswörterbüchern hinzu.',
      ],
    },
  },
};

export default de;
