/**
 * Menu burger (mobile)
 */
(function () {
    var header = document.querySelector('.site-header');
    var burger = document.querySelector('.site-header .burger');
    if (!header || !burger) return;

    burger.setAttribute('aria-label', 'Ouvrir le menu');
    burger.setAttribute('aria-expanded', 'false');

    burger.addEventListener('click', function () {
        var open = header.classList.toggle('menu-open');
        burger.setAttribute('aria-expanded', open ? 'true' : 'false');
        burger.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
    });

    document.querySelectorAll('.site-header .nav-links a').forEach(function (link) {
        link.addEventListener('click', function () {
            header.classList.remove('menu-open');
            burger.setAttribute('aria-expanded', 'false');
            burger.setAttribute('aria-label', 'Ouvrir le menu');
        });
    });
})();

/**
 * Animations au scroll - éléments avec .animate-on-scroll reçoivent .visible
 */
(function () {
    var els = document.querySelectorAll('.animate-on-scroll');
    if (!els.length) return;

    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { rootMargin: '0px 0px -60px 0px', threshold: 0.1 });

    els.forEach(function (el) { observer.observe(el); });
})();

/**
 * Formulaire Formspree : affiche le message de confirmation après redirection (?envoye=1)
 */
(function () {
    var params = new URLSearchParams(window.location.search);
    if (params.get('envoye') !== '1') return;

    var banner = document.getElementById('form-success-banner');
    if (!banner) return;

    banner.hidden = false;
    banner.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
})();
