const choices = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;

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
    let outcome = `Player chose ${playerChoice} and computer chose ${computerChoice}. `;

    if (playerChoice == computerChoice) {
        outcome += "It's a tie"
    } else if (playerChoice == 'rock') {
        if (computerChoice == "scissors") {
            outcome += "Player wins!";
            playerScore++;
        } else {
            outcome += "Computer wins...";
            computerScore++
        }
    } else if (playerChoice == 'paper') {
        if (computerChoice == "rock") {
            outcome += "Player wins!";
            playerScore++;
        } else {
            outcome += "Computer wins...";
            computerScore++
        }
    } else if (playerChoice == 'scissors') {
        if (computerChoice == "paper") {
            outcome += "Player wins!";
            playerScore++;
        } else {
            outcome += "Computer wins...";
            computerScore++
        }
    } 
    return outcome
}

function game() {
    for (let i = 0; i < 5; i++) {
        roundResult = playRound(playerPlay(), computerPlay())
        console.log(`Round ${i + 1}`)
        console.log(roundResult)

        console.log(`Player: ${playerScore}`)
        console.log(`Computer: ${computerScore}`)
        console.log("-----------------------------------------")
    }
    if (playerScore == computerScore) {
        console.log("It's a tie! No winners")
    } else if (playerScore > computerScore) {
        console.log("Player wins it all!")
    } else {
        console.log("Computer won it all...")
    }
}

game();
