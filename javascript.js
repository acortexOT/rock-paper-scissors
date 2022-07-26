let playerWinTotal = 0
let computerWinTotal = 0
let roundCounter = 0
let playerSelection
let computerSelection

function getComputerSelection() {                             //create random number and hold in computerSelection
    randomNumber = Math.floor(Math.random() * 3);
    (randomNumber === 0) ? computerSelection = 'ROCK' :
    (randomNumber === 1) ? computerSelection = 'PAPER': 
    computerSelection = 'SCISSORS'
}

//COMPARE ROUND
function compareRound() {                //compares using IF statement, holds in local variable const result and provides output to console with who won.
    if (playerSelection === computerSelection) {                        //Tie game, you both picked same result and each get a point.
        computerWinTotal += 1;
        playerWinTotal += 1;
    return alert(`Tie game, you both picked ${playerSelection} \r\rThe score is now you: ${playerWinTotal}. Computer: ${computerWinTotal}.`);
    } else if ((playerSelection === 'ROCK' && computerSelection === 'SCISSORS') ||    //player wins
        (playerSelection === 'PAPER' && computerSelection === 'ROCK') ||
        (playerSelection === 'SCISSORS' && computerSelection === 'PAPER')) {
            playerWinTotal += 1; 
    return alert(`You win! \rYour ${playerSelection} beats computer's ${computerSelection}. \r\rThe score is now you: ${playerWinTotal}. Computer: ${computerWinTotal}.`);
    } else if ((computerSelection === 'ROCK' && playerSelection === 'SCISSORS') ||     //computer wins
        (computerSelection === 'PAPER' && playerSelection === 'ROCK') ||
        (computerSelection === 'SCISSORS' && playerSelection === 'PAPER')) {
            computerWinTotal += 1; 
    return alert(`You lose. \rComputer's ${computerSelection} beats your ${playerSelection}. \r\rThe score is now you: ${playerWinTotal}. Computer: ${computerWinTotal}.`);    
        }else {
    return alert(`Oops. Invalid choice. Please select ROCK, PAPER or SCISSORS. \r\rThe score is still you: ${playerWinTotal} computer: ${computerWinTotal}.`)
    } 
}
//PLAY ROUND
function playRound() {
    playerSelection = prompt("Round " + roundCounter + ". \r\rMake your move: ROCK, PAPER or SCISSORS", 'type your move here').toUpperCase();   //change to all uppercase to allow for input to be case insensitive.
    getComputerSelection();
    compareRound();
}

//GAME    
function game() {                                                           //create function game() that runs a for loop
    for (let i = 0; i < 5; ++i) {                                           //for i less than or equal to 5, play round and add i
        ++roundCounter
        playRound();                                                        //run playRound()
    }
    //write game summary in console.
return console.log(`Final score - You: ${playerWinTotal} Computer: ${computerWinTotal}`);
}

 
