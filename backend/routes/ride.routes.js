import express from "express";
import { body } from "express-validator";
import authUser from "./../middleware/authUser.js";
import { createRide } from "../controllers/ride.controller.js";

const rideRouter = express.Router();

rideRouter.post(
  "/create-ride",
  authUser,
  body("pickup")
    .isString()
    .isLength({ min: 3 })
    .withMessage("Pickup address must be at least 3 characters long"),
  body("destination")
    .isString()
    .isLength({ min: 3 })
    .withMessage("Destination address must be at least 3 characters long"),
  body("vehicleType")
    .isString()
    .isIn(["car", "motorcycle", "auto"])
    .withMessage("Invalid vehicle type"),
  createRide
);

export default rideRouter;
