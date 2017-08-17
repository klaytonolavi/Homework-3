

//Define Variables
var computerGuess = String.fromCharCode(97 + Math.round(Math.random() * 25));
var lettersGuessed = [];
var guesses = 0;
var letters;
var wins = 0;
var losses = 0;
var running;


document.onkeyup = function(event) {

var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

console.log(userGuess);

for (i = 0; i < guesses; i++) {

}

function running()

lettersGuessed.push(letters);

if (userGuess === computerGuess) {
	wins++;
	$("#wins").html(wins);
 } else if (userGuess !== computerGuess) {
	guesses++;
	$("#guesses").html(guesses);
}

if (guesses === 10) {
	losses++;
	$("#losses").html(losses);
}


	};

