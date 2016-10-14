// Your game.js file will randomly select a word for the player.

// Using ES6 features
"use strict";

// Return a random word from the main answer choice game array
class Game {
	constructor(wordArray) {
		this.wordArray = wordArray;
		//console.log('this.wordArray: ' + this.wordArray);
	}

 	pickRandomWord() {
		return this.wordArray[Math.floor(Math.random() * this.wordArray.length + 1) - 1];
	}
}

module.exports = Game;



// var currentWordArray = [];

// This generates random word
// function randomWord(){
// 		return WORDARRAY[Math.floor(Math.random() * WORDARRAY.length+1)-1];
		

// 	}
// var value = randomWord();



//  // Setting the function randomWord to the initial pick and will call in main.js file 
// // currentWordArray = randomWord().split("");

// // var blanksArray =[];
// // // for each loop to create an array of "_"
// // currentWordArray.forEach(function(letter, index){
// // 	blanksArray.push("_");

// // });
// // var checker = new Word.CheckGuess(currentWordArray, blanksArray); 

// // This will remove the word after user either guesses it right or runs out of guesses
// function removeWord() {
// 	var removeIndex = WORDARRAY.indexOf(initialPick)
// 	if(removeIndex!== 1){
// 		WORDARRAY.splice(removeIndex, 1);
// 		return WORDARRAY;

// 	}
// }

// module.exports = {
// 	WORDARRAY: WORDARRAY, randomWord: randomWord, value: value
// }
