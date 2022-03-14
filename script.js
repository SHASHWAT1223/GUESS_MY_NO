'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = `CORRECT ANSWER!`;

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

//lec 73

let secret_number = Math.trunc(Math.random() * 50) + 1;
let score = 5;
let highscore = 0;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value); //as the value returned will be a string so to compare it afterwards with a number we will convert it into a number

  let zeroScore = function (Score) {
    document.querySelector('.score').textContent = 0;
    document.querySelector('.message').textContent = `YOU'VE LOST THE GAME!`;
    document.querySelector('body').style.backgroundColor = '#880808';
    document.querySelector('.number').textContent = secret_number;
  };

  if (score >= 1) {
    if (!guess) {
      document.querySelector('.message').textContent = `NO NUMBER!`;
    } else if (guess === secret_number) {
      document.querySelector('.message').textContent = `CORRECT NUMBER!`;
      document.querySelector('body').style.backgroundColor = '#228B22';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').textContent = secret_number;

      if (score > highscore) {
        highscore = score;
      }
      document.querySelector('.highscore').textContent = highscore;
    } else if (guess > secret_number + 5) {
      document.querySelector('.message').textContent = `TOO HIGH!`;
      score--;
      document.querySelector('.score').textContent = score;
      if (score == 0) {
        zeroScore();
      }
    } else if (guess - secret_number <= 5 && guess - secret_number > 0) {
      document.querySelector('.message').textContent = `A BIT HIGH!`;
      score--;
      document.querySelector('.score').textContent = score;
      if (score == 0) {
        zeroScore();
      }
    } else if (guess < secret_number - 5) {
      document.querySelector('.message').textContent = `TOO LOW!`;
      score--;
      document.querySelector('.score').textContent = score;
      if (score == 0) {
        zeroScore();
      }
    } else if (secret_number - guess <= 5 && secret_number - guess > 0) {
      document.querySelector('.message').textContent = `A BIT LOW!`;
      score--;
      document.querySelector('.score').textContent = score;
      if (score == 0) {
        zeroScore();
      }
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secret_number = Math.trunc(Math.random() * 50) + 1;
  score = 5;
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = `START GUESSING....`;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
});
