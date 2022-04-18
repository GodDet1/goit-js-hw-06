function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeBtnColor = document.querySelector(".change-color");
const hexColorText = document.querySelector(".color");

changeBtnColor.addEventListener("click", () => {
  const color = getRandomHexColor();

  hexColorText.textContent = color;
  document.body.style.backgroundColor = `${color}`;
  changeBtnColor.style.backgroundColor = `${getRandomHexColor()}`;
  changeBtnColor.style.borderColor = `${getRandomHexColor()}`;
  changeBtnColor.style.color = `${getRandomHexColor()}`;
});
