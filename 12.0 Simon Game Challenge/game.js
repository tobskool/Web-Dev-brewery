var gamePattern = []


var buttonColours = ["red", "blue", "green", "yellow"];

function nextSequence() {
   var randomNumber =  Math.floor(Math.random() * 4 + (1));
}

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
   // Add more cases if you have additional colors
}
}, 100); // Adjust the delay as needed

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
} );