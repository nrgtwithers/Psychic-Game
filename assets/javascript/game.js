//  VARIABLES
var randomLetterArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
            
var playerwins = 0;
var playerlosses = 0;
var remainguesses = 15;
var guessmade = [];

//  FUNCTION
document.onkeyup = function(event) {
    
    var userinput = event.key;
// COMPUTERS CHOICE OF LETTER   
    var answer = randomLetterArr[Math.floor(Math.random() * 26)];
// USERS WINS BASED ON INPUT
   if (userinput == answer) {
    playerwins++;
    
}
// USER LOSSES & GUESSES LEFT
    else if (userinput != answer) {
    remainguesses--;
    guessmade.push(userinput);
    playerlosses++;
    }
// RESETS FOR WINS & LOSSES
    if(playerwins === 15) {
        location.reload();

    }  else if (playerlosses === 15) {
        location.reload();
    }
    
    //DOM

    var playerwinsDiv = document.getElementById("win");
    playerwinsDiv.textContent = playerwins;
    
    var playerlossesDiv = 
    document.getElementById("loss");
    playerlossesDiv.textContent = playerlosses;

    var remainguessesDiv = 
    document.getElementById("left"); 
    remainguesses.textContent = remainguesses;

    var guessmadeDiv =
    document.getElementById("guess");
    guessmadeDiv.textContent = guessmade;
    }
