'use strict';

document.onkeydown = function(e) {
    if (e.repeat) return;

    let code = e.code.at(-1).codePointAt();
    let key = document.querySelector(`[data-key="${code}"]`);
    if (!key) return;

    play(key);
}

document.querySelector('.keys').onclick = function(e) {
    let key = e.target.closest('[data-key]');
    if (!key) return;

    play(key);
}

function play(key) {
    key.classList.add('playing');
    key.ontransitionend = e => key.classList.remove('playing');

    let audio = document.querySelector(`audio[data-key="${key.dataset.key}"]`);
    audio.currentTime = 0;
    audio.play();
}