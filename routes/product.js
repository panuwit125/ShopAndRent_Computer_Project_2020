const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const requriedLogin = require("../middleware/requiredLogin");
const Product = mongoose.model("Product");

router.post("/insertproduct", requriedLogin, (req, res) => {
  const {
    name_product,
    description_product,
    price_product,
    bland_product,
    image_product
  } = req.body;
  if (
    !name_product ||
    !description_product ||
    !price_product ||
    !bland_product ||
    !image_product
  ) {
    return res.status(422).json({ error: "please add all fileld" });
  }
  req.user.pass_word = undefined;
  const product = new Product({
    name_product,
    description_product,
    price_product,
    bland_product,
    image_product,
    owner_product: req.user,
  });
  product
    .save()
    .then((result) => {
      res.json({ product: result });
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.delete("/deleteproduct", (req, res) => {
  const { _id } = req.body;
  if (!_id) {
    return res.status(422).json({ error: "please select type" });
  }
  Product.findOneAndRemove(_id).then((data) => {
    if (!data) {
      res.status(404).send({
        message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`,
      });
    } else {
      res.send({
        message: "Tutorial was deleted successfully!",
      });
    }
  });
});

router.post("/showproduct", (req, res) => {
  const { bland_product } = req.body;
  console.log('Check',req.body.bland_product,req.body)
  if (!bland_product) {
    console.log('please select type')
    return res.status(422).json({ error: "please select type" });
  }
  Product.find({ bland_product: bland_product })
    .then((showProduct) => {
      if (showProduct) {
        res.json(showProduct);
      } else {
        console.log('select again')
        return res.status(422).json({ error: "select again" });
      }
    })
    .catch((error) => {
      console.log(error);
    });
});

router.post('/productbyid',(req,res) => {
  const { id } = req.body;
  console.log("ID",id)
  if (!id ) {
    console.log('not found id')
    return res.status(422).json({error: "Error"})
  }
  Product.findOne({ _id:id })
  .then((product)=>{
    if(product) {
      res.json(product)
    } else {
      console.log('no product by id')
      return res.status(422).json({error:"error"})
    }
  })
})

module.exports = router;
