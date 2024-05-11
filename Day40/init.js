const mongoose=require("mongoose");
const Chat=require("./models/chat.js")


main().then(()=>{console.log("connection succesfull")}).catch(err=>console.log(err));
async function main(){
    await mongoose.connect('mongodb://localhost:27017/Chat-app');
}

let allchats=[
    {
        from:"nitish",
        to:"preeti",
        message:"send the notes for the test",
        created_at:new Date(),
    },
    {
        from:"rohit",
        to:"neha",
        message:"send the notes for the test",
        created_at:new Date(),
    },
    {
        from:"mohan",
        to:"roshni",
        message:"send the notes for the test",
        created_at:new Date(),
    },
    {
        from:"mihir",
        to:"anvi",
        message:"send the notes for the test",
        created_at:new Date(),
    },
]

Chat.insertMany(allchats);

