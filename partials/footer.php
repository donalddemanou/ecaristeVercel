<?php $year = date('Y'); ?>
<section class="cta-band reveal reveal--scale">
    <div class="container cta-band__inner">
        <h2>Prêt à expédier avec nous ?</h2>
        <p>Contactez-nous dès aujourd'hui pour un devis personnalisé ou une solution logistique sur mesure.</p>
        <div class="btn-group">
            <a href="tel:<?= htmlspecialchars($config['contact']['phone_href']) ?>" class="btn btn--primary">
                <?= icon('phone') ?> Demander un devis
            </a>
            <a href="/contact.php" class="btn btn--ghost">
                <?= icon('mail') ?> Nous écrire
            </a>
        </div>
    </div>
</section>

<footer class="site-footer">
    <div class="container footer-grid">
        <div class="footer-col footer-col--about">
            <a href="/index.php" class="logo logo--footer">
                <img src="/assets/img/logo-white.png" alt="<?= htmlspecialchars($config['site_name'] . ' — ' . $config['site_baseline']) ?>" class="logo__image">
            </a>
            <p>Votre partenaire de confiance pour le transport de marchandises et la logistique. Expertise nationale et internationale au service de votre entreprise.</p>
            <div class="social-links">
                <a href="<?= htmlspecialchars($config['social']['facebook']) ?>" aria-label="Facebook"><?= icon('facebook') ?></a>
                <a href="<?= htmlspecialchars($config['social']['linkedin']) ?>" aria-label="LinkedIn"><?= icon('linkedin') ?></a>
                <a href="<?= htmlspecialchars($config['social']['whatsapp']) ?>" aria-label="WhatsApp"><?= icon('whatsapp') ?></a>
            </div>
        </div>

        <nav class="footer-col" aria-label="Liens rapides">
            <h3>Liens rapides</h3>
            <ul>
                <?php foreach ($config['nav'] as $item): ?>
                    <li><a href="<?= htmlspecialchars($item['href']) ?>"><?= icon('chevron-right') ?><?= htmlspecialchars($item['label']) ?></a></li>
                <?php endforeach; ?>
            </ul>
        </nav>

        <nav class="footer-col" aria-label="Nos services">
            <h3>Services</h3>
            <ul>
                <?php foreach ($config['services'] as $service): ?>
                    <li><a href="/services.php#<?= htmlspecialchars($service['slug']) ?>"><?= icon('chevron-right') ?><?= htmlspecialchars($service['title']) ?></a></li>
                <?php endforeach; ?>
            </ul>
        </nav>

        <div class="footer-col">
            <h3>Contact</h3>
            <ul class="footer-contact">
                <li><?= icon('pin') ?><span><?= htmlspecialchars($config['contact']['address_line']) ?>, <?= htmlspecialchars($config['contact']['address_city']) ?></span></li>
                <li><?= icon('phone') ?><a href="tel:<?= htmlspecialchars($config['contact']['phone_href']) ?>"><?= htmlspecialchars($config['contact']['phone']) ?></a></li>
                <li><?= icon('mail') ?><a href="mailto:<?= htmlspecialchars($config['contact']['email']) ?>"><?= htmlspecialchars($config['contact']['email']) ?></a></li>
                <li><?= icon('clock') ?><span><?= htmlspecialchars($config['contact']['hours']) ?></span></li>
            </ul>
        </div>
    </div>

    <div class="container footer-bottom">
        <p>&copy; <?= $year ?> <?= htmlspecialchars($config['site_name']) ?> Transport &amp; Logistique. Tous droits réservés.</p>
        <div class="footer-bottom__links">
            <a href="/mentions-legales.php">Mentions légales</a>
            <a href="/confidentialite.php">Politique de confidentialité</a>
        </div>
    </div>
</footer>

<script src="/assets/js/main.js" defer></script>
