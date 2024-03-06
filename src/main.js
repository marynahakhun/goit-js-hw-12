import { renderImages, initializeLightbox } from './js/render-functions.js';
import { fetchIcon, limit } from './js/pixabay-api';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('.form');
const gallery = document.querySelector(".gallery");
const loader = document.querySelector(".loader");
const button = document.querySelector(".load-more");
let lightbox;
let page = 1;
let currentQuery = ''; // Variable to store current query

form.addEventListener("submit", onSubmit);
button.addEventListener("click", loadMore);

function onSubmit(e) {
    e.preventDefault();
    gallery.innerHTML = "";
    loader.style.display = "block";
    button.style.display = "none";

    const query = form.elements['search'].value;
    currentQuery = query; 
    page = 1;
    form.reset()
    fetchImages(query, page);
}

function loadMore() {
    loader.style.display = "block";
    page += 1;

    fetchImages(currentQuery, page);
}

function fetchImages(query, page) {
    fetchIcon(query, page)
        .then(data => {
            if (!query.trim()) {
                iziToast.error({
                    message: 'Заповніть це поле!',
                    messageColor: '#FFFFFF',
                    backgroundColor: '#B51B1B',
                    position: 'topRight',
                });
                loader.style.display = "none";
                return;
            } else if (data.hits.length === 0) {
                iziToast.error({
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                    messageColor: '#FFFFFF',
                    backgroundColor: '#B51B1B',
                    position: 'center',
                });
                loader.style.display = "none";
                return;
            } 
            else {
                const imagesHTML = renderImages(data);
                gallery.insertAdjacentHTML("beforeend", imagesHTML);
                loader.style.display = "none";
                if (!lightbox) {
                    lightbox = initializeLightbox();
                } else {
                    lightbox.refresh();
                }
                scroll();
            const totalImages = data.totalHits;
            const totalPages = Math.ceil(totalImages / limit);
            if (page >= totalPages) {
                button.style.display = "none";
                return iziToast.error({
                    position: "topRight",
                    message: "We're sorry, there are no more images to load"
                });
            } else {
                button.style.display = "block";
            }
            }
        })
        .catch(error => {
            loader.style.display = "none";
            iziToast.error({
                message: 'Fetch error. Please try again later.',
                messageColor: '#FFFFFF',
                backgroundColor: '#B51B1B',
                position: 'center',
            });
        });
}

function scroll() {
    const cardHeight = gallery.firstElementChild.getBoundingClientRect().height;
    window.scrollBy({ top: 2 * cardHeight, behavior: 'smooth' });
}
