var swiper = new Swiper(".slider-content-c", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
      },
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-nex-c",
      prevEl: ".swiper-button-pre-c",
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 1,
        },
        950: {
            slidesPerView: 2,
        },
    },
  });
 