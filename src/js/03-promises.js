"use strict";

import Notiflix from 'notiflix';
import "../../node_modules/notiflix/build/notiflix-aio";


function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
      reject({ position, delay });
      }
    }, delay);
  });
};

const form = document.querySelector('.form');

form.addEventListener('submit', event => {
  event.preventDefault();
  
  const delay = Number(form.elements.delay.value);
  const step = Number(form.elements.step.value);
  const amount = Number(form.elements.amount.value);

  let currentDelay = delay;

  for (let i = 0; i < amount; i++) {
    createPromise(i + 1, currentDelay)
      .then(({ position, delay }) => {
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
      Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
      currentDelay += step;
  }
});







// const firstDelay = document.querySelector('[name="delay"]');
// const delayStep = document.querySelector('[name="step"]');
// const amount = document.querySelector('[name="amount"]');
// const createPromisesButton = document.querySelector('button');

// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;
//   if (shouldResolve) {
//     // Fulfill
//   } else {
//     // Reject
//   };
// };

// createPromisesButton.addEventListener("click", () => {
//   createPromise() * amount.textContent.value;
// });

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (createPromise) {
//       resolve("");
//     } else {
//       reject("");
//     }
//   }, delayStep.textContent.value);
// });


// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });








