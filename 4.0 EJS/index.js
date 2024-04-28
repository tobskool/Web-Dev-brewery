import express from "express";

const app = express();
const port = 3000;

const namedDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const weekday = ["Monday","Tuesday","Wednesday","Thursday","Friday"];
const weekend = ["Sunday", "Saturday"]

app.get("/", (req, res) => {
    const today = new Date();
    const dayOfWeek = today.getDay();
    const dayOfWeekName = namedDays[dayOfWeek];
    let dayType, advice;

    if (dayOfWeekName === "Saturday" || dayOfWeekName === "Sunday") {
        dayType = "A weekend";
        advice = "It's the weekend, time to relax and have fun!";
    } else {
        dayType = "A weekday";
        advice = "It's a weekday, time to work hard!";
    }

    res.render("indexNew.ejs", {
        dayType: dayType,
        advice: advice
    });
});

// app.get("/", (req, res) => {
//     const today = new Date();
//     let day = today.getDay();
//     console.log(today)
//     res.render("index.ejs", {
//         dayType: "a weekday",
//         advice: "It's the weekday, It's time to work hard fun!"
//     });
// });

app.listen(port, function(err){
    if (err) console.log("Error in server setup")
    console.log("Server listening on Port", port);
});

