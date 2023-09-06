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
function playRound(playerSelection,computerSelection) {
    //let playerSelection = prompt("Enter your choice: Rock, Paper, or Scissors");
    
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

console.log(playRound("Scissors",getComputerChoice()));
