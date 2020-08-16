const express = require('express');
const cors = require('cors')
const app = express();
const port = 5000;
const mongoose = require('mongoose')
const {MONGOURI} = require('./key')

require('./models/user')
require('./models/product')
mongoose.model('User')

app.use(cors())
app.use(express.json())
app.use(require('./routes/auth'))
app.use(require('./routes/product'))

mongoose.connect(MONGOURI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
mongoose.connection.on('connected',()=>{
    console.log('connected to mongodb successfully')
})
mongoose.connection.on('error',(error)=>{
    console.log('error connection',error)
})


app.listen(port,()=>console.log('Server connected to port',port))

