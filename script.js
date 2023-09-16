
// playerSelection="Wubalubadubdub"

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

// function getPlayerChoice() {
//     let playerSelection = prompt("Enter your choice: Rock, Paper, or Scissors");
//     return playerSelection;
// }

function playRound(playerSelection, computerSelection) {

    // playerSelection = "ROCK";
    computerSelection = getComputerChoice();

    // return console.log(playerSelection + "---" + computerSelection);


    const outcomes = {
        rock: {
            beats: "scissors",
            losesTo: "paper"
        },
        paper: {
            beats: "rock",
            losesTo: "scissors"
        },
        scissors: {
            beats: "paper",
            losesTo: "rock"
        },
    };

    console.log("You chose: " + playerSelection);
    console.log("Computer chose: " + computerSelection);

    if (!outcomes[playerSelection] || !outcomes[computerSelection]) {
        console.log ("Invalid selections. Please choose Rock, Paper, Or Scissors.");
    }

    if (playerSelection === computerSelection) {
        console.log ("It's a tie! You both chose " + playerSelection + ".");
    } else if (outcomes[playerSelection].beats === computerSelection) {
        console.log ("You Win! " + playerSelection + " beats " + computerSelection + ".");
    } else {
        console.log ("You lose! " + computerSelection + " beats " + playerSelection + ".");
    }
    return
}


const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
        playRound(event.target.id);
      });
    });


// function game() {
//     let playerWins = 0;
//     let computerWins = 0;
//     let tieGame = 0


//     const playerSelection = getPlayerChoice();
//     const computerSelection = getComputerChoice();

//     const roundResult = playRound(playerSelection, computerSelection);

//     if (roundResult.includes("Win")) {
//         playerWins++;
//     } else if (roundResult.includes("lose")) {
//         computerWins++;
//     } else if (roundResult.includes("tie")) {
//         tieGame++;
//     }
//     console.log(roundResult);

//     console.log("Player Wins: " + playerWins);
//     console.log("Computer Wins: " + computerWins);
//     console.log("Ties: " + tieGame);

//     return;

// }