(function () {
    'use strict';

    /* Animations au scroll : révèle les éléments .reveal quand ils entrent dans le viewport */
    var revealEls = document.querySelectorAll('.reveal');
    if (revealEls.length) {
        if ('IntersectionObserver' in window) {
            var revealObserver = new IntersectionObserver(function (entries, obs) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        obs.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });
            revealEls.forEach(function (el) { revealObserver.observe(el); });
        } else {
            revealEls.forEach(function (el) { el.classList.add('is-visible'); });
        }
    }

    /* Menu mobile */
    var navToggle = document.getElementById('navToggle');
    var navList = document.getElementById('mainNavList');
    if (navToggle && navList) {
        navToggle.addEventListener('click', function () {
            var isOpen = navToggle.getAttribute('aria-expanded') === 'true';
            navToggle.setAttribute('aria-expanded', String(!isOpen));
            navList.classList.toggle('is-open', !isOpen);
        });
        navList.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', function () {
                navToggle.setAttribute('aria-expanded', 'false');
                navList.classList.remove('is-open');
            });
        });
    }

    /* Accordéon services : un seul panneau ouvert à la fois */
    var accordion = document.getElementById('serviceAccordion');
    if (accordion) {
        var rows = accordion.querySelectorAll('.service-row');
        rows.forEach(function (row) {
            var header = row.querySelector('.service-row__header');
            var panel = row.querySelector('.service-row__panel');
            header.addEventListener('click', function () {
                var willOpen = !row.classList.contains('is-open');
                rows.forEach(function (r) {
                    r.classList.remove('is-open');
                    r.querySelector('.service-row__header').setAttribute('aria-expanded', 'false');
                    r.querySelector('.service-row__panel').style.maxHeight = '';
                });
                if (willOpen) {
                    row.classList.add('is-open');
                    header.setAttribute('aria-expanded', 'true');
                    panel.style.maxHeight = panel.scrollHeight + 'px';
                }
            });
        });
    }

    /* Carousel générique : diaporama avec flèches, points et lecture auto */
    function initCarousel(options) {
        var track = document.getElementById(options.trackId);
        if (!track) return;

        var slides = track.querySelectorAll(options.slideSelector);
        var dots = document.querySelectorAll(options.dotsSelector);
        var current = 0;

        function showSlide(index) {
            current = (index + slides.length) % slides.length;
            slides.forEach(function (slide, i) {
                slide.classList.toggle('is-active', i === current);
            });
            dots.forEach(function (dot, i) {
                dot.classList.toggle('is-active', i === current);
            });
        }

        var prevBtn = document.getElementById(options.prevId);
        var nextBtn = document.getElementById(options.nextId);
        if (prevBtn) prevBtn.addEventListener('click', function () { showSlide(current - 1); });
        if (nextBtn) nextBtn.addEventListener('click', function () { showSlide(current + 1); });
        dots.forEach(function (dot, i) {
            dot.addEventListener('click', function () { showSlide(i); });
        });

        var autoplay = setInterval(function () { showSlide(current + 1); }, options.autoplayMs || 6000);
        track.addEventListener('mouseenter', function () { clearInterval(autoplay); });
    }

    initCarousel({
        trackId: 'testimonialTrack',
        slideSelector: '.testimonial-slide',
        dotsSelector: '#testimonialDots button',
        prevId: 'testimonialPrev',
        nextId: 'testimonialNext',
        autoplayMs: 6000
    });

    initCarousel({
        trackId: 'galleryTrack',
        slideSelector: '.gallery-slide',
        dotsSelector: '#galleryDots button',
        prevId: 'galleryPrev',
        nextId: 'galleryNext',
        autoplayMs: 4500
    });
})();
