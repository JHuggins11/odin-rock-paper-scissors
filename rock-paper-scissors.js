// Randomly chooses an option for the opponent
function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

// Plays a round of the game
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
            resultFlag = 1;
            break;
        // Computer wins
        case playerSelection === "Rock" && computerSelection === "Paper":
        case playerSelection === "Paper" && computerSelection === "Scissors":
        case playerSelection === "Scissors" && computerSelection === "Rock":
            resultFlag = 2;
            break;
        // Result is a draw
        case playerSelection === "Rock" && computerSelection === "Rock":
        case playerSelection === "Paper" && computerSelection === "Paper":
        case playerSelection === "Scissors" && computerSelection === "Scissors":
            resultFlag = 3;
            break;
    }

    return resultFlag;
}

const container = document.querySelector("#container");
const gameInfo = document.querySelector("#game-info");
const buttons = document.querySelectorAll(".game-button");
const resultsSection = document.querySelector("#results");
let playerScore = 0;
let computerScore = 0;

const result = document.createElement("p");
resultsSection.appendChild(result);

const playerScoreText = document.createElement("p");
playerScoreText.textContent = `Player: ${playerScore}`;
resultsSection.appendChild(playerScoreText);

const computerScoreText = document.createElement("p");
computerScoreText.textContent = `Computer: ${computerScore}`;
resultsSection.appendChild(computerScoreText);

buttons.forEach((selectedButton) => {
    selectedButton.addEventListener("click", () => {
        let playerSelection = selectedButton.textContent;
        let computerSelection = getComputerChoice();
        let roundResult = playRound(playerSelection, computerSelection);

        switch (roundResult) {
            case 1: // Player wins round
                result.textContent = `You win! ${playerSelection} beats Computer's ${computerSelection}!`;
                playerScore++;
                break;
            case 2: // Player loses round
                result.textContent = `You lose! Computer used ${computerSelection} that beats ${playerSelection}!`;
                computerScore++;
                break;
            case 3: // Round ends in a draw
                result.textContent = `It's a draw! Both of you used ${computerSelection}!`;
                break;
        }
    });
});

if (playerScore === 5 && computerScore < 5) {
    result.textContent = "You have won the game! Congratulations!";
}
else if (computerScore === 5 && playerScore < 5) {
    result.textContent = "You have lost the game! Better luck next time!";
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
