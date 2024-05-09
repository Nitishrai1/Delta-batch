// const mongoose=require("mongoose")
// mongoose.connect('mongodb://localhost:27017/Delta-Batch')

const mongoose = require('mongoose');

main().then(()=>{console.log("Connection Successfull");})
.catch((err)=>{console.log(err)})

async function main() {
  await mongoose.connect('mongodb://localhost:27017/Delta-Batch');
}

// Schema defines the shape of the documents within that collection
// ex 
const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    age:Number
})
