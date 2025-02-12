import { validationResult } from "express-validator";
import { getAddressCoordinates, getDistanceTimeService, getSuggestionsService } from "./../services/maps.service.js";

const getCoordinates = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { address } = req.query;
  try {
    const coordinates = await getAddressCoordinates(address);
    res.status(200).json(coordinates);
  } catch (error) {
    res.status(404).json({ message: "coordinates not found" });
  }
};

const getDistanceTime = async (req, res, next) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { origin, destination } = req.query;
    const distanceTime = await getDistanceTimeService(origin, destination);
    res.status(200).json(distanceTime);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getSuggestions=async(req,res,next)=>{
  try {
    const errors=validationResult(req);

    if(!errors.isEmpty())
    {
      return res.status(400).json({errors:errors.array});
    }
    const {input}=req.query;
    const suggestions=await getSuggestionsService(input);
    res.status(200).json(suggestions)
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export { getCoordinates, getDistanceTime,getSuggestions};
