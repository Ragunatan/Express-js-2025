const express  = require('express')
const router = express.Router()

router.get('/',(req,res,next) =>{
    res.send("Here is the list of all products")
    next()
})

router.post('/',(req,res) =>{
    res.send("A new product has been added")
})

router.get('/',(req,res) =>{
    let method = req.method;
    let endpoint = req.url;
    console.log(`${method} request made to ${endpoint}`)
})


module.exports = router;