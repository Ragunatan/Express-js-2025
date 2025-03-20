const express = require('express')
const app  = express()

app.get('/products',(req,res,next) =>{
    res.send("Here is the list of all products")
    next()
})

app.post('/products',(req,res) =>{
    res.send("A new product has been added")
})

app.get('/products',(req,res) =>{
    let method = req.method;
    let endpoint = req.url;
    console.log(`${method} request made to ${endpoint}`)
})
app.get('/categories',(req,res) =>{
    res.send("Here is the list of categories")
})

app.post('/categories',(req,res) =>{
    res.send("A new category has been created")
})

app.use('*',(req,res) =>{
    res.status(404).send('<h1>Page not found </H1>')
})

app.listen(3000,()=>{
    console.log("server has is on port 3000")
})