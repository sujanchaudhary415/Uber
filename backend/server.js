import express from "express"
import cors from "cors"
import 'dotenv/config'
import connectDB from "./config/mongodb.js";
import userRouter from "./routes/user.routes.js";
import cookieParser from "cookie-parser";
import captainRouter from './routes/captain.routes.js';
import mapRouter from './routes/maps.routes.js'
import rideRouter from './routes/ride.routes.js'

//app config
const app=express();
const port=process.env.PORT || 5000;
connectDB();

//middleware
app.use(express.json());
app.use(cors());
app.use(cookieParser())

//api endpoints
app.get('/',(req,res)=>{
    res.status(200).send("Api is running")
})

app.use('/users',userRouter);
app.use("/captains", captainRouter);
app.use("/maps",mapRouter);
app.use("/rides", rideRouter);


app.listen(port,()=>console.log(`Server is running on ${port}`))