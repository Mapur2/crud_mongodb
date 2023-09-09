const os = require('os');
console.log(os.userInfo())
console.log(os.uptime())

const connectdb=require("./db/connect")
const Task=require("./model/Tasks")
const express = require('express');
const app=express()
const tasks = require('./pages/task');
app.use("/tasks",tasks)

const start= async ()=>{
    try {
        await connectdb()
        app.listen(8080,console.log("started"))
    } catch (error) {
        console.log(error)
    }
}
start()