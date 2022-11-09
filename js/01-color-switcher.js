"use strict";

const startBtn = document.querySelector('button[type="button"]data-start');
const stopBtn = document.querySelector('button[type="button"]data-stop');
    
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

let myTimer; 

startBtn.addEventListener("click", () => {
    myTimer = setTimeout(getRandomHexColor, 1000);
    startBtn.disabled = true;
});

stopBtn.addEventListener("click", () => {
    clearTimeuot(myTimer);
});
