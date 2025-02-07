import jwt from "jsonwebtoken";
import userModel from "./../models/user.model.js";
import BlacklistToken from "./../models/blacklistToken.model.js";

const authUser = async (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization?.split(' ')[1];

  if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
  }

  try {
      // Check if the token is blacklisted
      const isBlacklisted = await BlacklistToken.findOne({ token });
      if (isBlacklisted) {
          return res.status(401).json({ message: "Unauthorized" });
      }

      // Verify the token
      const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
      const user = await userModel.findById(decodedToken._id);
      req.user = user;

      return next();
  } catch (error) {
      return res.status(401).json({ message: "Unauthorized" });
  }
};

export default authUser;