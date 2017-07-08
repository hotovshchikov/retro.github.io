'use strict';

// TODO Удалить данный код на события( тестово открывает и зкрывает стикер)


var show = document.getElementsByClassName('user_card');
console.log(show[0]);
var containerFullSticker = document.getElementById('container_full_sticker');
show[0].addEventListener('click', function () {
  containerFullSticker.classList.remove('display_none');
});


var close = document.getElementById('close');
close.addEventListener('click',function () {
  containerFullSticker.classList.add('display_none');

});

// УДАЛИТЬ ПОТОМ

var btnOpen = document.getElementById('circle-button-l');
var btnClose = document.getElementById('closeModal');
var btnCancel = document.getElementById('btnCancel');
var modal = document.getElementById('modal-container');

btnOpen.onclick = function () {
  modal.style.display = 'block';
};

btnClose.onclick = function () {
  modal.style.display = 'none'
};

btnCancel.onclick = function () {
  modal.style.display = 'none'
};
