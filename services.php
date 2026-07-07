<?php
$config = require __DIR__ . '/config.php';
require __DIR__ . '/partials/icons.php';

$pageTitle       = "Nos services — Transport, logistique, affrètement | ECARISTE";
$pageDescription = "Découvrez les services ECARISTE : transport national et international, logistique, affrètement, livraison express et entreposage.";
$pagePath        = '/services.php';
?>
<!DOCTYPE html>
<html lang="fr">
<head>
<?php include __DIR__ . '/partials/head.php'; ?>
</head>
<body>
<?php include __DIR__ . '/partials/header.php'; ?>

<main>
    <section style="padding-top:3rem; padding-bottom:3rem; background:var(--navy-900); color:var(--white); text-align:center;">
        <div class="container">
            <span class="eyebrow" style="background:rgba(255,255,255,0.1); border-color:rgba(255,255,255,0.2); color:var(--white);"><?= icon('package') ?> Nos services</span>
            <h2 style="color:var(--white); margin-top:1rem;">Nos services</h2>
            <p style="color:rgba(255,255,255,0.75); max-width:560px; margin:0.75rem auto 0;">Des solutions logistiques complètes pour tous vos besoins de transport.</p>
        </div>
    </section>

    <section>
        <div class="container">
            <div class="service-cards">
                <?php foreach ($config['services'] as $i => $service): ?>
                    <article class="service-card" id="<?= htmlspecialchars($service['slug']) ?>">
                        <div class="service-card__media photo-placeholder">
                            <?= icon($service['icon']) ?>
                            <span><?= htmlspecialchars($service['title']) ?></span>
                        </div>
                        <div class="service-card__body">
                            <p><?= htmlspecialchars($service['tagline']) ?></p>
                            <ul class="service-card__points">
                                <?php foreach ($service['points'] as $point): ?>
                                    <li><?= icon('check') ?><?= htmlspecialchars($point) ?></li>
                                <?php endforeach; ?>
                            </ul>
                            <a href="/contact.php?service=<?= urlencode($service['slug']) ?>" class="btn btn--dark btn--sm">
                                En savoir plus <?= icon('arrow-right') ?>
                            </a>
                        </div>
                    </article>
                <?php endforeach; ?>
            </div>
        </div>
    </section>
</main>

<?php include __DIR__ . '/partials/footer.php'; ?>
</body>
</html>
