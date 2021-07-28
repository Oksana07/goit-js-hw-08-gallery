import {galleryItems} from "./app.js";

const refs = {
    ulEl: document.querySelector('.js-gallery'),
    lightbox: document.querySelector('.lightbox'),
    lightboxImage: document.querySelector('.lightbox__image'),
    lightboxOverlay: document.querySelector('.lightbox__overlay'),
    closeModalBtn: document.querySelector('[data-action="close-lightbox"]'),
  };
  
  refs.ulEl.addEventListener('click', onOpenClickGallery);
    // refs.lightboxOverlay.addEventListener('click',),
    // refs.closeModalBtn.addEventListener('click', ),

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
              data-source='${original}'>
              
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
  //  refs.lightboxImage.dataset.index = event.target.dataset.index;
    }
  }
  
  
  // function onCloseClickGallery(event) {
  //   window.addEventListener('keydown', onEscKeydown);
  //   event.preventDefalut();
  // if(event.target.nodeName === 'IMG') {
  //  refs.lightbox.remove('close-lightbo');
  //  refs.lightboxImage.src = event.target.getAttribute('data-action');
  //  refs.lightboxImage.alt = event.target.alt;
  //  refs.lightboxImage.dataset.index = event.target.dataset.index;
  //   }
  // }