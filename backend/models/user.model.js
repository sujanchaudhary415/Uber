import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"

const userSchema=new mongoose.Schema({
    fullname:{
        firstname:{
            type:String,
            required:true,
            minlength:[3,'First name must be atleast 3 characters long']
        },
        lastname:{
            type:String,
            minlength:[3,'last name must be atleast 3 characters long']
        }
    },
    email:{
        type:String,
        required:true,
        unique:true,
        minlength:[5,'Email must be atleast 5 characters Long']
    },
    password:{
        type:String,
        required:true,
        select:false,
    },
    socketId:{
        type:String
    }
})

userSchema.methods.generateAuthToken=function(){
    const token= jwt.sign({_id:this._id},process.env.JWT_SECRET);
    return token
}
userSchema.statics.hashPassword=async function(password){
    return await bcrypt.hash(password,10)
}

userSchema.methods.comparePassword=async function(password){
    return await bcrypt.compare(password,this.password)
}

const userModel=mongoose.model('user',userSchema)

export default userModel