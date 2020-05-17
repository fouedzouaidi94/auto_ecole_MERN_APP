const express = require('express')
const  router= express.Router()
const user= require('../../models/users')

router.post('/', async(req,res)=>{
    try {
        const{cin,name,firstname,birthday,email,tel,userType}=req.body
        const searchCin= await User.findOne({cin})
          console.log("usercin is ",cin)
          if (searchCin) return res.status(400).json({msg:"user already exists"})
        const newUser= new User({cin,name,firstname,birthday,email,tel,userType})
        const users= await newUser.save()
        res.json(users)
    } catch (err) {
        console.log(err.message)
    }
})
router.get('/', async(req,res)=>{
    try{
    const users= await User.find()
    users.length===0 ? res.status(400).json({msg:"object is empty"}):res.json(users)}
    catch{
        console.err(err)
    }
})
router.get('/:cin', async(req,res)=>{
    try{
        let cin=req.params.cin
    const users= await user.find({cin:cin})
    users.length===0 ? res.status(400).json({msg:"user not existing"}):res.json(users)}
    catch{
        console.err(err)
    }
})
router.delete('/:id', async(req,res)=>{
    try {
        let id_user=req.params.id
        await User.findOneAndDelete({_id:id_user})
        res.send({success:true})
    } catch (err) {
        console.error(err.message)
        res.send({success:false}) 
    }
})
router.put('/:id', async(req,res)=>{
    try {
        const userList=req.body
        await user.findByIdAndUpdate({_id:req.params.id},{$set:{...userList}})
        res.send({success:true})

    } catch (error) {
        console.error(err.message)
        res.send({success:false})
    }
})











module.exports= router
