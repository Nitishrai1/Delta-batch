const express = require("express");
const app = express();
// console.dir(app);

let port = 8081;
app.listen(port,()=>{
    console.log(`app listening on port ${port}`);
});


// app.use: this function is used to send the request
app.use((req,res)=>{
    console.log("Request recieved");
});

// Sending a Response
// express convert the response in the form of object
// sending request
app.use((req,res)=>{
    console.log("request recieved");
    res.send({
        name:"apple",
        color:"red",
    });
});

// Routing: it is process of selecting a path for traffic in a netwrok or between or across multiple networks
// app.get() it is used to send the request
app.get("/",(req,res)=>{
    res.send("you contacted root path");
});
app.get("/apple",(req,res)=>{
    res.send("you contacted root path");
});

app.get("/search",(req,res)=>{
    res.send("you contacted root path");
});

app.get("*",(req,res)=>{    //* means all path
    res.send("you contacted root path");
});

app.post("/",(req,res)=>{   
    res.send("you contacted root path");
});