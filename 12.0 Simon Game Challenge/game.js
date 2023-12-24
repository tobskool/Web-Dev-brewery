var gamePattern = []


var buttonColours = ["red", "blue", "green", "yellow"];

function nextSequence() {
   var randomNumber =  Math.floor(Math.random() * 4 + (1));
}

var randomChosenColour = buttonColours[Math.floor(Math.random()*buttonColours.length)];

gamePattern.push(randomChosenColour);

$("#" + randomChosenColour)

// active_button.classList.add("pressed");
//     setTimeout(function() {
//         active_button.classList.remove("pressed")
//     }, 1000);

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