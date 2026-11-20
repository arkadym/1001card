// Contact address, kept out of the page source (same idea as inspire-tech.ru): stored XOR 42,
// decoded in the browser; the shown text carries zero-width joiners so a copied or scraped
// string is not a usable address, and mailto: is built only on click.
(function () {
  var c = [75,88,65,75,78,83,71,106,77,71,75,67,70,4,73,69,71];
  var addr = String.fromCharCode.apply(null, c.map(function (n) { return n ^ 42; }));
  var shown = addr.split('').join('\u200c');
  document.querySelectorAll('a.mail').forEach(function (a) {
    a.textContent = shown;
    a.href = '#';
    a.addEventListener('click', function (e) {
      e.preventDefault();
      location.href = 'mailto:' + addr;
    });
  });
})();
