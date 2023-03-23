// import { galleryItems } from './gallery-items.js';
// let instance;
// const createGalleryItem = ({ preview, original, description }) => `
//   <li class="gallery__item">
//     <a class="gallery__link" href="${original}">
//       <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" />
//     </a>
//   </li>
// `;

// // Створюємо галерею з галерейних елементів
// const galleryMarkup = galleryItems.map(createGalleryItem).join('');
// const gallery = document.querySelector('.gallery');
// gallery.insertAdjacentHTML('beforeend', galleryMarkup);

// // Застосовуємо SimpleLightbox до галереї
// document.addEventListener('DOMContentLoaded', function () {
//   const lightbox = new SimpleLightbox('.gallery a', {
//     captionsData: 'title',
//     captionDelay: 250,
//   });
// });

// // Додаємо click подію до галереї
// gallery.addEventListener('click', (event) => {
//   event.preventDefault();

//   const imageSrc = event.target.dataset.source;

//   if (imageSrc) {
//     const instance = basicLightbox.create(`
//       <img src="${imageSrc}">
//     `);

//     instance.show();
//   }
// });
import { galleryItems } from './gallery-items.js';

const galleryContainer = document.querySelector('.gallery');
const markup = galleryItems.reduce(
  (acc, { original, preview, description }) =>
    (acc += `<li>
  <a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</li>`),
  ''
);

galleryContainer.insertAdjacentHTML('beforeend', markup);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
