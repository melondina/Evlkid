const heroContent = document.querySelector(".hero-content")
const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 75,
    // пагинация
    pagination: {
        el: '.swiper-bullet-pagination',
        type: 'bullets',
        clickable: true
    },
    // навигация
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});