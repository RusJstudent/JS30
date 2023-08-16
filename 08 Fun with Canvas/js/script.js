'use strict';

const canvas = document.getElementById('draw');
const ctx = canvas.getContext('2d');

canvas.width = document.documentElement.clientWidth;
canvas.height = document.documentElement.clientHeight;

let hue = 0;
ctx.lineWidth = 50;
ctx.strokeStyle = '#BADA55';
ctx.lineCap = 'round';
// ctx.lineJoin = 'round'; // can't see any effect this property gives
// ctx.globalCompositeOperation = 'multiply';

let isIncrease = true;
let lastX;
let lastY;

canvas.addEventListener('mousedown', function(e) {
    lastX = e.offsetX;
    lastY = e.offsetY;

    document.addEventListener('mousemove', mouseMove);
    document.addEventListener('mouseup', mouseUp);
});

function mouseUp(e) {
    document.removeEventListener('mousemove', mouseMove);
    document.removeEventListener('mouseup', mouseUp);
}

function mouseMove(e) {
    let [currentX, currentY] = [e.clientX, e.clientY];

    ctx.lineWidth = isIncrease ? ++ctx.lineWidth : --ctx.lineWidth;
    if (ctx.lineWidth > 200 || ctx.lineWidth < 12) isIncrease = !isIncrease;

    ctx.strokeStyle = `hsl(${hue++}, 100%, 50%)`; // hue, saturation, lightness

    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(currentX, currentY);
    ctx.stroke();
    ctx.closePath();

    [lastX, lastY] = [currentX, currentY];
}


