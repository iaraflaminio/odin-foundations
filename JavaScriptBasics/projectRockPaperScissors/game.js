let humanScore = 0
let computerScore = 0

function getComputerChoice(){
    const choices = Math.floor(Math.random() * 3)
    if (choices === 0) {
        return "rock"
    } else if (choices === 1) {
        return "paper"
    } else {
        return "scissors"
    }
}

function getHumanChoice() {
    const userChoice = prompt("Choose rock, paper, or scissors:");
    return userChoice.toLowerCase()
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("It's a tie!")
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++
        console.log(`You win! ${humanChoice} beats ${computerChoice}`)
    } else {
        computerScore++
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
    }
}

const humanSelection = getHumanChoice()
const computerSelection = getComputerChoice()