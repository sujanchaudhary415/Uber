import React, { useContext, useState } from 'react'
import { Link,useNavigate } from 'react-router-dom';
import { CaptainDataContext } from '../context/CaptainContext';
import axios  from 'axios';


const CaptainSignup = () => {
   const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [vehicleColor, setVehicleColor] = useState("");
    const [vehiclePlate, setVehiclePlate] = useState("");
    const [vehicleCapacity, setVehicleCapacity] = useState("");
    const [vehicleType, setVehicleType] = useState("");
    const navigate=useNavigate()
    const {captain,setCaptain}=useContext(CaptainDataContext)
    const submitHandler =async (e) => {
      e.preventDefault();
      const captainData={
        fullname: {
          firstname: firstName,
          lastname: lastName,
        },
        email: email,
        password: password,
        vehicle:{
          color:vehicleColor,
          plate:vehiclePlate,
          capacity:vehicleCapacity,
          vehicleType:vehicleType

        }
      };
      

      const response=await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`,captainData)
      if(response.status===201)
      {
        const data=response.data;
        setCaptain(data.Captain);
        localStorage.setItem('token',data.token);
        navigate('/captain-home')
      }
      

      setEmail("");
      setPassword("");
      setFirstName("");
      setLastName("")
    };
  return (
    <div className="flex flex-col h-screen  justify-between">
    <div className="pt-6">
    <img
          className="w-17 ml-6"
          src="https://imgs.search.brave.com/cykZ27VRScThHwy8RGxrj9c1g3kAPOiXNfIPS4mdXeU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDUvVWJlci1FbWJs/ZW0tNzAweDM5NC5w/bmc"
          alt=""
        />
      <form onSubmit={(e) => submitHandler(e)} className="w-full px-6 pt-6">
        <h3 className="text-base font-medium mb-2">What's your name</h3>
        <div className="flex  gap-6">
          <input
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
            type="text"
            placeholder="First name"
            className="w-1/2 bg-[#ededed] px-3 py-2 rounded placeholder:font-semibold placeholder:text-gray-400 "
          />
          <input
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
            type="text"
            placeholder="last  name"
            className="w-1/2 bg-[#ededed] px-3 py-2 rounded placeholder:font-semibold placeholder:text-gray-400 "
          />
        </div>
        <h3 className="text-base font-medium mb-2 mt-4">What's your email</h3>
        <input
          required
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          className="w-full bg-[#ededed] px-3 py-2 rounded placeholder:font-semibold placeholder:text-gray-400  "
          placeholder="email@example.com"
        />

        <h3 className="text-base font-medium mt-6 mb-2">Enter Password</h3>
        <input
          required
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          className="w-full bg-[#ededed] px-3 py-2 rounded placeholder:font-semibold placeholder:text-gray-400  "
          placeholder="password"
        />
        <h3 className="text-base font-medium mt-6 mb-2">Vehicle Information</h3>
        <div className="flex gap-6">
          <input
            onChange={(e) => setVehicleColor(e.target.value)}
            value={vehicleColor}
            type="text"
            placeholder="Vehicle Color"
            className="w-1/2 bg-[#ededed] px-3 py-2 rounded placeholder:font-semibold placeholder:text-gray-400 "
          />
          <input
            onChange={(e) => setVehiclePlate(e.target.value)}
            value={vehiclePlate}
            type="text"
            placeholder="Vehicle Plate"
            className="w-1/2 bg-[#ededed] px-3 py-2 rounded placeholder:font-semibold placeholder:text-gray-400 "
          />
        </div>
        <div className="flex gap-6 mt-4">
          <select
            onChange={(e) => setVehicleType(e.target.value)}
            value={vehicleType}
            className="w-1/2 bg-[#ededed] px-3 py-2 rounded placeholder:font-semibold placeholder:text-gray-400 "
          >
            <option value="" disabled>Select Vehicle Type</option>
            <option value="motorcycle">Motorcycle</option>
            <option value="car">Car</option>
            <option value="auto">Auto</option>
          </select>
          <input
            onChange={(e) => setVehicleCapacity(e.target.value)}
            value={vehicleCapacity}
            type="number"
            placeholder="Vehicle Capacity"
            className="w-1/2 bg-[#ededed] px-3 py-2 rounded placeholder:font-semibold placeholder:text-gray-400 "
          />
        </div>

        <button
          type="submit"
          className="text-white bg-black w-full font-semibold py-2 rounded  mt-6 mb-2"
        >
          Create captain account
        </button>
      </form>
      <p className="text-center font-semibold">
        Already have an account?{" "}
        <Link to="/captain-login" className="text-blue-600 font-semibold">
          Login here
        </Link>
      </p>
    </div>
    <div className="px-6">
      <p className="text-[10px] leading-tight mb-6 text-gray-500">
        This site is protected by reCAPTCHA and the Google{" "}
        <span className="font-semibold underline">Privacy Policy </span>and{" "}
        <span className="font-semibold underline">Terms of service </span>
        apply
      </p>
    </div>
  </div>
  )
}

export default CaptainSignup