const express = require("express");
const app = express();
const fs = require("fs");
const ejs = require("ejs");

app.set("view engine", "ejs");
app.set("views", "./src/templates"); // Set the correct views directory

app.get("/", (req, res) => {
  fs.readFile("./src/data/experience.json", (err, data) => {
    if (err) throw err;
    const experience = JSON.parse(data);
    res.render("index", { experience });
  });
});

app.listen(3000, () => console.log("Server running on port 3000"));
