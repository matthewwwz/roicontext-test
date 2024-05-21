import Swiper from "swiper";
import 'swiper/css';

const links = document.querySelectorAll('.services-card');

export const swiper = {
    init: function () {
        const swiperObject = new Swiper('.swiper', {
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
        })

        this.switchedSlidesOnClick(swiperObject)

        return swiperObject
    },

    switchedSlidesOnClick: function (swiper) {
        links.forEach((link, index) => {
            link.addEventListener('click', () => {
                swiper.slideTo(index, 300, true);
            });
        });
    }
};