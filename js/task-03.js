const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleryList = document.querySelector(".gallery");

function createGalleryItem(Obj) {
  return `<li class="gallery__item"><img src="${Obj.url}" alt="${Obj.alt}" class="gallery__image"></li>`;
}

function createGallery(arrObj) {
  const arrGallery = [];

  arrObj.forEach((element) => {
    arrGallery.push(createGalleryItem(element));
  });

  console.log(arrGallery.join(""));
  return galleryList.insertAdjacentHTML("afterbegin", arrGallery.join(""));
}

createGallery(images);
