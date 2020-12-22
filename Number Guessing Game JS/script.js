'use strict';

console.log(document.querySelector('.message').textContent);
/*
document.querySelector('.message').textContent = 'Correct Number!';

console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.number').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/
let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  //no input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔️ No number!';

    //winning number
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    //Highscore is working now
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    //too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '⬇️ Too high!';
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💀 You lose!';

      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#FF0000 ';

      document.querySelector('.number').style.width = '30rem';
    }
    //too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '⬆️  Too low!';
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💀 You lose!';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#FF0000 ';

      document.querySelector('.number').style.width = '30rem';
    }
  }
});

//clicking 'again' resets everything
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start guessing... ';
  document.querySelector('body').style.backgroundColor = '#222';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
});
