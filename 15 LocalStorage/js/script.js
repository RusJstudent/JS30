'use strict';

const form = document.querySelector('.add-items');
const plates = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || [];

for (const item of items) addListItem(item, plates);

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const item = {
        checked: false,
        text: this.item.value,
    }

    items.push(item);
    addListItem(item, plates);
    saveItems(item);

    this.reset();
});

function addListItem(item, where) { 
    let i = where.children.length;
    let checked = item.checked ? 'checked' : '';

    let text = `<li>
        <input type="checkbox" data-index="${i}" ${checked}>
        <label for="${i}">${item.text}</label>
    </li>`;
    where.insertAdjacentHTML('beforeend', text);
}

function saveItems() {
    localStorage.setItem('items', JSON.stringify(items));
}

plates.onclick = function(e) {
    if (!e.target.hasAttribute('for')) return;

    let idx = e.target.getAttribute('for');
    let input = this.querySelector(`input[data-index="${idx}"]`);
    input.checked = !input.checked;
    
    items[idx].checked = !items[idx].checked;
    saveItems();
}