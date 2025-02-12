import express from "express";
import { query } from "express-validator";
import authUser from "./../middleware/authUser.js";
import {getCoordinates,getDistanceTime } from "./../controllers/map.controller.js";
import { getSuggestionsService } from "../services/maps.service.js";

const mapRouter = express.Router();

mapRouter.get(
  "/get-coordinates",
  query("address").isString().isLength({ min: 3 }),
  authUser,
  getCoordinates
);

mapRouter.get("/get-distancetime",
    query("origin").isString().isLength({min:3}),
    query("destination").isString().isLength({min:3}),
    authUser,getDistanceTime
)

mapRouter.get("/get-suggestions",
    query("input").isString().isLength({min:3}),
    authUser,getSuggestionsService
)



export default mapRouter;
