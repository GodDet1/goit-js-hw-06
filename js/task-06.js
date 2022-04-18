const input = document.querySelector("#validation-input");

input.addEventListener("blur", () => {
  if (input.value.length !== Number(input.dataset.length)) {
    if (input.classList.contains("valid")) {
      removeValidClass();
    }
    addInvalidClass();
    return;
  }

  removeInvalidClass();
  addValidClass();
});

function addValidClass() {
  input.classList.add("valid");
}

function addInvalidClass() {
  input.classList.add("invalid");
}

function removeValidClass() {
  input.classList.remove("valid");
}

function removeInvalidClass() {
  input.classList.remove("invalid");
}
