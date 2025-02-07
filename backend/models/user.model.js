import mongoose from "mongoose"
import  jwt  from 'jsonwebtoken';
import bcrypt  from 'bcrypt';

const userSchema=new mongoose.Schema({
    fullname:{
        firstname:{
            type:String,
            required:true,
            minLength:[3,"First name must be at least 3 characters Long"]
        },
        lastname:{
            type:String,
            minLength:[3,"First name must be at least 3 characters Long"]
        }
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
        select:false
    },
    socketId:{
      type:String,
    }
})


userSchema.methods.generateAuthToken=function(){
    const token = jwt.sign({_id: this._id}, process.env.JWT_SECRET, { expiresIn: '24h' })
    return token
}

userSchema.statics.hashPassword=async function(password){
    return await bcrypt.hash(password,10)
}

userSchema.methods.comparePassword=async function(password){
    return await bcrypt.compare(password,this.password)
}
const userModel=mongoose.model("User",userSchema)

export default userModel