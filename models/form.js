const mongoose = require('mongoose')
var formModel = mongoose.model("form",new mongoose.Schema({
    FName:String,
    LName:String,
    Email:String,
    Gender:String,
}))
module.exports = formModel