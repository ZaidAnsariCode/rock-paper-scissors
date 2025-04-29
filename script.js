// getting random choice of Computer
function getComputerChoice() {
  const randomChoice = Math.floor(Math.random() * 10);
  let computerChoosed;
  if (randomChoice >= 0 && randomChoice <= 3) {
    computerChoosed = "rock";
  } else if (randomChoice > 3 && randomChoice <= 6) {
    computerChoosed = "paper";
  } else if (randomChoice > 6 && randomChoice <= 9) {
    computerChoosed = "scissors";
  }
  return computerChoosed;
}

// getting Choice of Human
function getHumanChoice() {
  let humanChoosed = prompt("Choose Anyone-(Rock,Paper,Scissors)");
  let humanChoosedLowerCase = humanChoosed.toLowerCase();
  return humanChoosedLowerCase;
}

// Playing Round
function PlayRound(humanChoice, computerChoice) {
  let winner;
  if (humanChoice === computerChoice) {
    alert(`Tie, You choose ${humanChoice} - Computer Choose ${computerChoice}`);
    winner = "none";
  }
  // Code For Rock
  else if (humanChoice === "rock" && computerChoice === "paper") {
    winner = "computer";
    alert(
      `winner is ${winner}, you choose ${humanChoice} - computer choose ${computerChoice}`
    );
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    winner = "human";
    alert(
      `winner is ${winner}, you choose ${humanChoice} - computer choose ${computerChoice}`
    );
  }
  // Code For Paper
  else if (humanChoice === "paper" && computerChoice === "rock") {
    winner = "human";
    alert(
      `winner is ${winner}, you choose ${humanChoice} - computer choose ${computerChoice}`
    );
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    winner = "computer";
    alert(
      `winner is ${winner}, you choose ${humanChoice} - computer choose ${computerChoice}`
    );
  }
  //Code For Scissors
  else if (humanChoice === "scissors" && computerChoice === "rock") {
    winner = "computer";
    alert(
      `winner is ${winner}, you choose ${humanChoice} - computer choose ${computerChoice}`
    );
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    winner = "human";
    alert(
      `winner is ${winner}, you choose ${humanChoice} - computer choose ${computerChoice}`
    );
  }
  return winner;
}
//counter Function
let humanScore = 0;
let computerScore = 0;
function counter(result) {
  if (result === "human") {
    humanScore++;
    alert(`Your Score ${humanScore} - Computer Score ${computerScore}`);
  } else if (result === "computer") {
    computerScore++;
    alert(`Your Score ${humanScore} - Computer Score ${computerScore}`);
  } else if (result === "none") {
    alert(`TIEEEE, Your Score ${humanScore} - Computer Score ${computerScore}`);
  }
}
counter(PlayRound(getHumanChoice(), getComputerChoice()));
counter(PlayRound(getHumanChoice(), getComputerChoice()));
counter(PlayRound(getHumanChoice(), getComputerChoice()));
counter(PlayRound(getHumanChoice(), getComputerChoice()));
counter(PlayRound(getHumanChoice(), getComputerChoice()));
