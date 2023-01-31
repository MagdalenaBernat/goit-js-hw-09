"use strict";

const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const background = document.querySelector('body');  

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

let colorChangeInterval; 

startBtn.addEventListener("click", () => {
    colorChangeInterval = setInterval(() => {
        background.style.backgroundColor = getRandomHexColor();
        startBtn.disabled = true;
        stopBtn.disabled = false;
    }, 1000);
});

stopBtn.addEventListener("click", () => {
    let stopColorSwitcher = clearInterval(colorChangeInterval);
    startBtn.disabled = false;
    stopBtn.disabled = true;
});
