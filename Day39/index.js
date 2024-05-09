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
});

const User=mongoose.model("User",userSchema);   //this is used to create a collection fot the database and the same name is given to the collection and the variable this is a class
const1=user1=new User({name:"nitish",email:"nitishraigkp007@gmail.com",age:22});

user1.save();

const1=user2=new User({name:"Mihir",email:"mihirgkp007@gmail.com",age:22});

user2.save().then((res)=>{console.log(res)}).catch((err)=>{console.log(err)});