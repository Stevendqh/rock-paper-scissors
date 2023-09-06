function getComputerChoice() {
    const randomNum = Math.floor(Math.random() * 3);

    switch (randomNum) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors"
        }
    }

function getPlayerChoice() {
    let playerSelection = prompt("Enter your choice: Rock, Paper, or Scissors");
    return playerSelection;
}
function playRound(playerSelection,computerSelection) {

    
    playerSelection = playerSelection.toLowerCase();

    const outcomes = {
        rock: { beats: "scissors", losesTo: "paper" },
        paper: { beats: "rock", losesTo: "scissors" },
        scissors: { beats: "paper", losesTo: "rock" },
    };

    console.log("You chose: " + playerSelection);
    console.log("Computer chose: " + computerSelection);

    if (!outcomes[playerSelection] || !outcomes[computerSelection]) {
        return "Invalid selections. Please choose Rock, Paper, Or Scissors."
    }

    if (playerSelection === computerSelection) {
        return "It's a tie! You both chose " + playerSelection + ".";
    } else if (outcomes[playerSelection].beats === computerSelection) {
        return "You Win! " + playerSelection + " beats " + computerSelection + ".";
    } else {
        return "You lose! " + computerSelection + " beats " + playerSelection + ".";
    }

}

function game(){
    let playerWins = 0;
    let computerWins  = 0;
    let tieGame = 0

    for (let i = 0; i < 5; i++) {

        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();

        const roundResult = playRound(playerSelection,computerSelection);

         if (roundResult.includes("Win")) {
            playerWins++;
          } else if (roundResult.includes("lose")) {
            computerWins++;
          } else if (roundResult.includes("tie")) {
            tieGame++;
          }
        console.log(roundResult);
    }  

    console.log ("Player Wins: " + playerWins);
    console.log ("Computer Wins: " + computerWins);
    console.log ("Ties: " + tieGame);

    return;

}

game();
