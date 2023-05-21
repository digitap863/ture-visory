var swiper = new Swiper(".slider-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: "true",
    fade: "true",
    grabCursor: "true",
    loop: true,
    centerSlide: "true",
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-nex",
        prevEl: ".swiper-button-pre",
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 1,
        },
        950: {
            slidesPerView: 3,
        },
    },
});
