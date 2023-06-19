import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery");
const createCardsMarkup = createGallery(galleryItems);

function createGallery(galleryItems) {
    return galleryItems
        .map(({ original, preview, description }) => {
            return `
              <li class="gallery__item">
                <a class="gallery__link" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" />
                </a>
            </li>`
        }).join("");
};

gallery.insertAdjacentHTML("beforeend", createCardsMarkup);

let lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionType: 'attr',
    captionPosition: 'Bottom',
    captionDelay: 250,

});
