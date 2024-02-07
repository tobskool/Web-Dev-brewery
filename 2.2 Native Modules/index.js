// import fs from "fs";
// import { readFile } from 'node:fs';

const fs = require("fs")

// fs.writeFile("message2.txt", "Hello from NodeJS!",  (err) => {
//     if (err) throw err;
//     console.log('The file has been saved!');
//   } ); 

fs.readFile('message2.txt', (err, data) => { // (can also put the extra parameter of encoding type (UTF8) see below...)
    if (err) throw err;
    const text = data.toString();
    console.log(text);
});

// fs.readFile('message2.txt', 'utf-8', (err, data) => { //can also put the extra parameter of encoding type (UTF8)
//     if (err) throw err;
//     const text = data.toString();
//     console.log(text);
// });