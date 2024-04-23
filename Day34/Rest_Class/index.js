const express=require("express");
const app=express();
const port=8080;
const path=require("path");
app.use(express.urlencoded({extended:true}));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));



let posts=[
    {
        username:"nitishrai",
        content:"i love coding"
    },
    {
        username:"mihir",
        content:"i love coding"
    },{
        username:"rohan",
        content:"i love coding"
    }, 
]


app.get("/posts",(req,res)=>{   //view route or index route
    res.render("index.ejs",{posts});
});

app.listen(port,()=>{
    console.log(`App listining on the port ${port}`);
});
