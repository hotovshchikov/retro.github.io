'use strict';

// TODO Удалить данный код на события( тестово открывает и зкрывает стикер)


var show = document.getElementById('show');
var containerFullSticker = document.getElementById('container_full_sticker');
show.addEventListener('click', function () {
  containerFullSticker.classList.remove('display_none');
});


var close = document.getElementById('close');
close.addEventListener('click',function () {
  containerFullSticker.classList.add('display_none');

});

// УДАЛИТЬ ПОТОМ
