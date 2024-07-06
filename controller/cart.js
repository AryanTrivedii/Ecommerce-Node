const Product=require('../modals/productmodal')
const Cart=require('../modals/cartmodal')
const user=require('../modals/usermodal')

// const addtoCart = async (req, res) => {
//     try {
//         // const userId = req.params.id;
//         const { userId,productId, quantity, payMethod } = req.body;

//         // Check if the product exists
//         const existingProduct = await Product.findById(productId);
//         if (!existingProduct) {
//             return res.status(404).json("Product not found");
//         }

//         // Find the user's cart
//         let cart = await Cart.findOne({ userId });

//         if (cart) {
//             // Check if the product already exists in the cart
//             const productIndex = cart.products.findIndex(p => p.product.toString() === productId);

//             if (productIndex > -1) {
//                 // If product exists, update the quantity and total price
//                 cart.products[productIndex].quantity += quantity;
//                 cart.products[productIndex].totalPrice += existingProduct.price * quantity;
//             } else {
//                 // If product does not exist, add new product with quantity and price
//                 cart.products.push({ product: productId, quantity, totalPrice: existingProduct.price * quantity });
//             }
//         } else {
//             // If no cart exists for the user, create a new cart
//             cart = new Cart({
//                 userId,
//                 products: [{ product: productId, quantity, totalPrice: existingProduct.price * quantity }],
//                 payMethod
//             });
//         }

//         await cart.save();
//         res.status(200).json(cart);
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({
//             status: false,
//             msg: error.message
//         });
//     }
// };
const addtoCart=async(req,res)=>{
try{

// const userId=req.params.id
// console.log(userId)
const {userId,productId,quantity,payMethod}=req.body
//checking for productId

const existingProduct= await Product.findById(productId)
if(!existingProduct){
    res.status(400).json({
        status:false,
        msg:"Product doesent exists"
    })
}
//checking  for user id 
const cart= await Cart.findOne({userId})

if(cart){
    const cartProduct= await cart.products.findIndex(p => p.product.toString()===productId)
 if(cartProduct){
cart. products[cartProduct].quantity +=quantity
cart. products[cartProduct].totalPrice=quantity*existingProduct.price

   }else{
     cart.products.push({productId,quantity,payMethod,totalPrice:existingProduct.price*quantity})
   }
//if product exists update totlapriocee
//if not then add product

}else{
    const newCart= await new Cart({
     userId:userId,
     products:{productId,quantity,totalPrice:existingProduct.price*quantity,
    payMethod:payMethod
     }
    })
    newCart.save()
}
res.status(200).json({
    status:true,
    msg:"added to cart successfully"
})

}catch(error){
    console.log(error)
    res.status(500).json({
        status:false,
        msg:error
    })
}


}



const getCart=async(req,res)=>{
try{

}catch(error){
    
}}


const delCart=async(req,res)=>{
    try{

    }catch(error){

    }
}
module.exports=addtoCart