import express from "express"
import cors from "cors"
import 'dotenv/config'
import connectDB from "./config/mongodb.js";
import userRouter from "./routes/user.routes.js";


//app config
const app=express();
const port=process.env.PORT || 3000;
connectDB();

//middleware
app.use(express.json());
app.use(cors())

//api endpoints
app.get('/',(req,res)=>{
    res.status(200).send("Api is running")
})

app.use('/users',userRouter)



app.listen(port,()=>console.log(`Server is running on ${port}`))