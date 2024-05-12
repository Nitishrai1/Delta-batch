const express=require("express");
const app=express();
const mongoose=require("mongoose");
const chat=require("./models/chat.js")

const path=require("path");

app.use(express.static(path.join(__dirname,"public")))

app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");

main().then(()=>{console.log("connection succesfull")}).catch(err=>console.log(err));
async function main(){
    await mongoose.connect('mongodb://localhost:27017/Chat-app');
} 

let chat1=new chat({
    from:"neha",
    to:"niiths",
    msg:"hello nitish how are you",
    created_at:new Date()
})

chat1.save().then((res)=>{console.log(res)}).catch((err)=>{console.log(err)})



// Index Route
app.get("/chats", async (req,res)=>{
   let chats = await chat.find();
   console.log(chats);
    res.render("index.ejs",{chats});
})




app.get("/",(req,res)=>{
    res.send("App working");
})

app.listen(8081,()=>{
    console.log(`Port connected at port ${8081}`)
})