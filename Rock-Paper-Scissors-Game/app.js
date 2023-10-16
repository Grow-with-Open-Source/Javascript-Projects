const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('winner');
const possibleChoices = document.querySelectorAll('.button-container > img');

let userChoice;
let computerChoice;
let result;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  userChoice = e.target.alt;
  userChoiceDisplay.src = e.target.src;
  generateComputerChoice();
  getResult();
}));

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * possibleChoices.length);

  computerChoice = possibleChoices[randomNumber].alt;
  computerChoiceDisplay.src = possibleChoices[randomNumber].src;
}

function getResult() {
  if (computerChoice === userChoice) {
    result = "It's a draw";
    resultDisplay.innerHTML = result;
    resultDisplay.className = "it-s-a-draw";
  } else if (
    (computerChoice === 'Rock' && userChoice === 'Paper') ||
    (computerChoice === 'Scissors' && userChoice === 'Rock') ||
    (computerChoice === 'Paper' && userChoice === 'Scissors')
  ) {
    result = 'You win!';
    resultDisplay.innerHTML = `<img src="./public/gamer.png" alt="Gamer" style="width: 10%;">`; 
    resultDisplay.className = "you-win"; 
  } else {
    result = 'You lose!';
    resultDisplay.innerHTML = `<img src="./public/computer.png" alt="Computer" style="width: 10%;">`; 
    resultDisplay.className = "you-lose"; 
  }
}

