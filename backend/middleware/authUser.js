import jwt from "jsonwebtoken";
import userModel from "./../models/user.model.js";
import BlacklistToken from "../models/blacklistToken.model.js";

const authUser = async (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res
      .status(401)
      .json({ error: "Not authorized to access this route" });
  }

  try {
     
    const isBlacklisted=await BlacklistToken.findOne({token:token})
    if(isBlacklisted)
    {
      return res.status(401).json({message:"Unauthorized already set to blacklist"})
    }



    const decode_token = jwt.verify(token, process.env.JWT_SECRET);
    const user = await userModel.findById(decode_token._id);
    req.user = user;
    return next();
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized" });
  }
};

export default authUser;
