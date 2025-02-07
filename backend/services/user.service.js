import userModel from "../models/user.model.js";

const createUser = async ({ fullname, email, password }) => {
    if (!fullname || !fullname.firstname || !email || !password) {
        throw new Error("All fields are required");
    }

    const user = await userModel.create({
        fullname: {
            firstname: fullname.firstname,
            lastname: fullname.lastname || "" // Provide default empty string if missing
        },
        email,
        password
    });

    return user;
};

export default createUser;
