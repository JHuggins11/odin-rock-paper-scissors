// Format input with the first letter capitalised and the rest in lowercase (for the player's choice)
function formatInput(text) {
    let length = text.length;
    return text.substr(0, 1).toUpperCase() + text.substr(1, length).toLowerCase();
}

// Randomly chooses an option for the opponent
function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

// Plays a round of the game and returns the result
function playRound(playerSelection, computerSelection) {
    playerSelection = formatInput(playerSelection);

    switch(true) {
        // Player wins
        case playerSelection === "Rock" && computerSelection === "Scissors":
        case playerSelection === "Paper" && computerSelection === "Rock":
        case playerSelection === "Scissors" && computerSelection === "Paper":
            console.log(`You win! ${playerSelection} beats ${computerSelection}!`);
            break;
        // Computer wins
        case playerSelection === "Rock" && computerSelection === "Paper":
        case playerSelection === "Paper" && computerSelection === "Scissors":
        case playerSelection === "Scissors" && computerSelection === "Rock":
            console.log(`You lose! ${computerSelection} beats ${playerSelection}!`);
            break;
        // Result is a draw
        case playerSelection === "Rock" && computerSelection === "Rock":
        case playerSelection === "Paper" && computerSelection === "Paper":
        case playerSelection === "Scissors" && computerSelection === "Scissors":
            console.log(`It's a draw! Both of you used ${computerSelection}!`);
            break;
        // Player wrote an invalid input as their choice
        default:
            console.log("Invalid choice. Please write either 'rock', 'paper' or 'scissors'.");
            break;
    }
}
