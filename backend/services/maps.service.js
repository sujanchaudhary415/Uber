import axios from "axios";

const getAddressCoordinates = async (address) => {
  const apiKey = process.env.GOOGLE_MAPS_API;
  const url = `https://maps.gomaps.pro/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`;

  try {
    const response = await axios.get(url);
    if (response.data.status === "OK") {
      const location = response.data.results[0].geometry.location;
      return {
        lat: location.lat,
        lng: location.lng,
      };
    } else {
      throw new Error("Unable to fetch coordinates");
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const getDistanceTimeService=async(origin,destination)=>{
  if (!origin || !destination) {
    throw new Error('Origin and destination are required');
}

const apiKey = process.env.GOOGLE_MAPS_API;

const url = `https://maps.gomaps.pro/maps/api/distancematrix/json?origins=${encodeURIComponent(origin)}&destinations=${encodeURIComponent(destination)}&key=${apiKey}`;

try {
    const response = await axios.get(url);
    if (response.data.status === 'OK') {

        if (response.data.rows[ 0 ].elements[ 0 ].status === 'ZERO_RESULTS') {
            throw new Error('No routes found');
        }

        return response.data.rows[ 0 ].elements[ 0 ];
    } else {
        throw new Error('Unable to fetch distance and time');
    }

} catch (err) {
    console.error(err);
    throw err;
}
};

const getSuggestionsService=async(input)=>{
  if(!input)
  {
    throw new Error('Input is required')
  }
  const apiKey = process.env.GOOGLE_MAPS_API;
  const url = `https://maps.gomaps.pro/maps/api/place/queryautocomplete/json?input=${encodeURIComponent(input)}&key=${apiKey}`;

  try {
    const response = await axios.get(url);
    if (response.data.status === "OK") {
      console.log(response.data.predictions)
      return response.data.predictions;
    } else {
      throw new Error("Unable to fetch suggestions");
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
}





export  {getAddressCoordinates,getDistanceTimeService,getSuggestionsService};
