// Author: Nigel Finley
// main.js will contain the logic of your app. Running it in Terminal/Bash will start the game.
// The app should end when a player guesses the correct word or runs out of guesses.

// TO DO : 
// -Remove word from the array
// -create a new Word constructor
// 

// This file create the random word
var Game = require('./game.js');
// This file stores the
var Word = require('./word.js');
var Letter = require('./letter.js');

// node modules
var inquirer = require('inquirer');
var colors = require('colors');

var border = "";
var blanks = "";
var userGuess;
var guessesLeft = 8;
var lettersGuessed = [];
var wins = 0;
var losses = 0;

var WORDARRAY = ["harmony", "melody", "chord", "third", "fifth", "triad"];


var game = new Game(WORDARRAY);

var generatedWord = game.pickRandomWord();
// console.log("main: " + generatedWord);
var word = new Word(generatedWord);


function printInfo() {
    //     game.blanksArray.forEach(function(blank, index) {
    //         border += "***".green;
    //         blanks += " _ ".magenta;
    //     });
    console.log("\n**********************************************".green + border + "\n");

    console.log("You current word: ".red + word.displayWord().magenta + "\n");

    console.log("**********************************************".green + border + "\n");
    console.log("Guesses remaining: " + guessesLeft + " | " + "Letters Guessed: " + lettersGuessed.join(" ").rainbow + "\n");
    console.log("Wins: ".green + wins + " | " + "Losses: ".yellow + losses + "\n");


}

// ======= LOAD GAME ======
console.log("\nWelcome to terminal hangman!".bold.red + "\nToday's catagory is " + "musical theory".rainbow + "\n");
printInfo();


// Start the game using inquirer
function guess() {
    // if (game.WORDARRAY.length>0){
    inquirer.prompt([{
        name: "guess",
        message: "Guess a letter",
        type: "input"
    }]).then(function(answers) {
        userGuess = answers.guess;
        if (guessesLeft > 0) {
            // calls the playerGuess function and shows the word guessed
            word.playerGuess(userGuess);

            // checks to see if the 
            if (lettersGuessed.indexOf(userGuess) === -1) {
                lettersGuessed.push(userGuess);
                guessesLeft -= 1;
            }

            printInfo();

           

            if (word.roundFinished()) {
                // console.log("YOU GUESSED THE WORD!");
                var index  = WORDARRAY.indexOf(generatedWord);
                if(index !=-1){
                	WORDARRAY.splice(index, 1);
                	console.log("WORDARRAY: " + WORDARRAY);
                }
                if (WORDARRAY.length = 0){
                	console.log("GAME OVER!");
                } else {
                	// generate new word
                }
                wins += 1;
                // return true;
                inquirer.prompt([{
                    name: "replay",
                    message: "Nice work! You guessed the word, play again (Y/N)",
                    type: "input",
                    validate: function(input) {
                        if (input === 'Y' || input === 'y' || input === 'n' || input === 'N') {
                            return true;
                        } else {
                            return false;
                        }
                    }
                }]).then(function(answers) {
                    if (answers.replay === 'Y' || answers.replay === 'y') {
                        printInfo();
                        guess();
                    } else {

                        console.log("Thank you for playing. Good Bye!".magenta);
                    }
                });
                return;

            }

            guess();

            // console.log("Result of finsihed: " + word.roundFinished().string());






        } else {
            // console.log("else statment");
            losses -= 1;
            inquirer.prompt([{
                name: "playagain",
                message: "You have no more guesses, play again (Y/N)",
                type: "input",
                validate: function(input) {
                    if (input === 'Y' || input === 'y' || input === 'n' || input === 'N') {
                        return true;
                    } else {
                        return false;
                    }
                }
            }]).then(function(answers) {
                if (answers.playagain === 'Y' || answers.playagain === 'y') {
                    printInfo();
                    guess();
                } else {

                    console.log("Thank you for playing. Good Bye!".magenta);
                }
            });

        }
        // if(typeof answers.guess !== 'number'){
        // 	// Run all of the functions to check
        // 	// Create if statement for CORRECT GUESS
        // 	 	// subset if for Win if(correctWord !== userWord)

        // 	// Create if statement for incorrect guess


        // 	console.log(answers.guess);
        // 	console.log(game.currentWordArray);
        // 	// console.log(game.WORDARRAY);


        // 	// console.clear();

        // } else {
        // 	console.log("You cannot guess a number please guess a letter");

        // }

        // guess();

    });
    // } else {
    // 	// Print the win message house in word
    // 	printWin();
    // }
}
guess();


// Call the generate word function
// Display the number of blanks of the word pulled from th letter.js file
// Display prompt from letter file that says "Enter a letter " + "You have X guesses left" 

// 

// Game play
// User enters letter and check to see if matched to word
// If yes replace the dash with the word decrement guess
// If no add the letter the the letters guessed: (this will be added after the first guess) and decrement guess
// If user runs out of guesses it gives user a message saying game over, play again?
// If user guesses word correctly it displays a message sayin you won, play again?
