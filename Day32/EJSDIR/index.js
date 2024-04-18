// Templating: template used to create a layout
// EJS(Embedded JavaScript templates) :ejs is a simple templating langauge that lets you generate HTML markup with plain javascript.
const express=require("express");
const app=express();
const port=8082;
const path=require("path");

app.listen(port,()=>{
    console.log(`Connected on port ${port}`);
})  
 
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
    
})