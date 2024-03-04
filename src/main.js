
import { renderImages, initializeLightbox } from './js/render-functions.js';
import { fetchIcon, limit } from './js/pixabay-api';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";



const form = document.querySelector('.form');
const gallery = document.querySelector(".gallery");
const loader = document.querySelector(".loader");
const button = document.querySelector(".load-more")
let lightbox;
let page = 1





form.addEventListener("submit", onSubmit)
button.addEventListener("click", loadMore)
function onSubmit(e) {
    e.preventDefault();
    gallery.innerHTML = "";
    loader.style.display = "block";
    button.style.display = "none";

    const query = form.elements['search'].value;
    page += 1;

    fetchIcon(query)
        .then(data => {
            const imagesHTML = renderImages(data);
            gallery.insertAdjacentHTML("beforeend", imagesHTML);
            loader.style.display = "none";
            lightbox = initializeLightbox();
            lightbox.refresh();
            const cardHeight = gallery.firstElementChild.getBoundingClientRect().height;

            window.scrollBy({ top: 2 * cardHeight, behavior: 'smooth' });

            const totalImages = data.totalHits;
            const totalPages = Math.ceil(totalImages / limit);
            if (page > totalPages) {
                button.style.display = "none";
                return iziToast.error({
                    position: "topRight",
                    message: "We're sorry, there are no more images to load"
                });
            } else {
                button.style.display = "block";
            }
        })
        .catch(error => {
            console.error('Fetch error:', error);
            loader.style.display = "none";
            iziToast.error({
                message: 'Fetch error. Please try again later.',
                messageColor: '#FFFFFF',
                backgroundColor: '#B51B1B',
                position: 'center',
            });
        });
}

function loadMore() {
    const query = form.elements['search'].value;
    loader.style.display = "block";

    page += 1;

    fetchIcon(query)
        .then(data => {
            const imagesHTML = renderImages(data);
            gallery.insertAdjacentHTML("beforeend", imagesHTML);
            loader.style.display = "none";
            lightbox = initializeLightbox();
            lightbox.refresh();
            const cardHeight = gallery.firstElementChild.getBoundingClientRect().height;
            window.scrollBy({ top: 2 * cardHeight, behavior: 'smooth' });

            const totalImages = data.totalHits;
            const totalPages = Math.ceil(totalImages / limit);
            if (page > totalPages) {
                button.style.display = "none";
                return iziToast.error({
                    position: "topRight",
                    message: "We're sorry, there are no more images to load"
                });
            } else {
                button.style.display = "block";
            }
        })
        .catch(error => {
            console.error('Fetch error:', error);
            loader.style.display = "none";
            iziToast.error({
                message: 'Fetch error. Please try again later.',
                messageColor: '#FFFFFF',
                backgroundColor: '#B51B1B',
                position: 'center',
            });
        });
}