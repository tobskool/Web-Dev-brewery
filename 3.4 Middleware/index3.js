import express from "express";

const app = express();
const port = 3000;


// Cleaner way of doing the code


// const logger = (req, res, next) => { 
//   console.log(`
//       ${req.method} 
//       ${req.url} 
//       ${req.ip}`); 
//       next(); 
//   }; 

function logger(req, res, next) {
  console.log("Request method: ", req.method);
  console.log("Respone URL: ", req.url)
  next();
};

app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
