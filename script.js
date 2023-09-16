function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomNum = Math.floor(Math.random() * choices.length);
    return choices[randomNum];
  }
  
  function playRound(playerSelection, computerSelection) {
    computerSelection = getComputerChoice();
  
    const outcomes = {
      rock: { beats: "scissors", losesTo: "paper" },
      paper: { beats: "rock", losesTo: "scissors" },
      scissors: { beats: "paper", losesTo: "rock" },
    };
  
    console.log("You chose: " + playerSelection);
    console.log("Computer chose: " + computerSelection);
  
    if (!outcomes[playerSelection] || !outcomes[computerSelection]) {
      console.log("Invalid selections. Please choose Rock, Paper, or Scissors.");
    } else if (playerSelection === computerSelection) {
      console.log("It's a tie! You both chose " + playerSelection + ".");
    } else if (outcomes[playerSelection].beats === computerSelection) {
      console.log("You Win! " + playerSelection + " beats " + computerSelection + ".");
    } else {
      console.log("You lose! " + computerSelection + " beats " + playerSelection + ".");
    }
  }
  
  function handleButtonClick(event) {
    playRound(event.target.id);
  }
  
  const buttons = document.querySelectorAll('button');
  buttons.forEach((button) => {
    button.addEventListener('click', handleButtonClick);
  });
  