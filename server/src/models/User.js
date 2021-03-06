// User Object
const mongoose = require("mongoose")


const UserSchema = new mongoose.Schema({
    googleId:{
        type:String,
        required:true
    },
    displayName:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default: Date.now
    },
    token:String
})

module.exports = mongoose.model('User',UserSchema)