let playerWinTotal = 0
let computerWinTotal = 0
let roundCounter = 0
let playerSelection
let computerSelection
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

//SHOW IMAGES OF SELECTIONS
function showSelectionImages(){
    const playerimg = document.querySelector('.playerimg');
    const pImgSelected = document.createElement('img');
    pImgSelected.src = `images/${playerSelection}.png`;
    if (playerimg.firstChild) {//remove old pick from DOM
        playerimg.removeChild(playerimg.firstChild); 
    }       
    playerimg.appendChild(pImgSelected);
    const computerimg = document.querySelector('.computerimg');
    const cImgSelected = document.createElement('img');
    cImgSelected.src = `images/${computerSelection}.png`;
    if (computerimg.firstChild) {
        computerimg.removeChild(computerimg.firstChild);    //remove old pick from DOM
    }
    computerimg.appendChild(cImgSelected); 
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
        return results.textContent = `Tie game, you both picked ${playerSelection}.`;
    } else if ((playerSelection === 'ROCK' && computerSelection === 'SCISSORS') ||    //player wins
        (playerSelection === 'PAPER' && computerSelection === 'ROCK') ||
        (playerSelection === 'SCISSORS' && computerSelection === 'PAPER')) {
            playerWinTotal += 1; 
        return results.textContent = `You win! \rYour ${playerSelection} beats computer's ${computerSelection}.`;
    } else if ((computerSelection === 'ROCK' && playerSelection === 'SCISSORS') ||     //computer wins
        (computerSelection === 'PAPER' && playerSelection === 'ROCK') ||
        (computerSelection === 'SCISSORS' && playerSelection === 'PAPER')) {
            computerWinTotal += 1; 
        return results.textContent = `You lose. \rComputer's ${computerSelection} beats your ${playerSelection}.`;    
    }else {
        return results.textContent = `Oops. Something went wrong. Please select ROCK, PAPER or SCISSORS.`;
    } 
} 
//GAME    
function game() {                                                           //create function game() that runs a for loop
    getComputerSelection();
    showSelectionImages();
    compareRound();
    playerDiv.textContent = playerWinTotal;
    computerDiv.textContent = computerWinTotal;   
    setTransitionImage();                                                  
    if (playerWinTotal === 5 || computerWinTotal === 5) {
        results.textContent +=`Final score - You: ${playerWinTotal} Computer: ${computerWinTotal}`;
        resetValues();
        setNewGameImage();
    };
}

//DOM Manipulation
const container = document.querySelector('#container');
const playerDiv = document.querySelector('.playerscore');
playerDiv.textContent = playerWinTotal;

const computerDiv = document.querySelector('.computerscore');
computerDiv.textContent = computerWinTotal;

const results = document.querySelector('.results');

const button = document.querySelectorAll('button');
button.forEach(btn => btn.addEventListener('click', getPlayerSelection));

setNewGameImage(); //places opening image under header

function setNewGameImage() {
    const transitionDiv = document.querySelector('.transition');
    const newGame = document.createElement('img');
    newGame.id = '#newGame';
    newGame.src = 'images/newGame.png';
    if (transitionDiv.firstChild) { //removes previous image if not first game
        transitionDiv.removeChild(transitionDiv.firstChild);
    }
    transitionDiv.appendChild(newGame); 
}

function setTransitionImage() {
    const transitionDiv = document.querySelector('.transition');
    transitionDiv.removeChild(transitionDiv.firstChild);
    const vsImage = document.createElement('img');
    vsImage.id = '#vs';
    vsImage.src = 'images/vs.jpg';
    transitionDiv.appendChild(vsImage);
} 
 