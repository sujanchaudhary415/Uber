import React from "react";
import { RiSpeedUpFill } from "react-icons/ri";
import { FaNoteSticky } from "react-icons/fa6";
const CaptainDetails = () => {
  return (
    <div className="flex items-center justify-evenly bg-yellow-300 px-4 py-4 mt-6 rounded-md ">
      <div className="flex flex-col items-center">
        <RiSpeedUpFill className="text-2xl" />
        <p className="font-semibold">10.2</p>
        <p className="text-gray-600 text-sm">Hours Online</p>
      </div>

      <div className="flex flex-col items-center">
        <RiSpeedUpFill className="text-2xl" />
        <p className="font-semibold">10.2</p>
        <p className="text-gray-600 text-sm">Hours Online</p>
      </div>

      <div className="flex flex-col items-center">
        <FaNoteSticky className="text-2xl" />
        <p className="font-semibold">10.2</p>
        <p className="text-gray-600 text-sm">Hours Online</p>
      </div>
    </div>
  );
};

export default CaptainDetails;
