"use strict";

import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const targetDate = selectedDates[0];
    const startButton = document.querySelector('[data-start]');
    if (targetDate < new Date()) {
      window.alert('Please choose a date in the future');
    } else {
      startButton.removeAttribute('disabled');
    }
  },
};

flatpickr('#datetime-picker', options);

const startButton = document.querySelector('[data-start]');
startButton.addEventListener('click', () => {
  const targetDate = new Date(document.querySelector('#datetime-picker').value);
  const daysElement = document.querySelector('[data-days]');
  const hoursElement = document.querySelector('[data-hours]');
  const minutesElement = document.querySelector('[data-minutes]');
  const secondsElement = document.querySelector('[data-seconds]');

  startButton.setAttribute('disabled', 'disabled');

  const interval = setInterval(() => {
    const currentDate = new Date();
    const timeLeft = targetDate - currentDate;
    if (timeLeft <= 0) {
      clearInterval(interval);
      daysElement.innerText = '00';
      hoursElement.innerText = '00';
      minutesElement.innerText = '00';
      secondsElement.innerText = '00';
    } else {
      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

      daysElement.innerText = String(days).padStart(2, '0');
      hoursElement.innerText = String(hours).padStart(2, '0');
      minutesElement.innerText = String(minutes).padStart(2, '0');
      secondsElement.innerText = String(seconds).padStart(2, '0');
    }
  }, 1000);
});



// const input = document.querySelector("#datetime-picker");
// const days = document.querySelector(".timer span[data-days]");
// const hours = document.querySelector(".timer span[data-hours]");
// const minutes = document.querySelector(".timer span[data-minutes");
// const seconds = document.querySelector(".timer span[data-seconds]");
// const dateNow = new Date();
// const dateUnix = new Date(0);
// let userDate = input.Date;

// const startBtn = document.querySelector('button[data-start]');

// const options = {
//   enableTime: true,
//   time_24hr: true,
//   defaultDate: new Date(),
//   minuteIncrement: 1,
//   onClose(selectedDates) {
//     console.log(selectedDates[0]);
//   },
// };

// function convertMs(ms) {
//   // Number of milliseconds per unit of time
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   // Remaining days
//   const days = Math.floor(ms / day);
//   // Remaining hours
//   const hours = Math.floor((ms % day) / hour);
//   // Remaining minutes
//   const minutes = Math.floor(((ms % day) % hour) / minute);
//   // Remaining seconds
//   const seconds = Math.floor((((ms % day) % hour) % minute) / second);

//   return { days, hours, minutes, seconds };
// }


// input.addEventListener("click", () => {
//   if (dateNow.getTime() > userDate.getTime()) {
//     window.alert("Please choose a date in the future");
//     startBtn.addEventListener("click", () => {
//         startBtn.disabled = true;
//     });
//   } else {
//     // flatpickr(convertMs, options); 
//         startBtn.disabled = false;
//   }
// });

// console.log(((dateNow.getTime()) - (dateUnix.getTime())));
// console.log((dateNow.getTime()));


// Wykonuj to zadanie w plikach 02 - timer.html i 02 - timer.js. 
// Napisz skrypt licznika, który odlicza czas do określonego zdarzenia.
// Taki licznik można wykorzystywać na blogach czy w sklepach internetowych,
// stronach z różnymi wydarzeniami, podczas przerwy technicznej itd.
// Obejrzyj wersję demonstracyjną wideo o działaniu licznika.

// Elementy interfesju:
// W HTML znajduje się znacznik licznika, pola wyboru końcowej daty i przycisku,
// po którego kliknięciu licznik powinien się uruchomić.Popraw wizualnie elementy interfejsu.

