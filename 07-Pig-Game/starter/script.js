'use strict';
// Selecting elements
const player0EL = document.querySelector('.player--0');
const player1EL = document.querySelector('.player--1');
const score0EL = document.querySelector('#score--0');
const score1EL = document.querySelector('#score--1');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');

const diceEL = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//Starting conditions
score0EL.textContent = 0;
score1EL.textContent = 0;
diceEL.classList.add('hidden');

let scores, curentScore, activePLayer, playing;
const init = function () {
  scores = [0, 0];
  curentScore = 0;
  activePLayer = 0;
  playing = true;

  score0EL.textContent = 0;
  score1EL.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEL.classList.add('hidden');
  player0EL.classList.remove('player--winner');
  player1EL.classList.remove('player--winner');
  player0EL.classList.add('player--active');
  player1EL.classList.remove('player--active');
};

init();

//Switching players
const switchPlayer = function () {
  //switch to next player
  document.querySelector(`#current--${activePLayer}`).textContent = 0;
  curentScore = 0;
  activePLayer = activePLayer === 0 ? 1 : 0;
  // Switch colors on lose
  player0EL.classList.toggle('player--active');
  player1EL.classList.toggle('player--active');
};

// Roling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1. Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    //2. Display dice
    diceEL.classList.remove('hidden');
    diceEL.src = `dice-${dice}.png`;
    //3. Check for rolled 1: if true, switch to next player
    if (dice !== 1) {
      // Add dice to curent score
      curentScore += dice;
      document.querySelector(`#current--${activePLayer}`).textContent =
        curentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    // Add Current score to active player score
    scores[activePLayer] += curentScore;
    document.querySelector(`#score--${activePLayer}`).textContent =
      scores[activePLayer];
    // Check if player's score is >= 100
    if (scores[activePLayer] >= 100) {
      // Finish the game
      playing = false;
      diceEL.classList.add('hidden');

      document
        .querySelector(`.player--${activePLayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePLayer}`)
        .classList.remove('player--active');
    } else {
      //Switch the player
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', function () {
  init();
});
