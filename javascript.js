//create variable let playerWinTotal = 0
//create variable let computerWinTotal = 0

//PLAY ROUND
//create function playRound()
    //create variable const computerSelection to hold random computer choice
    //create variable const playerSelection to hold players selection from prompt

    //create function getComputerChoice() that randomly selects between 0 and 2
        //function getComputerChoice() uses number selection to pick between rock, paper or scissors
        //function getComputerChoice() puts random selection into variable computerSelection

    //create function getPlayerChoice() that takes user input [choice between rock paper or scissors], converts toUpperCase, returns it to playerSelection

    //function compareRound() compares using IF statement, holds in local variable const result and provides output to console with who won.
        //playerSelection === computer Selection
            //Tie game, you both picked result
            //computerWinTotal += 1
            //playerWinTotal += 1
            //The score is now you: playerWinTotal computer: computerWinTotal
        //playerSelection === 'ROCK' && computerSelection === 'SCISSORS'
        //playerSelection === 'PAPER' && computerSelection === 'ROCK'
        //playerSelection === 'SCISSORS' && computerSelection === 'PAPER'
            //You win! playerSelection beats computerSelection!
            //playerWinTotal += 1
            //The score is now you: playerWinTotal computer: computerWinTotal
        //computerSelection === 'ROCK' && playerSelection === 'SCISSORS'
        //computerSelection === 'PAPER' && playerSelection === 'ROCK'
        //computerSelection === 'SCISSORS' && playerSelection === 'PAPER'
            //You lose. computerSelection beats playerSelection!
            //computerWinTotal += 1
            //The score is now you: playerWinTotal computer: computerWinTotal
        //default: Oops. Invalid choice. Please select ROCK, PAPER or SCISSORS. The score is still you: playerWinTotal computer: computerWinTotal

//GAME
//create function game() that runs a for loop
    //for i less than or equal to 5, play round and add i
    //run playRound()
//write game summary in console. 
