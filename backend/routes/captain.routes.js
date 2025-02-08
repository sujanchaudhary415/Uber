import express from "express"
import {body} from "express-validator"
import { getCaptainProfile, loginCaptain, logoutCaptain, registerCaptain } from "../controllers/captain.controller.js";
import authCaptain from './../middleware/authCaptain.js';


const captainRouter=express.Router();


captainRouter.post("/register",
    body("email").isEmail().withMessage("Invalid email"),
    body("password").isLength({min:6}).withMessage("Password must be at least 6 characters long"),
    body("fullname.firstname").isLength({min:3}).withMessage("First name must be at least 3 characters long"),
    body("vehicle.color").isLength({min:3}).withMessage("Color must be at least 3 characters long"),
    body("vehicle.plate").isLength({min:3}).withMessage("Plate must be at least 3 characters long"),
    body("vehicle.capacity").isLength({min:1}).withMessage("Capacity must be at least 1 characters long"),
    body("vehicle.vehicleType").isIn(["car","motorcycle","auto"]).withMessage("Invalid vehcile type"),
    registerCaptain
);

captainRouter.post("/login",
    body("email").isEmail().withMessage("Invalid email"),
    body("password").isLength({min:6}).withMessage("Password must be at least 6 characters long"),
    loginCaptain
);

captainRouter.get("/profile",authCaptain,getCaptainProfile);

captainRouter.post("/logout",authCaptain,logoutCaptain);

export default captainRouter;