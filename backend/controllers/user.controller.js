import User from "../models/user.model.js";
import validator from 'validator';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken';


const createToken = (id) =>{
    return jwt.sign({id},process.env.JWT_SECRET,{expiresIn:'30d'});
}

export const loginUser =async(req ,res)=> {
    try {
        const { email , password } = req.body;

        const user = await User.findOne({email});
        if(!user){
            return res.json({success:false,message:"User not Exists"})
        }
        const isMatch = await bcrypt.compare(password,user.password);
        if(isMatch){
            const token =  createToken(user._id);

            res.json({success:true, message:"Loging successful",token})
        }else{
            res.json({success:false, message:"Invalid email and password"})
        }
    } catch (error) {
        console.log(error)
        res.json({success:false, message:"Server error"})
    }
};

export const registerUser = async (req,res)=> {
    try {
        const {name,email,password} = req.body;

        const exists = await User.findOne({email})
        if(exists){
           return res.status(400).json({success:false , message:"User already exists"})
        }
        if(!validator.isEmail(email)){
            return res.status(400).json({success:false, message:"Enter a valid email"})
        }
        if(password.length < 6 ){
            return res.json({success:false, message:"Password must be at least 6 characters"})
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);
        const newUser = await User.create({name,email,password:hashedPassword});

        const user = await newUser.save();

        const token = createToken(user._id);

        res.json({success: true, token})
        // return res.status(201).json({success:true, message:"User created successful"});

    } catch (error) {
        console.log(error);
        res.status(500).json({success:false, message:"Server error"})
    }
};

export const logout = async(req,res) => {

};

export const adminLogin = async(req,res) => {

    try {
        const {email,password} = req.body;

        if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){
            const token = jwt.sign(email+password,process.env.JWT_SECRET);

            res.json({success:true,token})

        }else{
            res.json({success:false,message:"Invalid email and password of admin"})
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({success:false, message:"Server error"})
    }
};