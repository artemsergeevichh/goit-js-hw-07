import { galleryItems } from './gallery-items.js';    
console.log(galleryItems);

const containerGallery = document.querySelector('.gallery');

const generalGallery = galleryItems
  .map(({ preview, original, description }) => {
    return `<div class="gallery__item">
      <a class="gallery__link" href="large-image.jpg">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </div>`;
  })
  .join('');

  containerGallery.insertAdjacentHTML('beforeend', generalGallery);

  function imageClick(event) {
    event.preventDefault();
    if (!event.target.classList.contains(`gallery__image`)) {
      return;
    }

    const instance = basicLightbox.create(`
        <img src="${event.target.dataset.source}" width="800" height="600">
    `)
    
    instance.show()
    document.addEventListener(`keydown`, event =>{

    if (event.code === `Escape`) {
      instance.close()
    }
    })
    }

    containerGallery.addEventListener (`click`, imageClick)
