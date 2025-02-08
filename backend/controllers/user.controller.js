import { validationResult } from "express-validator";
import userModel from "./../models/user.model.js";
import createUser from "../services/user.service.js";
import BlacklistToken from './../models/blacklistToken.model.js';

const userRegister = async (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(400).json({ error: error.array() });
  }

  try {
    const { fullname, email, password } = req.body;
    const hashedPassword = await userModel.hashPassword(password);

    const user = await createUser({
      fullname: {
        firstname: fullname.firstname,
        lastname: fullname.lastname,
      },
      email,
      password: hashedPassword,
    });
    const token =  user.generateAuthToken();
    res.status(201).json({ user, token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "server error" });
  }
};


const loginUser=async(req,res,next)=>{
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(400).json({ error: error.array() });
  }

  const {email,password}=req.body;

  const user=await userModel.findOne({email}).select("+password");

  if(!user)
  {
    return res.status(400).json({error:"Invalid email or password"});
  }

  const isMatch=await user.comparePassword(password);

  if(!isMatch)
  {
    return res.status(400).json({error:"Invalid email or password"});
  }
  const token=user.generateAuthToken();
  res.status(200).json({user,token});

};


const getUserProfile=async(req,res,next)=>{
 res.json(req.user);
};

const logOutUser=async(req,res,next)=>{
  res.clearCookie("token");
  const token=req.cookies.token || req.headers.authorization?.split(" ")[1];
  await BlacklistToken.create({token})
  res.json({message:"Logged out successfully"});
 }

export { userRegister,loginUser,getUserProfile,logOutUser };
