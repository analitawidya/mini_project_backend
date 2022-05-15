require('dotenv').config()

const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const fs = require('fs')

const {connection} = require('./config/mysql');

const account = require ('./routes/account')
const product = require ('./routes/product')
const bodyParser = require('body-parser');
app.use(bodyParser.json())

app.use('./register', account);

app.use('/products', product);

const {convertDate} = require ('./services/function');
const { Router } = require('express');




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
