const express=require("express");
const app=express();
const mongoose=require("mongoose");
const chat=require("./models/chat.js")

const path=require("path");

app.use(express.static(path.join(__dirname,"public")))
app.use(express.urlencoded({extended:true}))

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


// new chat
app.get("/chats/new",(req,res)=>{
    res.render("new.ejs");
})

// create route
app.post("/chats",(req,res)=>{
    let {from, to , msg}=req.body;
    let newChat=new chat({
        from:from,
        to:to,
        msg:msg,
        create_at:new Date()

    });
    newChat
    .save()
    .then((res)=>{console.log("chat was saved");

    })
    .catch((err)=>{console.log(err)});    
    res.send("working");    
})


// its a get api for home page
app.get("/",(req,res)=>{
    res.send("App working");
})


// createing a port for the host to list
app.listen(8081,()=>{
    console.log(`Port connected at port ${8081}`)
})