window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#burger').addEventListener('click', function() {
        document.querySelector('#menu').classList.toggle('menu-is-active')
    })
    document.querySelector('#burger-menu').addEventListener('click', function() {
        document.querySelector('#menu').classList.toggle('menu-is-active')
    })
})

window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#search-btn').addEventListener('click', function() {
        document.querySelector('#search-form__menu').classList.toggle('search-form-menu-is-active')
    })
    document.querySelector('#close-btn').addEventListener('click', function() {
        document.querySelector('#search-form__menu').classList.toggle('search-form-menu-is-active')
    })
})