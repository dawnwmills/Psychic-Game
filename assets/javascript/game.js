$(document).ready(function(){

  var letters = ["a", "b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

  var guesses = 10;

  var wins = 0;

  var loses = 0;





  document.onkeyup = function(event) {

    // updates guesses# displayed on browser

    $("#guesses").html(guesses);



    // store letters for user

    var userGuess = event.key;





    // store letters for computer

    var computerGuess = letters[Math.floor(Math.random() * letters.length)];

    console.log(computerGuess);



    // wins & loses of user and computer

    if (userGuess === computerGuess) {

      wins++;

      console.log(wins);

      guesses --;

      console.log(guesses);

    } else {

      loses++;

      console.log(loses);

      guesses --;

      console.log(guesses);

    }



    // track # of guesses and reset after 10 but the game aint stopping!!

    if (guesses < 1) {

      guesses=10;

    }



    var html = "<h4>Wins: " + wins + "</h4>" +

    "<h4>Loses: " + loses + "</h4>" +

    "<h4>Guesses Left: " + guesses + "</h4>" +

    "<h4>Your guesses so far: " + userGuess + "</h4>";



    document.querySelector("#list").innerHTML = html;

  }



});
