/* Denon Home LP — scripts.js
   jQuery 3.6.4 jest dostarczany przez platformę euro.com.pl (brak importu).
   Plik zawiera wyłącznie obsługę przycisku kopiowania linku w stopce. */

$(function () {
  $('.dh-share-btn--copy').on('click', function () {
    var url = window.location.href;
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(url).then(function () {
        alert('Link skopiowany do schowka!');
      });
    } else {
      /* fallback dla starszych przeglądarek */
      var $tmp = $('<input class="noSafari">').val(url).appendTo('body');
      $tmp[0].select();
      document.execCommand('copy');
      $tmp.remove();
      alert('Link skopiowany do schowka!');
    }
  });
});
