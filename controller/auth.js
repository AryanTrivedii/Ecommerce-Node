const bcrypt=require('bcrypt')
const User=require("../modals/usermodal")
const jwt=require("jsonwebtoken")
const mongoose=require("mongoose")

const register=async(req,res)=>{
    try {
const {firstname,lastname,password,email,number}=req.body
if(!firstname || !lastname ||!password || !email ||!number){
    res.json({
        msg:"All fields are required"
    })
}
const existingUser= await User.findOne({email:email})
if(existingUser){
   return  res.status(400).json({
        status:false,
        msg:"User already exists"
    })
}
const hasshedPassword= await bcrypt.hash(password,10)
const newUser =await new User({
    firstname:firstname,
    lastname:lastname,
    password:hasshedPassword,
    email:email,
    number:number
})

await newUser.save()
res.status(200).json({
    status:true,
    msg:"user registration is sucesfull",
    data:newUser
})
    } catch (error) {
        console.log(error)
        res.status(500).json({
            status:false,
            msg:error
        })
    }
}

const login=async(req,res)=>{
try {
    const {email,password}=req.body
    const userEmail=await User.findOne({email:email})
    if(!userEmail){
    return    res.status(400).json({
            status:false,
            msg:'No email found'
        })
    }
    const comparePassword=await bcrypt.compare(password,userEmail.password)
    if(!comparePassword){
     return   res.status(400).json({
            status:false,
            msg:"Password dosent match"
        }) 
    }
    const token= await jwt.sign(email,'123')
    res.status(200).json({
        status:true,
        msg:"login successfull",
        data:token
    })
} catch (error) {
    res.status(500).json({
        status:false,
        msg:error
    })}

}


const updateUser=async(req,res)=>{
const {id}=req.params
  try {
  const {firstanme,lastname,password,number}=req.body 
  if(password){
   var hasshedPassword= await bcrypt.hash(password,10)
  }
   const updateuser=await User.findByIdAndUpdate(id,{
    firstanme:firstanme,
    lastname:lastname,
    number:number,
    password:hasshedPassword
   })
if(!updateuser){
    res.status(400).json({
        status:false,
        msg:"User not updte"
    })
}
res.status(200).json({
    status:true,
    msg:"user updated sucessfully",
    data:updateuser
})
    } catch (error) {
       console.log(error) 
       res.status(500).json({
        status:false,
        msg:error
    })
    }
}

const getAll=async(req,res)=>{
try {
 const users= await User.find()
 res.status(200).json({
    status:true,
    msg:users
 })   
} catch (error) {
console.log(error)
res.status(500).json({
status:false,
msg:error
})}
}

const getUser=async(req,res)=>{
try {
const id=req.params.id
const validId=mongoose.Types.ObjectId.isValid(id)
if(!validId){
return res.json("Id is not Valid")
}
const user= await User.findById(id)
res.status(200).json({
    status:true,
    msg:user
})    
} catch (error) {
    console.log(error)
    res.status(500).json({
    status:false,
    msg:error
    })  
}
}

const delUser=async(req,res)=>{
    try {
 const id=req.params.id
 const validId=await mongoose.Types.ObjectId.isValid(id)
 if(!validId){
return res.json("Invalid Id")
 }
 const delUser= await User.findByIdAndDelete(id)
 res.status(200).json({
    status:true,
    msg:"USer delelted sucessfuly",
    data:delUser

 })       
 } catch (error) {
console.log(error)
res.status(500).json({
status:false,
msg:error
})
    }
}

module.exports={
    register,
    login,
   updateUser,
   getAll,
   getUser,
   delUser
}

