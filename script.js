'use strict';

let secretNumber = Math.trunc(Math.random() * 100) + 1;
let score = 20;
let highscore = 0;
let number = document.querySelector('.number');
let score1 = document.querySelector('.score');
let body = document.querySelector('body');
let guess1 = document.querySelector('.guess');
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(guess1.value);
  if (!guess) {
    displayMessage('⛔ No number!');
  } else if (guess === secretNumber) {
    displayMessage('🎉Correct Number!');
    number.textContent = secretNumber;
    body.style.backgroundColor = '#A8DBA8';
    number.style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '🔺 Too high' : '🔻 Too low');
      score--;
      score1.textContent = score;
    } else {
      displayMessage(`💥 You lost the game`);
      score1.textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 100) + 1;
  displayMessage('Start guessing...');
  score1.textContent = score;
  number.textContent = '?';
  guess1.value = '';
  body.style.backgroundColor = '#b081b7';
  number.style.width = '15rem';
});
