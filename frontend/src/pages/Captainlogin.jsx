import React, { useState } from "react";
import { Link } from "react-router-dom";

const Captainlogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captainData, setCaptainData] = useState({});
  const submitHandler = (e) => {
    e.preventDefault();
    setCaptainData({ email: email, password: password });

    setEmail("");
    setPassword("");
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
          <h3 className="text-lg font-semibold mb-2">
            What's our Captain email
          </h3>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            className="w-full bg-[#ededed] px-3 py-2 rounded placeholder:font-semibold placeholder:text-gray-400  "
            placeholder="email@example.com"
          />

          <h3 className="text-lg font-semibold mt-6 mb-2">Enter Password</h3>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            className="w-full bg-[#ededed] px-3 py-2 rounded placeholder:font-semibold placeholder:text-gray-400  "
            placeholder="password"
          />

          <button
            type="submit"
            className="text-white bg-black w-full font-semibold py-2 rounded  mt-6 mb-2"
          >
            Login
          </button>
        </form>
        <p className="text-center font-semibold">
          Join a fleet?{" "}
          <Link to="/captain-signup" className="text-blue-600 font-semibold">
            Register as a Captain
          </Link>
        </p>
      </div>
      <div className="px-6">
        <Link
          to="/login"
          className="text-white flex items-center justify-center bg-[#fd8b1c] w-full font-semibold py-2 rounded  mt-6 mb-16"
        >
          Sign in as User
        </Link>
      </div>
    </div>
  );
};

export default Captainlogin;
