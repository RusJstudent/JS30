'use strict';

const hero = document.querySelector('.hero');
const h1 = hero.querySelector('h1');

hero.addEventListener('mousemove', shadow);

const maxShift = 70; // px

function shadow(e) {
    const cords = h1.getBoundingClientRect();
    const centerX = (cords.left + cords.right) / 2;
    const centerY = (cords.top + cords.bottom) / 2;

    const diffX = e.clientX - centerX;
    const diffY = e.clientY - centerY;

    const shiftX = diffX / centerX * maxShift;
    const shiftY = diffY / centerY * maxShift;

    h1.style.textShadow = `${shiftX}px ${shiftY}px 0px #ffd523, 
    ${shiftX * 0.8}px ${-shiftY * 1.2}px 0 #7a30ef,
    ${-shiftY * 1.3}px ${-shiftX * 0.7}px 0 #ff5b5b,
    ${shiftY}px ${-shiftX}px 0 #56ff00`;
}