import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector(".gallery");
const createCardsMarkup = createGallery(galleryItems);

function createGallery(galleryItems) {
    return galleryItems
        .map(({ original, preview, description }) => {
            return `
               <li class="gallery__item">
                <a class="gallery__link" href="${original}">
                <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
                />
            </a>
            </li>`
        }).join("");
};

gallery.insertAdjacentHTML("beforeend", createCardsMarkup);


gallery.addEventListener("click", (event) => {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") {
        return;
    }
    
    const imgs = event.target.dataset.source;

    function onKeyDownEscape(event) {
        if (event.code === "Escape" && window.visible()) {
            window.close()
        }
    }
    
    const lightBoxConfig = {
        onShow: () => {
            gallery.addEventListener("keydown", onKeyDownEscape);
        },
        onClose: () => {
            if (event.key === "Escape") {
                gallery.removeEventListener("keydown", onKeyDownEscape);
            }
        }
    }
    
   const window = basicLightbox.create(
    `<img src="${imgs}" class="gallery__image">`,
    lightBoxConfig
    ); 
    window.show()

});


