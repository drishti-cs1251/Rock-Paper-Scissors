let humanScore = 0;
let computerScore = 0;
let roundsPlayed = 0;

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(humanChoice) {
    if (roundsPlayed >= 5) {
        return;
    }

    const computerChoice = getComputerChoice();
    let resultText = "";

    if (humanChoice === computerChoice) {
        resultText = `It's a tie! You both chose ${humanChoice}.`;
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        resultText = `🎉 You win! ${humanChoice} beats ${computerChoice}.`;
    } else {
        computerScore++;
        resultText = `💻 You lose! ${computerChoice} beats ${humanChoice}.`;
    }

    roundsPlayed++;
    updateUI(resultText);
}

function updateUI(resultText) {
    document.querySelector(".result").textContent = resultText;
    document.querySelector(".scoreboard").textContent = `Human: ${humanScore} | Computer: ${computerScore}`;

    if (roundsPlayed >= 5) {
        setTimeout(() => {
            let finalMessage = "";
            if (humanScore > computerScore) {
                finalMessage = "🎉 Congratulations! You won the game!";
            } else if (humanScore < computerScore) {
                finalMessage = "💻 Computer wins! Better luck next time.";
            } else {
                finalMessage = "🤝 It's a tie game!";
            }
            alert(finalMessage);
            resetGame();
        }, 500);
    }
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    roundsPlayed = 0;
    document.querySelector(".result").textContent = "Choose an option to start!";
    document.querySelector(".scoreboard").textContent = "Human: 0 | Computer: 0";
}
