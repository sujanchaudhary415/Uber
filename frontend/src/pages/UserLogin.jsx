import React, { useState } from "react";
import { Link } from "react-router-dom";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({});
  const submitHandler = (e) => {
    e.preventDefault();
    setUserData({ email: email, password: password });

    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex flex-col h-screen  justify-between">
      <div className="pt-6">
        <img
          className="w-15 ml-6"
          src="https://imgs.search.brave.com/FZq7YFqzVbkjhipVXmxfaZY-RmPwy3wsG0WV1UdM8bs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDUvVWJlci1Mb2dv/LTcwMHgzOTQucG5n"
          alt=""
        />
        <form onSubmit={(e) => submitHandler(e)} className="w-full px-6 pt-6">
          <h3 className="text-lg font-semibold mb-2">What's your email</h3>
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
          New here?{" "}
          <Link to="/signup" className="text-blue-600 font-semibold">
            Create new Account
          </Link>
        </p>
      </div>
      <div className="px-6">
        <Link to="/captain-login" className="text-white flex items-center justify-center bg-[#428d54] w-full font-semibold py-2 rounded  mt-6 mb-16">
          Sign in as Captain
        </Link>
      </div>
    </div>
  );
};

export default UserLogin;
