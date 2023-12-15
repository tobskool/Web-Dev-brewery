/*********  IMAGE 1 *************** */

var randomNum = 0
randomNum = Math.floor(Math.random() * (6)) + 1


/* THIS IS RUBBISH*/
// imagesPath = './images/'
// var randomImageString = 'dice3.png'
// realImage = imagesPath + randomImageString

var randomDiceImageString = "dice" + randomNum + ".png" //dice1 - 6
var imagePath = './images/' + randomDiceImageString;
console.log(imagePath)

// document.getElementsByClassName("img1").src = imagePath;
var image1 = document.querySelectorAll("img")[0]
image1.setAttribute("src", imagePath)




/*********  IMAGE 2 *************** */

var randomNum2 = 0;
randomNum2 = Math.floor(Math.random() * (6)) + 1;

var randomDiceImageString2 = "dice" + randomNum2 + ".png";//dice1 - 6
var imagePath2 = './images/' + randomDiceImageString2;

// document.getElementsByClassName("img1").src = imagePath;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", imagePath2);




/*********  Winner Declaration *************** */

var message = document.querySelector("h1");
if (randomNum > randomNum2) {
    message.innerHTML = "Player 1 wins!"
} 
else if (randomNum2 > randomNum) {
    message.innerHTML = "Player 2 wins!"
}
else {
    message.innerHTML = "It's a draw!"
}