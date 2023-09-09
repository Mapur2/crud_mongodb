const mongoose = require('mongoose');

const uri="mongodb://localhost:27017/learn"


const connectdb=(url)=>{
    return mongoose.connect(uri,{
        /* userNewUrlParser:true,
        useCreateIndex:true,
        useFindAndModify:false,
        useUnifiedTopology:true */
        family: 4
    })
} 

module.exports=connectdb