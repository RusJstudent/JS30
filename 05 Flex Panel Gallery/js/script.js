'use strict';

const panels = document.querySelector('.panels');

panels.onclick = function(e) {
    let target = e.target.closest('.panel');
    if (!target) return;
    
    panels.querySelectorAll('.open').forEach( panel => {
        if (panel !== target) panel.classList.remove('open');
    });

    target.classList.toggle('open');
}