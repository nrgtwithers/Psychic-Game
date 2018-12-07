// Variables

var compChoices = ["a", "b", "c","d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n","o","p","q","r", "s", "t", "u", "v", "w", "x", "y", "z"]
// var compGuess = compChoices[randomLetter];
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessSoFar = [];

document.onkeyup = function(event){

var userGuess = event.key;
var compGuess = compChoices[Math.floor(Math.random() * 26)];



// wins
if (userGuess == compChoices){
    console.log(userGuess);
    console.log(wins);
    wins++;
//losses
} else if (userGuess != compChoices){
    // console.log(compChoices);
    // console.log(losses);
    losses++;
}


// DOM - connect to html

var userScoreDiv = document.getElementById('wins');
userScoreDiv.textContent = wins;

var compScoreDiv = document.getElementById('losses');
compScoreDiv.textContent = losses;
};