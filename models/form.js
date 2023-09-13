const mongoose = require('mongoose')

var formModel = mongoose.model("form",new mongoose.Schema({
    FN:String,
    LN:String,
    Email:String,
    G:String,
    D:String,
}))


module.exports = formModel