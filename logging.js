const express = require('express')
const app  = express()

const productsRouter = require('./routes/products')

const categoriesRouter = require('./routes/categories')

app.use('/products',productsRouter);

app.use('/categories',categoriesRouter)

app.use('*',(req,res) =>{
    res.status(404).send('<h1>Page not found </h1>')
})

app.listen(3000,()=>{
    console.log("server is on port 3000")
})