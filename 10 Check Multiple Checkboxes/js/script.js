'use strict';

const inbox = document.querySelector('.inbox');

inbox.addEventListener('click', function(e) {
    const pattern = 'input[type="checkbox"]';

    if (!e.target.matches(pattern)) return;
    if (!e.shiftKey) return;
    if (!e.target.checked) return; // when check is removing

    const checkboxCollection = Array.from(inbox.querySelectorAll(pattern));

    let currentIndex = checkboxCollection.indexOf(e.target);

    let previousIndex;
    let nearestChecked = checkboxCollection.reduce( (nearest, current, idx) => {
        if (!current.checked || idx === currentIndex) return nearest;

        let diffBefore = Math.abs(currentIndex - previousIndex);
        let diffNow = Math.abs(currentIndex - idx);

        if (nearest === null || diffNow < diffBefore) { 
            previousIndex = idx;
            return current;
        }

        return nearest;
    }, null);

    if (!nearestChecked) return;

    let [min, max] = [Math.min(previousIndex, currentIndex), Math.max(previousIndex, currentIndex)];

    for (let i = min; i <= max; i++) {
        inbox.children[i].querySelector(pattern).checked = true;
    }
});