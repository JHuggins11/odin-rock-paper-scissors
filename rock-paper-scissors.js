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

/* let playerScore = 0;
let computerScore = 0;
console.log(`Start of Round ${i + 1}`);
console.log(`End of Round ${i + 1}\n`);
console.log(`Player: ${playerScore} | Computer: ${computerScore}`); */

/* if (playerScore > computerScore) {
    console.log("You have won the game! Congratulations!");
}
else if (computerScore > playerScore) {
    console.log("You have lost the game! Better luck next time!");
}
else if (playerScore === computerScore) {
    console.log("The game has ended in a draw!");
} */
