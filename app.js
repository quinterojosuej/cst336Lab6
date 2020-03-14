const express = require("express");
const app = express();
app.engine("html", require("ejs").renderFile); //html use
app.use(express.static("public")); // for img/css/etc.

//routes
app.get("/", function(req, res) {
    // res.send("it workd");
    res.render("index.html");
});

app.get("/mercury", function(req, res){
    // res.send("THIS IS MERCURY");
    res.render("mercury.html");
});

app.get("/venus", function(req, res) {
    // res.send("THIS IS VENUS");
    res.render("venus.html");
});

app.get("/earth", function(req, res) {
    res.render("earth.html");
});

app.get("*", function(req, res) {
   res.render("error.html"); 
});

//server listener
app.listen(process.env.PORT, function(req, res) {
    console.log("expreess is running...");
});
