const express=require("express");
const app=express();
const mongoose=require("mongoose");
const chat=require("./models/chat.js")
const methodoverride=require("method-override")
const path=require("path");

app.use(express.static(path.join(__dirname,"public")))
app.use(express.urlencoded({extended:true}))
app.use(methodoverride("_method"));  //this is used to use the method 0verruide for the put api
app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");

main().then(()=>{console.log("connection succesfull")}).catch(err=>console.log(err));
async function main(){
    await mongoose.connect('mongodb://localhost:27017/Chat-app');
} 


// this is schema for the data base
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
   
    res.render("index.ejs",{chats});
})


// new route
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
        created_at:new Date()

    });
    newChat
    .save()
    .then((res)=>{console.log("chat was saved");

    })
    .catch((err)=>{console.log(err)});    
    res.redirect("/chats"); 
})


// its a get api for home page
app.get("/",(req,res)=>{
    res.send("App working");
})

// this is edit route
app.get("/chats/:id/edit",async(req,res)=>{
    let {id}=req.params;
    let Chat=await chat.findById(id);



    res.render("edit.ejs",{Chat});
})

// this is the update route
app.put("/chats/:id",async(req,res)=>{
    let {id}=req.params;
    let {msg:newmsg}=req.body;
    console.log(newmsg);
    let updatedchat=await chat.findByIdAndUpdate(id,{msg:newmsg},{runValidators:true,new:true});
    console.log(updatedchat);
    res.redirect("/chats")

})

// delete route
app.delete("/chats/:id",async(req,res)=>{
    let {id}=req.params;
    let deleted_chat=await chat.findByIdAndDelete(id);
    console.log(`chat deleted = ${deleted_chat}`);
    res.redirect("/chats");
})

// createing a port for the host to list
app.listen(8081,()=>{
    console.log(`Port connected at port ${8081}`)
})