import React from "react";
import { FaUser } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
const VehicleSearchPanel = ({
  setVehiclePanel,
  setPanelOpen,
  setConfirmRidePanel,
}) => {
  return (
    <div>
      <MdKeyboardArrowDown
        onClick={() => {
          setVehiclePanel(false);
          setPanelOpen(false);
        }}
        className="w-full text-2xl "
      />
      <h1 className="text-xl font-semibold">Choose a Vehicle</h1>
      <div
        onClick={() => {
          setConfirmRidePanel(true);
          setVehiclePanel(false);
        }}
        className="flex  border border-gray-200 rounded-lg p-1 active:border-gray-600 mt-4 "
      >
        <img
          className="w-25 bg-pink"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1548646918/assets/e9/2eeb8f-3764-4e26-8b17-5905a75e7e85/original/2.png"
          alt=""
        />
        <div className=" rounded-lg   ">
          <h2 className="flex gap-1 items-center text-lg font-semibold">
            UberGo{" "}
            <span>
              <FaUser />
            </span>
            4
          </h2>
          <p className="font-medium text-base">2 mins away</p>
          <p className="text-gray-600 text-sm">Affordable, compact rides</p>
        </div>
        <p className="text-md font-semibold">₹193.20</p>
      </div>

      <div
        onClick={() => {
          setConfirmRidePanel(true);
          setVehiclePanel(false);
        }}
        className="flex  border border-gray-200 rounded-lg p-1  mt-4 "
      >
        <img
          className="w-24 bg-pink"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1698944322/assets/92/00189a-71c0-4f6d-a9de-1b6a85239079/original/UberMoto-India-Orange.png"
          alt=""
        />
        <div className=" rounded-lg   ">
          <h2 className="flex gap-1 items-center text-lg font-semibold">
            Moto{" "}
            <span>
              <FaUser />
            </span>
            1
          </h2>
          <p className="font-medium text-base">3 mins away</p>
          <p className="text-gray-600 text-sm ">Affordable motorcycle rides</p>
        </div>
        <p className="text-md font-semibold">₹65.12</p>
      </div>

      <div
        onClick={() => {
          setConfirmRidePanel(true);
          setVehiclePanel(false);
        }}
        className="flex  border border-gray-200 rounded-lg p-1  mt-4 "
      >
        <img
          className="w-24 bg-pink"
          src="https://images.cnbctv18.com/wp-content/uploads/2023/10/uber-auto-350x196.jpg"
          alt=""
        />
        <div className=" rounded-lg   ">
          <h2 className="flex gap-1 items-center text-lg font-semibold">
            Auto{" "}
            <span>
              <FaUser />
            </span>
            1
          </h2>
          <p className="font-medium text-base">3 mins away</p>
          <p className="text-gray-600 text-sm ">Affordable motorcycle rides</p>
        </div>
        <p className="text-md font-semibold">₹65.12</p>
      </div>
    </div>
  );
};

export default VehicleSearchPanel;
