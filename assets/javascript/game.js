

//Define Variables
var letters = [];
var guesses = 10;
var wins = 0;
var losses = 0;


var computerGuess = String.fromCharCode(97 + Math.round(Math.random() * 25));

function updateDom() {
    document.querySelector("#wins").innerHTML = wins;
    document.querySelector("#losses").innerHTML = losses;
    document.querySelector("#guesses").innerHTML = guesses;
    document.querySelector("#letters").innerHTML = letters;

}

updateDom();

function reset() {
	guesses = 10;
	letters = [];
	computerGuess = String.fromCharCode(97 + Math.round(Math.random() * 25));
}


document.onkeyup = function(event) {
        var userGuess = event.key;
        


    if (userGuess === computerGuess) {
        wins++;
        reset();
        alert("You guessed correctly!");
    } else if ((userGuess !== computerGuess) && (guesses === 0)) {
        losses++
        reset();
        alert("You are out of guesses!");
    } else {
        guesses--;
    }

    letters.push(userGuess);

    updateDom();

}

