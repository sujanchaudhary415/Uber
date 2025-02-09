import express from "express"
import {body} from "express-validator"
import { getUserProfile, loginUser, logOutUser, userRegister } from "../controllers/user.controller.js";
import authUser from "../middleware/authUser.js";
const userRouter = express.Router();

userRouter.post("/register",
  body("email").isEmail().withMessage("Invalid email"),
  body("password").isLength({min:6}).withMessage("Password must be at least 6 characters long"),
  body("fullname.firstname").isLength({min:3}).withMessage("First name must be at least 3 characters long"),
  body("fullname.lastname").isLength({min:3}).withMessage("Last name must be at least 3 characters long"),
   userRegister
)

userRouter.post("/login",
  body("email").isEmail().withMessage("Invalid email"),
  body("password").isLength({min:6}).withMessage("Password must be at least 6 characters long")
  ,loginUser)


  userRouter.get("/profile",authUser,getUserProfile);
  userRouter.get("/logout",authUser,logOutUser)

export default userRouter;