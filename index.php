<?php
$config = require __DIR__ . '/config.php';
require __DIR__ . '/partials/icons.php';

$pageTitle       = "ECARISTE — Transports & Logistique en France et à l'international";
$pageDescription = $config['default_description'];
$pagePath        = '/index.php';
?>
<!DOCTYPE html>
<html lang="fr">
<head>
<?php include __DIR__ . '/partials/head.php'; ?>
</head>
<body>
<?php include __DIR__ . '/partials/header.php'; ?>

<main>
    <!-- Hero -->
    <section class="hero">
        <div class="container">
            <div class="hero__inner">
                <div class="hero__bg-photo photo-placeholder" aria-hidden="true">
                    <div><?= icon('truck') ?><br>Photo flotte ECARISTE (à intégrer)</div>
                </div>
                <div class="hero__content">
                    <span class="eyebrow"><?= icon('star') ?> Votre partenaire logistique</span>
                    <h1>Votre partenaire de confiance en <mark>transport</mark> et <mark>logistique</mark></h1>
                    <p>ECARISTE vous propose des solutions sur mesure pour le transport de marchandises, la logistique et l'affrètement en France et à l'international.</p>
                    <div class="btn-group">
                        <a href="/contact.php" class="btn btn--primary"><?= icon('arrow-right') ?> Demander un devis</a>
                        <a href="/services.php" class="btn btn--ghost">Nos services</a>
                    </div>
                </div>
                <div class="hero__badges">
                    <div class="hero-badge">
                        <?= icon('star') ?>
                        <div><strong>Agréé UE</strong><span>commissionnaire de transports</span></div>
                    </div>
                    <div class="hero-badge">
                        <?= icon('check') ?>
                        <div><strong>6j/7</strong><span>équipe disponible</span></div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Feature strip -->
    <section class="feature-strip">
        <div class="container feature-strip__grid">
            <?php foreach ($config['features'] as $feature): ?>
                <div class="feature-item">
                    <?= icon($feature['icon']) ?>
                    <h3><?= htmlspecialchars($feature['title']) ?></h3>
                    <p><?= htmlspecialchars($feature['text']) ?></p>
                </div>
            <?php endforeach; ?>
        </div>
    </section>

    <!-- Services -->
    <section>
        <div class="container">
            <div class="services-section" style="padding: clamp(2rem, 5vw, 3.5rem);">
                <div class="section-head">
                    <span class="eyebrow"><?= icon('package') ?> Nos services</span>
                    <h2>Des solutions logistiques complètes adaptées à vos besoins</h2>
                    <p>Du transport national à l'entreposage, ECARISTE couvre toute votre chaîne logistique.</p>
                </div>

                <div class="service-accordion" id="serviceAccordion">
                    <?php foreach ($config['services'] as $i => $service): ?>
                        <?php $open = $i === 0; ?>
                        <div class="service-row <?= $open ? 'is-open' : '' ?>">
                            <button class="service-row__header" aria-expanded="<?= $open ? 'true' : 'false' ?>">
                                <span class="service-row__index"><?= str_pad((string)($i + 1), 2, '0', STR_PAD_LEFT) ?>.</span>
                                <span class="service-row__title"><?= htmlspecialchars($service['title']) ?></span>
                                <span class="service-row__toggle"><?= icon('chevron-down') ?></span>
                            </button>
                            <div class="service-row__panel" <?= $open ? 'style="max-height:260px"' : '' ?>>
                                <div class="service-row__panel-inner">
                                    <p><?= htmlspecialchars($service['tagline']) ?></p>
                                    <ul class="service-row__points">
                                        <?php foreach ($service['points'] as $point): ?>
                                            <li><?= icon('check') ?><?= htmlspecialchars($point) ?></li>
                                        <?php endforeach; ?>
                                    </ul>
                                    <a href="/services.php#<?= htmlspecialchars($service['slug']) ?>" class="service-row__link btn btn--sm btn--dark">
                                        En savoir plus <?= icon('arrow-right') ?>
                                    </a>
                                </div>
                            </div>
                        </div>
                    <?php endforeach; ?>
                </div>

                <div style="text-align:center; margin-top:2rem;">
                    <a href="/services.php" class="btn btn--dark">Voir tous les services <?= icon('arrow-right') ?></a>
                </div>
            </div>
        </div>
    </section>

    <!-- Why choose us -->
    <section>
        <div class="container">
            <div class="section-head">
                <span class="eyebrow"><?= icon('star') ?> Pourquoi ECARISTE</span>
                <h2>Pourquoi choisir ECARISTE ?</h2>
            </div>
            <div class="why-grid">
                <div>
                    <p class="text-muted">Forts de l'expertise de plus de 10 ans de notre fondateur dans le transport et la logistique, nous mettons cette exigence au service de votre entreprise dès aujourd'hui. Notre engagement : ponctualité, sécurité et satisfaction client.</p>
                    <ul class="why-list">
                        <li><?= icon('check') ?><span>Commissionnaire agréé de transports en Union européenne</span></li>
                        <li><?= icon('check') ?><span>Réseau de partenaires en France et à l'international</span></li>
                        <li><?= icon('check') ?><span>Suivi en temps réel de vos expéditions</span></li>
                        <li><?= icon('check') ?><span>Équipe dédiée et réactive 6j/7</span></li>
                        <li><?= icon('check') ?><span>Solutions personnalisées pour chaque client</span></li>
                    </ul>
                    <a href="/a-propos.php" class="btn btn--dark" style="margin-top:1.75rem;">En savoir plus <?= icon('arrow-right') ?></a>
                </div>
                <div class="why-panel">
                    <h3>Nos atouts technologiques</h3>
                    <?php foreach ($config['features'] as $feature): ?>
                        <div class="why-panel__item">
                            <?= icon($feature['icon']) ?>
                            <div>
                                <strong><?= htmlspecialchars($feature['title']) ?></strong>
                                <span><?= htmlspecialchars($feature['text']) ?></span>
                            </div>
                        </div>
                    <?php endforeach; ?>
                </div>
            </div>
        </div>
    </section>

    <!-- Testimonials -->
    <section>
        <div class="container">
            <div class="testimonials" style="padding: clamp(2rem, 5vw, 3.5rem);">
                <div class="section-head section-head--center">
                    <span class="eyebrow"><?= icon('star') ?> Ils nous font confiance</span>
                    <h2>Ce que disent nos clients</h2>
                    <p>Découvrez ce que nos clients disent de nos services</p>
                </div>

                <div class="testimonial-track" id="testimonialTrack">
                    <?php foreach ($config['testimonials'] as $i => $t): ?>
                        <div class="testimonial-slide <?= $i === 0 ? 'is-active' : '' ?>">
                            <div class="stars">
                                <?= str_repeat(icon('star'), 5) ?>
                            </div>
                            <p>&ldquo;<?= htmlspecialchars($t['text']) ?>&rdquo;</p>
                            <strong><?= htmlspecialchars($t['name']) ?></strong>
                        </div>
                    <?php endforeach; ?>
                </div>

                <div class="testimonial-nav">
                    <button type="button" id="testimonialPrev" aria-label="Témoignage précédent"><?= icon('chevron-left') ?></button>
                    <button type="button" id="testimonialNext" aria-label="Témoignage suivant"><?= icon('chevron-right') ?></button>
                </div>
                <div class="testimonial-dots" id="testimonialDots">
                    <?php foreach ($config['testimonials'] as $i => $t): ?>
                        <button type="button" class="<?= $i === 0 ? 'is-active' : '' ?>" aria-label="Témoignage <?= $i + 1 ?>"></button>
                    <?php endforeach; ?>
                </div>
            </div>
        </div>
    </section>
</main>

<?php include __DIR__ . '/partials/footer.php'; ?>
</body>
</html>
