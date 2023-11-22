const express=require('express')
const app=express();
const bodyParser = require("body-parser")

const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/PURUSH")

//cors package for cors issue
const cors = require("cors")

//middleware
app.use(cors())
app.use(bodyParser.json())

//routes loading from routes file
const userRoutes = require("./routes/user")

//routes
app.use("/",userRoutes)
app.use("/user",userRoutes)

//server starting code
app.listen(7000,()=>{
    console.log('server started on port 7000')
})