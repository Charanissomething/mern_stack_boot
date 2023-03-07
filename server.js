require("dotenv").config();

// import { config } from "dotenv";
// config();
//const userlib = require("./backend/lib/userlib");
const userLib = require("./backend/lib/userlib.js");

// const todolib = require("./backend/lib/todolib");
const exp = require('express');
const mongoose = require("mongoose");
// const { response } = require("express");

const app = exp();

const options = {
    extensions: ['htm', 'html', 'css', 'js', 'ico', 'jpg', 'jpeg', 'png', 'svg'],
    index: ['index.html'],
}
app.use(exp.static(__dirname));

const port = process.env.PORT || 5010;

app.get("/", function(req, res) {
    // res.send("iam cherry!!!");
    res.sendFile(__dirname + "/index.html");
});
app.get("/resume", function(req, res) {
    // res.send("iam cherry!!!");
    res.sendFile(__dirname + "/resume.html");
});
app.get("/card", function(req, res) {
    // res.send("iam cherry!!!");
    res.sendFile(__dirname + "/card.html");
});
app.get("/weather", function(req, res) {
    // res.send("iam cherry!!!");
    res.sendFile(__dirname + "/weather.html");
});
// app.post("/api/createtodo", (req, res) => {
//     todolib.createatodoUser(req.body, (err, result) => {
//         res.send(err ? err : result);
//     });
// });
mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_CONNECTION_STRING, {}, function(err) {
    if (err) {
        console.error(err);
    } else {
        console.log("db connected");

        // userlib.createAUser({
        //     username: "Sandeep",
        //     yearOfGraduation: 2020
        // }, function(err, result) {
        //     console.log(err ? err : result);
        // });

        // userlib.getAllUsers(function(err, res) {
        //     if (err) {
        //         console.error(err);
        //     } else console.log(res);
        // });

        // userlib.deleteSingleUser({ username: "sai" }, (err, result) => {
        //     console.log(err ? err : result);
        // });
        // userlib.createFirstUser(function(err, res) {
        //     if (err) {
        //         console.error(err);
        //     } else console.log(res);
        // });
        // userlib.updateUser(function(err, res) {
        //     if (err) console.error(err);
        //     else console.log(res);
        // });
        // todolib.createatodoUser(function(err, res) {
        //     if (err) {
        //         console.log(err);
        //     } else {
        //         console.log(res);
        //     }
        // });
        app.listen(port, function() {
            console.log("Server running on http://localhost:" + port);
            console.log(`Server running on http://localhost:${port}`);
        });
    }
});