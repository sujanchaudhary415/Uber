import express from "express";
import authUser from './../middleware/authUser.js';
import { getCoordinates } from "../controllers/map.controller.js";

import  {query} from "express-validator"
const mapRouter=express.Router();

mapRouter.get('/get-coordinates',
    query('address').isString().isLength({min:3})
    ,authUser,getCoordinates)



export default mapRouter    