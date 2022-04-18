const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listOfIngridients = document.querySelector("#ingredients");

function createListElement(ingridient) {
  const listItem = document.createElement("li");
  listItem.textContent = ingridient;
  listItem.classList.add("item");

  return listItem;
}

function addList(arr) {
  const arrListWithTags = [];

  arr.forEach((ingridient) =>
    arrListWithTags.push(createListElement(ingridient))
  );

  return listOfIngridients.append(...arrListWithTags);
}

addList(ingredients);
