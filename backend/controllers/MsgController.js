import Msg from "../model/msgSchema.js";

export const addMsg = async(req,res)=>{
    const {name,email,msg} = req.body;
    if(!name || !email ||!msg) return res.status(400).json({message:"All Fields are required"});
    if(name.length<4) return res.status(400).json({message:"Name should be of atleast 4 characters"});
    try {
        const newMsg = await Msg.create({
            name,
            email,
            msg
        })
        return res.status(201).json({message:"Msg sent successfully",newMsg});
    } catch (error) {
        console.error(`Error in addMsg Controller:${error.message}`);
        return res.status(500).json({message:"Server Error"});
    }
}

export const getAllMsg = async(req,res)=>{
    try {
        const allMsg = await Msg.find();
        return res.status(200).json({message:"Data found successfully",allMsg})
    } catch (error) {
        return res.status(500).json({message:"Server Error"});
    }
}