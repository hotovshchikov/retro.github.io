'use strict';

// TODO Удалить данный код на события( тестово открывает и закрывает стикер)


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
  document.body.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
};

btnClose.onclick = function () {
  modal.style.display = 'none';
  document.body.style.backgroundColor = 'rgba(0, 0, 0, 0)';
};

btnCancel.onclick = function () {
  modal.style.display = 'none';
  document.body.style.backgroundColor = 'rgba(0, 0, 0, 0)';
};

// USER CARDS
var userCard = document.querySelectorAll('.user_card');
console.log(userCard);
userCard.forEach(function (item) {
  item.addEventListener('click', function () {
    containerFullSticker.classList.remove('display_none');
  });
  item.addEventListener('mouseenter', function () {
    item.classList.toggle('user_card-hovered');
  });
  item.addEventListener('mouseleave', function () {
    item.classList.toggle('user_card-hovered');
  });
  item.addEventListener('mousedown', function (e) {
    e.preventDefault();
    item.classList.toggle('user_card-dragged');
  });
  item.addEventListener('mouseup', function (e) {
    e.preventDefault();
    item.classList.toggle('user_card-dragged');
  });
});
