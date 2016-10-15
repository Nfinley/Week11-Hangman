// This will be the constructor file
// word.js should contain all of the methods which will check 
// ...the letters guessed versus the random word selected.
"use strict";

const Letter = require('./letter.js');


// Using ES6 class and constructor properties
class Word {
    constructor(value) {
    	// the generated word
        this.value = value;
        // console.log(value);
        // an array of Letter objects that represents our word
        this.letters = value
            .split("")
            .map(v => new Letter(v));
    }
    displayWord() {
        // takes letters, calls .show on each one, collects them into a new array, calls .join to return a string
        var word = this.letters
            .map(v => v.show()).join("");
        // console.log(word);
        return word;
    }

	// modify any correctly guessed letter to set visible to true
	// then it will return true or false depending on if a correct letter was guessed.
    playerGuess(guess) {
        this.letters.map(function(letter) {
            if (guess === letter.value) {
                letter.visible = true;
                return true;
            } else {
                return false;
            }
        })
        // tests whether some element in the array passes the test
        .some(function(v) {
            return v;

        })
    }
	// Return true or false depending on if the word has been conpletely guessed. 
	// If the 
    roundFinished() {
    	return this.displayWord() === this.value;
	
	}


}




module.exports = Word;

// ========= MY old code =============
// 
// function CheckGuess(correctLetter){

// 	// should be an array of single letters
// 	this.checkWordGuess = function(){
// 		// check the guess against the current word array
//         	game.currentWordArray.forEach(function(letter, i, array){
//         		console.log(letter, i);

//         		// var index = array.indexOf(userGuess);
//         		if(userGuess === letter){
//         			game.blanksArray.splice(i, 1, letter);
//         			console.log("Found letter ", letter);
//         			console.log("index: " + i);

//         		}

//         	});
// 	}

// }
