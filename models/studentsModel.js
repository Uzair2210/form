const mongoose = require('mongoose');

const studentsModel = mongoose.model('Students', new mongoose.Schema({
    FName: String,
    LName: String,
    Email: String,
    Gender: String,
}));

module.exports = studentsModel;