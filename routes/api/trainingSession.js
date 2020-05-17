const express = require('express')
const  router= express.Router()
const trainingSession= require('../../models/trainingSession')

router.post('/', async(req,res)=>{
    try {
        const{cinCandidate,cinMonitor,registarionNumber,date,hour,typeTraining}=req.body
        
        const newTrainingSession= new trainingSession({cinCandidate,cinMonitor,registarionNumber,date,hour,typeTraining})
        const trainingSessions= await newTrainingSession.save()
        res.json(trainingSessions)
    } catch (err) {
        console.log(err.message)
    }
})
router.get('/', async(req,res)=>{
    try{
    const trainingSessions= await trainingSession.find()
    trainingSessions.length===0 ? res.status(400).json({msg:"object is empty"}):res.json(trainingSessions)}
    catch{
        console.err(err)
    }
})
router.get('/:cin', async(req,res)=>{
    try{
        let cin=req.params.cin
    const trainingSessions= await trainingSession.find({cinCandidate:cin})
    trainingSessions.length===0 ? res.status(400).json({msg:"candidate has no training sessions"}):res.json(trainingSessions)}
    catch{
        console.err(err)
    }
})

router.delete('/:id', async(req,res)=>{
    try {
        let id_trainingSession=req.params.id
        await trainingSession.findOneAndDelete({_id:id_trainingSession})
        res.send({success:true})
    } catch (err) {
        console.error(err.message)
        res.send({success:false}) 
    }
})
router.put('/:id', async(req,res)=>{
    try {
        const trainingSessionList=req.body
        await trainingSession.findByIdAndUpdate({_id:req.params.id},{$set:{...trainingSessionList}})
        res.send({success:true})

    } catch (error) {
        console.error(err.message)
        res.send({success:false})
    }
})











module.exports= router
