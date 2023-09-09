const mongoose = require('mongoose');
const schema=new mongoose.Schema({
    name:String,
    complete:Boolean
})

module.exports=mongoose.model("Task",schema)