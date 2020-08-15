const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    user_name:{
        type:String,
        required:true
    },
    pass_word:{
        type:String,
        required:true
    },
    first_name:{
        type:String,
        required:true
    },
    last_name:{
        type:String,
        required:true
    },
    address_user:{
        type:String
    },
    type_user:{
        type:String
    }
})

mongoose.model('User',userSchema)