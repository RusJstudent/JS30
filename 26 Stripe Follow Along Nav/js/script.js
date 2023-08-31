'use strict';

const triggers = document.querySelectorAll('.cool > li');
const background = document.querySelector('.dropdownBackground');
const nav = document.querySelector('.top');

function handleEnter(e) {
    e.target.classList.add('trigger-enter');
    setTimeout(() => {
        if (e.target.classList.contains('trigger-enter')) {
            e.target.classList.add('trigger-enter-active');
        }
    }, 100);

    const dropdown = e.target.querySelector('.dropdown');
    const cords = dropdown.getBoundingClientRect();
    const navCords = nav.getBoundingClientRect();

    background.classList.add('open');
    background.style.height = dropdown.offsetHeight + 'px';
    background.style.width = dropdown.offsetWidth + 'px';
    background.style.transform = `translate(${cords.left}px, ${cords.top - navCords.top}px)`;
}

function handleLeave(e) {
    e.target.classList.remove('trigger-enter-active', 'trigger-enter');
    background.classList.remove('open');
}

triggers.forEach(trigger => {
    trigger.addEventListener('mouseenter', handleEnter);
    trigger.addEventListener('mouseleave', handleLeave);
});