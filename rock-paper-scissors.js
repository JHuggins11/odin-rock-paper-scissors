// Open the console in index.html and call game() to start

// Format input with the first letter capitalised and the rest in lowercase (for the player's choice)
function formatInput(text) {
    let length = text.length;
    return text.substr(0, 1).toUpperCase() + text.substr(1, length).toLowerCase();
}

/* 
    Prompts the player for their choice, formats their input and checks if it's valid. If it's valid,
    the player's choice is returned, otherwise it will return that it's invalid
*/
function promptPlayer() {
    let input = formatInput(prompt("Please enter your choice (rock, paper, scissors).", "rock"));

    if ((input === "Rock") || (input === "Paper") || (input === "Scissors")) {
        return input;
    }

    return "Invalid";
}

// Randomly chooses an option for the opponent
function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

// Plays a round of the game and returns the result
function playRound(playerSelection, computerSelection) {
    /* 
        An integer indicating the result of a round (0 = no result, 1 = player wins, 2 = computer 
        wins, 3 = draw)
    */
    let resultFlag = 0; 

    switch(true) {
        // Player wins
        case playerSelection === "Rock" && computerSelection === "Scissors":
        case playerSelection === "Paper" && computerSelection === "Rock":
        case playerSelection === "Scissors" && computerSelection === "Paper":
            console.log(`You win! ${playerSelection} beats Computer's ${computerSelection}!`);
            resultFlag = 1;
            break;
        // Computer wins
        case playerSelection === "Rock" && computerSelection === "Paper":
        case playerSelection === "Paper" && computerSelection === "Scissors":
        case playerSelection === "Scissors" && computerSelection === "Rock":
            console.log(`You lose! Computer used ${computerSelection} that beats ${playerSelection}!`);
            resultFlag = 2;
            break;
        // Result is a draw
        case playerSelection === "Rock" && computerSelection === "Rock":
        case playerSelection === "Paper" && computerSelection === "Paper":
        case playerSelection === "Scissors" && computerSelection === "Scissors":
            console.log(`It's a draw! Both of you used ${computerSelection}!`);
            resultFlag = 3;
            break;
    }

    return resultFlag;
}

/* Test for playRound()
const playerSelection = "scissors";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection)); */

// Plays 5 rounds that form a game
function game() {
    let playerScore = 0;
    let computerScore = 0

    for (let i = 0; i < 5; i++) {
        console.log(`Start of Round ${i + 1}`);
        const computerSelection = getComputerChoice();
        const playerSelection = promptPlayer();

        // If the player's choice input is invalid, ask them to enter a valid value and exit loop
        if (playerSelection === "Invalid") {
            console.log("Invalid choice. Please write either 'rock', 'paper' or 'scissors'.");
            break;
        }

        // Result flag (0 = no result, 1 = player wins, 2 = computer wins, 3 = draw)
        let result = playRound(playerSelection, computerSelection);

        switch (result) {
            // Player wins
            case 1:
                playerScore++;
                break;
            // Computer wins
            case 2:
                computerScore++;
                break;
        }

        console.log(`End of Round ${i + 1}\n`);
        console.log(`Player: ${playerScore} | Computer: ${computerScore}`);
    }

    if (playerScore > computerScore) {
        console.log("You have won the game! Congratulations!");
    }
    else if (computerScore > playerScore) {
        console.log("You have lost the game! Better luck next time!");
    }
    else {
        console.log("The game has ended in a draw!");
    }
}
