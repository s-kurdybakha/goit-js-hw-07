import { galleryItems } from './gallery-items.js';
// 1. Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.

const galleryContainer = document.querySelector('.gallery');
const imagesGallery = createGalleryMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', imagesGallery);
galleryContainer.addEventListener('click', onGalleryContainerClick);

function createGalleryMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
        <div class="gallery__item">
  <a class="gallery__link" 
    href="large-image.jpg">
    <img class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
    />
  </a>
</div>
`;
}).join('');
}
 

/* 2. Реалізація делегування на div.gallery і отримання url великого зображення.*/


function onGalleryContainerClick(evt) {
    evt.preventDefault();

    const isGalleryPhotoEl = evt.target.classList.contains('gallery__image');
    
    if (!isGalleryPhotoEl) {
       return;
        
    }
/* 4. Відкриття модального вікна по кліку на елементі галереї. Для цього ознайомся з документацією і прикладами.*/
    const PhotoUrlEl = evt.target.dataset.source;

/* 5. Заміна значення атрибута src елемента <img> в модальному вікні перед відкриттям. 
Використовуй готову розмітку модального вікна із зображенням з прикладів бібліотеки basicLightbox.
     */
     
    const instance = basicLightbox.create(`<img class="modal__image" src="${PhotoUrlEl}"/>`);
    instance.show();

    window.addEventListener('keydown', onEscKeyPress); 

/* 6. Закриття модалки по ESC */

function onEscKeyPress(evt) {
    const ESC_KEY_CODE = 'Escape';
     
    if (evt.code === ESC_KEY_CODE) {
       instance.close();
      
        window.removeEventListener('keydown', onEscKeyPress); 
    }
}

}


console.log(galleryItems);