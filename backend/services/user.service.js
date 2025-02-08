import userModel from './../models/user.model.js';

const createUser=async({fullname,email,password})=>{
    if(!fullname || !fullname.firstname || !email || !password){
        throw new Error("All fields are required")
    }
    const emailExists=await userModel.findOne({email});
    if(emailExists){
        throw new Error("Email already exists");
    }

    const user=await userModel.create({
      fullname:{
          firstname:fullname.firstname,
          lastname:fullname.lastname
      },
      email,
      password
    });
    return user;
};

export default createUser;