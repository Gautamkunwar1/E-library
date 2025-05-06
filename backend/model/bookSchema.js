import mongoose from "mongoose";

const bookSchema =  mongoose.Schema({
    isbn:{
        type:String,
        required:true,
    },
    bookName:{
        type:String,
        required:true,
        minlength: [3, "bookname must be atleast of 3 characters"],
        maxlength: [60, "bookname not be greater than 60 characters"]
    },
    author:{
        type:String,
        required:true,
        minlength: [3, "bookauthor name must be atleast of 3 characters"],
        maxlength: [50, "bookauthor name not be greater than 50 characters"]
    },
    publishYear:{
        type:Number,
        required:true,
    },
    desc:{
        type:String,
        required:true
    },
    genre:{
        type:String,
        required:true,
    },
    image:{
        type:String,
    },
    pdf:{
        type:String,
    }
},  
    {timestamps:true},
)

const book = new mongoose.model("allbook",bookSchema);
export default book;