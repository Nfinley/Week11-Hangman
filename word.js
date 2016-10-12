// This will be the constructor file
// word.js should contain all of the methods which will check 
// ...the letters guessed versus the random word selected.

var game = require('./game.js');




function CheckGuess(correctLetter){
	this.guess = guess; 
	this.currentWordArray = game.randomWord().split("");
	// should be an array of single letters
	this.checkWordGuess = function(){
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
	}
	this.pickedWordArray = game.initialPick;
	this.correctLetter = correctLetter;
	this.userGuessArray =[];

	// an array to store the generated word
	// function to split the word into a string of letters take initialPick and split it
	// functoin to take the terminal input and match it against the array
}

module.exports = {CheckGuess: CheckGuess};

// initialPick = game.randomWord();
// currentWord = initialPick.split("");