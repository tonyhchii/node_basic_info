const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.sendFile("./pages/home.html", { root: __dirname });
});

app.get("/about", (req, res) => {
  res.sendFile("./pages/about.html", { root: __dirname });
});

app.get("/contact", (req, res) => {
  res.sendFile("./pages/contact.html", { root: __dirname });
});

app.use((req, res) => {
  res.status(404).send("<h1> 404 Page </h1>");
});

app.listen(8000);
