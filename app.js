let userScore = 0
let computerScore = 0

const choices = document.querySelectorAll(".choice")
const msg = document.querySelector("#msg")


const userScorePara = document.getElementById("user-score")
const computerScorePara = document.getElementById("computer-score")

const generateComputerChoice = () => {
    const options = ["stone", "paper", "scissors"]
    const randomIndex = Math.floor(Math.random()*3)
    return options[randomIndex]
}


const drawGame = () => {
    //console.log("Game is Draw.")
    msg.innerText = "Game is Draw. Play again."
    msg.style.backgroundColor = "#081b31"
}


const showWinner = (userWin) =>{
    if(userWin){
        //console.log("user Win")
        userScore++
        userScorePara.innerText = userScore
        msg.innerText = "You win!"
        msg.style.backgroundColor = "Green"
    }
    else{
        //console.log("computer Win")
        computerScore++
        computerScorePara.innerText = computerScore
        msg.innerText = "You lose."
        msg.style.backgroundColor = "red"
    }
}


const playGame = (userChoice) => {
    console.log("user choice =", userChoice)

    //Generate Computer Choice
    const computerChoice = generateComputerChoice()
    console.log("computer choice =", computerChoice)

    if(userChoice === computerChoice){
        // Game is Draw.
        drawGame()
    }

    else{
        let userWin = true
        if(userChoice === "stone"){
            // scissors, paper
            userWin = computerChoice === "paper" ? false : true
        }

        else if(userChoice === "paper"){
            // rock, scissors
            userWin = computerChoice === "scissors" ? false : true
        }

        else{
            // rock, paper
            userWin = computerChoice === "stone" ? false : true
        }

        showWinner(userWin)
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id")
        //console.log("choice was clicked", choice, choiceID)
        playGame(userChoice)
    })
})