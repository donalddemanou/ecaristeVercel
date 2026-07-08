<?php
$config = require __DIR__ . '/config.php';
require __DIR__ . '/partials/icons.php';

$pageTitle       = "À propos — ECARISTE Transports & Logistique";
$pageDescription = "Découvrez l'histoire, la mission et les valeurs d'ECARISTE, votre partenaire transport et logistique fondé par un commissionnaire agréé de transports en Union européenne.";
$pagePath        = '/a-propos.php';
?>
<!DOCTYPE html>
<html lang="fr">
<head>
<?php include __DIR__ . '/partials/head.php'; ?>
</head>
<body>
<?php include __DIR__ . '/partials/header.php'; ?>

<main>
    <section style="padding-top:3rem; padding-bottom:2rem; background:var(--navy-900); color:var(--white); text-align:center;">
        <div class="container">
            <span class="eyebrow" style="background:rgba(255,255,255,0.1); border-color:rgba(255,255,255,0.2); color:var(--white);"><?= icon('star') ?> À propos</span>
            <h2 style="color:var(--white); margin-top:1rem;">À propos d'ECARISTE</h2>
            <p style="color:rgba(255,255,255,0.75); max-width:620px; margin:0.75rem auto 0;">Découvrez notre histoire, notre vision et les valeurs qui guident notre engagement quotidien.</p>
        </div>
    </section>

    <section>
        <div class="container why-grid" style="align-items:center;">
            <div>
                <h2>Notre histoire</h2>
                <p class="text-muted" style="margin-top:1rem;">Fondée en 2026, ECARISTE Transports &amp; Logistique est née de la vision de Lionel FOPA, passionné par le monde du transport et de la logistique depuis plus de 10 ans, commissionnaire agréé de transports en Union européenne. Il a pour ambition de créer une entreprise reconnue pour son expertise nationale et internationale.</p>
                <p class="text-muted" style="margin-top:1rem;">Dès sa création, ECARISTE s'appuie sur cette expertise pour développer des solutions logistiques innovantes et construire, pas à pas, un réseau de partenaires solide en France et à l'international.</p>
                <p class="text-muted" style="margin-top:1rem;">Notre ambition : devenir, au fil des expéditions, un partenaire de référence pour les entreprises qui recherchent fiabilité, réactivité et exigence de service.</p>
            </div>
            <img src="/assets/img/about-histoire.jpg" alt="Entrepôt ECARISTE" class="img-cover" style="border-radius:var(--radius-md); height:320px;">
        </div>
    </section>

    <section style="background:var(--gray-50); border-radius:var(--radius-lg);">
        <div class="container">
            <div class="section-head section-head--center">
                <span class="eyebrow"><?= icon('arrow-right') ?> Notre mission</span>
                <h2>Simplifier votre transport et votre logistique</h2>
                <p>Offrir à chaque client, quelle que soit sa taille, un accompagnement sur mesure, une réactivité de tous les instants et une exigence constante de qualité — en France comme à l'international.</p>
            </div>
        </div>
    </section>

    <section>
        <div class="container">
            <div class="section-head section-head--center">
                <span class="eyebrow"><?= icon('star') ?> Nos valeurs</span>
                <h2>Ce qui guide notre travail au quotidien</h2>
            </div>
            <div class="feature-strip__grid" style="padding:0;">
                <div class="feature-item">
                    <?= icon('check') ?>
                    <h3>Fiabilité</h3>
                    <p>Ponctualité et rigueur à chaque étape de vos expéditions.</p>
                </div>
                <div class="feature-item">
                    <?= icon('package') ?>
                    <h3>Sécurité</h3>
                    <p>Vos marchandises traitées avec le plus grand soin, à chaque kilomètre.</p>
                </div>
                <div class="feature-item">
                    <?= icon('phone') ?>
                    <h3>Proximité</h3>
                    <p>Une équipe disponible 6j/7, à l'écoute de vos besoins.</p>
                </div>
                <div class="feature-item">
                    <?= icon('monitor') ?>
                    <h3>Innovation</h3>
                    <p>Suivi GPS, TMS intégré et dématérialisation au service de votre tranquillité.</p>
                </div>
            </div>
        </div>
    </section>

    <section>
        <div class="container why-grid">
            <div>
                <h2>Pourquoi choisir ECARISTE ?</h2>
                <p class="text-muted" style="margin-top:1rem;">Forts de l'expertise de plus de 10 ans de notre fondateur dans le transport et la logistique, nous mettons cette exigence au service de votre entreprise dès aujourd'hui. Notre engagement : ponctualité, sécurité et satisfaction client.</p>
                <ul class="why-list">
                    <li><?= icon('check') ?><span>Commissionnaire agréé de transports en Union européenne</span></li>
                    <li><?= icon('check') ?><span>Réseau de partenaires en France et à l'international</span></li>
                    <li><?= icon('check') ?><span>Suivi en temps réel de vos expéditions</span></li>
                    <li><?= icon('check') ?><span>Équipe dédiée et réactive 6j/7</span></li>
                    <li><?= icon('check') ?><span>Solutions personnalisées pour chaque client</span></li>
                </ul>
                <a href="/contact.php" class="btn btn--dark" style="margin-top:1.75rem;">Discuter de votre projet <?= icon('arrow-right') ?></a>
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
    </section>

    <section style="background:var(--gray-50); border-radius:var(--radius-lg);">
        <div class="container">
            <div class="section-head section-head--center">
                <span class="eyebrow"><?= icon('building') ?> Notre équipe</span>
                <h2>Une équipe engagée à vos côtés</h2>
                <p>Des professionnels du transport et de la logistique, formés pour répondre à vos exigences.</p>
            </div>
            <div class="photo-placeholder" style="border-radius:var(--radius-md); min-height:280px;">
                <div><?= icon('building') ?><br>Photo équipe ECARISTE (à intégrer)</div>
            </div>
        </div>
    </section>
</main>

<?php include __DIR__ . '/partials/footer.php'; ?>
</body>
</html>
