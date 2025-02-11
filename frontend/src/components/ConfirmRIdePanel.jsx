import React from "react";
import { FaUser } from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";
import { TbCashBanknote } from "react-icons/tb";
import { MdKeyboardArrowDown } from "react-icons/md";
const ConfirmRIdePanel = ({
  setConfirmRidePanel,
  setVehiclePanel,
  setLookingForDriver,
}) => {
  return (
    <div className="w-full flex flex-col gap-4 p-3">
      <MdKeyboardArrowDown
        onClick={() => {
          setConfirmRidePanel(false);
          setVehiclePanel(false);
        }}
        className="w-full text-2xl "
      />
      <h1 className="text-2xl font-bold">Confirm your Ride</h1>
      <div className="w-full inline-flex items-center justify-center">
        <img
          className="w-55"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1548646918/assets/e9/2eeb8f-3764-4e26-8b17-5905a75e7e85/original/2.png"
          alt=""
        />
      </div>
      <div className="flex items-center gap-4 border-b-2  border-gray-100">
        <FaUser />
        <div>
          <p className="text-xl font-bold">562/11-A</p>
          <p className="text-base text-gray-600 mb-3">
            Kankariya Talab, Bhopal
          </p>
        </div>
      </div>

      <div className="flex items-center gap-4 border-b-2  border-gray-100">
        <FaLocationPin />
        <div>
          <p className="text-xl font-bold">562/11-A</p>
          <p className="text-base text-gray-600 mb-3">
            Kankariya Talab, Bhopal
          </p>
        </div>
      </div>

      <div className="flex items-center gap-4   border-gray-300">
        <TbCashBanknote />
        <div>
          <p className="text-xl font-bold">$193.20</p>
          <p className="text-base text-gray-600 mb-3">Cash Cash</p>
        </div>
      </div>
      <button
        onClick={() => {
          setLookingForDriver(true);
          setConfirmRidePanel(false);
        }}
        className="bg-[#3b7d41] py-2 text-white rounded font-semibold"
      >
        Confirm
      </button>
    </div>
  );
};

export default ConfirmRIdePanel;
