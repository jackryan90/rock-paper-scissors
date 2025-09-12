function printGreeting(output) {
  const greeting = document.createTextNode("Let's play rock-paper-scissors!");
  output.appendChild(greeting);
  output.appendChild(document.createElement("br"));
  return;
}

function printRoundHeader() {
  const lines = document.createTextNode(
    "--------------------------------------------"
  );
  output.appendChild(lines);
  output.appendChild(document.createElement("br"));

  const roundHeader = document.createTextNode(`Round ${round}`);
  output.appendChild(roundHeader);
  output.appendChild(document.createElement("br"));
  return;
}

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

function printPlayerChoices(computerChoice, playerChoice) {
  const choices = document.createTextNode(
    `You chose '${playerChoice}' and the computer chose '${computerChoice}'. `
  );
  output.appendChild(choices);
  return;
}

function getRoundWinner(computerChoice, playerChoice) {
  let winnerText;
  let winner;

  if (computerChoice === playerChoice) {
    winnerText = document.createTextNode("It's a tie.");
    winner = "tie";
  } else if (
    ((computerChoice === "rock") && (playerChoice === "paper"))
    || ((computerChoice === "paper") && (playerChoice === "scissors"))
    || ((computerChoice === "scissors") && (playerChoice === "rock"))
  ) {
    winnerText = document.createTextNode("You win!");
    winner = "player";
  } else {
    winnerText = document.createTextNode("You lose!");
    winner = "computer";
  }

  output.appendChild(winnerText);
  output.appendChild(document.createElement("br"));
  return winner;
}

function calculateScores(winner) {
  switch (winner) {
    case "player":
      scores.player++;
      break;
    case "computer":
      scores.computer++;
      break;
    default:
      break;
  }
}

function printCurrentScore() {
  const scoreText = document.createTextNode(
    `Current score: player: ${scores.player}, computer: ${scores.computer}`
  );
  output.appendChild(scoreText);
  output.appendChild(document.createElement("br"));
}

function printWinner() {
  const lines = document.createTextNode(
    "--------------------------------------------"
  );
  output.appendChild(lines);
  output.appendChild(document.createElement("br"));

  let winnerText;
  if (scores.player === scores.computer) {
    winnerText = document.createTextNode("You tied!");
  } else {
    winnerText = document.createTextNode(
      `${scores.player > scores.computer ? "You " : "The computer "} won!`
    );
  }
  output.appendChild(winnerText);
  return;
}

function playRound(playerChoice) {
  if (!keepPlaying) return;

  printRoundHeader();

  const computerChoice = getComputerChoice();
  printPlayerChoices(computerChoice, playerChoice);

  const winner = getRoundWinner(computerChoice, playerChoice);
  calculateScores(winner);
  printCurrentScore();

  for (let key in scores) {
    if (scores[key] >= playToScore) {
      keepPlaying = false;
      printWinner();
      break;
    }
  }

  round++;
}

const output = document.querySelector("#output");
printGreeting(output);

let scores = {"player": 0, "computer": 0}

let round = 1;
const playToScore = 5;
let keepPlaying = true;

const buttons = document.querySelectorAll(".button-container > button");
buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    playRound(button.id);
  });
});
