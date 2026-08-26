(function () {
  function pick() {
    var q = new URLSearchParams(location.search).get('lang');
    var h = (location.hash || '').replace('#', '');
    var v = (q || h || '').toLowerCase();
    if (v === 'en' || v === 'ar') return v;
    var nav = (navigator.language || 'ar').toLowerCase();
    return nav.indexOf('ar') === 0 ? 'ar' : 'en';
  }

  function apply(lang) {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.body.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.querySelectorAll('section[data-lang]').forEach(function (s) {
      s.classList.toggle('visible', s.getAttribute('data-lang') === lang);
    });
    document.querySelectorAll('.langbar a').forEach(function (a) {
      a.classList.toggle('active', a.getAttribute('data-set') === lang);
    });
    var t = document.querySelector('[data-title-' + lang + ']');
    if (t) document.title = t.getAttribute('data-title-' + lang);
    document.querySelectorAll('[data-' + lang + ']').forEach(function (el) {
      el.textContent = el.getAttribute('data-' + lang);
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    apply(pick());
    document.querySelectorAll('.langbar a').forEach(function (a) {
      a.addEventListener('click', function (e) {
        e.preventDefault();
        var lang = a.getAttribute('data-set');
        try { history.replaceState(null, '', location.pathname + '?lang=' + lang); } catch (err) { /* file:// */ }
        apply(lang);
      });
    });
  });
})();
