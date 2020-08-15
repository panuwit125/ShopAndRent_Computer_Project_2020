const mongoose = require('mongoose')

const blandSchema = new mongoose.Schema({
    name_bland:{
        type:String,
        required: true
    }
})

mongoose.model('Bland',blandSchema)