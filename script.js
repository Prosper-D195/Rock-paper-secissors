let humanScore = 0;
let computerScore = 0;

const pierreButton = document.getElementById('pierre');
const papierButton = document.getElementById('papier');
const ciseauxButton = document.getElementById('ciseaux');
const choixJoueurLabel = document.getElementById('choix-joueur');
const choixOrdinateurLabel = document.getElementById('choix-ordinateur');
const scoreJoueurLabel = document.getElementById('score-joueur');
const scoreOrdinateurLabel = document.getElementById('score-ordinateur');
const resultatLabel = document.getElementById('resultat');

pierreButton.addEventListener('click', () => playRound('pierre'));
papierButton.addEventListener('click', () => playRound('papier'));
ciseauxButton.addEventListener('click', () => playRound('ciseaux'));

function getComputerChoice() {
  const choices = ["pierre", "papier", "ciseaux"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
  }

function playRound(humanChoice) {
  const computerChoice = getComputerChoice();
  if (humanChoice === 'pierre') {
    choixJoueurLabel.textContent = '✊';
  } else if (humanChoice === 'papier') {
    choixJoueurLabel.textContent = '✋';
  } else {
    choixJoueurLabel.textContent = '✌️';
  }

  if (computerChoice === 'pierre') {
    choixOrdinateurLabel.textContent = '✊';
  } else if (computerChoice === 'papier') {
    choixOrdinateurLabel.textContent = '✋';
  } else {
    choixOrdinateurLabel.textContent = '✌️';
  }

   if (humanChoice === computerChoice) {
    resultatLabel.textContent = 'Égalité !';
  } else if ((humanChoice === 'pierre' && computerChoice === 'ciseaux') || (humanChoice === 'papier' && computerChoice === 'pierre') || (humanChoice === 'ciseaux' && computerChoice === 'papier')) {
    humanScore++;
    scoreJoueurLabel.textContent = humanScore;
    resultatLabel.textContent = 'Vous avez gagné !';
  } else {
    computerScore++;
    scoreOrdinateurLabel.textContent = computerScore;
    resultatLabel.textContent = 'L\'ordinateur a gagné !';
  }
  checkWinner();
}

function checkWinner() {
  if (humanScore === 5) {
    resultatLabel.textContent = 'Vous avez gagné le jeu !';
    disableButtons();
     } else if (computerScore === 5) {
    resultatLabel.textContent = 'L\'ordinateur a gagné le jeu !';
    disableButtons();
  }
}

function disableButtons() {
  pierreButton.disabled = true;
  papierButton.disabled = true;
  ciseauxButton.disabled = true;
}