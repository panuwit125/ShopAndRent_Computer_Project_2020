const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema.Types

const productSchema = new mongoose.Schema({
    name_product:{
        type:String,
        required: true
    },
    description_product:{
        type:String,
        required: true
    },
    price_product:{
        type:String,
        required: true
    },
    bland_product:{
        type:String,
        required: true
    },
    owner_product:{
        type:ObjectId,
        ref:"User"
    }
})

mongoose.model('Product',productSchema)