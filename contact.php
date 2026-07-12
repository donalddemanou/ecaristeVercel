<?php
$config = require __DIR__ . '/config.php';
require __DIR__ . '/partials/icons.php';

$pageTitle       = "Contact — ECARISTE Transports & Logistique";
$pageDescription = "Contactez ECARISTE pour un devis personnalisé ou une solution logistique sur mesure. Téléphone, e-mail et formulaire de contact.";
$pagePath        = '/contact.php';

$preselectedService = $_GET['service'] ?? '';
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
            <span class="eyebrow" style="background:rgba(255,255,255,0.1); border-color:rgba(255,255,255,0.2); color:var(--white);"><?= icon('mail') ?> Contact</span>
            <h2 style="color:var(--white); margin-top:1rem;">Contactez-nous</h2>
            <p style="color:rgba(255,255,255,0.75); max-width:560px; margin:0.75rem auto 0;">Une question, un projet de transport ou de logistique ? Notre équipe vous répond rapidement.</p>
        </div>
    </section>

    <section>
        <div class="container form-grid">
            <div class="contact-card">
                <div class="form-banner form-banner--success" id="formSuccess">
                    Votre message a bien été envoyé. Nous revenons vers vous très vite !
                </div>
                <div class="form-banner form-banner--error" id="formError">
                    Une erreur est survenue. Merci de réessayer ou de nous appeler directement.
                </div>

                <form id="contactForm" action="/php/send-mail.php" method="post" novalidate>
                    <div class="form-row">
                        <div class="form-group" data-field="name">
                            <label for="name">Nom complet *</label>
                            <input type="text" id="name" name="name" autocomplete="name" required>
                            <span class="form-error"></span>
                        </div>
                        <div class="form-group" data-field="email">
                            <label for="email">E-mail *</label>
                            <input type="email" id="email" name="email" autocomplete="email" required>
                            <span class="form-error"></span>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group" data-field="phone">
                            <label for="phone">Téléphone</label>
                            <input type="tel" id="phone" name="phone" autocomplete="tel">
                            <span class="form-error"></span>
                        </div>
                        <div class="form-group" data-field="service">
                            <label for="service">Service concerné</label>
                            <select id="service" name="service">
                                <option value="">Sélectionner...</option>
                                <?php foreach ($config['services'] as $service): ?>
                                    <option value="<?= htmlspecialchars($service['title']) ?>" <?= $preselectedService === $service['slug'] ? 'selected' : '' ?>>
                                        <?= htmlspecialchars($service['title']) ?>
                                    </option>
                                <?php endforeach; ?>
                            </select>
                            <span class="form-error"></span>
                        </div>
                    </div>
                    <div class="form-group" data-field="message">
                        <label for="message">Message *</label>
                        <textarea id="message" name="message" required></textarea>
                        <span class="form-error"></span>
                    </div>

                    <!-- Piège anti-spam : invisible pour un humain, souvent rempli par un robot -->
                    <div class="form-honeypot" aria-hidden="true">
                        <label for="website">Ne pas remplir ce champ</label>
                        <input type="text" id="website" name="website" tabindex="-1" autocomplete="off">
                    </div>

                    <button type="submit" class="btn btn--primary" id="contactSubmit">
                        <?= icon('arrow-right') ?> Envoyer le message
                    </button>
                </form>
            </div>

            <div>
                <div class="info-card" style="margin-bottom:1.5rem;">
                    <ul class="info-list">
                        <li><?= icon('pin') ?><div><strong>Adresse</strong><span><?= htmlspecialchars($config['contact']['address_line']) ?>, <?= htmlspecialchars($config['contact']['address_city']) ?></span></div></li>
                        <li><?= icon('phone') ?><div><strong>Téléphone</strong><a href="tel:<?= htmlspecialchars($config['contact']['phone_href']) ?>"><?= htmlspecialchars($config['contact']['phone']) ?></a></div></li>
                        <li><?= icon('mail') ?><div><strong>E-mail</strong><a href="mailto:<?= htmlspecialchars($config['contact']['email']) ?>"><?= htmlspecialchars($config['contact']['email']) ?></a></div></li>
                        <li><?= icon('clock') ?><div><strong>Horaires</strong><span><?= htmlspecialchars($config['contact']['hours']) ?></span></div></li>
                    </ul>
                </div>
                <div class="map-embed">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2759.972098061498!2d7.365187712644528!3d46.23089957097622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478edc289d88de3f%3A0xf30129f2b72294dc!2sAv.%20de%20Tourbillon%2072%2C%201950%20Sion%2C%20Suisse!5e0!3m2!1sfr!2sca!4v1783470611386!5m2!1sfr!2sca"
                        loading="lazy"
                        referrerpolicy="strict-origin-when-cross-origin"
                        allowfullscreen
                        title="Localisation ECARISTE à Sion, Suisse"></iframe>
                </div>
            </div>
        </div>
    </section>
</main>

<?php include __DIR__ . '/partials/footer.php'; ?>
<script src="/assets/js/contact.js" defer></script>
</body>
</html>
