const express = require('express');
const app = express();
const port = 3000;
const studentRoutes = require('./routes/form');
const mongoose = require('mongoose');

app.use(express.json());
app.use("/form/registration", studentRoutes);

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get("/form", function(req, res) {
  res.render('form');
});

mongoose.connect("mongodb://127.0.0.1:27017").then((res) => {
    console.log("Database Connection established");
}).catch((error) => {
    console.log(error.message);
});

app.listen(port, () => {
  console.log("Server is running...");
});