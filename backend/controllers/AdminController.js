import book from "../model/bookSchema.js";
import messages from "../model/msgSchema.js";
import User from "../model/userSchema.js";

export const bookEdit = async(req,res)=>{
    const{id} = req.params;
    const bookData = req.body;
    try {
        const updatedBook = await book.findByIdAndUpdate(id,bookData,{new:true});
        if(updatedBook){
        return res.status(201).json({message:"Book updated successfully",data:updatedBook});
        }else{
            return res.status(404).json({message:"Book not found"})
        } 
    } catch (error) {
        return res.status(500).json({message:"Book update failed",error:error.message});
    }
}

export const deleteBook = async(req,res)=>{
    const {id} = req.params;
    try {
        const deletedBook = await book.findByIdAndDelete(id);
        if(deletedBook){
            return res.status(201).json({message:"Book deleted successfully"});
        }else{
            return res.status(400).json({message:"Book not found"})
        }
    } catch (error) {
        return res.status(500).json({message:"Server error",error:error.message})
    }
}

export const deleteUser = async(req,res)=>{
    const {id} = req.params;
    try {
        const user = await User.findByIdAndDelete(id);
            if(user){
            return res.status(201).json({message:"User deleted successfully"});
        }else{
            return res.status(400).json({message:"User not found"});
        }
    } catch (error) {
        return res.status(500).json({message:"Server Error"});
    }
}

export const deleteMsg = async(req,res)=>{
    const {id} =req.params;
    try {
        const msg = await messages.findByIdAndDelete(id);
        if(msg){
            return res.status(200).json({message:"User's message deleted successfully"});
        }else{
            return res.status(400).json({message:"Msg not found"});
        }
    } catch (error) {
        return res.status(500).json({message:"Internal server Error"});
    }
}