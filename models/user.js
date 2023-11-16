const mongoose = require('mongoose');
const Schema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    passwordResetToken:{
        type:String
    }
    
})
module.exports = mongoose.model('User',Schema);