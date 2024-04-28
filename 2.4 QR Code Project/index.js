/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

// inquirer.prompt([
//     "Would you like to generate a QR code?",
//     "What URL would you like to generate?"
// ])
//   .then((answers) => {
//     "Yes","No"
// })
//   .catch((error) => {
//     if (error.isTtyError) {
//       // Prompt couldn't be rendered in the current environment
//     } else {
//       // Something else went wrong
//     }
//   });

// choices: [ "Choice A", new inquirer.Separator(), "choice B" ]


import qr from "qr-image";
import fs from "fs";
import inquirer from "inquirer";


inquirer.prompt([
    {
    message: "What URL would you like to generate  a QR code for? ", 
    name: "userAnswer",
    type: "input"
}
])
  .then((answers) => {
    const URL = answers.userAnswer;
    console.log(answers)
    var qr_svg = qr.image(URL); // failed here first because I put userAnswer instead of URL, you can't directly access object.
    qr_svg.pipe(fs.createWriteStream('qr_img.png'));

    fs.writeFile("UserURL.txt", URL, (err) => {
        if (err) throw err;
        console.log("The file has been saved!")
    } );


})
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
