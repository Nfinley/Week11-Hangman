// Author: Nigel Finley
// main.js will contain the logic of your app. Running it in Terminal/Bash will start the game.
// The app should end when a player guesses the correct word or runs out of guesses.

// Figure out what the interface would look like and how the user interacts with it
// Might need to use inquirer. 

// Pseudo Code
// https://github.com/evanbates/hangman/blob/master/instrux.txt

/* First: Create the list of words in game.js that is a module 
and that can be exported and called in this file. Create a 
function within this that can export the selected word. This
will have a random generator as apart of the function

Second: 

*/

// This file create the random word
var game = require('./game.js');
// This file stores the
var word = require('./word.js');
var letter = require('./letter.js');

// node modules
var inquirer = require('inquirer');
var colors = require('colors');

var border = "";
var blanks = "";
var userGuess;
var guessesLeft = 8;


function printInfo() {
    game.blanksArray.forEach(function(blank, index) {
        border += "***".green;
        blanks += " _ ".magenta;
    });
    console.log("******************".green + border + "\n");

    console.log("You current word: ".red + blanks + "\n");

    console.log("******************".green + border + "\n");
    console.log("Letters guessed: \n");
    console.log("Guesses remaining: " + guessesLeft + "\n");





}

// ======= LOAD GAME ======
console.log("Welcome to terminal hangman! \nToday's catagory is" + " musical theory\n".bold.rainbow);
printInfo();
console.log(game.currentWordArray);

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
        	// check the guess against the current word array
        	game.currentWordArray.forEach(function(letter, i, array){
        		console.log(letter, i);
        		
        		// var index = array.indexOf(userGuess);
        		if(userGuess === letter){
        			game.blanksArray.splice(i, 1, letter);
        			console.log("Found letter ", letter);
        			console.log("index: " + i);

        		}
        		
        	});
        	console.log("blanks" + game.blanksArray);

        	// printInfo();
         //    guess();
         //    guessesLeft = guessesLeft -=1 ; 
        	


        } else {
        	// console.log("else statment");
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
                    console.clear();
                    console.log("Thank you for playing. Good Bye!");
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

module.exports = { userGuess: userGuess };
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
