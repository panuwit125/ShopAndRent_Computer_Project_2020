const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
const requriedLogin = require('../middleware/requiredLogin')
const Product = mongoose.model("Product")

router.post('/insertproduct',requriedLogin,(req,res)=>{
    const {name_product,description_product,price_product,bland_product} = req.body
    if(!name_product || !description_product || !price_product || !bland_product){
        return res.status(422).json({error:"please add all fileld"})
    }
    req.user.pass_word = undefined
    const product = new Product({
        name_product,
        description_product,
        price_product,
        bland_product,
        owner_product: req.user
    })
    product.save().then(result=>{
        res.json({product:result})
        console.log(result)
    })
    .catch(err=>{
        console.log(err)
    })
})

module.exports = router