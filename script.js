function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomNum = Math.floor(Math.random() * choices.length);
    return choices[randomNum];
  }
  
let playerScore = 0;
let computerScore = 0;


  function playRound(playerSelection, computerSelection) {

    computerSelection = getComputerChoice();

    const outcomes = {
      rock: { beats: "scissors", losesTo: "paper" },
      paper: { beats: "rock", losesTo: "scissors" },
      scissors: { beats: "paper", losesTo: "rock" },
    };

    const runningScoreDiv = document.getElementById("runningScoreDiv");
    const runningScoreText = document.createElement("p");
    runningScoreDiv.textContent = "";

 

    const resultDiv = document.getElementById("resultDiv");
    resultDiv.textContent = "";
    const resultText = document.createElement("p");
  
    if (!outcomes[playerSelection] || !outcomes[computerSelection]) {
      resultText.textContent = "Invalid selections. Please choose Rock, Paper, or Scissors.";
    } else if (playerSelection === computerSelection) {
      resultText.textContent = "It's a tie!" ;
    } else if (outcomes[playerSelection].beats === computerSelection) {
      playerScore +=1
      resultText.textContent = "You Win! " + playerSelection + " beats " + computerSelection + ".";
    } else {
      computerScore +=1
      resultText.textContent = "You lose! " + computerSelection + " beats " + playerSelection + ".";
    }

    runningScoreText.textContent = "Total Score: Player = " + playerScore + " " + "Computer: " + computerScore;

    const playerChoiceText = document.createElement("p");
    playerChoiceText.textContent = "Your choice: " + playerSelection;
    resultDiv.append(playerChoiceText);

    const computerChoiceText = document.createElement("p");
    computerChoiceText.textContent = "Computer's choice: " + computerSelection;
    resultDiv.append(computerChoiceText);

    resultDiv.append(resultText);

    runningScoreDiv.append(runningScoreText);


 


}


  
  function handleButtonClick(event) {
    playRound(event.target.id);
  }
  
  const buttons = document.querySelectorAll('button');
  buttons.forEach((button) => {
    button.addEventListener('click', handleButtonClick);
  });
  