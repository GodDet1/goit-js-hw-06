// ========================1st task===================================

const allCategories = document.querySelector("#categories");

function categoriesLength() {
  console.log(`Number of categories: ${allCategories.children.length}`);
}

categoriesLength();

// ========================2nd task====================================

const categoryItems = allCategories.querySelectorAll(".item");

// Arr of names in output
function itemsName() {
  const itemsName = [];

  categoryItems.forEach((names) =>
    itemsName.push(names.firstElementChild.textContent)
  );

  return itemsName;
}

// Arr of length in output
function itemsChildenLength() {
  const itemsList = [];

  categoryItems.forEach((item) =>
    itemsList.push(item.querySelectorAll("ul>li").length)
  );

  return itemsList;
}

// function NamesAndChildrensLengthMessage(names, length) {

//     for (let i = 0; i < names.length; i++) {
//     console.log(`Category: ${names[i]}
//     Elements: ${length[i]}`);
//     }
// }

// =========or==========

function NamesAndChildrensLengthMessage(names, length) {
  for (let i = 0; i < names.length; i++) {
    console.log(`Category: ${names[i]}`);
    console.log(`Elements: ${length[i]}`);
  }
}

NamesAndChildrensLengthMessage(itemsName(), itemsChildenLength());
