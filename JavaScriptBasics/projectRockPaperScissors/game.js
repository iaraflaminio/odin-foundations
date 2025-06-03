function getComputerChoice() {
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

function playGame() {
    let humanScore = 0
    let computerScore = 0

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            return `It's a tie! Both chose ${humanChoice}`
        } else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            humanScore++
            return `You win! ${humanChoice} beats ${computerChoice}`
        } else {
            computerScore++
            return `You lose! ${computerChoice} beats ${humanChoice}`
        }
    }

    for (let i = 0; i < 5; i++) {
        console.log(`Round ${i}:`)
        const humanSelection = getHumanChoice()
        const computerSelection = getComputerChoice()
        const result = playRound(humanSelection, computerSelection)
        console.log(result)
        console.log(`Score: You ${humanScore} - Computer ${computerScore}`)
    }

    if (humanScore > computerScore) {
        console.log("🎉 Congratulations, Human, you won the game!")
    } else if (computerScore > humanScore) {
        console.log("💻 The computer won the game!")
    } else {
        console.log("🤝 The game ended in a tie!")
    }
}

playGame()
