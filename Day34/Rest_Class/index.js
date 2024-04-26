const express=require("express");
const app=express();
const port=8081;
const path=require("path");
app.use(express.urlencoded({extended:true}));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));



let posts=[
    {
        id:"1e",
        username:"nitishrai",
        content:"i love coding"
    },
    {
        id:"1t",
        username:"mihir",
        content:"i love coding"
    },
    {
        id:"1o",
        username:"rohan",
        content:"i love coding"
    }, 
]


app.get("/posts",(req,res)=>{   //view route or index route
    res.render("index.ejs",{posts});
});

app.get("/posts/new",(req,res)=>{
    res.render("new.ejs")
});
app.post("/posts",(req,res)=>{
    let {username,content}=req.body;
    posts.push({username,content});
    // res.send("post request working");  //we can use res.redirect() to redirecct to some other document
    res.redirect("/posts");
});
// Setting the route to get the information of the specific id
app.get("/posts/:id",(req,res)=>{   //view route or index route
    let {id}=req.params;
    let post=posts.find((p)=>id===p.id);
    res.render("show.ejs",{post});
    res.send("Request working");
});

app.listen(port,()=>{
    console.log(`App listining on the port ${port}`);
});
