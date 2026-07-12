<?php
$config = require __DIR__ . '/config.php';
require __DIR__ . '/partials/icons.php';

$pageTitle       = "Politique de confidentialité — ECARISTE";
$pageDescription = "Politique de confidentialité et protection des données du site ECARISTE.";
$pagePath        = '/confidentialite.php';
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
            <h1>Politique de confidentialité</h1>

            <p style="margin-top:1rem; padding:1rem; background:var(--gray-50); border-radius:var(--radius-sm); font-size:0.9rem;">
                Modèle à faire valider par un conseil juridique avant mise en ligne, notamment sur la durée de conservation des données et les droits applicables (RGPD / LPD suisse).
            </p>

            <h2 style="margin-top:2rem;">Données collectées</h2>
            <p>Le formulaire de contact du site collecte votre nom, votre e-mail, votre téléphone (facultatif) et le message envoyé, dans le seul but de répondre à votre demande.</p>

            <h2 style="margin-top:2rem;">Utilisation des données</h2>
            <p>Ces données sont transmises par e-mail à l'équipe ECARISTE et ne sont ni revendues, ni partagées avec des tiers à des fins commerciales.</p>

            <h2 style="margin-top:2rem;">Vos droits</h2>
            <p>Vous pouvez demander l'accès, la rectification ou la suppression de vos données en nous contactant à
                <a href="mailto:<?= htmlspecialchars($config['contact']['email']) ?>"><?= htmlspecialchars($config['contact']['email']) ?></a>.</p>
        </div>
    </section>
</main>

<?php include __DIR__ . '/partials/footer.php'; ?>
</body>
</html>
