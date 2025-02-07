import userModel from "../models/user.model.js";
import { validationResult } from "express-validator";
import createUser from "../services/user.service.js";

const registerUser = async (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const { email, fullname, password } = req.body;

        // Hash the password
        const hashedPassword = await userModel.hashPassword(password);

        // Create the user
        const user = await createUser({
            fullname: {
                firstname: fullname.firstname,
                lastname: fullname.lastname
            },
            email,
            password: hashedPassword
        });

        // Generate auth token AFTER user is saved
        const token = user.generateAuthToken();

        res.status(201).json({ token, user });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server error" });
    }
};

export { registerUser };
