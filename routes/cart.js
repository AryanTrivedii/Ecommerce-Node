const express=require('express')
const router=express.Router()
const Cart=require('../controller/cart')

router.post('/addtocart/:id',Cart.addtoCart)
// router.get('/getcart',C)
// router.delete('/del',Cart.delCart)



module.exports=router
