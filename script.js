const choices = ['rock', 'paper', 'scissors'];

function computerPlay() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function playerPlay() {
    let playerOption = prompt("Please choose rock, paper, or scissors").toLowerCase()
    while (!choices.includes(playerOption)) {
        playerOption = prompt("Please choose rock, paper, or scissors")
    }
    return playerOption
}

function playRound(playerChoice, computerChoice) {
    let outcome = undefined;
    if (playerChoice == computerChoice) {
        outcome = "It's a tie"
    } else if (playerChoice == 'rock') {
        outcome = computerChoice == "scissors" ? "Player wins!" : "Computer wins..."
    } else if (playerChoice == 'paper') {
        outcome = computerChoice == "rock" ? "Player wins!" : "Computer wins..."
    } else if (playerChoice == 'scissors') {
        outcome = computerChoice == "paper" ? "Player wins!" : "Computer wins..."
    } 
    return outcome
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        console.log(playRound(playerPlay(), computerPlay()))
    }
}

game();
