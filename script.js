const cardContainer1 = document.querySelector('.card1-container');
const hrLine = document.querySelector('hr');
const para = document.querySelector('p');
const btn = document.querySelector('button');
const i = document.querySelector('.far');

let open = false;

function closeWindow() {
  cardContainer1.style.height = '50px';
  hrLine.style.display = 'none';
  para.style.display = 'none';
  i.classList.remove('fa-minus-square');
  i.classList.add('fa-plus-square');
  cardContainer1.classList.remove('close');
  open = false;
}

function openWindow() {
  i.classList.add('fa-minus-square');
  i.classList.remove('fa-plus-square');
  cardContainer1.style.height = '';
  hrLine.style.display = '';
  para.style.display = '';
  open = true;
}

function toogleBtn() {
  open ? closeWindow() : openWindow();
}

btn.addEventListener('click', toogleBtn);

//On Load
closeWindow();
