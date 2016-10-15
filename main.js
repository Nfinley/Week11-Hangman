// Author: Nigel Finley
// main.js will contain the logic of your app. Running it in Terminal/Bash will start the game.
// The app should end when a player guesses the correct word or runs out of guesses.

// TO DO : 
// right now it can only go two rounds because the letter held within the array doesn't change (the index)
// It is not switching the word that the splice function references

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
// var WORDARRAY = ["triad", "test"];

// setting variable game to a new instace of Game and passing the entire array as a parameter
var game = new Game(WORDARRAY);

// setting variable generatedWord  to function that calls the ramdon word
var generatedWord = game.pickRandomWord();

// setting variable word to a new instance of Word and passing the generated word into it 
var word = new Word(generatedWord);

// setting the variable index to the index of the generated word
var index = WORDARRAY.indexOf(generatedWord);

// ====== INITIAL FUNCTIONS ======
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
console.log(generatedWord);

// Start the game using inquirer
function guess() {

    // Prompt the user to enter a letter
    inquirer.prompt([{
        name: "guess",
        message: "Guess a letter",
        type: "input"
    }]).then(function(answers) {
        userGuess = answers.guess;
        if (guessesLeft > 1) {
            // calls the playerGuess function and shows the letter if correctly guessed
            word.playerGuess(userGuess);

            // checks to see if the letter guess is already in the lettersGuessed array if not push it to the array
            if (lettersGuessed.indexOf(userGuess) === -1) {
                lettersGuessed.push(userGuess);
                guessesLeft -= 1;
            }

            // Re-prints the word in the new state
            printInfo();


            // Calls the roundFinished function if the entire word is guessed
            if (word.roundFinished()) {

                // setting the variable index to the index of the generated word
                // index = WORDARRAY.indexOf(generatedWord);
                console.log("current word: " + generatedWord);
                    // If the index is not out of bounds (-1) then take the word out of the word array
                if (index != -1) {
                    WORDARRAY.splice(index, 1);
                    console.log("Word index #: " + index);
                    console.log("WORDARRAY in splice: " + WORDARRAY);
                } if (WORDARRAY.length === 0){
                    console.log("Word index #: " + index);

                    console.log("\nCongrats you guessed all of the words, GAME OVER!\n".rainbow);
                    return;
                }
                wins += 1;
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
                        // NEED TO recall  the new word generator and their functions
                        index = "";
                        game = new Game(WORDARRAY);
                        generatedWord = game.pickRandomWord();
                        word = new Word(generatedWord);
                        index = WORDARRAY.indexOf(generatedWord);
                        lettersGuessed =[];
                        guessesLeft = 8; // re-initialize the guesses left 
                		console.log("NEW current word: " + generatedWord);

                        printInfo();
                        

                        guess();
                    } else {

                        console.log("Thank you for playing. Good Bye!".magenta);
                    }
                });
                return;

            }

            guess();
            // If guesses left equals to zero it goes to this else statement to ask if user wants to play again
        } else {
            // console.log("else statment");
            losses += 1;
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
                    // NEED TO recall  the new word generator and their functions
	                console.log("WORDARRAY in no answer left: " + WORDARRAY);
                    index = "";      
                    game = new Game(WORDARRAY);
                    generatedWord = game.pickRandomWord();
                    word = new Word(generatedWord);
                    index = WORDARRAY.indexOf(generatedWord);
                    lettersGuessed =[];
                    guessesLeft = 8; // re-initialize the guesses left 
                	console.log("NEW current word: " + generatedWord);

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
