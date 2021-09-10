const container = document.querySelector('.container');

let open = false;

let div;
let cardContainer1;
let hrLine;
let paraEle;
let iEle;

let questions = [
  {
    id: 1,
    question: 'Do You Accept All Major Credit Cards?',
    para: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem a nulla iusto vel eaque laudantium quia magni praesentium.',
  },
  {
    id: 2,
    question: 'Do You Suport Local Farmers?',
    para: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem a nulla iusto vel eaque laudantium quia magni praesentium.',
  },
  {
    id: 3,
    question: 'Do You Use Organic Ingredients?',
    para: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem a nulla iusto vel eaque laudantium quia magni praesentium.',
  },
];

questions.forEach((ele) => {
  const { id, para, question } = ele;
  createQuestion(id, para, question);
});

function createQuestion(id, para, question) {
  console.log(question);
  div = document.createElement('div');
  div.classList.add('card-container');
  div.classList.add('closed');
  const button = document.createElement('button');
  button.classList.add('btn');

  button.addEventListener('click', toggleBtn);
  // button.setAttribute('onclick', 'toggleBtn()');
  const i = document.createElement('i');
  i.classList.add('far');
  i.classList.add('fa-times-square');
  i.setAttribute('id', id);
  button.appendChild(i);
  const h3 = document.createElement('h3');
  h3.textContent = question;
  const hr = document.createElement('hr');
  const p = document.createElement('p');
  p.textContent = para;
  div.append(button, h3, hr, p);
  container.appendChild(div);
  console.log(div);
  cardContainer1 = document.querySelector('.card-container');
  hrLine = document.querySelector('hr');
  paraEle = document.querySelector('p');
  iEle = document.querySelector('.far');
}

function closeWindow() {
  div.classList.add('closed');
  // cardContainer1.style.height = '50px';
  hrLine.style.display = 'none';
  paraEle.style.display = 'none';
  iEle.classList.remove('fa-minus-square');
  iEle.classList.add('fa-plus-square');
  cardContainer1.classList.remove('close');

  open = false;
}

function openWindow() {
  div.classList.remove('closed');
  iEle.classList.add('fa-minus-square');
  iEle.classList.remove('fa-plus-square');
  cardContainer1.style.height = '';
  setTimeout(() => {
    hrLine.style.display = '';
    paraEle.style.display = '';
  }, 1000);

  open = true;
}

function toggleBtn(e) {
  console.log(e.target.getAttribute('id'));
  // open ? closeWindow() : openWindow();

  if (open) {
    closeWindow();
  } else {
    openWindow();
  }
}

closeWindow();
