import '../css/global.scss'
import 'swiper/css';

import Swiper from 'swiper';
import {cursor} from "./cursor";

const swiper = new Swiper('.swiper', {
    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },
    updateOnWindowResize: true,
    slidesPerView: 3,
    spaceBetween: 24,
    centeredSlides: true,
    grabCursor: true,
    breakpoints: {
        300: {
            slidesPerView: 1,
            spaceBetween: 24,
            centeredSlides: false,
        },
        480: {
            slidesPerView: 1,
            spaceBetween: 24,
            centeredSlides: false,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 24,
            centeredSlides: false,
        },
        1280: {
            slidesPerView: 2,
            spaceBetween: 24,
            centeredSlides: false,
        },
        1440: {
            slidesPerView: 3,
            spaceBetween: 24,
            centeredSlides: true,
        },
        1900: {
            slidesPerView: 3,
            spaceBetween: 24,
            centeredSlides: true,
        },
    },
});

cursor.init();