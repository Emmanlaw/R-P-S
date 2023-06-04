

function getComputerChoice () {
    let computer = Math.floor((Math.random() * 3) + 1);
    if (computer == 1){
        return "rock";
    } else if (computer ==2) {
        return "paper";
    } else {
        return "scissor";
    }
}
const computerChoose = getComputerChoice();

function playRound (plaSel, comSel) {
    if (plaSel == "rock" && comSel == "scissor") {
        return plaSel +" beats " + comSel +  " " +"Player won";
    } else if (plaSel == "paper" && comSel == "rock") {
        return plaSel +" beats " + comSel +  " " +"Player won";
    } else if (plaSel == "scissor" && comSel == "paper") {
        return plaSel +" beats " + comSel +  " " +"Player won";
    } else if (plaSel == comSel) {
        return plaSel + " " + "VS" + " " + comSel + " " + "Draw";
    } else {
        return comSel +" beats " + plaSel + " " + "Computer won";
    }
}

/*
function game() {
    let computer = getComputerChoice();
    let player = this.textContent.toLowerCase();
    let roundResult = playRound(player,computer);

    let resultDiv = document.createElement("div");
    resultDiv.textContent = `Round  ${roundResult}`
    result.appendChild(resultDiv);
}
let gameOne = game();

function roundCount() {
    let currentRound = gameOne;
    for (let i = 1; i <= 5; i++) {
        return currentRound ++
    }
}

console.log(roundCount());
*/

const divResult = document.querySelector('body');

const result = document.createElement('div');
result.classList.add('result');
divResult.appendChild(result);

const winnerOfRound = document.createElement('div');
winnerOfRound.classList.add('winnerOfRound');
divResult.appendChild(winnerOfRound);

const winner = document.createElement('div');
winner.classList.add('winner');
divResult.appendChild(winner);



const buttons = document.querySelectorAll(".rock, .paper, .scissor");

let round = 0;
let playerScore = 0;
let computerScore = 0;

buttons.forEach((buttons) => {
    buttons.addEventListener("click", () => {
        if (playerScore ===5 ||computerScore===5) {
            return;
        }

        round++;
        let computer = getComputerChoice();
        let player = buttons.textContent.toLowerCase();
        let roundResult = playRound(player,computer);
        console.log(roundResult);

        if (roundResult.includes("Player")) {
            playerScore++
        } else if (roundResult.includes("Computer")) {
                computerScore++
        }

        let resultDiv = document.createElement("div");
        resultDiv.textContent = `Round ${round}: ${roundResult}`
        result.appendChild(resultDiv);

        let winnerRound = document.createElement("div");
        winnerRound.textContent = `Current Score Player ${playerScore}: Computer ${computerScore}`;
        winnerOfRound.innerHTML = "";
        winnerOfRound.appendChild(winnerRound);
        
        if (playerScore === 5) {
            let gameResult = document.createElement('div');
            gameResult.textContent = "Player Won";
            winner.appendChild(gameResult);

            let resetButton = document.createElement('button');
            resetButton.textContent = "Reset Game";
            resetButton.addEventListener('click', () => {
                round = 0;
                playerScore =0;
                computerScore=0;
                result.innerHTML = "";
                winnerOfRound.innerHTML = `Current Score Player ${playerScore}: Computer ${computerScore}`;
                winner.removeChild(gameResult);
                winner.removeChild(resetButton);
            });
            winner.appendChild(resetButton);
        } else if (computerScore === 5) {
            let gameResult = document.createElement('div')
            gameResult.textContent = "Computer Won";
            winner.appendChild(gameResult);
            let resetButton = document.createElement('button');
            resetButton.textContent = "Reset Game";
            resetButton.addEventListener('click', () => {
              round = 0;
              playerScore = 0;
              computerScore = 0;
              result.innerHTML= "";
              winnerOfRound.innerHTML = `Current Score Player ${playerScore}: Computer ${computerScore}`;
              winner.removeChild(gameResult);
              winner.removeChild(resetButton);
            });
            winner.appendChild(resetButton);
          }
    });
});
let winnerRound = document.createElement("div");
winnerRound.textContent = `Current Score Player ${playerScore}: Computer ${computerScore}`;
winnerOfRound.appendChild(winnerRound);




console.log()
