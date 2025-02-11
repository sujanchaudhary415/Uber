import React from "react";
import { FaUser } from "react-icons/fa";
import { TbCashBanknote } from "react-icons/tb";
import { IoMdHome } from "react-icons/io";
import { Link } from "react-router-dom";

const Riding = () => {
  return (
    <div className="h-screen">
      {/* Home Button */}
      <Link
        to="/home"
        className="fixed bg-white h-7 w-7 rounded-full flex items-center justify-center right-2 top-2 shadow-md"
      >
        <IoMdHome className="text-lg text-gray-700" />
      </Link>

      {/* Top Image */}
      <div className="h-1/2">
        <img
          className="w-full h-full object-cover"
          src="https://imgs.search.brave.com/o-Q6bJ_pg1WafiZikzPkNL3w3nBizjXwgyusJsdxPxw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnNz/dGF0aWMubmV0L2d0/aUk3LmdpZg.gif"
          alt="Car animation"
        />
      </div>

      {/* Bottom Panel */}
      <div className="h-1/2 px-3 pt-4">
        {/* Vehicle Details */}
        <div className="w-full flex items-center justify-between">
          <div className="w-1/2">
            <img
              className="w-36"
              src="https://www.svgrepo.com/show/408292/car-white.svg"
              alt="Car"
            />
          </div>

          <div className="w-1/2 text-right">
            <p className="font-semibold text-medium">Sarthak</p>
            <p className="font-bold text-lg -mb-1">MP04 AB 1234</p>
            <p className="text-gray-600 text-sm">Maruti Suzuki Alto</p>
          </div>
        </div>

        {/* Ride Details */}
        <div className="flex items-center gap-4 border-b border-gray-200 py-3">
          <FaUser className="text-gray-600" />
          <div>
            <p className="text-xl font-bold">562/11-A</p>
            <p className="text-base text-gray-600">Kankariya Talab, Bhopal</p>
          </div>
        </div>

        {/* Payment Details */}
        <div className="flex items-center gap-4 border-b border-gray-200 py-3">
          <TbCashBanknote className="text-gray-600" />
          <div>
            <p className="text-xl font-bold">$193.20</p>
            <p className="text-base text-gray-600">Cash</p>
          </div>
        </div>

        {/* Payment Button */}
        <button className="bg-[#3b7d41] py-2 text-white rounded font-semibold w-full mt-8 hover:bg-green-700 transition">
          Make a Payment
        </button>
      </div>
    </div>
  );
};

export default Riding;
