/*  
    {COMPUTER LOGIC}
    Create a function named getComputerChoice.
    Randomly return one of three values: Rock, Paper, or Scissors
    Create an array of choices: [Rock, Paper, or Scissors]
    Assign a value to each choice to reference, using Math.Random.

    {PLAYER LOGIC}
    Create interface for human player to input their choice.
    Createa function named getHumanChoice
    Utilize the prompt method to get User Input.
    
    {GAME LOGIC}
    Create a way to track score between human and computer.
    Create a win condition that increments a counter linked to the player who made the best choice.
    Compare computer choice and player choice.

    Write logic to play rounds. 
    Compare playerChoice to computerChoice


    Write logic to play the game, the game will consist of 5 rounds.
    Maybe use a loop to iterate through rounds. 
*/

function getComputerChoice(){
    const choices = ["Rock", "Paper", "Scissors"]
    const choiceSelection = Math.floor(Math.random() * choices.length)
    const compChoice = choices[choiceSelection]
    console.log(compChoice)
    return compChoice;
}

function getPlayerChoice(){
    let playerSelection = window.prompt("Select one: Rock, Paper, or Scissors", "") 
    const selectionFirstLetter = playerSelection.charAt(0).toUpperCase();
    const selectionRemainingLetters = playerSelection.substring(1).toLowerCase();
    const playerChoice = `${selectionFirstLetter}${selectionRemainingLetters}`;
    console.log(playerChoice)
    return playerChoice
}

// function playRound(player, computer){
//     let player = ;
//     let computer = getComputerChoice();

//     return player, computer;
// }
let playerScore = 0;
let computerScore = 0;

const playRounds = (p, c) => {
    
    p = getPlayerChoice();
    c = getComputerChoice()

    const rockWin = (p === "Rock" && c === "Scissors");
    const scissorWin = (p === "Scissors" && c === "Paper");
    const paperWin = (p === "Paper" && c === "Rock");

    const rockLoss = (p === "Rock" && c === "Paper");
    const scissorLoss = (p === "Scissors" && c === "Rock");
    const paperLoss = (p === "Paper" && c === "Scissors");

    if (rockWin || scissorWin || paperWin) {
        console.log(`You win! ${p} beats ${c}`)
        playerScore++;
        console.log(`Player: ${playerScore} || Computer: ${computerScore}`)
    }else if (rockLoss || scissorLoss || paperLoss){
        console.log(`You lose! ${c} beats ${p} `)
        computerScore++;
        console.log(`Player: ${playerScore} || Computer: ${computerScore}`)
    } else {
        console.log(`You tied!`)
    }
}

function startGame(){
    for (let i = 1; i < 6; i++) {
        console.log("Round: " + (i))
        playRounds();        
    }
}

const button = document.querySelector("button")
button.addEventListener("click", startGame)





