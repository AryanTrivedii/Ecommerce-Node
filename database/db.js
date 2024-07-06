const mongoose=require("mongoose")
const url=process.env.URL
const Connection=async()=>{
   try {
      await  mongoose.connect(url)
      console.log(" Database Connected Sucessfully")
    
   } catch (error) {
      console.log("Failure in Database Connection")
   }
}



module.exports=Connection