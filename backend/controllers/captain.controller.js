import captainModel from "../models/captain.model.js";
import { validationResult } from "express-validator";
import BlacklistToken from './../models/blacklistToken.model.js';


const registerCaptain = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { email, password, fullname, vehicle } = req.body;

    // Hash password before storing
    const hashedPassword = await captainModel.hashPassword(password);

    const captain = await captainModel.create({
      fullname: {
        firstname: fullname.firstname,
        lastname: fullname.lastname,
      },
      email,
      password: hashedPassword,
      vehicle: {
        color: vehicle.color,
        plate: vehicle.plate,
        capacity: vehicle.capacity,
        vehicleType: vehicle.vehicleType,
      },
    });

    // Generate authentication token
    const token = captain.generateAuthToken();

    res.status(201).json({ captain, token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};
const loginCaptain = async (req, res, next) => {
   const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
        const {email,password}=req.body;
        const captain=await captainModel.findOne({email}).select("+password");
        if(!captain){
            return res.status(400).json({error:"Invalid email or password"});
        }
        const isMatch=await captain.comparePassword(password);
        if(!isMatch){
            return res.status(400).json({error:"Invalid email or password"});
        }
        const token=captain.generateAuthToken();
        res.status(200).json({captain,token});  

    } catch (error) {
        console.log(error);
        res.status(500).json({error:"Server error"});
    }
}

const getCaptainProfile=async(req,res,next)=>{
    res.status(200).json(req.captain);
}

const logoutCaptain=async(req,res,next)=>{
    res.clearCookie("token");
    const token=req.cookies.token || req.headers.authorization.split(" ")[1];
    await BlacklistToken.create({token});
    res.status(200).json({message:"Logged out successfully"});


}

export { registerCaptain,loginCaptain,getCaptainProfile,logoutCaptain };
