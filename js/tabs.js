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
})