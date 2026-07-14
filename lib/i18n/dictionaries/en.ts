import type { FeatureKey, ServiceSlug } from '@/lib/config';
import type { Dictionary } from './fr';

const en: Dictionary = {
  localeName: 'English',
  htmlLang: 'en',
  ogLocale: 'en_US',

  common: {
    baseline: 'Transport & Logistics',
    quote: 'Request a quote',
    learnMore: 'Learn more',
    readMore: 'Learn more',
    hours: 'Mon-Fri: 8am-6pm',
    backToTop: 'Back to top',
  },

  nav: {
    home: 'Home',
    services: 'Services',
    tracking: 'Track parcel',
    news: 'News',
    about: 'About',
    contact: 'Contact',
  },

  header: {
    openMenu: 'Open menu',
    languageLabel: 'Language',
  },

  footer: {
    aboutText:
      'Your trusted partner for freight transport and logistics. National and international expertise at the service of your business.',
    quickLinks: 'Quick links',
    servicesTitle: 'Services',
    contactTitle: 'Contact',
    addressLabel: 'Address',
    phoneLabel: 'Phone',
    emailLabel: 'Email',
    hoursLabel: 'Opening hours',
    rights: 'Transport & Logistics. All rights reserved.',
    legal: 'Legal notice',
    privacy: 'Privacy policy',
    ctaTitle: 'Ready to ship with us?',
    ctaText:
      'Contact us today for a personalised quote or a tailor-made logistics solution.',
    ctaWrite: 'Write to us',
  },

  meta: {
    default: {
      title: 'ECARISTE — Transport & Logistics in France and worldwide',
      description:
        'ECARISTE offers tailor-made solutions for freight transport, logistics and chartering in France and internationally.',
    },
    home: {
      title: 'ECARISTE — Transport & Logistics in France and worldwide',
      description:
        'ECARISTE offers tailor-made solutions for freight transport, logistics and chartering in France and internationally.',
    },
    services: {
      title: 'Our services — Transport, logistics, chartering | ECARISTE',
      description:
        'Discover ECARISTE services: national and international transport, logistics, chartering, express delivery and warehousing.',
    },
    tracking: {
      title: 'Parcel tracking — ECARISTE',
      description: 'Track your ECARISTE shipment in real time with your tracking number.',
    },
    news: {
      title: 'News — ECARISTE Transport & Logistics',
      description:
        'The latest news from ECARISTE and from the transport and logistics industry.',
    },
    about: {
      title: 'About — ECARISTE Transport & Logistics',
      description:
        'Discover the story, mission and values of ECARISTE, your transport and logistics partner founded by a licensed EU freight forwarder.',
    },
    contact: {
      title: 'Contact — ECARISTE Transport & Logistics',
      description:
        'Contact ECARISTE for a personalised quote or a tailor-made logistics solution. Phone, email and contact form.',
    },
    legal: {
      title: 'Legal notice — ECARISTE',
      description: 'Legal notice of the ECARISTE Transport & Logistics website.',
    },
    privacy: {
      title: 'Privacy policy — ECARISTE',
      description: 'Privacy policy and data protection of the ECARISTE website.',
    },
  },

  home: {
    heroEyebrow: 'Your logistics partner',
    heroTitleBefore: 'Your trusted partner in',
    heroMark1: 'transport',
    heroTitleMid: 'and',
    heroMark2: 'logistics',
    heroText:
      'ECARISTE offers tailor-made solutions for freight transport, logistics and chartering in France and internationally.',
    heroServicesBtn: 'Our services',
    badge1Strong: 'EU licensed',
    badge1Span: 'freight forwarder',
    badge2Strong: '6 days/7',
    badge2Span: 'team available',
    servicesEyebrow: 'Our services',
    servicesTitle: 'Complete logistics solutions tailored to your needs',
    servicesText:
      'From domestic transport to warehousing, ECARISTE covers your entire logistics chain.',
    seeAllServices: 'See all services',
    whyEyebrow: 'Why ECARISTE',
    whyTitle: 'Why choose ECARISTE?',
    whyText:
      "Backed by our founder's 10+ years of expertise in transport and logistics, we put that standard to work for your business today. Our commitment: punctuality, safety and customer satisfaction.",
    whyList: [
      'Licensed freight forwarder in the European Union',
      'Network of partners in France and internationally',
      'Real-time tracking of your shipments',
      'Dedicated and responsive team, 6 days/7',
      'Customised solutions for every client',
    ],
    whyPanelTitle: 'Our technological strengths',
    testimonialsEyebrow: 'They trust us',
    testimonialsTitle: 'What our clients say',
    testimonialsText: 'Discover what our clients say about our services',
  },

  services: {
    eyebrow: 'Our services',
    title: 'Our services',
    text: 'Complete logistics solutions for all your transport needs.',
  },

  tracking: {
    title: 'Parcel tracking',
    text: 'Track your shipment in real time with your tracking number.',
    placeholder: 'Enter your tracking number (e.g. ECR...)',
    label: 'Tracking number',
    submit: 'Track',
    initial: 'Enter your tracking number to track your parcel',
    resultTitlePrefix: 'Number',
    resultText:
      'Online tracking is being rolled out. Please contact our team with this number to find out the status of your shipment:',
  },

  news: {
    eyebrow: 'News',
    title: 'News',
    text: 'The latest news from ECARISTE and from the transport and logistics industry.',
    readArticle: 'Read the article',
    backToNews: 'Back to news',
    articleImagePlaceholder: 'Article image (to be added)',
  },

  about: {
    eyebrow: 'About',
    title: 'About ECARISTE',
    text: 'Discover our story, our vision and the values that guide our daily commitment.',
    historyTitle: 'Our story',
    historyP1:
      'Founded in 2026, ECARISTE Transport & Logistics was born from the vision of Lionel FOPA, passionate about the world of transport and logistics for more than 10 years and a licensed EU freight forwarder. His ambition is to build a company recognised for its national and international expertise.',
    historyP2:
      'From its inception, ECARISTE draws on this expertise to develop innovative logistics solutions and to build, step by step, a solid network of partners in France and internationally.',
    historyP3:
      'Our ambition: to become, shipment after shipment, a benchmark partner for companies seeking reliability, responsiveness and service excellence.',
    historyImgAlt: 'ECARISTE warehouse',
    missionEyebrow: 'Our mission',
    missionTitle: 'Simplifying your transport and logistics',
    missionText:
      'Providing every client, whatever their size, with tailor-made support, constant responsiveness and an unwavering commitment to quality — in France and internationally.',
    valuesEyebrow: 'Our values',
    valuesTitle: 'What guides our work every day',
    values: [
      { title: 'Reliability', text: 'Punctuality and rigour at every stage of your shipments.' },
      { title: 'Safety', text: 'Your goods handled with the utmost care, every kilometre of the way.' },
      { title: 'Proximity', text: 'A team available 6 days/7, attentive to your needs.' },
      { title: 'Innovation', text: 'GPS tracking, integrated TMS and paperless processing for your peace of mind.' },
    ],
    whyTitle: 'Why choose ECARISTE?',
    whyText:
      "Backed by our founder's 10+ years of expertise in transport and logistics, we put that standard to work for your business today. Our commitment: punctuality, safety and customer satisfaction.",
    whyList: [
      'Licensed freight forwarder in the European Union',
      'Network of partners in France and internationally',
      'Real-time tracking of your shipments',
      'Dedicated and responsive team, 6 days/7',
      'Customised solutions for every client',
    ],
    whyPanelTitle: 'Our technological strengths',
    discussBtn: 'Discuss your project',
    teamEyebrow: 'Our team',
    teamTitle: 'A team committed by your side',
    teamText: 'Transport and logistics professionals trained to meet your requirements.',
    teamPhoto: 'ECARISTE team photo (to be added)',
  },

  contact: {
    eyebrow: 'Contact',
    title: 'Contact us',
    text: 'A question, a transport or logistics project? Our team will reply quickly.',
    successBanner: 'Your message has been sent. We will get back to you very soon!',
    errorBanner: 'An error occurred. Please try again or call us directly.',
    fieldName: 'Full name *',
    fieldEmail: 'Email *',
    fieldPhone: 'Phone',
    fieldService: 'Service concerned',
    servicePlaceholder: 'Select...',
    fieldMessage: 'Message *',
    submit: 'Send message',
    honeypotLabel: 'Do not fill in this field',
    infoAddress: 'Address',
    infoPhone: 'Phone',
    infoEmail: 'Email',
    infoHours: 'Opening hours',
    mapTitle: 'ECARISTE location in Sion, Switzerland',
    errName: 'Please enter your name.',
    errEmail: 'Invalid email address.',
    errMessage: 'Please describe your request (10 characters minimum).',
    errForm: 'Sending failed, please try again or contact us by phone.',
  },

  legal: {
    title: 'Legal notice',
    disclaimer:
      'Template to be completed: the fields below (company registration number IDE/UID, legal form, hosting provider) must be verified and completed before going live.',
    editorTitle: 'Site publisher',
    ideLabel: 'IDE/UID number:',
    toComplete: 'to be completed',
    phoneLabel: 'Phone:',
    emailLabel: 'Email:',
    hostingTitle: 'Hosting',
    hostingText: 'Name, address and contact of the hosting provider:',
    ipTitle: 'Intellectual property',
    ipText:
      'All content on this site (text, images, logo) is the property of ECARISTE, unless otherwise stated, and may not be reproduced without prior authorisation.',
  },

  privacy: {
    title: 'Privacy policy',
    disclaimer:
      'Template to be validated by legal counsel before going live, in particular regarding data retention periods and applicable rights (GDPR / Swiss FADP).',
    collectedTitle: 'Data collected',
    collectedText:
      'The website contact form collects your name, email, phone (optional) and the message sent, for the sole purpose of responding to your request.',
    useTitle: 'Use of data',
    useText:
      'This data is sent by email to the ECARISTE team and is neither sold nor shared with third parties for commercial purposes.',
    rightsTitle: 'Your rights',
    rightsTextBefore:
      'You can request access to, rectification or deletion of your data by contacting us at ',
    rightsTextAfter: '.',
  },

  servicesContent: {
    'transport-national': {
      title: 'National transport',
      tagline: 'Reliable transport solutions throughout France.',
      points: ['Delivery in 24-48h', 'Real-time GPS tracking', 'Modern vehicle fleet', 'Goods insurance'],
    },
    'transport-international': {
      title: 'International transport',
      tagline: 'Expertise in international freight transport.',
      points: ['Europe and worldwide', 'Incoterms', 'Customs and regulations', 'Groupage and full loads'],
    },
    logistique: {
      title: 'Logistics',
      tagline: 'Complete management of your logistics flows.',
      points: ['Supply chain', 'Order preparation', 'Stock management', 'Cross-docking'],
    },
    affretement: {
      title: 'Chartering',
      tagline: 'Chartering solutions tailored to your needs.',
      points: ['Road chartering', 'Air chartering', 'Sea chartering', 'Rate negotiation'],
    },
    'livraison-express': {
      title: 'Express delivery',
      tagline: 'Fast and secure express delivery.',
      points: ['Next-day delivery', 'Parcels and documents', 'Urgent requests handled', 'Priority tracking'],
    },
    entreposage: {
      title: 'Warehousing',
      tagline: 'Secure and flexible warehousing solutions.',
      points: ['Secure warehouses', '24/7 access', 'Climate control', 'Stock management'],
    },
  } as Record<ServiceSlug, { title: string; tagline: string; points: string[] }>,

  features: {
    digital: { title: 'Digital assistance', text: 'Real-time tracking of trucks and cargo' },
    gps: { title: 'GPS tracking', text: 'Real-time geolocation of your shipments' },
    tms: { title: 'Integrated TMS', text: 'Automated tracking of the entire logistics chain' },
    demat: { title: 'Paperless processing', text: 'Sending and receiving invoices and CMR by email' },
  } as Record<FeatureKey, { title: string; text: string }>,

  testimonials: [
    'Exceptional transport service. Impeccable punctuality and professionalism. I highly recommend ECARISTE for any shipment.',
    'We have been working with ECARISTE for 5 years. Their logistics tracking is exemplary and their chartering solutions have made us more efficient.',
    'A responsive and attentive team. Express deliveries are always on time. A logistics partner you can trust.',
  ],

  articles: {
    'exemple-article-1': {
      title: 'Sample article — to be replaced',
      excerpt:
        'This is a demo article. Replace it with your news (opening of a new warehouse, partnership, industry news...).',
      displayDate: 'June 1, 2026',
      metaTitle: 'Sample article — ECARISTE News',
      metaDescription: 'Demo article to be replaced with your own news.',
      paragraphs: [
        'This is a demo article meant to show the layout of ECARISTE news. Replace this text with your own content: opening of a new warehouse, a new partnership, transport and logistics industry news, etc.',
        'Each article is a simple standalone page: to publish a new one, add an entry to the configuration and its content to the translation dictionaries.',
      ],
    },
    'exemple-article-2': {
      title: 'Second sample article',
      excerpt:
        'A second article template ready to be customised with your own content and visuals.',
      displayDate: 'May 15, 2026',
      metaTitle: 'Second sample article — ECARISTE News',
      metaDescription: 'Second demo article to be replaced with your own news.',
      paragraphs: [
        'A second article template, ready to be customised with your own content and visuals.',
        'Each article is a simple standalone page: to publish a new one, add an entry to the configuration and its content to the translation dictionaries.',
      ],
    },
    'exemple-article-3': {
      title: 'Third sample article',
      excerpt:
        'A third template, to illustrate the layout of the news list with several entries.',
      displayDate: 'April 20, 2026',
      metaTitle: 'Third sample article — ECARISTE News',
      metaDescription: 'Third demo article to be replaced with your own news.',
      paragraphs: [
        'A third template, to illustrate the layout of the news list with several entries.',
        'Each article is a simple standalone page: to publish a new one, add an entry to the configuration and its content to the translation dictionaries.',
      ],
    },
  },
};

export default en;
