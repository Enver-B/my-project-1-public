// Импорт самого gsap
import gsap from 'gsap';

// Импорт конкретных плагинов, например ScrollTrigger
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const heroImage = document.querySelector('.hero__image');
const reviewCards = document.querySelectorAll('.review-card');
const radioIcons = document.querySelectorAll('.radio-icons__item');

// Регистрация плагинов
gsap.registerPlugin(ScrollTrigger);

// Использование gsap и ScrollTrigger
gsap.timeline().from(heroImage, {opacity:0, duration:3, scale:0, ease:'back'});

gsap.set(reviewCards, {opacity: 0, y: 50});

gsap.fromTo(reviewCards,
  {opacity: 0, y: 50},
  {
    opacity: 1,
    y: 0,
    duration: 2,
    stagger: 1,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '#cardsContainer',
      start: 'top 80%',
      toggleActions: 'play none none none',
    },
  }
);

gsap.timeline().from(radioIcons, {opacity:0, duration:2, scale:0, ease:'back'});
