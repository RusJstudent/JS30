'use strict';

const highlight = document.createElement('span');
highlight.classList.add('highlight');
document.body.append(highlight);

document.addEventListener('mouseover', function(e) {
    if (e.target.tagName === 'A') {
        highlight.style.height = e.target.offsetHeight + 'px';
        highlight.style.width = e.target.offsetWidth + 'px';
        
        const cords = e.target.getBoundingClientRect();
        highlight.style.transform = `translate(${cords.left}px, ${cords.top + window.scrollY}px)`;

        // Animation via transorms seems a little bit smoother
        // highlight.style.left = cords.left + 'px';
        // highlight.style.top = cords.top + window.scrollY + 'px'; // window.pageYOffset is deprecated, so I use window.scrollY
    }   
});