import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { UserDataContext } from './../context/UserContext';

const UserProtectWrapper = ({ children }) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const { user, setUser } = useContext(UserDataContext);

  useEffect(() => {
    if (!token) {
      navigate("/login");
    } else {
      axios
        .get(`${import.meta.env.VITE_BASE_URL}/users/profile`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          const data = response.data;
          setUser(data.user);
          setIsLoading(false);
        })
        .catch((err) => {
          localStorage.removeItem("token");
          navigate("/login");
        });
    }
  }, [token, navigate, setUser]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <div>{children}</div>;
};

export default UserProtectWrapper;
