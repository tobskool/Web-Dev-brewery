var userClickedPattern = []
var gamePattern = []

function playBlue () {
   var blue = new Audio('sounds/blue.mp3')
   blue.play();
}
function playRed () {
   var red = new Audio('sounds/red.mp3')
   red.play();
}
function playYellow () {
   var yellow = new Audio('sounds/yellow.mp3')
   yellow.play();
}
function playGreen () {
   var green = new Audio('sounds/green.mp3')
   green.play();
} 

var buttonColours = ["red", "blue", "green", "yellow"];

function nextSequence() {
   var randomNumber =  Math.floor(Math.random() * 4 + (1));
    // increase the level by 1 every time nextSequence() is called.
  level++;

  //5. Inside nextSequence(), update the h1 with this change in the value of level.
  $("#level-title").text("Level " + level);

}

//You'll need a way to keep track of whether if the game has started or not, so you only call nextSequence() on the first keypress.
var started = false;

// Create a new variable called level and start at level 0.
var level = 0;

//1. Use jQuery to detect when a keyboard key has been pressed, when that happens for the first time, call nextSequence().
$(document).keypress(function() {
  if (!started) {

    //3. The h1 title starts out saying "Press A Key to Start", when the game has started, change this to say "Level 0".
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

// var gameActive = null;

// function startGame(gameActive){
//    if ($(document).on('keypress', nextSequence())) {
//       alert("Test")
//    }
// };

// startGame();

var randomChosenColour = buttonColours[Math.floor(Math.random()*buttonColours.length)];

gamePattern.push(randomChosenColour);

$(document).ready(function() {

$("#" + randomChosenColour).addClass("flash");
setTimeout(function() {
   $("#" + randomChosenColour).removeClass("flash");

switch (randomChosenColour) {
   case "blue":
       playBlue();
       break;
   case "red":
       playRed();
       break;
   case "yellow":
       playYellow();
       break;
   case "green":
       playGreen();
       break;
   // Add more cases if you additional colors added, possibly to add harder level
}
}, 100); // Adjust the delay as needed

// Repeated code causing duplicate sound  

// playBlue()
// playRed ()
// playYellow ()
// playGreen ()


} );

$(".btn" ).on( "click", function(e) {
   console.log(e);
 });

 $(".btn").on("click", function() {
   var userChosenColour = $(this).attr('id');
   userClickedPattern.push(userChosenColour);
   console.log(userChosenColour);
   console.log(userClickedPattern);
});

function playSound(name) {
   $(".btn").on("click", function() {
      var userChosenColour = $(this).attr('id');

      switch (userChosenColour) {
         case "blue":
            playBlue();
            break;
         case "red":
            playRed();
            break;
         case "yellow":
            playYellow();
            break;
         case "green":
            playGreen();
            break;
      }
   });
}

playSound();

// Made mistake of duplicating sound switch function, does not need to play twice, only to animate

// Refactoring required into modular functions

function handleAnimatePress(currentColour) {
   $(".btn").on("click", function() {
      currentColour = $(this).attr('id');
      $('#' + currentColour).addClass('pressed')
      setTimeout(function() {
         $("#" + currentColour).removeClass("pressed");
      }, 100);
} ) }; 

//allows animation to flash, see related function
handleAnimatePress()


// $.on("keydown", nextSequence(e)) {
//    console
// };

