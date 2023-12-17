// for (var i = 0; i < document.getElementsByClassName("drum").length) {
//     addEventListener("click", handleCLick)
// }




// document.getElementsByClassName("drum").addEventListener("click", handleCLick)



/// Getting the software to find all of the butttons

var numberOfButtons = document.querySelectorAll(".drum").length; // number of buttons as a count



// function handleCLick() {
//     alert("I got clicked!")
// }

//HANDLES ALL THE SOUND OUTPUT INTO DIFFERENT FUNCTIONS
function playTom1 () {
    var tomDrum1 = new Audio('sounds/tom-1.mp3')
    tomDrum1.play();
}
function playTom2 () {
    var tomDrum2 = new Audio('sounds/tom-2.mp3')
    tomDrum2.play();
}
function playTom3 () {
    var tomDrum3 = new Audio('sounds/tom-3.mp3')
    tomDrum3.play();
}
function playTom4 () {
    var tomDrum4 = new Audio('sounds/tom-4.mp3')
    tomDrum4.play();
}
function playSnare () {
    var snare = new Audio('sounds/snare.mp3')
    snare.play();
}
function playCrash () {
    var crash = new Audio('sounds/crash.mp3')
    crash.play();
}
function playKick () {
    var kick = new Audio('sounds/kick-bass.mp3')
    kick.play();
}


// CREATING A LOOP TO ADD EVENT LISTENERS TO ALL BUTTONS WHEN CLICKED VIA MOUSE
//LISTENS TO SPECIFIC CLICKS

for (var i = 0; i < numberOfButtons; i++) {  //initilise i, run through the lopp and add 1 as long as i is smaller than button count

    document.querySelectorAll(".drum")[i].addEventListener("click", function() {

var buttonClicked = this.innerHTML;
makeSound(buttonClicked);
buttonAnimation(buttonClicked);

    })
};

// ADDING EVENT LISTENERS TO ALL BUTTONS WHEN CLICKED VIA KEYBOARD
//LISTENS TO ALL KEYSTROKES
//event is deprecated and is now EVENT, but cana lso be marked as e


document.addEventListener("keydown", function(e) {
    makeSound(e.key);
    buttonAnimation(e.key);
});

function makeSound(key) {
    switch (key) {
        case "w":
            playTom1()
            break;
        case "a":
            playTom2()
            break;
        case "s":
            playTom3()
            break;
        case "d":
            playTom4()
            break;
        case "j":
            playSnare()
            break;
        case "k":
            playCrash()
            break;
        case "l":
            playKick() 
            break;    
        default: console.log(this.buttonClicked)
    }
}


function buttonAnimation(currentkey) {
    var active_button = document.querySelector("." + currentkey);
    active_button = active_button.classList.add(".pressed")

}