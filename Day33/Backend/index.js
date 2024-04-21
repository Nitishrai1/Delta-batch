// Get-Request: it is used to get some response like data sent in query strings (linited,string data & visible in url)


// Post request: used to post something (for creeate/write/update) data send via request body (any type of data)

const express=require("express");
const app=express();
const port=8082;
app.use(express.urlencoded({extended:true}));   //this is used so that whenever the data come from frontend in the url encoded format then the express can understand the data by parsing it
app.use(express.json());   //this is used to parse the json data so that the express can understand the json data also


app.get("/register",(req,res)=>{  //when this is executed the username and password go through the url
    let {user,password}=req.query;
    res.send(`Standard GET response. Welcome ${user}! and password ${password}`);
})
app.post("/register",(req,res)=>{   //when this is executed the username and password do not go through url hence it is more secure
    let {user,password}=req.body;
    res.send(`standard post response welcome ${user} password ${password}`)
})

app.listen(port,()=>{
    console.log("Server connected");
});
