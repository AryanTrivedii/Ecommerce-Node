const mongoose=require('mongoose')


const productSchema=mongoose.Schema({
name:{
required:true,
type:String    
},
price:{
    type:Number,
    required:true
},
image:{
       type:String,
       
},
rating:{
        type:Number,
        required :true
}
,features:{
         type:String,
         required:true
}})


const Product= mongoose.model("Product",productSchema)
module.exports=Product