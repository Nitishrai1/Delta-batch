// Get-Request: it is used to get some response like data sent in query strings (linited,string data & visible in url)


// Post request: used to post something (for creeate/write/update) data send via request body (any type of data)

const express=require("express");
const app=express();
const port=8080;

app.get("/register",(req,res)=>{
    res.send("standard GET response");
})
app.post("/register",(req,res)=>{
    res.send("standard post response")
})

app.listen(port,()=>{
    console.console.log("Server connected");
})