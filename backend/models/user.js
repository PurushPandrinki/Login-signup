const mongoose = require("mongoose")

let userschema = mongoose.Schema({
    name:String,
    email:String,
    password:String,
    confirmpassword:String
})

module.exports = mongoose.model("user",userschema)