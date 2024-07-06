const  mongoose= require('mongoose')
const Schema=mongoose.Schema
const Product=require('../modals/productmodal')
const User= require('../modals/usermodal')

const cartschema= mongoose.Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    products: [{
        product: {
            type: Schema.Types.ObjectId,
            ref: 'Product',
        },
        quantity: {
            type: Number,
            required: true,
            default: 1
        },
        totalPrice: {
            type: Number,
            required: true
        }
    }],
    payMethod: {
        type: String,
        enum: ["Online", "Offline"],
        required: true,
        default :"Online"
    },
    created: {
        type: Date,
        default: Date.now
    }
});
const Cart= mongoose.model("Cart",cartschema)

module.exports=Cart