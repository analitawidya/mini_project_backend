const express = require ('express')
const fs = require ('fs')
const router = express.Router()
const controllerProduct = require('../controllers/product')
const jwt = require('jsonwebtoken')



const product = [{
    name : 'buku',
    quantity : '50',
    price : '35000'

}];


router.get('/', controllerProduct.getProduct)


  router.post('/',controllerProduct.createProduct)


  router.delete ('/',controllerProduct.deleteProduct)

  router.put ('/',controllerProduct.updateProduct)

  module.exports = router