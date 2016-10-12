// letter.js is a constructor file
// letter.js should control whether or not a letter appears 
// as a "_" or as itself on-screen

// this will display the blank letters in the console

var game = require('./game.js');



function Letters(letterGuessed, correctGuess){
	this.letterGuessed = letterGuessed;
	this.correctGuess = correctGuess;
	// this.guessesLeft = 8;
	// function that checks user guess if in current word
	// function that pushes
}

module.exports  = {Letters: Letters};