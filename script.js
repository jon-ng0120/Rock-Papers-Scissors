// rock, paper, scissor divs
const roundOutcome = document.querySelector('.round-text');

const playerContainer = document.querySelector('.player-container');
const cpuContainer = document.querySelector('.cpu-container');

const playerOptions = playerContainer.querySelectorAll('.option')
const cpuOptions = cpuContainer.querySelectorAll('.option')


let playerScoreContainer = document.querySelector('.player-score')
let computerScoreContainer = document.querySelector('.cpu-score')

const winnerTextContainer = document.querySelector('.winner-text')
const gameOverOverlay = document.querySelector('.game-over-container')
const playAgainBtn = document.querySelector('.play-again')

// hides game over overlay when game starts
gameOverOverlay.style.display = 'none'; 


playerOptions.forEach(option => {
    option.addEventListener('click', function() {
        clearSelectedOptions();
        this.classList.add('selected')
        playRound(this.getAttribute("data-option"), computerPlay())
    })
})

function computerPlay() {
    cpuChoice = cpuOptions[Math.floor(Math.random() * cpuOptions.length)];
    cpuChoice.classList.add('selected');
    return cpuChoice.getAttribute("data-option");
}

function playRound(playerChoice, computerChoice) {
    if (playerChoice == computerChoice) {
        roundOutcome.innerText = "It's a tie"
    } else if (playerChoice == 'rock') {
        if (computerChoice == "scissors") {
            roundOutcome.innerText = "Player crushes computer's scissors!";
            playerScoreContainer.innerText++
        } else {
            roundOutcome.innerText = "Computer wraps up player's rock...";
            computerScoreContainer.innerText++
        }
    } else if (playerChoice == 'paper') {
        if (computerChoice == "rock") {
            roundOutcome.innerText = "Player wraps up computer's rock!";
            playerScoreContainer.innerText++
        } else {
            roundOutcome.innerText = "Computer cuts up player's paper...";
            computerScoreContainer.innerText++
        }
    } else if (playerChoice == 'scissors') {
        if (computerChoice == "paper") {
            roundOutcome.innerText = "Player cuts up computer's paper!";
            playerScoreContainer.innerText++
        } else {
            roundOutcome.innerText = "Computer crushes player's scissors...";
            computerScoreContainer.innerText++
        }
    } 
    checkWinner()
}


function checkWinner() {
    if (playerScoreContainer.innerText == '5') {
        winnerTextContainer.innerText = "Player Wins!"
        gameOverOverlay.style.display = 'grid'        
    } else if (computerScoreContainer.innerText == '5') {
        winnerTextContainer.innerText = 'Computer wins..'
        gameOverOverlay.style.display = 'grid'     
    }
}

function clearSelectedOptions() {
    const allOptions = [...playerOptions, ...cpuOptions]
        allOptions.forEach(option => {
            option.classList.remove('selected');
        })
}

playAgainBtn.addEventListener('click', function() {
    clearSelectedOptions()
    playerScoreContainer.innerText = '0';
    computerScoreContainer.innerText = '0';
    roundOutcome.innerText = '';
    gameOverOverlay.style.display = 'none';
})


// game();
