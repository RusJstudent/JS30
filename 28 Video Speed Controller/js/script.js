'use strict';

const video = document.querySelector('.flex');
const speed = document.querySelector('.speed');
const bar = document.querySelector('.speed-bar');

const maxHeight = speed.offsetHeight;

const INITIAL_SPEED = 1;
const MIN_SPEED = 0.25;
const MAX_SPEED = 4;
const diffSpeed = MAX_SPEED - MIN_SPEED;
const diffPerPx = diffSpeed / maxHeight;
const diffPerUnitChange = 1 / diffPerPx;

bar.style.height = (INITIAL_SPEED - MIN_SPEED) * diffPerUnitChange + 'px';
bar.textContent = INITIAL_SPEED + 'x';

speed.onmousedown = function(e) {
    e.preventDefault();

    document.addEventListener('mousemove', move);
    document.addEventListener('mouseup', up);

    const initialY = e.pageY;
    const initialHeight = parseInt(getComputedStyle(bar).height);

    function move(e) {
        let height = initialHeight + e.pageY - initialY;
        height = Math.min(height, maxHeight);
        height = Math.max(height, 0);     
        const currentSpeed = height * diffPerPx + MIN_SPEED;

        bar.style.height = height + 'px';
        video.playbackRate = currentSpeed;
        bar.textContent = +currentSpeed.toFixed(2) + 'x';
    }

    function up(e) {
        document.removeEventListener('mousemove', move);
        document.removeEventListener('mouseup', up);
    }
}