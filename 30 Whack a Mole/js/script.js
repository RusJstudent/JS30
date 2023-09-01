'use strict';

const GAME_DURATION = 10;
const MIN_DELAY = 200;
const MAX_DELAY = 1000;

const title = document.querySelector('[data-title]');
const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');

const holesNum = holes.length;
let isPlaying = false;
let currentHole = holes[Math.floor(Math.random() * holesNum)];
let score;

moles.forEach(mole => mole.addEventListener('click', function(e) {
    const hole = mole.closest('.hole');
    hole.classList.remove('up');

    score++;
    scoreBoard.textContent = score;
}));

function startGame() {
    if (isPlaying) return;
    isPlaying = true;
    title.textContent = 'Whack-a-mole!';

    score = 0;
    scoreBoard.textContent = score;

    showMole();
    setTimeout(stopGame, GAME_DURATION * 1000);
}

function showMole() {
    const randomTime = Math.floor(Math.random() * (MAX_DELAY - MIN_DELAY + 1)) + MIN_DELAY;
    let randomHole = Math.floor(Math.random() * (holesNum - 1));

    if (holes[randomHole] === currentHole) randomHole = holesNum - 1; // исключение повторений

    currentHole = holes[randomHole];
    currentHole.classList.add('up');

    setTimeout(() => {
        if (isPlaying) {
            currentHole.classList.remove('up');
            showMole();
        }
    }, randomTime);
}

function stopGame() {
    isPlaying = false;
    title.textContent = 'Score:';
    currentHole.classList.remove('up');
}