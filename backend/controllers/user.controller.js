import userModel from "../models/user.model.js";
import { validationResult } from "express-validator";
import createUser from "../services/user.service.js";
import BlacklistToken from './../models/blacklistToken.model.js';




const registerUser = async (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(400).json({ error: error.array() });
  }
  try {
    const { fullname, email, password } = req.body;

    const hashedPassword = await userModel.hashPassword(password);
    const user =await createUser({
      fullname: {
        firstname: fullname.firstname,
        lastname: fullname.lastname,
      },
      email,
      password: hashedPassword,
    });
    const token= user.generateAuthToken()
    res.status(201).json({user,token})

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

const loginUser = async (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
      return res.status(400).json({ error: error.array() });
  }
  const { email, password } = req.body;

  const user = await userModel.findOne({ email }).select("+password");

  if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
  }
  const isMatch = await user.comparePassword(password);
  if (!isMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
  }
  const token = user.generateAuthToken();
  res.status(200).json({ user, token });
};

const getUserProfile=async(req,res,next)=>{
   
    res.status(200).json(req.user)
}

const logOutUser = async (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization.split(" ")[1];

  if (token) {
      // Blacklist the token first
      await BlacklistToken.create({ token });
      res.clearCookie('token');
      res.status(200).json({ message: "Logged out successfully" });
  } else {
      res.status(400).json({ message: "No token found" });
  }
};
  

export { registerUser,loginUser,getUserProfile,logOutUser };


