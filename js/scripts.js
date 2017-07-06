'use strict';

// TODO Удалить данный код на события( тестово открывает и закрывает стикер)


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

var btnOpen = document.getElementById('circle-button-l');
var btnClose = document.getElementById('close');
var btnCancel = document.getElementById('btnCancel')
var modal = document.getElementById('modal-container');
var body = document.body;

btnOpen.onclick = function () {
  modal.style.display = 'block';
  body.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
};

btnClose.onclick = function () {
  modal.style.display = 'none';
  body.style.backgroundColor = 'rgba(0, 0, 0, 0)'
};

btnCancel.onclick = function () {
  modal.style.display = 'none';
  body.style.backgroundColor = 'rgba(0, 0, 0, 0)'
};
