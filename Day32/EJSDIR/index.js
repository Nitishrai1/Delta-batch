// Templating: template used to create a layout
// EJS(Embedded JavaScript templates) :ejs is a simple templating langauge that lets you generate HTML markup with plain javascript.
const express=require("express");
const app=express();
const port=8082;
const path=require("path");


app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));
// app.set this method is used to set the veiew eninge

app.get("/",(req,res)=>{
    // res.send("this is home");
    res.render("home");
})

// interpolation syntax
// interpolation refers to embedding expressions into marked up text


// passing datao to ejs 
app.get("/rolldice",(req,res)=>{
    let dicevalue=Math.floor(Math.random()*6)+1;
    res.render("rolldice",{dicevalue}); 
})

app.listen(port,()=>{
    console.log(`Connected on port ${port}`);
})  

// Creating a instagram use template with EJS
// app.get("/ig/:username",(req,res)=>{
//     let {username}=req.params;
//     // console.log(username);
//     res.render("instagram",{username});
// })

// code for loops
// app.get("/ig/:username",(req,res)=>{
//     const followers=["Nitish","Bob","Steive","Mihir"];
//     let {username}=req.params;   //this line is used to get the paramerter from the user
    
//     // console.log(username);
//     res.render("instagram",{username,followers});
// })


// Accesing the data.json file
app.get("/ig/:username",(req,res)=>{
    let {username}=req.params;
   const instaData=require("./data.json");
//    console.log(instaData);
    const data=instaData[username];
    console.log(data);
   res.render("instagram.ejs",{data});
})
 
 