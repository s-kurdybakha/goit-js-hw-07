import { galleryItems } from './gallery-items.js';
// Change code below this line

// Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.

const galleryContainer = document.querySelector('.gallery');
const imagesGallery = createGalleryMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', imagesGallery);
// galleryContainer.addEventListener('click', onGalleryContainerClick);

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

// Подивися в документації секцію «Options» і додай відображення підписів до зображень з атрибута alt. Нехай підпис буде знизу і з'являється через 250 мілісекунд після відкриття зображення.

var lightbox = new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionDelay: 250,
    captionPosition: 'bottom',
    
});


console.log(galleryItems);
