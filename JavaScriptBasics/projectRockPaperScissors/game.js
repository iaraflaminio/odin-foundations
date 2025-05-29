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