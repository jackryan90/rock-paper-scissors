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

function getPlayerChoice() {
  return prompt("Enter your choice: ").toLowerCase();
}

function getRoundWinner(computerChoice, playerChoice) {
  if (computerChoice === playerChoice) {
    console.log("This round was a tie.");
    return "tie";
  }
  
  if (
    ((computerChoice === "rock") && (playerChoice === "paper"))
    || ((computerChoice === "paper") && (playerChoice === "scissors"))
    || ((computerChoice === "scissors") && (playerChoice === "rock"))
  ) {
    console.log(
      "You win! "
      + `${playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)} `
      + `beats ${computerChoice}.`
    );
    return "player";
  }
  
  console.log(
    "You lose! "
    + `${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} `
    + `beats ${playerChoice}.`
  );
  return "computer";
}

function printRoundHeader(round) {
  console.log("--------------------------------------------");
  console.log(`Round ${round}`);
  return;
}

function printPlayerChoices(computerChoice, playerChoice) {
  console.log(`The computer chose: ${computerChoice}`);
  console.log(`You chose: ${playerChoice}`);
  return;
}

function printFinalScores(computerScore, playerScore) {
  console.log("")
  console.log("--------------------------------------------");
  console.log("Final Score");
  console.log(`You: ${playerScore}`);
  console.log(`Computer: ${computerScore}`);
  
  if (playerScore === computerScore) {
    console.log("You tied!");
  } else {
    console.log(
      `${playerScore > computerScore ? "You " : "The computer "} won!`
    );
  }
  return;
}

function playGame() {
  var playerScore = 0;
  var computerScore = 0;

  console.log("Let's play rock-paper-scissors!");

  for (var round = 1; round <= 5; round++) {
    printRoundHeader(round);

    const computerChoice = getComputerChoice();
    const playerChoice = getPlayerChoice();
    printPlayerChoices(computerChoice, playerChoice);

    var winner = getRoundWinner(computerChoice, playerChoice);
    switch (winner) {
      case "player":
        playerScore++;
        break;
      case "computer":
        computerScore++;
        break;
      default:
        break;
    }
  }

  printFinalScores(computerScore, playerScore);
  return;
}
