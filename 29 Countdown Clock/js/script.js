'use strict';

const controls = document.querySelector('.timer__controls');
const form = document.getElementById('custom');
const input = form.minutes;
const timeLeft = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');

let timerId;

controls.addEventListener('click', function(e) {
    let time = +e.target.dataset.time;
    if (!time) return;

    timerHandler(time);
});

form.addEventListener('submit', function(e) {
    e.preventDefault();
    document.activeElement.blur();
    
    const min = +input.value;

    if (Number.isFinite(min) && min > 0) {
        timerHandler( Math.floor(min * 60) );
    }

    input.value = '';
});

function timerHandler(time) { // time in seconds
    clearInterval(timerId);
    showTime(time);

    const date = new Date();
    date.setSeconds(date.getSeconds() + time);
    let [hours, minutes] = [date.getHours(), date.getMinutes()];
    const then = `${hours}:${minutes}`.replace(/\b\d\b/g, '0$&');
    endTime.textContent = 'Be back at ' + then;

    timerId = setInterval(() => {
        time--;
        showTime(time);
        if (time === 0) clearInterval(timerId);
    }, 1000);
}

function showTime(time) {
    let seconds = time % 60;
    time -= seconds;
    let minutes = time / 60 % 60;
    time -= minutes * 60;
    let hours = time / 3600 % 24;
    time -= hours * 3600;
    let days = time / 86400;

    days = (days === 0) ? '' : days + 'd ';
    let timeFormatted = `${hours}:${minutes}:${seconds}`.replace(/\b\d\b/g, '0$&');

    timeLeft.textContent = `${days}${timeFormatted}`;
}