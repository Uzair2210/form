const express = require('express')
const { default: mongoose } = require('mongoose')
const app = express()


app.set('view engine','ejs')
app.use(express.static('public'))




app.get("/",(req,res)=>{
    console.log(req.query)

    res.render('index')
})



 
mongoose.connect('mongodb://127.0.0.1:27017').then((res)=>{
    console.log("Connected!")
}).catch((err)=>{
    console.log(err.message)
})



var port = 3000

app.listen(port, () => {
    console.log("server is running.....")
})