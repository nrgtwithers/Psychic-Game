// Variables

var LetterArr = ["a", "b", "c","d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n","o","p","q","r", "s", "t", "u", "v", "w", "x", "y", "z"]
var randomLetter = Math.floor(Math.random() * LetterArr.length);
var randomLet = LetterArr[randomLetter];
var wins = 0;
var losses = 0;
var guessesLeft = 0;
var guessSoFar =[];

//Test
console.log(LetterArr);
console.log(randomLet);

// DOM - connect to html

