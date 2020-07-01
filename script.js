let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  return Math.floor(Math.random() * 10)
}
const compareGuesses = (human, computer, target) => {
  const guessHuman = Math.abs(target - human);
  const guessComputer = Math.abs(target - computer);

  return guessHuman <= guessComputer;
}

const updateScore = winner => {
  if (winner === 'human') {
    humanScore++;
  } else if (winner === 'computer') {
    computerScore++;
  }
}

const advanceRound = () => {
  currentRoundNumber++;
};