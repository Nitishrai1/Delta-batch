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
// const user1=new User({name:"nitish",email:"nitishraigkp007@gmail.com",age:22});

// user1.save();

// const user2=new User({name:"Mihir",email:"mihirgkp007@gmail.com",age:22});
// // saving a single data inside the mongodb
// user2.save().then((res)=>{console.log(res)}).catch((err)=>{console.log(err)});

// inserting the multiple data inside a mongodb
User.insertMany([
  {name:"Rohan",email:"rohan@getMaxListeners.com" , age:21},
  {name:"Manish",email:"manish@getMaxListeners.com" , age:21},
  {name:"Gaurav",email:"Gaurav@getMaxListeners.com" , age:21}
])

// Operation Buffering: Mongoose lets you start using your model immediatly without waiting for mongoose to establise a conenction to MongoDB

// Getting the data
// User.find().then((data)=>{console.log(data)}).catch((err)=>console.log(err))  //geting all the data from the database

// Getting the data based on some condition
User.find({age:{$gt:21}}).then((data)=>{console.log(data[0])}).catch((err)=>{console.log(err)});  //this is object not a promise but we can use then with this method

// Update
// Model.updateOne()

User.updateOne({name:"Rohan"},{age:25}).then((res)=>{console.log(res)}).catch((err)=>{console.log(err)});


User.findOne({name:"Rohan"}).then((res)=>{console.log(res)});

// updating 
User.findOneAndUpdate({name:"Nitish"},{age:29},{new:true}).then((res)=>{console.log(res)});

// Delete
User.deleteOne({name:"Nitish"}).then((res)=>console.log(res)).catch((err)=>console.log(err));

// Schema validation
const bookSchema=mongoose.Schema({
  title:{
    type:String,
    required:true
  },
  author:{
    type:String,
    required:true
  }
})