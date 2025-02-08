import captainModel from "../models/captain.model.js";

const createCaptain = async ({ fullname, email, password, vehicle }) => {
  if (
    !fullname ||
    !fullname.firstname ||
    !fullname.lastname ||
    !email ||
    !password ||
    !vehicle ||
    !vehicle.color ||
    !vehicle.plate ||
    !vehicle.capacity ||
    !vehicle.vehicleType
  ) {
    throw new Error("All fields are required");
  }

  const captainExists = await captainModel.findOne({ email });
  if (captainExists) {
    throw new Error("Captain already exists");
  }

  // Hash the password before saving
  const hashedPassword = await captainModel.hashPassword(password);

  const captain = new captainModel({
    fullname: {
      firstname: fullname.firstname,
      lastname: fullname.lastname,
    },
    email,
    password: hashedPassword,
    vehicle: {
      color: vehicle.color,
      plate: vehicle.plate,
      capacity: vehicle.capacity,
      vehicleType: vehicle.vehicleType,
    },
  });

  await captain.save(); // Save the new captain to the database

  return captain;
};

export default createCaptain;
