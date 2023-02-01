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






