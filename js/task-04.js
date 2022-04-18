const btnIncrement = document.querySelector(`[data-action="increment"]`);
const btndecrement = document.querySelector(`[data-action="decrement"]`);
const value = document.querySelector(`#value`);

btnIncrement.addEventListener("click", addValue);
btndecrement.addEventListener("click", removeValue);

let counterValue = 0;

function addValue() {
  counterValue += 1;

  renewValueTextContent();
}

function removeValue() {
  counterValue -= 1;

  renewValueTextContent();
}

function renewValueTextContent() {
  value.textContent = counterValue;
}
