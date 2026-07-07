<?php
$config = require __DIR__ . '/config.php';
require __DIR__ . '/partials/icons.php';

$pageTitle       = "Actualités — ECARISTE Transport & Logistique";
$pageDescription = "Les actualités et l'actualité du secteur du transport et de la logistique par ECARISTE.";
$pagePath        = '/actualites.php';

// Chaque article est une page autonome dans /actualites/ ; cette liste ne sert
// qu'à générer les vignettes ici. Pour ajouter un article : dupliquer un
// fichier de /actualites/, l'ajouter à ce tableau.
$articles = [
    ['slug' => 'exemple-article-1', 'title' => 'Exemple d\'article — à remplacer', 'excerpt' => 'Ceci est un article de démonstration. Remplacez-le par votre actualité (ouverture d\'un nouvel entrepôt, partenariat, actualité du secteur...).', 'date' => '2026-06-01'],
    ['slug' => 'exemple-article-2', 'title' => 'Deuxième exemple d\'article', 'excerpt' => 'Un second modèle d\'article prêt à être personnalisé avec votre propre contenu et vos propres visuels.', 'date' => '2026-05-15'],
    ['slug' => 'exemple-article-3', 'title' => 'Troisième exemple d\'article', 'excerpt' => 'Un troisième modèle, pour illustrer la mise en page de la liste des actualités avec plusieurs entrées.', 'date' => '2026-04-20'],
];
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
            <span class="eyebrow" style="background:rgba(255,255,255,0.1); border-color:rgba(255,255,255,0.2); color:var(--white);"><?= icon('doc') ?> Actualités</span>
            <h2 style="color:var(--white); margin-top:1rem;">Actualités</h2>
            <p style="color:rgba(255,255,255,0.75); max-width:560px; margin:0.75rem auto 0;">Les dernières nouvelles d'ECARISTE et du secteur du transport et de la logistique.</p>
        </div>
    </section>

    <section>
        <div class="container">
            <div class="service-cards">
                <?php foreach ($articles as $article): ?>
                    <article class="service-card">
                        <div class="service-card__media photo-placeholder">
                            <?= icon('doc') ?>
                            <span><?= htmlspecialchars(date('d/m/Y', strtotime($article['date']))) ?></span>
                        </div>
                        <div class="service-card__body">
                            <h3><?= htmlspecialchars($article['title']) ?></h3>
                            <p style="margin-top:0.75rem;"><?= htmlspecialchars($article['excerpt']) ?></p>
                            <a href="/actualites/<?= htmlspecialchars($article['slug']) ?>.php" class="btn btn--dark btn--sm" style="margin-top:1.25rem;">
                                Lire l'article <?= icon('arrow-right') ?>
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
