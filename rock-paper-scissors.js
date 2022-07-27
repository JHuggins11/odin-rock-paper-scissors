// Randomly chooses an option for the opponent
function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

// Plays a round of the game
function playRound(playerSelection, computerSelection) {
    switch(true) {
        // Player wins
        case playerSelection === "Rock" && computerSelection === "Scissors":
        case playerSelection === "Paper" && computerSelection === "Rock":
        case playerSelection === "Scissors" && computerSelection === "Paper":
            result.textContent = `You win! ${playerSelection} beats Computer's ${computerSelection}!`;
            playerScore++;
            break;
        // Computer wins
        case playerSelection === "Rock" && computerSelection === "Paper":
        case playerSelection === "Paper" && computerSelection === "Scissors":
        case playerSelection === "Scissors" && computerSelection === "Rock":
            result.textContent = `You lose! Computer used ${computerSelection} that beats ${playerSelection}!`;
            computerScore++;
            break;
        // Result is a draw
        case playerSelection === "Rock" && computerSelection === "Rock":
        case playerSelection === "Paper" && computerSelection === "Paper":
        case playerSelection === "Scissors" && computerSelection === "Scissors":
            result.textContent = `It's a draw! Both of you used ${computerSelection}!`;
            break;
    }

    return;
}

const container = document.querySelector("#container");
const gameInfo = document.querySelector("#game-info");
const buttons = document.querySelectorAll("buttons");
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

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", playRound(buttons[i].value, getComputerChoice()));
}

if (playerScore === 5 && computerScore < 5) {
    result.textContent = "You have won the game! Congratulations!";
}
else if (computerScore === 5 && playerScore < 5) {
    result.textContent = "You have lost the game! Better luck next time!";
}

/* buttons.forEach(function (selectedButton) {
    selectedButton.addEventListener("click", () => {
        let roundResult = playRound(selectedButton.value, getComputerChoice());

        switch (roundResult) {
            case 1: // Player wins round
                result.textContent = `You win! ${playerSelection} beats Computer's ${computerSelection}!`;
                playerScore++;
                break;
            case 2: // Player loses round
                result.textContent = `You lose! Computer used ${computerSelection} that beats ${playerSelection}!`;
                computerScore++;
                break;
            case 3: // Draw
                result.textContent = `It's a draw! Both of you used ${computerSelection}!`;
                break;
        }
    });
}); */

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
