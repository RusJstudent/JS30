'use strict';

const player = document.querySelector('.player');

const video = player.querySelector('.player__video');
const progress = player.querySelector('.progress');
const currentProgress = player.querySelector('.progress__filled');
const playButton = player.querySelector('.player__button');
const volumeInput = player.querySelector('.player__slider[name="volume"]');
const playbackRateInput = player.querySelector('.player__slider[name="playbackRate"]');

volumeInput.oninput = playbackRateInput.oninput = e => video[e.currentTarget.name] = e.currentTarget.value;

player.onclick = function(e) {
    const target = e.target;

    if (target.matches('button[data-skip]')) {
        const skipSeconds = +target.dataset.skip;
        const timeAfter = video.currentTime + skipSeconds;
    
        video.currentTime = timeAfter < 0 ? 0 : timeAfter;
        updateProgress();
    }

    if (target === playButton || target === video) {
        video.paused ? video.play() : video.pause();
    }
}

progress.onmousedown = function(e) {
    const cords = progress.getBoundingClientRect();
    const left = cords.left;
    const right = cords.right;
    const width = right - left;

    changeCurrentTime(e);

    document.addEventListener('mousemove', move);
    document.addEventListener('mouseup', up);

    function move(e) {
        changeCurrentTime(e);
    }

    function up(e) {
        document.removeEventListener('mousemove', move);
        document.removeEventListener('mouseup', up);
    }

    function changeCurrentTime(e) {
        let shift = e.clientX - left;
        if (shift < 0) shift = 0;
        if (shift > width) shift = width;
    
        video.currentTime = (shift / width) * video.duration;
        updateProgress();
    }
}

progress.ondragstart = e => false;

function updateProgress() {
    currentProgress.style.flexBasis = (video.currentTime / video.duration) * 100 + '%';
}