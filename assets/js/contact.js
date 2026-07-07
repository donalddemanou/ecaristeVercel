(function () {
    'use strict';

    var form = document.getElementById('contactForm');
    if (!form) return;

    var successBanner = document.getElementById('formSuccess');
    var errorBanner = document.getElementById('formError');
    var submitBtn = document.getElementById('contactSubmit');

    function clearErrors() {
        form.querySelectorAll('.form-group.has-error').forEach(function (group) {
            group.classList.remove('has-error');
            group.querySelector('.form-error').textContent = '';
        });
        successBanner.classList.remove('is-visible');
        errorBanner.classList.remove('is-visible');
    }

    function showFieldErrors(errors) {
        Object.keys(errors).forEach(function (field) {
            var group = form.querySelector('[data-field="' + field + '"]');
            if (group) {
                group.classList.add('has-error');
                group.querySelector('.form-error').textContent = errors[field];
            } else {
                errorBanner.textContent = errors[field];
                errorBanner.classList.add('is-visible');
            }
        });
    }

    // Affiche un message si on arrive après un envoi classique (fallback sans JS)
    var params = new URLSearchParams(window.location.search);
    if (params.get('sent') === '1') successBanner.classList.add('is-visible');
    if (params.get('error') === '1') errorBanner.classList.add('is-visible');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        clearErrors();
        submitBtn.setAttribute('disabled', 'disabled');

        fetch(form.action, {
            method: 'POST',
            body: new FormData(form),
            headers: { 'X-Requested-With': 'XMLHttpRequest' }
        })
            .then(function (res) { return res.json(); })
            .then(function (data) {
                if (data.success) {
                    form.reset();
                    successBanner.classList.add('is-visible');
                } else {
                    showFieldErrors(data.errors || {});
                }
            })
            .catch(function () {
                errorBanner.classList.add('is-visible');
            })
            .finally(function () {
                submitBtn.removeAttribute('disabled');
            });
    });
})();
