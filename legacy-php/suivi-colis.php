<?php
$config = require __DIR__ . '/config.php';
require __DIR__ . '/partials/icons.php';

$pageTitle       = "Suivi de colis — ECARISTE";
$pageDescription = "Suivez votre expédition ECARISTE en temps réel grâce à votre numéro de suivi.";
$pagePath        = '/suivi-colis.php';
?>
<!DOCTYPE html>
<html lang="fr">
<head>
<?php include __DIR__ . '/partials/head.php'; ?>
</head>
<body>
<?php include __DIR__ . '/partials/header.php'; ?>

<main>
    <section style="padding-top:3rem; padding-bottom:2.5rem; background:var(--navy-800); color:var(--white); text-align:center;">
        <div class="container">
            <h2 style="color:var(--white);">Suivi de colis</h2>
            <p style="color:rgba(255,255,255,0.75); max-width:520px; margin:0.75rem auto 0;">Suivez votre expédition en temps réel grâce à votre numéro de suivi.</p>

            <form class="tracking-form" id="trackingForm">
                <label for="trackingNumber" class="sr-only" style="position:absolute; left:-9999px;">Numéro de suivi</label>
                <input type="text" id="trackingNumber" name="trackingNumber" placeholder="Entrez votre numéro de suivi (ex: ECR...)" autocomplete="off">
                <button type="submit" class="btn btn--primary"><?= icon('arrow-right') ?> Suivre</button>
            </form>
        </div>
    </section>

    <section>
        <div class="container">
            <div class="tracking-result" id="trackingResult"
                 data-phone="<?= htmlspecialchars($config['contact']['phone']) ?>"
                 data-phone-href="<?= htmlspecialchars($config['contact']['phone_href']) ?>"
                 data-email="<?= htmlspecialchars($config['contact']['email']) ?>">
                <?= icon('truck') ?>
                <p>Entrez votre numéro de suivi pour suivre votre colis</p>
            </div>
        </div>
    </section>
</main>

<?php include __DIR__ . '/partials/footer.php'; ?>
<script src="/assets/js/tracking.js" defer></script>
</body>
</html>
