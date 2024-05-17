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
        mgg:"send the notes for the test",
        create_at:new Date(),
    },
    {
        from:"rohit",
        to:"neha",
        mgg:"send the notes for the test",
        create_at:new Date(),
    },
    {
        from:"mohan",
        to:"roshni",
        mgg:"send the notes for the test",
        create_at:new Date(),
    },
    {
        from:"mihir",
        to:"anvi",
        mgg:"send the notes for the test",
        create_at:new Date(),
    },
]

Chat.insertMany(allchats);

