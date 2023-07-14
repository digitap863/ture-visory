var swiper = new Swiper(".bannerSlider", {
  slidesPerView: 1,
  // spaceBetween: 30,
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
  navigation: {
    nextEl: ".swiper-nav-nxt-hom-main",
    prevEl: ".swiper-nav-prv-hom-main",
  },

  // breakpoints: {
  //   0: { slidesPerView: 1 },
  //   768: { slidesPerView: 2, spaceBetween: 20 },
  //   992: { slidesPerView: 3, spaceBetween: 30 },
  // },
});
