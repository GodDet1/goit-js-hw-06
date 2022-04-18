const inputString = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output");

inputString.addEventListener("input", () => {
  outputName.textContent = inputString.value;

  if (inputString.value === "") {
    outputName.textContent = "Anonymous";
    return;
  }
});
