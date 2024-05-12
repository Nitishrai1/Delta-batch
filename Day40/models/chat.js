
const mongoose=require("mongoose");
const chatSchema=new mongoose.Schema({
    from:{
        type:String
    },
    to:{
        type:String
    },
    msg:{
        type:String,
        // message:50
        MaxLength:50
    },
    created_at:{
        type:Date,
        reuired:true
    }

}); 

const Chat=mongoose.model("Chat",chatSchema);
module.exports=Chat;