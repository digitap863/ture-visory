var swiper = new Swiper(".sideSlider", {
  slidesPerView: 2,
  direction: "vertical",
  spaceBetween: 5,

  initialSlide: 0,
  centerSlide: "true",
  fade: true,
  grabCursor: "true",
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: true,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // navigation: {
  //   nextEl: ".swiper-nav-nxt-hom-main",
  //   prevEl: ".swiper-nav-prv-hom-main",
  // },

  breakpoints: {
    0: { slidesPerView: 2, spaceBetween: 10 },
    500: { slidesPerView: 2, spaceBetween: 30 },
    950: { slidesPerView: 2, spaceBetween: 5 },
  },
});
