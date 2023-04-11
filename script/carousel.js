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
    spaceBetween: 25,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    }
  });
  