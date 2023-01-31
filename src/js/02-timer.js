"use strict";

import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const input = document.querySelector("#datetime-picker");
const days = document.querySelector(".timer span[data-days]");
const hours = document.querySelector(".timer span[data-hours]");
const minutes = document.querySelector(".timer span[data-minutes");
const seconds = document.querySelector(".timer span[data-seconds]");

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};

input.addEventListener("click", () => {
  flatpickr({ days, hours, minutes, seconds }, options); 

});





// Wykonuj to zadanie w plikach 02 - timer.html i 02 - timer.js. 
// Napisz skrypt licznika, który odlicza czas do określonego zdarzenia.
// Taki licznik można wykorzystywać na blogach czy w sklepach internetowych,
// stronach z różnymi wydarzeniami, podczas przerwy technicznej itd.
// Obejrzyj wersję demonstracyjną wideo o działaniu licznika.

// Elementy interfesju:
// W HTML znajduje się znacznik licznika, pola wyboru końcowej daty i przycisku,
// po którego kliknięciu licznik powinien się uruchomić.Popraw wizualnie elementy interfejsu.

