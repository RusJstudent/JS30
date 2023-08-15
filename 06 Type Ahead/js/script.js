'use strict';

const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const form = document.forms[0];
const input = form.querySelector('.search');
const list = form.querySelector('.suggestions')

let fetchList = [];

let responce = fetch(endpoint)
    .then(responce => responce.json())
    .then(result => {
        fetchList.push(...result);
        input.addEventListener('input', displayMatches);
    });

function displayMatches(e) {
    list.innerHTML = '';

    let regexp;
    try { // for input values like [
        regexp = new RegExp(this.value, 'gi');
    } catch {}

    fetchList.filter( obj => obj.city.match(regexp) || obj.state.match(regexp) )
        .map( (obj, idx) => {
            if (idx > 100) return; // Output max 100 to prevent lags

            let city = obj.city;
            let state = obj.state;
            let population = Number(obj.population).toLocaleString();
    
            city = city.replace(regexp, '<span class="hl">$&</span>');
            state = state.replace(regexp, '<span class="hl">$&</span>');
    
            list.insertAdjacentHTML('beforeend', `<li>
                <span>${city}, ${state}</span>` + `
                <span class="population">${population}</span>
            </li>`);
        });
}