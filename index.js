const express=require('express')
const dotenv=require('dotenv').config()
const Connection=require('./database/db')
const Auth=require('./routes/users')
const Product=require('../Server/routes/products')
const Cart=require('../Server/controller/cart')
const port=process.env.PORT
const app=express()


app.use(express.json())


app.use('/api/auth',Auth)
app.use('/api/product',Product)
app.use('/api/cart',Cart)
// app.use('/pay')

Connection()


app.listen(port,()=>console.log(`Server is running on http://localhost:${port}`))