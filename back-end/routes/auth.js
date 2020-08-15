const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = mongoose.model("User");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken')
const {JWT_SECRET} = require('../key')
const requiredLogin = require('../middleware/requiredLogin')



router.get("/", (req, res) => {
  res.send("this is auth");
});



router.get('/permit',requiredLogin,(req,res)=>{
    res.send('you have authorication')
})


router.post("/signup", (req, res) => {
  const { user_name, pass_word, first_name, last_name } = req.body;
  if (!user_name || !pass_word || !first_name || !last_name) {
    return res.status(422).json({ error: "please add all field" });
  }
  User.findOne({ user_name: user_name })
    .then((savedUser) => {
      if (savedUser) {
        return res.status(422).json({ error: "user already exist" });
      }
      bcrypt.hash(pass_word, 12).then((hashedpassword) => {
        const user = new User({
          user_name,
          pass_word: hashedpassword,
          first_name,
          last_name,
        });
        user
          .save()
          .then((user) => {
            res.json({ message: "saved successfull" });
          })
          .catch((error) => {
            console.log(error);
          });
      });
    })
    .catch((error) => {
      console.log(error);
    });
});



router.post('/signin',(req,res)=>{
    const {user_name,pass_word} = req.body
    User.findOne({user_name:user_name})
    .then(savedUser=>{
        if(!savedUser){
            return res.status(422).json({error:"not found username"})
        }
        bcrypt.compare(pass_word,savedUser.pass_word)
        .then(doMatch => {
            if(doMatch){
                //res.json({message:"signin successfull"})
                const token = jwt.sign({_id: savedUser._id},JWT_SECRET)
                res.json({token})
            } else {
                return res.status(422).json({error:"Invalid username or password"})
            }
        })
        .catch(error => {
            console.log(error)
        })
    })
})

module.exports = router;
