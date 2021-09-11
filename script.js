const container = document.querySelector('.container');

let cardContainer;

const questions = [
  {
    id: 0,
    question: 'Do You Accept All Major Credit Cards?',
    para: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem a nulla iusto vel eaque laudantium quia magni praesentium 1.',
  },
  {
    id: 1,
    question: 'Do You Suport Local Farmers?',
    para: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem a nulla iusto vel eaque laudantium quia magni praesentium 2.',
  },
  {
    id: 2,
    question: 'Do You Use Organic Ingredients?',
    para: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem a nulla iusto vel eaque laudantium quia magni praesentium 3.',
  },
];

function updateDOM() {
  questions.forEach((ele) => {
    const { id, para, question } = ele;
    // Card container
    const card = document.createElement('div');
    card.classList.add('card-container', 'closed');

    // Button
    const button = document.createElement('button');
    button.classList.add('btn');
    button.setAttribute('onclick', `toggleBtn(${id})`);

    // Font Awesome Icon
    const i = document.createElement('i');
    i.classList.add('far', 'fa-times-square');

    // Title
    const h3 = document.createElement('h3');
    h3.textContent = question;

    // Horiz line
    const hr = document.createElement('hr');
    hr.classList.add('hrHide');

    // Paragraph
    const p = document.createElement('p');
    p.classList.add('pHide');
    p.textContent = para;

    // Append
    button.appendChild(i);
    card.append(button, h3, hr, p);
    container.appendChild(card);

    // Select elements
    cardContainer = document.querySelectorAll('.card-container');
  });
}

function toggleBtn(id) {
  cardContainer.forEach((el, index) => {
    if (index === id) {
      cardContainer[index].classList.toggle('closed');
      replaceClass(index, 0, 'fa-times-square', 'fa-minus-square');
      if (containClass(index, 2, 'hrHide') && containClass(index, 3, 'pHide')) {
        replaceClass(index, 0, 'fa-times-square', 'fa-minus-square');
        setTimeout(() => {
          classRemove(index, 2, 'hrHide');
          classRemove(index, 3, 'pHide');
        }, 1000);
      } else {
        classAdd(index, 2, 'hrHide');
        classAdd(index, 3, 'pHide');
        replaceClass(index, 0, 'fa-minus-square', 'fa-times-square');
      }
    } else {
      classAdd(index, '', 'closed');
      replaceClass(index, 0, 'fa-minus-square', 'fa-times-square');
      classAdd(index, 2, 'hrHide');
      classAdd(index, 3, 'pHide');
    }
  });
}

function classRemove(index, number, classCss) {
  return cardContainer[index].children[number].classList.remove(classCss);
}

function classAdd(index, number, classCss) {
  if (number === '') {
    return cardContainer[index].classList.add(classCss);
  } else {
    return cardContainer[index].children[number].classList.add(classCss);
  }
}

function replaceClass(index, number, classCss, withClass) {
  return cardContainer[index].children[number].children[
    number
  ].classList.replace(classCss, withClass);
}

function containClass(index, number, classCss) {
  return cardContainer[index].children[number].classList.contains(classCss);
}

// On Load
updateDOM();
