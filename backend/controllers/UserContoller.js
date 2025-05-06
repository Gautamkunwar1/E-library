import User from '../model/userSchema.js';

export const allUsers = async(req,res)=>{
    try {
        const users = await User.find();
        return res.status(200).json({message:"data found successfully",users})
    } catch (error) {
        return res.status(500).json({message :"Server Error"})
    }
}