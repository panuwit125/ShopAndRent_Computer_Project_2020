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

router.get("/showproduct", (req, res) => {
  const { bland_product } = req.body;
  if (!bland_product) {
    return res.status(422).json({ error: "please select type" });
  }
  Product.find({ bland_product: bland_product })
    .then((showProduct) => {
      if (showProduct) {
        res.json(showProduct);
      } else {
        return res.status(422).json({ error: "select again" });
      }
    })
    .catch((error) => {
      console.log(error);
    });
});

module.exports = router;
