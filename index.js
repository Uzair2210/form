const express = require('express');
const app = express();


const studentRoutes = require('./routes/form');
const mongoose = require('mongoose');

app.use(express.json());
app.use("/form/registration", studentRoutes);

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get("/", function(req, res) {
  res.render('form');
});

mongoose.connect("mongodb+srv://uzair:uzair5225@uzaircluster.fdml45t.mongodb.net/Registration?retryWrites=true&w=majority").then((res) => {
    console.log("Database Connected");
}).catch((error) => {
    console.log(error.message);
});

var port = process.env.PORT || 3000


app.listen(port, () => {
  console.log("Server is running...");
});