<?php
$currentPage = basename($_SERVER['SCRIPT_NAME']);
?>
<header class="site-header">
    <div class="container site-header__inner">
        <a href="/index.php" class="logo">
            <img src="/assets/img/logo.png" alt="<?= htmlspecialchars($config['site_name'] . ' — ' . $config['site_baseline']) ?>" class="logo__image">
        </a>

        <nav class="main-nav" aria-label="Navigation principale">
            <button class="nav-toggle" id="navToggle" aria-expanded="false" aria-controls="mainNavList" aria-label="Ouvrir le menu">
                <?= icon('menu', 'nav-toggle__open') ?>
                <?= icon('close', 'nav-toggle__close') ?>
            </button>
            <ul class="main-nav__list" id="mainNavList">
                <?php foreach ($config['nav'] as $item): ?>
                    <li>
                        <a href="<?= htmlspecialchars($item['href']) ?>"
                           class="<?= basename($item['href']) === $currentPage ? 'is-active' : '' ?>">
                            <?= htmlspecialchars($item['label']) ?>
                        </a>
                    </li>
                <?php endforeach; ?>
                <li class="main-nav__cta">
                    <a href="/contact.php" class="btn btn--primary btn--sm">Demander un devis</a>
                </li>
            </ul>
        </nav>
    </div>
</header>
