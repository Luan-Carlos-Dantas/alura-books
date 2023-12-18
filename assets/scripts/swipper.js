const swiper = new Swiper('.swiper', {
    spaceBetween:10,
    slidesPerView: 2.5,
    parallax: true,
    loop:true,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
    autoplay: {
        delay: 3000,
      },
  });