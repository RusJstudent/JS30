'use strict';

document.querySelectorAll('.controls input').forEach( input => {
    input.addEventListener('input', function(e) {
        let suffix = this.dataset.sizing || '';
        let value = this.value + suffix;

        document.documentElement.style.setProperty(`--${input.name}`, value);
    });
});

// let styles = getComputedStyle( document.querySelector(':root') );
// console.log(styles.getPropertyValue('--base')); // way to get any Custom Property