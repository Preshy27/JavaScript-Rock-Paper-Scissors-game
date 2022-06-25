let options = ["rock", "paper", "scissors"]
let computerScore = parseInt(0)
let playerScore = parseInt(0)

function computerPlay() {
    let i = Math.floor(Math.random() * options.length);
    return options[i]
}


function play(player, computer) {
    if (player === "rock" && computer === "paper") {
        computerScore ++
        return "You lose! Paper beats rock"
    }
    else if (player === "rock" &&  computer === "scissors"){
        playerScore ++
        return "You win! Rock beats scissors"
    }
    else if (player === "paper" &&  computer === "rock"){
        playerScore ++
        return "You win! Paper beats rock"
    }
    else if (player === "paper" &&  computer === "scissors") {
        computerScore ++
        return "You lose! Scissors beats paper"
    }
    else if (player === "scissors" &&  computer === "rock"){
        computerScore ++
        return "You lose! Rock beats scissors"
    }
    else if (player === "scissors" &&  computer === "paper"){
        playerScore ++
        return "You win! Scissors beats paper"
    }
    else {
        return "It's a tie!"
    }
}

function game() {
    for (i = 0; i < 5; i++) {
        let player = prompt("Enter choice: ")
        let computer = computerPlay()
        console.log(play(player, computer))
        console.log("Your score is: " + playerScore)
        console.log("Computer score is: " + computerScore)
    }
}


function final() {
    game()
        if (playerScore > computerScore) {
            return "You won best of 5 match"
        }
        else if (computerScore > playerScore) {
            return "Computer won best of 5 match"
        }
        else {
            return "5 round match ended as a tie"
        }
}

final()