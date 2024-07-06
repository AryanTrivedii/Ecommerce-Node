const Product=require("../modals/productmodal")
const upload=require('../middlewares/multer')
const createProduct=async(req,res)=>{
const{name,price,rating,features}=req.body
const image= req.file? req.file.path : '';
if(!name || !price ||!rating ||!features){
  return   res.status(400).json({
        status:false,
        msg:"Provide all important "
    })
}
const product=await Product({
    name:name,
    price:price,
    image:image,
    rating:rating,
    features:features
})
console.log(product)
product.save()
res.status(200).json({
    status:true,
    msg:"Product added sucessfully"

})
}

const getProducts=async(req,res)=>{
try{
const allProducts= await Product.find()
res.status(200).json({
status:true,
msg:"Product get sucessfully",
data:allProducts
    }) 
}catch(error){
console.log(error)
res.status(500).json({
    status:false,
    msg:error})}
}



const getSingle=async(req,res)=>{
try {
const id=req.params.id
const product=await Product.findById(id)
res.status(200).json({
    status:true,
     msg:"Product get successfull",
     data:product
    
    })
} catch (error) {
console.log(error)
res.status(500).json({
 status:false,
 msg:error})}
}

    


const updateProduct=async(req,res)=>{
const id=req.params.id
try{
    const{name,price,rating,features}=req.body
    const image= req.file? req.file.path : '';
    if(!name || !price ||!rating ||!features){
      return   res.status(400).json({
 status:false,
 msg:"Provide all important "
        })}
const updatedProduct= await Product.findByIdAndUpdate(id,{
    name:name,
    price:price,
    rating:rating,
    image:image,
    features:features
})

res.status(200).json({
    status:true,
    msg:"Product updated sucessfully",
    data:updatedProduct
})
}catch(error){
console.log(error)
res.status(500).json({
    status:false,
    msg:error
})
}}






const deleteProduct=async(req,res)=>{
    try{
        const id=req.params.id
        console.log(id)
        const deleteproduct= await Product.findByIdAndDelete(id)
        console.log("product deleted sucessfully")
        res.status(200).json({
            status:true,
            msg:"product deleted sucessfully",
            data:deleteproduct
        })
    }catch(error){
        console.log(error)
        res.status(200).json({
            status:false,
            msg:error
        })  
    }

}
module.exports={
    createProduct,
    getProducts,
    getSingle,
    deleteProduct,
    updateProduct
}