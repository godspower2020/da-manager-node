const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");

const app = express();

app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
    extended: true
}));

mongoose.connect("mongodb+srv://admin-philip:07033903922phil@cluster0.frub1.mongodb.net/managersDB", { useNewUrlParser: true, useUnifiedTopology: true });

let port = process.env.PORT;
if (port == null || port == "") {
    port = 3000;
}

app.get("/", function (req, res) {
    res.render("home");
});


app.listen(port, function () {
    console.log("Server started on port 3000");
});

// mongo "mongodb+srv://cluster0.frub1.mongodb.net/text" --username admin-philip --password 07033903922phil 