import captainModel from "./../models/captain.model.js";
import jwt from "jsonwebtoken";
import BlacklistToken from "./../models/blacklistToken.model.js";

const authCaptain = async (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res
      .status(401)
      .json({ error: "Not authorized to access this route" });
  }
  try {
    const isBlacklisted = await BlacklistToken.findOne({ token: token });
    if (isBlacklisted) {
      return res
        .status(401)
        .json({ message: "Unauthorized already set to blacklist" });
    }

    const decode_token = jwt.verify(token, process.env.JWT_SECRET);
    const captain = await captainModel.findById(decode_token._id);
    req.captain = captain;
    return next();
  } catch (error) {
    return res.status(401).json({ error: "Unauthorized" });
  }
};

export default authCaptain;
