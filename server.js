require("dotenv").config();
const userlib = require("./backend/lib/userlib");
const exp = require('express');
const mongoose = require("mongoose");

const app = exp();
const port = process.env.PORT || 5050;

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
mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_CONNECTION_STRING, {}, function(err) {
    if (err) {
        console.error(err);
    } else {
        console.log("db connected");
        userlib.getAllUsers(function(err, res) {
            if (err) {
                console.error(err);
            } else console.log(res);
        });
        app.listen(port, function() {
            console.log("Server running on http://localhost:" + port);
            console.log(`Server running on http://localhost:${port}`);
        });
    }
});