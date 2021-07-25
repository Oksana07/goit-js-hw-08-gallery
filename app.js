const galleryItems = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
      imageEl:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];



// гроздь ul-li-img
// const liEl = document.createElement('li');
// liEl.classList.add('site_nav');

// const imageEl = document.createElement('img');
// imageEl.classList.add('img-gallery');
// liEl.appendChild(imageEl);

// const ulEl = document.querySelector('.gallery');
// console.log(ulEl);

// ulEl.appendChild(liEl);


const ulEl = document.querySelector('.js-gallery');
const elements = [];
for (let i = 0; i < galleryItems.length; i+= 1) {
  const liEl = document.createElement('li');
  const imageEl = document.createElement('img');
  liEl.appendChild(imageEl);
imageEl.src = galleryItems[i].preview
  elements.push(liEl);
}

console.log(elements);
ulEl.append(...elements);



// Пєтя
// import galleryItems from "./app.js";

// const refs = {
//   mainGallery: document.querySelector(".js-gallery"),
//   lightBoxEl: document.querySelector(".js-lightbox"),
//   modal: document.querySelector(".lightboxcontent"),
//   lightboxImage: document.querySelector(".lightboximage"),
//   btnLightBox: document.querySelector('[data-action="close-lightbox"]'),
//   overlayEl: document.querySelector(".lightboxoverlay"),
// };

// // refs.mainGallery.addEventListener("click", isGalleryImage);
// // refs.btnLightBox.addEventListener("click", closeLightBoxWindow);
// // refs.modal.addEventListener("click", closeLightBoxImage);
// // refs.overlayEl.addEventListener("click", onOverlayClose);

// // сoздаю пример карточки
// function createImgCardMarkup(galleryItems) {
//   return galleryItems
//   .map(({ preview, original, description }, index) => {
//       return `<li class="galleryitem >
//       <a
//         class="gallerylink"
//         href="${original}"
//       >
//         <img
//           class="galleryimage"
//           src="${preview}"
//           data-source="${original}" 
//           alt="${description}"
//           data-index="${index}"
//         />
//       </a>
//     </li>`;
//     })
//     .join("");
// }


// const cardsItem = createImgCardMarkup(galleryItems); // вивел всею разметку в карточки
// console.log(cardsItem);

// refs.mainGallery.insertAdjacentHTML("beforeend", cardsItem); // вставил разметку
// // console.log(mainGalery);

