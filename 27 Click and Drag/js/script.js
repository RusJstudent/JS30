'use strict';

const SENSITIVITY = 1.5;

const items = document.querySelector('.items');

items.addEventListener('mousedown', function(e) {
    document.addEventListener('mousemove', move);
    document.addEventListener('mouseup', up);

    items.classList.add('active');

    const initialX = e.clientX;
    const initialScroll = items.scrollLeft;

    function move(e) {
        items.scrollLeft = initialScroll + (initialX - e.clientX) * SENSITIVITY;
    }

    function up(e) {
        document.removeEventListener('mousemove', move);
        document.removeEventListener('mouseup', up);
        items.classList.remove('active');
    }
});