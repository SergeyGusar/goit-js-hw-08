// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

console.log(galleryItems);

const containerGallery = document.querySelector(".gallery");
const listGalleryMarkup = createGalleryMarkup(galleryItems);
function createGalleryMarkup(items) {
    return items
    .map(
        (item) =>`<div class="gallery__item">
        <a class="gallery__item"
        href="${item.original}">
        <img 
        class="gallery__image"
        src="${item.preview}"
        alt="${item.description}"
        </a>
        </div>`
    )
    .join("");

}

containerGallery.insertAdjacentHTML("beforeend", listGalleryMarkup);
console.log(galleryItems);


const lightbox = new SimpleLightbox(".gallery a" , {
    captionData: "alt",
    captionDelay: 250,
});
