let burger = document.querySelector('.burger');
let close = document.querySelector('.close');

let menuBurger = gsap.timeline();
let lazy = new TimelineMax({delay: 0.5});

lazy.from(document.querySelectorAll(".hero__title, .hero__btn"), {
  opacity: 0,
  y: 50,
  duration: 0.6,
}).from(".hero__descr", {
  opacity: 0,
  duration: 1
}).fromTo(".photos-wrap img:first-child", {
  opacity: 0,
  scale: 0.8,
}, {scale: 1, opacity: 1})
  .fromTo(".photos-wrap img:nth-child(2)", {
    opacity: 0,
    scale: 0.8
  }, {scale: 1, opacity: 1})
  .fromTo(".photos-wrap img:last-child", {
    opacity: 0,
    scale: 0.8
  }, {scale: 1, opacity: 1})
  .from(".photos__author", {
  opacity: 0,
  duration: 1
})

menuBurger.to(document.querySelectorAll(".social, .menu__right"), {
  opacity: 0,
  y: 20,
  duration: 0.4,
})
menuBurger.to(".menu__nav", {
  opacity: 0,
  y: 20,
  duration: 0.4,
})
menuBurger.to(".menu__bottom", {
  opacity: 0,
  y: 100,
  duration: 0.4,
})
menuBurger.to(".menu__top", {
  opacity: 0,
  y: -100,
  duration: 0.4
})

burger.addEventListener('click', function (){
  gsap.to(".menu", { duration: 0, display: 'block'});
  menuBurger.reversed(!menuBurger.reversed())
});
close.addEventListener('click', function (){
  menuBurger.reversed(!menuBurger.reversed())
  gsap.to(".menu", { duration: 2, display: 'none'});
});
