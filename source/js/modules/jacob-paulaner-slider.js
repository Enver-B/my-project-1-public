import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const sliderContainer = document.querySelector('.jacob-paulaner__slider-container');
let sliderSwiper = null;

function initSliderSwiper () {
  sliderSwiper = new Swiper(sliderContainer, {
    direction: 'horizontal',
    modules: [Pagination],
    slidesPerView: 1,
    allowTouchMove: true,
    spaceBetween: 10,
    centeredSlides: true,
    loop: true,
    pagination: {
      el: '.jacob-paulaner__slider-pagination',
      type: 'bullets',
      bulletClass: 'jacob-paulaner__slider-pagination-bullet',
      bulletActiveClass: 'jacob-paulaner__slider-pagination-bullet--selected',
      bulletElement: 'button',
      clickable: true,
    },
  });
}

window.addEventListener('load', initSliderSwiper);
window.addEventListener('resize', initSliderSwiper);

//initSliderSwiper.init();
