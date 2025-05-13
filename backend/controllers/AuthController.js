import jwt from 'jsonwebtoken';
import { redis } from '../lib/redis.js';
import User from "../model/userSchema.js";


const genrateToken = async(userId)=>{
    const refreshToken = jwt.sign({userId},process.env.REFRESH_TOKEN,{expiresIn:"7d"});
    const accessToken = jwt.sign({userId},process.env.ACCESS_TOKEN,{expiresIn:"15m"});
    
    return {refreshToken,accessToken};
    
}

const setRefreshToken = async(userId,refreshToken)=>{
    await redis.set(`E-Library_RefreshToken${userId}`,refreshToken,"EX",7*24*60*60*100)
}

const setCookies = async(res,refreshToken,accessToken)=>{
    res.cookie("accessToken",accessToken,{
        httpOnly:true,
        secure:process.env.NODE_ENV ==="production" ? true : false,
        sameSite:"strict",
        maxAge:15*60*1000,
    })
    res.cookie("refreshToken",refreshToken,{
        httpOnly:true,
        secure:process.env.NODE_ENV ==="production" ? true : false,
        sameSite:"strict",
        maxAge:7*24*60*60*1000,
    })
}

export const signup = async(req,res)=>{
    const{email,password,name} = req.body;
    const emailRegx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/

    if(!email || !password || !name) return res.status(400).json({message:"All fields are required"});

    if(!emailRegx.test(email)) return res.status(400).json({message:"Enter a valid email"})

    if(password.length<6) return res.status(400).json({message:"Password must be 6 characters long"});

    if(!passwordRegx.test(password)) return res.status(400).json({message:"Password must contain at least one digit and one uppercase character"})

    try {
        const existingUser = await User.findOne({email});
        if(existingUser) return res.status(400).json("Email is already in use");
        const newUser = await User.create({
            name,
            email,
            password
        })
        const user = {
            id: newUser._id,
            email:newUser.email,
            name:newUser.name
        }
        const {refreshToken,accessToken} = await genrateToken(user._id)
        setRefreshToken(newUser._id,refreshToken)
        return res.status(201).json({message:"User created successfully",user})
    } catch (error) {
        console.error(`Error in signup Controller: ${error.message}`)
        return res.status(500).json({message:"Internal Server Error"})
    }
}

export const login  = async(req,res)=>{
    const{email,password} = req.body;
    if(!email || !password) return res.status(400).json({message:"All fields are required"});
    try {
        const user = await User.findOne({email});
        if(!user) {
            return res.status(400).json({message:"Invalid Credentials"});
        }
        const isAuthenticated = await user.comparePassword(password);
        if(!isAuthenticated) return res.status(400).json({message:"Invalid Credentials"})
        
        const {refreshToken,accessToken} = await genrateToken(user._id)
        setRefreshToken(user._id,refreshToken)
        await setCookies(res,refreshToken,accessToken);
        const userDetail = {
            id:user._id,
            name:user.name,
            email:user.email,
            role:user.role
        }

        return res.status(200).json({message:"User logged in successfully",userDetail})
    } catch (error) {
        console.error(`Error in login Controller:${error.message}`)
        return res.status(500).json("Server Error")
    }
}

export const logout = async (req, res) => {
    const accessToken = req.cookies.accessToken;
    const refreshToken = req.cookies.refreshToken;

    if (!refreshToken || !accessToken) {
        return res.status(400).json({ message: "Token not found" });
    }

    res.clearCookie("accessToken", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production" ? true : false,
        sameSite: "strict",
    });

    res.clearCookie("refreshToken", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production" ? true : false,
        sameSite: "strict",
    });

    return res.status(200).json({ message: "User logged out successfully" });
};


export const getProfile = async(req,res)=>{
    try {
        return res.json(req.user);
    } catch (error) {
        res.status(500).json({message:"Server error"})
    }
}