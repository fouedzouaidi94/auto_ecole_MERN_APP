const express = require('express')
const  router= express.Router()
const exam= require('../../models/exam')

router.post('/', async(req,res)=>{
    try {
        const{listNum,convNum,date,hour,cinCandidate,examType}=req.body
        const newExam= new Exam({listNum,convNum,date,hour,cinCandidate,examType})
        const exams= await newExam.save()
        res.json(exams)
    } catch (err) {
        console.log(err.message)
    }
})
router.get('/', async(req,res)=>{
    try{
    const exams= await Exam.find()
    exams.length===0 ? res.status(400).json({msg:"object is empty"}):res.json(exams)}
    catch{
        console.err(err)
    }
})
router.get('/:cin', async(req,res)=>{
    try{
        let cin=req.params.cin
    const exams= await exam.find({cinCandidate:cin})
    exams.length===0 ? res.status(400).json({msg:"user has no training sessions"}):res.json(exams)}
    catch{
        console.err(err)
    } 
})
router.delete('/:id', async(req,res)=>{
    try {
        let id_exam=req.params.id
        await Exam.findOneAndDelete({_id:id_exam})
        res.send({success:true})
    } catch (err) {
        console.error(err.message)
        res.send({success:false}) 
    }
})
router.put('/:id', async(req,res)=>{
    try {
        const examList=req.body
        await exam.findByIdAndUpdate({_id:req.params.id},{$set:{...examList}})
        res.send({success:true})

    } catch (error) {
        console.error(err.message)
        res.send({success:false})
    }
})











module.exports= router
