const router = require('express').Router();
const registrationModel = require('../models/studentsModel');

router.get('/', async function (req, res) {
    var students = await registrationModel.create(req.query);
    res.send("Form Submitted.");
});


module.exports = router;