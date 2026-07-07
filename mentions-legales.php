<?php
$config = require __DIR__ . '/config.php';
require __DIR__ . '/partials/icons.php';

$pageTitle       = "Mentions légales — ECARISTE";
$pageDescription = "Mentions légales du site ECARISTE Transport & Logistique.";
$pagePath        = '/mentions-legales.php';
?>
<!DOCTYPE html>
<html lang="fr">
<head>
<?php include __DIR__ . '/partials/head.php'; ?>
</head>
<body>
<?php include __DIR__ . '/partials/header.php'; ?>

<main>
    <section style="padding-top:3rem; padding-bottom:3rem;">
        <div class="container" style="max-width:760px;">
            <h1>Mentions légales</h1>

            <p style="margin-top:1rem; padding:1rem; background:var(--gray-50); border-radius:var(--radius-sm); font-size:0.9rem;">
                Modèle à compléter : les champs ci-dessous (numéro d'identification d'entreprise IDE/UID, forme juridique, hébergeur) doivent être vérifiés et complétés avant mise en ligne.
            </p>

            <h2 style="margin-top:2rem;">Éditeur du site</h2>
            <p><?= htmlspecialchars($config['site_name']) ?> — <?= htmlspecialchars($config['site_baseline']) ?><br>
            <?= htmlspecialchars($config['contact']['address_line']) ?>, <?= htmlspecialchars($config['contact']['address_city']) ?><br>
            Téléphone : <?= htmlspecialchars($config['contact']['phone']) ?><br>
            E-mail : <?= htmlspecialchars($config['contact']['email']) ?><br>
            Numéro IDE/UID : <em>à compléter</em></p>

            <h2 style="margin-top:2rem;">Hébergement</h2>
            <p>Nom, adresse et contact de l'hébergeur : <em>à compléter</em>.</p>

            <h2 style="margin-top:2rem;">Propriété intellectuelle</h2>
            <p>L'ensemble des contenus présents sur ce site (textes, images, logo) sont la propriété d'ECARISTE, sauf mention contraire, et ne peuvent être reproduits sans autorisation préalable.</p>
        </div>
    </section>
</main>

<?php include __DIR__ . '/partials/footer.php'; ?>
</body>
</html>
