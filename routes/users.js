const express=require('express')
const router=express.Router()
const Auth=require('../controller/auth')

router.post('/register',Auth.register)
router.post('/login',Auth.login)
router.put('/update/:id',Auth. updateUser)

router.get("/all",Auth.getAll)
router.get("/user/:id",Auth.getUser)
router.delete("/del/:id",Auth.delUser)



module.exports=router
