import { galleryItems } from './gallery-items.js';
// Change code below this line

// Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.

const galleryContainer = document.querySelector('.gallery');
const imagesGallery = createGalleryMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', imagesGallery);
galleryContainer.addEventListener('click', onGalleryContainerClick);

function createGalleryMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
  <a class="gallery__item" 
    href="${original}">
    <img class="gallery__image"
        src="${preview}"
        alt="${description}"
    />
  </a>
`;
}).join('');
}
 

/* Реалізація делегування на div.gallery і отримання url великого зображення.*/


function onGalleryContainerClick(evt) {
    evt.preventDefault();

    const isGalleryPhotoEl = evt.target.classList.contains('gallery__image');
    
    if (!isGalleryPhotoEl) {
       return;
        
    }
/* Відкриття модального вікна по кліку на елементі галереї. Для цього ознайомся з документацією і прикладами.*/
    const PhotoUrlEl = evt.target.dataset.source;

/* Заміна значення атрибута src елемента <img> в модальному вікні перед відкриттям. 
Використовуй готову розмітку модального вікна із зображенням з прикладів бібліотеки basicLightbox.
     */
     
    const instance = basicLightbox.create(`<img class="modal__image" src="${PhotoUrlEl}"/>`);
    instance.show();

    window.addEventListener('keydown', onEscKeyPress); 

/* Закриття модалки по ESC */

function onEscKeyPress(evt) {
    const ESC_KEY_CODE = 'Escape';
     
    if (evt.code === ESC_KEY_CODE) {
       instance.close();
      
        window.removeEventListener('keydown', onEscKeyPress); 
    }
}
}

// Подивися в документації секцію «Options» і додай відображення підписів до зображень з атрибута alt. Нехай підпис буде знизу і з'являється через 250 мілісекунд після відкриття зображення.

var lightbox = new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionDelay: 250,
    captionPosition: 'bottom',
    
});


console.log(galleryItems);
