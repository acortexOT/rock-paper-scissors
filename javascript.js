let playerWinTotal = 0
let computerWinTotal = 0
let roundCounter = 0
let playerSelection
let computerSelection
const container = document.querySelector('#container');
console.log(container);
const playerDiv = document.querySelector('.playerscore');
playerDiv.textContent = playerWinTotal;

const computerDiv = document.querySelector('.computerscore');
computerDiv.textContent = computerWinTotal;

const results = document.querySelector('.results');

const button = document.querySelectorAll('button');
button.forEach(btn => btn.addEventListener('click', getPlayerSelection));
//PLAYER SELECTION

function getPlayerSelection(e) {
    playerSelection = e.target.attributes.id.value;
    game();
}
//create random number and hold in computerSelection
function getComputerSelection() {                             
    randomNumber = Math.floor(Math.random() * 3);
    (randomNumber === 0) ? computerSelection = 'ROCK' :
    (randomNumber === 1) ? computerSelection = 'PAPER': 
    computerSelection = 'SCISSORS'
}
//RESET VALUES
function resetValues() {
roundCounter = 0;
playerWinTotal = 0;
computerWinTotal = 0;
}
//COMPARE ROUND
function compareRound() {                //compares using IF statement, holds in local variable const result and provides output to console with who won.
    if (playerSelection === computerSelection) {                        //Tie game, you both picked same result and no points.
        return results.textContent = `Tie game, you both picked ${playerSelection} \r\rThe score is now you: ${playerWinTotal}. Computer: ${computerWinTotal}.`;
    } else if ((playerSelection === 'ROCK' && computerSelection === 'SCISSORS') ||    //player wins
        (playerSelection === 'PAPER' && computerSelection === 'ROCK') ||
        (playerSelection === 'SCISSORS' && computerSelection === 'PAPER')) {
            playerWinTotal += 1; 
        return results.textContent = `You win! \rYour ${playerSelection} beats computer's ${computerSelection}. \r\rThe score is now you: ${playerWinTotal}. Computer: ${computerWinTotal}.`;
    } else if ((computerSelection === 'ROCK' && playerSelection === 'SCISSORS') ||     //computer wins
        (computerSelection === 'PAPER' && playerSelection === 'ROCK') ||
        (computerSelection === 'SCISSORS' && playerSelection === 'PAPER')) {
            computerWinTotal += 1; 
        return results.textContent = `You lose. \rComputer's ${computerSelection} beats your ${playerSelection}. \r\rThe score is now you: ${playerWinTotal}. Computer: ${computerWinTotal}.`;    
    }else {
        return results.textContent = `Oops. Something went wrong. Please select ROCK, PAPER or SCISSORS. \r\rThe score is still you: ${playerWinTotal} computer: ${computerWinTotal}.`;
    }
} 
//GAME    
function game() {                                                           //create function game() that runs a for loop
        if (playerWinTotal === 5 || computerWinTotal === 5) {resetValues();};
        getComputerSelection();
        compareRound();                                                     
    //write game summary in console.
return results.textContent = `Final score - You: ${playerWinTotal} Computer: ${computerWinTotal}`;
}
 
