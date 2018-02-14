//Week 3 HW assignment Basic
//Author: kourtney.reynolds@gmail.com

alert("start program")
//List of letter for the computer or user to guess from
var letters = "abcdefghijklmnopqrstuvwxyz"
// console.log(letters)

//Total Number of Guesses before loosing
var totalGuess = 9
//Container for bad player guesses
var badGuesses = []
//Wins, Losses
var wins = 0
var losses = 0
var messageWin = "You win"
var messageLose = "You lose"
alert(letters, totalGuess,badGuesses,wins,losses,messageWin,messageWin)

// function playGame()
// {

        //While the player has not run out of guesses and niether player has a score of 10: game is in play mode
    alert("Game is starting")

    // while (totalGuess > 0 && wins <=10 || losses<=10)
    // {
        //Start Game with computer executing guessing a letter
    var computerGuess = letters[Math.floor(Math.random() * letters.length)]

    alert(computerGuess)

    //getting a key from the user to compare to game guess
    document.onkeyup = function(event){
        event.key;
    }
    //Player guess
    var playerGuess = event.key

    alert(playerGuess)

//Player does not run out of guesses and the user guesses the correct letter
    if( computerGuess===playerGuess){
        wins++;
        console.log(wins); 
        if(wins===10) {
            alert(messageWin);
        }
        document.querySelector("showWins").innerHTML = wins;
    }
    
//Player guesses the wrong letter
    else{
        losses++;
        console.log(losses);
        badGuesses.push(playerGuess);
        totalGuess--;
        document.querySelector("showLosses").innerHTML = losses;
    }



    

// }
//Log the loosing message to the console and then tell the player the letter.
console.log(messageLose + " " +", the letter was" + computerGuess)

// }

// playGame()




