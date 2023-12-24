const swiper = new Swiper(".swiper", {
  spaceBetween: 10,
  slidesPerView: 2.5,
  parallax: true,
  loop: true,
  effect: "coverflow",
  coverflowEffect: {
    rotate: 30,
    slideShadows: false,
  },
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
  },
  autoplay: {
    delay: 3000,
  },
  breakpoints: {
    1024: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});
