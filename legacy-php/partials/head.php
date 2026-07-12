<?php
/**
 * <head> commun à toutes les pages.
 * Chaque page définit avant l'include : $pageTitle, $pageDescription,
 * et optionnellement $pagePath (ex: '/services.php') pour le canonical/OG.
 */

$pageTitle       = $pageTitle       ?? $config['default_title'];
$pageDescription = $pageDescription ?? $config['default_description'];
$pagePath        = $pagePath        ?? ($_SERVER['REQUEST_URI'] ?? '/');
$canonicalUrl    = rtrim($config['site_url'], '/') . $pagePath;
?>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title><?= htmlspecialchars($pageTitle) ?></title>
<meta name="description" content="<?= htmlspecialchars($pageDescription) ?>">
<link rel="canonical" href="<?= htmlspecialchars($canonicalUrl) ?>">
<meta name="robots" content="index, follow">

<!-- Open Graph / réseaux sociaux -->
<meta property="og:type" content="website">
<meta property="og:site_name" content="<?= htmlspecialchars($config['site_name']) ?>">
<meta property="og:title" content="<?= htmlspecialchars($pageTitle) ?>">
<meta property="og:description" content="<?= htmlspecialchars($pageDescription) ?>">
<meta property="og:url" content="<?= htmlspecialchars($canonicalUrl) ?>">
<meta property="og:locale" content="fr_FR">
<meta name="twitter:card" content="summary">

<link rel="icon" type="image/png" sizes="16x16" href="/assets/img/favicon/favicon-16x16.png">
<link rel="icon" type="image/png" sizes="32x32" href="/assets/img/favicon/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="48x48" href="/assets/img/favicon/favicon-48x48.png">
<link rel="apple-touch-icon" href="/assets/img/favicon/favicon-48x48.png">
<link rel="stylesheet" href="/assets/css/style.css">

<!-- Données structurées : fiche entreprise pour le référencement local -->
<script type="application/ld+json">
{
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    "name": "<?= addslashes($config['site_name']) ?>",
    "description": "<?= addslashes($config['default_description']) ?>",
    "url": "<?= addslashes($config['site_url']) ?>",
    "telephone": "<?= addslashes($config['contact']['phone']) ?>",
    "email": "<?= addslashes($config['contact']['email']) ?>",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "<?= addslashes($config['contact']['address_line']) ?>",
        "addressLocality": "Sion",
        "postalCode": "1950",
        "addressCountry": "CH"
    },
    "openingHours": "Mo-Fr 08:00-18:00",
    "sameAs": [
        "<?= addslashes($config['social']['facebook']) ?>",
        "<?= addslashes($config['social']['linkedin']) ?>"
    ]
}
</script>
