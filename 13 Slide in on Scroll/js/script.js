'use strict';

function debounce(func, wait = 250) {
    let timerId;

    return function() {
        if (timerId) return;

        func.apply(this, arguments);

        timerId = setTimeout(() => timerId = null, wait);
    };
}

window.onscroll = debounce(onScroll);

function onScroll(e) {
    document.querySelectorAll('.slide-in').forEach(canIShow);

    function canIShow(image) {
        const cords = image.getBoundingClientRect();
        const halfImage = image.offsetHeight / 2;
        const isHalfShown = cords.top + halfImage > 0 && cords.bottom - halfImage < document.documentElement.clientHeight;

        isHalfShown ? image.classList.add('active') : image.classList.remove('active');
    }
}