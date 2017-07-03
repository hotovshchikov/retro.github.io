var btnOpen = document.getElementById('open');
var btnClose = document.getElementById('close');
var btnCancel = document.getElementById('btnCancel')
var modal = document.getElementById('modal-container');
var body = document.body;

btnOpen.onclick = function () {
  modal.style.display = 'block';
  body.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
}

btnClose.onclick = function () {
  modal.style.display = 'none'
  body.style.backgroundColor = 'rgba(0, 0, 0, 0)'
}

btnCancel.onclick = function () {
  modal.style.display = 'none'
  body.style.backgroundColor = 'rgba(0, 0, 0, 0)'
}
