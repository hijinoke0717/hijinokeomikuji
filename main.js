'use strict'

const btn = document.getElementById('btn');
const result = document.getElementById('result');

btn.addEventListener('click' , () => {
  const num = Math.random();

  if (num < 0.1) {
    result.textContent = '大吉'
  } else if (num < 0.3) {
    result.textContent = '吉'
  } else if (num < 0.5) {
    result.textContent = '中吉'
  } else if (num < 0.7) {
    result.textContent = '小吉'
  } else if (num < 0.9) {
    result.textContent = '末吉'
  } else {
    result.textContent = '凶'
  }
});