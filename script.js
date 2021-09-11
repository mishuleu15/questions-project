const container = document.querySelector('.container');

let cardContainer;

const questions = [
  {
    id: 0,
    question: "What's the biggest animal in the world?",
    para: 'The blue whale',
  },
  {
    id: 1,
    question: 'What is the largest country in the world?',
    para: 'Russia',
  },
  {
    id: 2,
    question: 'Who is the highest spiritual leader of Tibet?',
    para: 'The Dalai Lama',
  },
  {
    id: 3,
    question: 'How many elements are there in the periodic table?',
    para: '118 elements',
  },
  {
    id: 4,
    question: 'How many bones does a shark have?',
    para: 'None (a shark’s skeleton is made entirely of cartilage)',
  },
  {
    id: 5,
    question:
      'What year was Google images invented, and for a bonus point, what prompted its creation?',
    para: 'July 2001, as a result of mass Google searches in February 2000 when Jennifer Lopez wore a jungle print dress, designed by Donatella Versace, to the Grammy Awards.',
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

// Helper functions

function classRemove(...args) {
  return cardContainer[args[0]].children[args[1]].classList.remove(args[2]);
}

function classAdd(...args) {
  if (args[1] === '') {
    return cardContainer[args[0]].classList.add(args[2]);
  } else {
    return cardContainer[args[0]].children[args[1]].classList.add(args[2]);
  }
}

function replaceClass(...args) {
  return cardContainer[args[0]].children[args[1]].children[
    args[1]
  ].classList.replace(args[2], args[3]);
}

function containClass(...args) {
  return cardContainer[args[0]].children[args[1]].classList.contains(args[2]);
}

// On Load
updateDOM();
