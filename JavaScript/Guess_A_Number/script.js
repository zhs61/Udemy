'use strict';

let realNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
const scores = [];
// document.querySelector('.number').textContent = realNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  const resultText = document.querySelector('.message');
  if (!guess) {
    resultText.textContent = 'No Answer provided!';
  } else if (guess === realNumber) {
    resultText.textContent = 'Correct Answer!';
    document.querySelector('.number').textContent = realNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    scores.push(score);
    document.querySelector('.highscore').textContent = Math.max(...scores);
  } else if (guess < realNumber) {
    if (score > 1) {
      score--;
      resultText.textContent = 'Too Low!';
    } else {
      document.querySelector('.score').textContent = 0;
      resultText.textContent = 'You lost the game!';
    }
  } else if (guess > realNumber) {
    if (score > 1) {
      score--;
      resultText.textContent = 'Too High!';
    } else {
      document.querySelector('.score').textContent = 0;
      resultText.textContent = 'You lost the game!';
    }
  }
  document.querySelector('.score').textContent = score <= 1 ? 0 : score;
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = 20;
  realNumber = Math.trunc(Math.random() * 20 + 1);

  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.score').textContent = 20;
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
});
