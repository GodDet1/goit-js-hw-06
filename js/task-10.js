function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const parentBox = document.querySelector('#boxes');
const input = document.querySelector('#controls').firstElementChild;
const dataCreate = document.querySelector('[data-create]');
const dataDestroy = document.querySelector('[data-destroy]');

dataCreate.addEventListener('click', () => {
  createBox(input.value);
});

dataDestroy.addEventListener('click', () => {
  parentBox.innerHTML = ``;
});

function createBox(numbers) {
  const arr = [];

  for (let i = 0; i < numbers; i++) {
    const childrenBox = document.createElement('div');

    childrenBox.style.width = `${30 + i * 10}px`;
    childrenBox.style.height = `${30 + i * 10}px`;
    childrenBox.style.backgroundColor = `${getRandomHexColor()}`;
    childrenBox.style.borderRadius = `${2 + i}px`;
    childrenBox.classList.add('children__box');

    const childrenBoxText = document.createElement('p');
    childrenBoxText.textContent = 'Hover me';
    childrenBoxText.style.fontSize = `${5 + i}px`;
    // childrenBoxText.style.backgroundColor = `${getRandomHexColor()}`;
    childrenBoxText.style.color = `${getRandomHexColor()}`;
    childrenBoxText.style.padding = `${i}px`;

    childrenBox.append(childrenBoxText);
    arr.push(childrenBox);
  }

  parentBox.append(...arr);
}
