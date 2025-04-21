
// Player Buttons
const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
const playerButtons = document.querySelectorAll('.player-option__buttons')

// Score Board
const playerScoreDisplay = document.querySelector('#player-score');
let playerScore = 0;
const computerScoreDisplay = document.querySelector('#computer-score');
let computerScore = 0;



// Images and Labels
const playerImage = document.querySelector('#player-image');
const computerImage = document.querySelector('#computer-image')

const playerImageLabel = document.querySelector('#player-image-label');
const computerImageLabel = document.querySelector('#computer-image-label');

// Game board message
const message = document.querySelector('.game-board__update')


// Options
const choices = ['ROCK', 'PAPER', 'SCISSORS'];
const emojis = ["✊", "✋", "✌️"];


// Event listeners for player choices
rockBtn.addEventListener('click', () => playRound("ROCK"));
paperBtn.addEventListener('click', () => playRound("PAPER"));
scissorsBtn.addEventListener('click', () => playRound("SCISSORS"));

const playRound = (playerChoice) => {
    // Set Player's choice in UI
    let playerIndex = choices.indexOf(playerChoice);
    playerImageLabel.innerHTML = playerChoice;
    playerImage.innerHTML = emojis[playerIndex];

    // Generate random choice for Computer
    let computerIndex = Math.floor(Math.random() * 3);
    let computerChoice = choices[computerIndex];

    // Set Computer's choice in UI
    computerImageLabel.innerHTML = computerChoice;
    computerImage.innerHTML = emojis[computerIndex];

    // Determine the winner
    let result = determineWinner(playerChoice, computerChoice);

    // Update the message
    message.innerHTML = result;

    // Update Scoreboard
    updateScore(result);
};

const determineWinner = (player, computer) => {
    if (player === computer) {
        return "It's a Tie!";
    }
    if (
        (player === "ROCK" && computer === "SCISSORS") ||
        (player === "PAPER" && computer === "ROCK") ||
        (player === "SCISSORS" && computer === "PAPER")
    ) {
        return "You Win! 🎉";
    } else {
        return "Computer Wins! 🤖";
    }
};

const updateScore = (result) => {
    if (result === "You Win! 🎉") {
        playerScore++;
        playerScoreDisplay.innerHTML = playerScore;
    } else if (result === "Computer Wins! 🤖") {
        computerScore++;
        computerScoreDisplay.innerHTML = computerScore;
    }
};