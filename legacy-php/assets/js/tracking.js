(function () {
    'use strict';

    var form = document.getElementById('trackingForm');
    var result = document.getElementById('trackingResult');
    if (!form || !result) return;

    var icon = result.querySelector('svg').outerHTML;
    var phone = result.dataset.phone;
    var phoneHref = result.dataset.phoneHref;
    var email = result.dataset.email;

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        var number = form.trackingNumber.value.trim();

        result.classList.add('has-result');
        if (!number) {
            result.classList.remove('has-result');
            result.innerHTML = icon + '<p>Entrez votre numéro de suivi pour suivre votre colis</p>';
            return;
        }

        result.innerHTML =
            '<h3>Numéro ' + escapeHtml(number) + '</h3>' +
            '<p style="margin-top:0.75rem;">Le suivi en ligne est en cours de mise en place. ' +
            'Contactez notre équipe avec ce numéro pour connaître le statut de votre expédition :</p>' +
            '<p style="margin-top:0.75rem;">' +
            '<a href="tel:' + escapeHtml(phoneHref) + '" class="btn btn--dark btn--sm" style="margin-right:0.75rem;">' + phone + '</a>' +
            '<a href="mailto:' + escapeHtml(email) + '" class="btn btn--ghost btn--sm">' + email + '</a>' +
            '</p>';
    });

    function escapeHtml(str) {
        var div = document.createElement('div');
        div.textContent = str;
        return div.innerHTML;
    }
})();
