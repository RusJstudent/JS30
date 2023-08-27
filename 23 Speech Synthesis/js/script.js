'use strict';

const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"]');
const speakButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');
const text = document.querySelector('[name="text"]');
const msg = new SpeechSynthesisUtterance();
msg.text = text.value;
let voices = [];

speechSynthesis.addEventListener('voiceschanged', function(e) {
    voices = this.getVoices();
    voices.forEach(voice => {
        const option = document.createElement('option');
        option.value = voice.name;
        option.textContent = voice.name;
        voicesDropdown.append(option);
    });
});

speakButton.onclick = toggle;
stopButton.onclick = e => speechSynthesis.cancel();

function toggle() {
    speechSynthesis.cancel();
    speechSynthesis.speak(msg);
}

voicesDropdown.addEventListener('change', function(e) {
    msg.voice = voices[this.selectedIndex];
    toggle();
});

options.forEach(option => option.addEventListener('change', function(e) {
    msg[this.name] = this.value;
    toggle();
}));

text.addEventListener('change', function(e) {
    msg.text = text.value;
    toggle();
});