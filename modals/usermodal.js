const mongoose=require('mongoose')


const userschema=mongoose.Schema({
firstname:{
    type:String,
    required:true,
},
lastname:{
     type:String,
     required:true

},
password:{
     type:String,
     required:true
},
email:{
     type:String,
     required:true
     },
 number:{
          type:Number,
          required:true
 },

})


const User=mongoose.model("User",userschema)

module.exports=User

