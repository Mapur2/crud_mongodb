 const Task=require("../model/Tasks")

const gettask=async (req,res)=>{
    const tasks = await Task.find({})
    res.status(200).send(tasks)
}
const create=async (req,res)=>{
    const task=await Task.create(req.body)
    res.status(201).json(task)
    console.log(req.body)
}
const getsingle=async (req,res)=>{
    try {
        const task=await Task.findById(req.params.id)
        if(!task)
        res.status(404).json({msg:"Not found"})
        else
        res.status(200).json(task)
    } catch (error) {
        res.send()
    }
}
const update=async (req,res)=>{
    try {
        
        const task=await Task.findByIdAndUpdate(req.params.id,req.body)
        if(!task)
        {
            res.status(404).send("Not found")
        }
        else
            res.status(200).send(task)
    } catch (error) {
        res.send(error)
    }
}
const remove=async (req,res)=>{
    try {
        const task=await Task.findByIdAndDelete(req.params.id)
        if(!task)
        res.status(404).json({msg:"Not found"})
        else
        res.status(200).json({task})
    } catch (error) {
        res.status(404).json(error)
    }
}
module.exports={
    gettask,
    getsingle,
    update,
    create,
    remove
}