const express = require('express')
const app  = express()

app.get('/orders',(req,res) =>{
    res.send("Here is the list of orders")
})

app.post('/orders',(req,res) =>{
    res.send("A new order has been created")
})

app.get('/users',(req,res) =>{
    res.send("Here is the list of users")
})

app.post('/users',(req,res) =>{
    res.send(" new user has been added")
})

app.listen(3000,()=>{
    console.log("server has is on port 3000")
})
