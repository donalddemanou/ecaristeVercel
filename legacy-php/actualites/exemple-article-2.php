<?php
$config = require __DIR__ . '/../config.php';
require __DIR__ . '/../partials/icons.php';

$pageTitle       = "Deuxième exemple d'article — Actualités ECARISTE";
$pageDescription = "Second article de démonstration à remplacer par votre propre actualité.";
$pagePath        = '/actualites/exemple-article-2.php';
?>
<!DOCTYPE html>
<html lang="fr">
<head>
<?php include __DIR__ . '/../partials/head.php'; ?>
</head>
<body>
<?php include __DIR__ . '/../partials/header.php'; ?>

<main>
    <section style="padding-top:3rem; padding-bottom:2rem;">
        <div class="container" style="max-width:760px;">
            <a href="/actualites.php" class="btn btn--ghost btn--sm" style="margin-bottom:1.5rem;"><?= icon('chevron-left') ?> Retour aux actualités</a>
            <p class="text-muted" style="font-size:0.9rem;">15 mai 2026</p>
            <h1 style="margin-top:0.5rem;">Deuxième exemple d'article</h1>

            <div class="photo-placeholder" style="border-radius:var(--radius-md); min-height:280px; margin:2rem 0;">
                <div><?= icon('doc') ?><br>Image de l'article (à intégrer)</div>
            </div>

            <p>Un second modèle d'article, prêt à être personnalisé avec votre propre contenu et vos propres visuels.</p>
            <p style="margin-top:1rem;">Chaque article est une simple page autonome dans le dossier <code>/actualites/</code> : pour en publier un nouveau, dupliquez ce fichier, changez son contenu, puis ajoutez une entrée correspondante dans <code>actualites.php</code>.</p>
        </div>
    </section>
</main>

<?php include __DIR__ . '/../partials/footer.php'; ?>
</body>
</html>
