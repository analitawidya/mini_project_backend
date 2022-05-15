const express = require ('express')
const fs = require ('fs')
const router = express.Router()
const controllerAccount = require('../controllers/account')
const jwt = require('jsonwebtoken')



const account = [{
    password : '56789',
    name : 'Rayzen',
    address : 'jakarta',
    phone_number : '08521111'

}];


router.get('/',(req,res,next) => {
  //authentication
  console.log(req.headers)
  const validate = jwt.verify(req.headers.authorization, 'secret')
  if (validate) {
    next ()

  } else {
    res.status(401)
  }

},controllerAccount.getAccount)


  router.post('/login', controllerAccount.login)


  router.delete ('/', controllerAccount.deleteAccount)

  module.exports = router