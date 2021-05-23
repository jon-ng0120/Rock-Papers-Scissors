// rock, paper, scissor divs
const roundOutcome = document.querySelector('.round-container');

const playerContainer = document.querySelector('.player-container');
const cpuContainer = document.querySelector('.cpu-container');

const playerOptions = playerContainer.querySelectorAll('.option')
const cpuOptions = cpuContainer.querySelectorAll('.option')


let playerScoreContainer = document.querySelector('.player-score')
let computerScoreContainer = document.querySelector('.cpu-score')

playerOptions.forEach(option => {
    option.addEventListener('click', function() {
        playRound(this.getAttribute("data-option"), computerPlay())
    })
})

function computerPlay() {
    cpuChoice = cpuOptions[Math.floor(Math.random() * cpuOptions.length)];
    return cpuChoice.getAttribute("data-option");
}

function playRound(playerChoice, computerChoice) {
    console.log(playerChoice)
    console.log(computerChoice)
    if (playerChoice == computerChoice) {
        roundOutcome.innerText = "It's a tie"
    } else if (playerChoice == 'rock') {
        if (computerChoice == "scissors") {
            roundOutcome.innerText = "Player wins!";
            playerScoreContainer.innerText++
        } else {
            roundOutcome.innerText = "Computer wins...";
            computerScoreContainer.innerText++
        }
    } else if (playerChoice == 'paper') {
        if (computerChoice == "rock") {
            roundOutcome.innerText= "Player wins!";
            playerScoreContainer.innerText++
        } else {
            roundOutcome.innerText = "Computer wins...";
            computerScoreContainer.innerText++
        }
    } else if (playerChoice == 'scissors') {
        if (computerChoice == "paper") {
            roundOutcome.innerText = "Player wins!";
            playerScoreContainer.innerText++
        } else {
            roundOutcome.innerText = "Computer wins...";
            computerScoreContainer.innerText++
        }
    } 
    //return outcome
}


function checkWinner() {

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

// game();
