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
    original:
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


// const ulEl = document.querySelector('.js-gallery');
// const elements = [];
// for (let i = 0; i < galleryItems.length; i+= 1) {
//   const liEl = document.createElement('li');
//   const imageEl = document.createElement('img');
//   liEl.appendChild(imageEl);
// imageEl.src = galleryItems[i].preview
//   elements.push(liEl);
// }

// console.log(elements);
// ulEl.append(...elements);



// const ulEl = document.querySelector('.js-gallery');
// const elements = [];
// for (let i = 0; i < galleryItems.length; i+= 1) {
//   const liEl = document.createElement('li');
//   const imageEl = document.createElement('img');
//   liEl.appendChild(imageEl);
// imageEl.src = galleryItems[i].preview
//   elements.push(liEl);
// }

// console.log(elements);
// ulEl.append(...elements);

const refs = {
  ulEl: document.querySelector('.js-gallery'),
  lightbox: document.querySelector('.lightbox'),
  lightboxImage: document.querySelector('.lightbox__image'),
  lightboxOverlay: document.querySelector('.lightbox__overlay'),
  closeModalBtn: document.querySelector('[data-action="close-lightbox"]'),
};

function createElement () {
  return galleryItems
      .map(({ original, preview, description }, index) => {
        return `
        <li class = gallery__item> 
        <a href="${original}" class = gallery__link>
          <img 
            class = gallery__image 
            src="${preview}" 
            alt= "${description}" 
            data-source='${original}'
            data-index='${index}'> 
        </a>
      </li>
      `;
      })
      .join('');
    };
  refs.ulEl.insertAdjacentHTML('beforeend', createElement());
  console.log(refs.ulEl);

  // modal
function onOpenClickGallery(event) {
  window.addEventListener('keydown', onEscKeydown);
  event.preventDefalut();
if(event.target.nodeName === 'IMG') {
 refs.lightbox.classList.add('is-open');
 refs.lightboxImage.src = event.target.getAttribute('data-source');
 refs.lightboxImage.alt = event.target.alt;
 refs.lightboxImage.dataset.index = event.target.dataset.index;
  }
}


function onCloseClickGallery(event) {
  window.addEventListener('keydown', onEscKeydown);
  event.preventDefalut();
if(event.target.nodeName === 'IMG') {
 refs.lightbox.remove('close-lightbo');
 refs.lightboxImage.src = event.target.getAttribute('data-action');
 refs.lightboxImage.alt = event.target.alt;
 refs.lightboxImage.dataset.index = event.target.dataset.index;
  }
}

