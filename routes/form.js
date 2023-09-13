var router = require('express').Router()
var formModel = require('../models/form')
// Create
router.post('/',async function (req, res) {
    await formModel.create(req.body)
    res.send("Student Enrolled Successfully!")
})
// Read
router.get('/',async function (req, res) {
    var form = await formModel.find()
    res.json(students)
})
// Update
router.put('/:id',async function (req, res) {
    await formModel.findByIdAndUpdate(req.params.id,{$set:req.body})
    res.send("Student Updated Successfully!")
})
// Delete
router.delete('/:id',async function (req, res) {
    await formModel.findByIdAndDelete(req.params.id)
    res.send("Student Deleted Successfully!")
})
module.exports = router