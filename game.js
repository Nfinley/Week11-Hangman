// Your game.js file will randomly select a word for the player.
var word = require('./word.js');

var WORDARRAY = ["harmony", "melody", "chord", "third", "fifth", "triad"];
// var dupWordArray = WORDARRAY;
var currentWordArray = [];

// This exports this object
function randomWord(){
		return WORDARRAY[Math.floor(Math.random() * WORDARRAY.length+1)-1];

	}

 // Setting the function randomWord to the initial pick and will call in main.js file 
currentWordArray = randomWord().split("");

var blanksArray =[];
// for each loop to create an array of "_"
currentWordArray.forEach(function(letter, index){
	blanksArray.push("_");

});
var checker = new word.CheckGuess(currentWordArray, blanksArray); 

// This will remove the word after user either guesses it right or runs out of guesses
function removeWord() {
	var removeIndex = WORDARRAY.indexOf(initialPick)
	if(removeIndex!== 1){
		WORDARRAY.splice(removeIndex, 1);
		return WORDARRAY;

	}
}

module.exports = {
	WORDARRAY: WORDARRAY, 
	currentWordArray: currentWordArray, 
	blanksArray: blanksArray
}
