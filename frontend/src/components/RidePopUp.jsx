import React from "react";
import { FaUser } from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";
import { TbCashBanknote } from "react-icons/tb";
import { MdKeyboardArrowDown } from "react-icons/md";
const RidePopUp = ({ setRidePopUp, setNewRide }) => {
  return (
    <div className="w-full flex flex-col gap-4">
      <MdKeyboardArrowDown
        onClick={() => {
          setNewRide(false);
        }}
        className="w-full text-2xl text-gray-300 "
      />
      <h1 className="text-2xl font-bold">New ride Available!</h1>
      <div className="flex items-center justify-between p-3 rounded-lg bg-yellow-300">
        <div className="flex items-center gap-2">
          <img
            className="w-10 h-10 rounded-full object-cover"
            src="https://imgs.search.brave.com/qGIJ2IC9iVZc2EI4siQDAwgGzEhdyifld2GViPRpF_c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzgyLzk4/LzdiLzgyOTg3YjQz/NGFjMTJjZjMyZTEz/MTFmNWIxZDBjZjI0/LmpwZw"
            alt=""
          />
          <p className="font-semibold">Harshi Patelya</p>
        </div>
        <div>
          <p className="font-bold text-md">2.2 KM</p>
        </div>
      </div>
      <div className="flex items-center gap-4 border-b-2  border-gray-100">
        <FaUser />
        <div>
          <p className="text-md font-semibold">562/11-A</p>
          <p className="text-xs text-gray-600 mb-3">Kankariya Talab, Bhopal</p>
        </div>
      </div>

      <div className="flex items-center gap-4 border-b-2  border-gray-100">
        <FaLocationPin />
        <div>
          <p className="text-md font-semibold">562/11-A</p>
          <p className="text-xs text-gray-600 mb-3">Kankariya Talab, Bhopal</p>
        </div>
      </div>

      <div className="flex items-center gap-4   border-gray-300">
        <TbCashBanknote />
        <div>
          <p className="text-md font-semibold">$193.20</p>
          <p className="text-xs text-gray-600 mb-3">Cash Cash</p>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <button
          className="px-4 py-1 bg-gray-500 rounded-md"
          onClick={() => {
            setNewRide(false);
          }}
        >
          Ignore
        </button>
        <button
          className="px-4 py-1 bg-green-600 rounded-md text-white"
          onClick={() => setRidePopUp(true)}
        >
          Accept
        </button>
      </div>
    </div>
  );
};

export default RidePopUp;
