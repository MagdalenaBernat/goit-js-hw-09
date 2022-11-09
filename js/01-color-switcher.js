"use strict";

import css from "../css/common.css";

const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const body = document.querySelector('body');  

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

let colorChangeInterval; 

startBtn.addEventListener("click", () => {
    colorChangeInterval = setInterval(() => {
        body.style.backgroundColor = getRandomHexColor;
        startBtn.disabled = true;
    }, 1000);
});

stopBtn.addEventListener("click", () => {
    clearInterval(colorChangeInterval);
    startBtn.disabled = false;
});
