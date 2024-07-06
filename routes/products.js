const express=require("express")
const router=express.Router()
const Product= require('../controller/products')
const upload= require('../middlewares/multer')

router.post('/addproduct', upload.single('image'),Product.createProduct)
router.get('/all',Product.getProducts)
router.get('/single/:id',Product.getSingle)

module.exports=router