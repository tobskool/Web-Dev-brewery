import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Hello World!") //console log req.rawHeaders to see what HTTPS request wants
});

app.listen(port, () => {
    console.log(`Server is currently running on port ${port}`)
});


