var swiper = new Swiper(".swiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 50,
      modifier: 2,
      slideShadows: true
    },
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
      },
    spaceBetween: 25,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    }
  });
  