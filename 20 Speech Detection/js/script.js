'use strict';

const words = document.querySelector('.words');

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;
recognition.start();
// recognition.lang = 'ru-RU'; // распознает русский и без этого

let p;
createParagraphIn(words);

recognition.addEventListener('result', function(e) {
    p.textContent = e.results[0][0].transcript;

    if (e.results[0].isFinal) createParagraphIn(words);
});

recognition.addEventListener('end', recognition.start);

function createParagraphIn(elem) {
    p = document.createElement('p');
    elem.append(p);
}


