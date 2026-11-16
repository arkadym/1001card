// Shows one language: ?lang=ru|en, else the browser language. Without JS both sections stay visible.
(function () {
  var q = new URLSearchParams(location.search).get('lang');
  var lang = q === 'ru' || q === 'en' ? q : (navigator.language || '').slice(0, 2) === 'ru' ? 'ru' : 'en';
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-lang]').forEach(function (el) { el.hidden = el.dataset.lang !== lang; });
  document.querySelectorAll('nav.lang a').forEach(function (a) { a.classList.toggle('on', a.dataset.to === lang); });
})();
