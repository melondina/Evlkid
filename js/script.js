$(function() {
    $("#accordion").accordion({
        icons: false,
        heightStyle: "content",
        collapsible: true,
        active: false
    });

    $(".refresh").click(function() {
        $("#accordion").accordion({
            collapsible: true,
            active: 0
        });
    })
});

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

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.hww-steps__link').forEach(function(hwwStepsLink) {
        hwwStepsLink.addEventListener('click', function(event) {
            const path = event.currentTarget.dataset.path

            document.querySelectorAll('.hww-steps__link').forEach(function(hwwStepsLink) {
                hwwStepsLink.classList.remove('hww-steps__active')
            });
            event.currentTarget.classList.add('hww-steps__active');

            document.querySelectorAll('.tab-content').forEach(function(tabContent) {
                tabContent.classList.remove('tab-content-active')
            });
            document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active')
        })
    })
});

window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#burger').addEventListener('click', function() {
        document.querySelector('#menu').classList.toggle('menu-is-active')
    })
    document.querySelector('#burger-menu').addEventListener('click', function() {
        document.querySelector('#menu').classList.toggle('menu-is-active')
    })
});

window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#search-btn').addEventListener('click', function() {
        document.querySelector('#search-form__menu').classList.toggle('search-form-menu-is-active')
    })
    document.querySelector('#close-btn').addEventListener('click', function() {
        document.querySelector('#search-form__menu').classList.toggle('search-form-menu-is-active')
    })
});