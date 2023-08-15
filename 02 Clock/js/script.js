'use strict';

let hourHand = document.querySelector('.hour-hand');
let minuteHand = document.querySelector('.min-hand');
let secondHand = document.querySelector('.second-hand');

let now = new Date();
let secondsToday = ( now - new Date(now.getFullYear(), now.getMonth(), now.getDate()) ) / 1000;
let sDeg = Math.ceil(secondsToday % 60) / 60 * 360 ;
let mDeg = Math.ceil(secondsToday % 3600) / 3600 * 360 ;
let hDeg = Math.ceil(secondsToday % (3600 * 12)) / (3600 * 12) * 360;

updateClock();
setInterval(updateClock, 1000);

function updateClock() {
    hourHand.style.transform = `rotate(${hDeg += (0.1 / 12)}deg)`;
    minuteHand.style.transform = `rotate(${mDeg += 0.1}deg)`;
    secondHand.style.transform = `rotate(${sDeg += 6}deg)`;
}