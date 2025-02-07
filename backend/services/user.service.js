import userModel from './../models/user.model.js';
const createUser = async ({ fullname, email, password }) => {
  if (!fullname || !fullname.firstname || !email || !password) {
      throw new Error("Please fill all the fields");
  }

  // Check if the email already exists
  const existingUser = await userModel.findOne({ email });
  if (existingUser) {
      throw new Error("Email is already registered");
  }

  const user = await userModel.create({
      fullname: {
          firstname: fullname.firstname,
          lastname: fullname.lastname,
      },
      email,
      password,
  });

  return user;
};

export default createUser;