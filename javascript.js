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

function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  const choiceSelection = Math.floor(Math.random() * choices.length);
  const compChoice = choices[choiceSelection];
//   console.log(compChoice);
  return compChoice;
}

const rock = document.getElementById("rockBtn");
const paper = document.getElementById("paperBtn");
const scissors = document.getElementById("scissorsBtn");

const playerScoreText = document.getElementById("player-score");
const computerScoreText = document.getElementById("computer-score");

const endingMessage = document.getElementById("ending-message");
const endingScreen = document.querySelector(".ending-screen")
endingScreen.style.display = "none";

// function playRound(player, computer){
//     let player = ;
//     let computer = getComputerChoice();

//     return player, computer;
// }
let playerScore = 0;
let computerScore = 0;
let round = 0;

function playRounds(p, c)  {
    console.log(p)
    console.log(c)
  const message = document.querySelector(".message");
  const rockWin = p === "Rock" && c === "Scissors";
  const scissorWin = p === "Scissors" && c === "Paper";
  const paperWin = p === "Paper" && c === "Rock";

  const rockLoss = p === "Rock" && c === "Paper";
  const scissorLoss = p === "Scissors" && c === "Rock";
  const paperLoss = p === "Paper" && c === "Scissors";



  if (rockWin || scissorWin || paperWin) {
    message.textContent = `You win! ${p} beats ${c}`;
    playerScore++;
    playerScoreText.textContent = playerScore.toString();
    console.log(`Player: ${playerScore} || Computer: ${computerScore}`);
  } else if (rockLoss || scissorLoss || paperLoss) {
    message.textContent = `You lose! ${c} beats ${p}`;
    computerScore++;
    computerScoreText.textContent = computerScore.toString();
    console.log(`Player: ${playerScore} || Computer: ${computerScore}`);
  } else {
    message.textContent = "You tied!";
    console.log(`You tied!`);
  }
//   console.log(round);

  round++;
    const playerWin = playerScore === 3;
  const computerWin = computerScore === 3;

  if (playerWin){
    endingMessage.textContent = "Congratulations you win!"
    gameOver();
    return;
  } else if(computerWin){
    endingMessage.textContent = "Computer wins! Better luck next time.";
    gameOver();
    return;
  } else if (round === 5){
    if (playerScore > computerScore){
        endingMessage.textContent = `You win ${playerScore}-${computerScore}`
        gameOver()
    }else if (computerScore > playerScore) {
        endingMessage.textContent =  `You lose ${playerScore}-${computerScore}`
        gameOver();
    } else {
        endingMessage.textContent = "Draw!"
        gameOver();
    }
  }
};

const resetButton = document.getElementById("reset-button")


function refresh(){
    location.reload()
}

function gameOver(){
    endingScreen.style.display = "flex";

    rock.style.display = 'none';
    paper.style.display = 'none';
    scissors.style.display = 'none';

    resetButton.style.display = 'block';
    resetButton.addEventListener("click", refresh)
    
}

// function startGame() {
//   for (let i = 1; i < 6; i++) {
//     console.log("Round: " + i);
//     playRounds();
//   }
// }

// const buttonContainer = document.getElementById("button-container")

// buttonContainer.addEventListener("click", function(e) {
//     if (e.target.matches('button')) {
//         if (e.target.textContent === 'Rock') {
//             console.log("Rock")
//         }
//     }
// });

rock.addEventListener("click", function(){
    playRounds("Rock", getComputerChoice())
});

paper.addEventListener("click", function(){
    playRounds("Paper", getComputerChoice());
});

scissors.addEventListener("click", function(){
    playRounds("Scissors", getComputerChoice());
});


// const button = document.querySelector("button");
// button.addEventListener("click", startGame);
