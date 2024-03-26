//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming




// importing necessary packages 

import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

//initiating port and backend app
const app = express();
const port = 3000;

//default when app loads
var userIsAuthorised = false;

function passwordCheck(req, res, next) {
  const password = req.body["password"]; //referencing the HTML input ID
  if (password === "ILoveProgramming") {
    userIsAuthorised = true;
  }
  next();
}

app.use(bodyParser.urlencoded({ extended: true }));

//has to be written after writing function - ORDER LOGIC IS CRUCIAL
app.use(passwordCheck);

//COMMENT - requesting the website path "Index.html"

app.get("/", (req, res) => { //You want to get a page
  res.sendFile(__dirname + "/public/index.html"); //respond by sending the file of index.html
  console.log(res)
});

//route handler for HTTP POST requests to the "/check" endpoint. When a POST request is made to this endpoint, 
//the callback function (req, res) => {...} is executed.

app.post("/check", (req, res) => { // you want to give a page (first form parameter from HTML page)
  if (userIsAuthorised) {
    res.sendFile(__dirname + "/public/secret.html");
  } else {
    res.sendFile(__dirname + "/public/index.html");
    //Alternatively res.redirect("/");
  }
});


// Always put app listen function at the end (so it can read all code first)

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});