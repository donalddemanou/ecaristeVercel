<?php
/**
 * Configuration centrale du site ECARISTE.
 * Toute donnée réutilisée à plusieurs endroits (coordonnées, réseaux sociaux,
 * textes légaux) vit ici pour n'être modifiée qu'à un seul endroit.
 */

return [
    'site_name'        => 'ECARISTE',
    'site_baseline'    => 'Transport & Logistique',
    'site_url'         => 'https://www.ecariste.com',
    'default_title'    => 'ECARISTE — Transport & Logistique en France et à l\'international',
    'default_description' => 'ECARISTE vous propose des solutions sur mesure pour le transport de marchandises, la logistique et l\'affrètement en France et à l\'international.',

    'contact' => [
        'address_line' => 'Avenue de Tourbillon 72',
        'address_city' => '1950 Sion, Suisse',
        'phone'        => '+41 78 605 10 35',
        'phone_href'   => '+41786051035',
        'email'        => 'contact@ecariste.com',
        'hours'        => 'Lun-Ven : 8h-18h',
    ],

    'social' => [
        'facebook'  => 'https://facebook.com/ecariste',
        'linkedin'  => 'https://linkedin.com/company/ecariste',
        'whatsapp'  => 'https://wa.me/41786051035',
    ],

    'nav' => [
        ['label' => 'Accueil',     'href' => '/index.php'],
        ['label' => 'Services',    'href' => '/services.php'],
        ['label' => 'Suivi colis', 'href' => '/suivi-colis.php'],
        ['label' => 'Actualités',  'href' => '/actualites.php'],
        ['label' => 'À propos',    'href' => '/a-propos.php'],
        ['label' => 'Contact',     'href' => '/contact.php'],
    ],

    'services' => [
        [
            'slug' => 'transport-national',
            'icon' => 'truck',
            'title' => 'Transport national',
            'tagline' => 'Solutions de transport fiables pour toute la France.',
            'points' => ['Livraison en 24-48h', 'Suivi GPS en temps réel', 'Flotte de véhicules moderne', 'Assurance marchandises'],
        ],
        [
            'slug' => 'transport-international',
            'icon' => 'globe',
            'title' => 'Transport international',
            'tagline' => 'Expertise en transport de marchandises à l\'international.',
            'points' => ['Europe et monde', 'Incoterms', 'Douane et réglementation', 'Groupage et complet'],
        ],
        [
            'slug' => 'logistique',
            'icon' => 'warehouse',
            'title' => 'Logistique',
            'tagline' => 'Gestion complète de vos flux logistiques.',
            'points' => ['Supply chain', 'Préparation de commandes', 'Gestion des stocks', 'Cross-docking'],
        ],
        [
            'slug' => 'affretement',
            'icon' => 'package',
            'title' => 'Affrètement',
            'tagline' => 'Solutions d\'affrètement adaptées à vos besoins.',
            'points' => ['Affrètement routier', 'Affrètement aérien', 'Affrètement maritime', 'Négociation tarifs'],
        ],
        [
            'slug' => 'livraison-express',
            'icon' => 'clock',
            'title' => 'Livraison express',
            'tagline' => 'Livraison rapide et sécurisée en express.',
            'points' => ['Livraison J+1', 'Colis et documents', 'Urgences traitées', 'Suivi prioritaire'],
        ],
        [
            'slug' => 'entreposage',
            'icon' => 'building',
            'title' => 'Entreposage',
            'tagline' => 'Solutions d\'entreposage sécurisées et flexibles.',
            'points' => ['Entrepôts sécurisés', 'Accès 24/7', 'Climatisation', 'Gestion des stocks'],
        ],
    ],

    'features' => [
        ['icon' => 'monitor', 'title' => 'Assistance digitale', 'text' => 'Tracking des camions et de la cargaison en temps réel'],
        ['icon' => 'pin',     'title' => 'Suivi GPS',           'text' => 'Géolocalisation en temps réel de vos expéditions'],
        ['icon' => 'gear',    'title' => 'TMS intégré',         'text' => 'Suivi automatisé de toute la chaîne logistique'],
        ['icon' => 'doc',     'title' => 'Dématérialisation',   'text' => 'Envoi et réception des factures et CMR par mail'],
    ],

    'testimonials' => [
        ['name' => 'Dupont Industries', 'text' => 'Service de transport exceptionnel. Ponctualité et professionnalisme irréprochables. Je recommande vivement ECARISTE pour toute expédition.'],
        ['name' => 'Martin Distribution', 'text' => 'Nous travaillons avec ECARISTE depuis 5 ans. Leur suivi logistique est exemplaire et leurs solutions d\'affrètement nous ont fait gagner en efficacité.'],
        ['name' => 'Lambert & Fils', 'text' => 'Une équipe réactive et à l\'écoute. Les livraisons express sont toujours à l\'heure. Un partenaire logistique de confiance.'],
    ],
];
