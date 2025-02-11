import React from "react";
import { FaUser } from "react-icons/fa";
import { TbCashBanknote } from "react-icons/tb";
import { MdKeyboardArrowDown } from "react-icons/md";
const WaitingForDriver = ({setWaitingForDriver}) => {
  return (
    <div className="w-full flex flex-col gap-4 mt-1 ">
      <MdKeyboardArrowDown
        onClick={() => 
         setWaitingForDriver(false)
        }
        className="w-full text-2xl "
      />
      <div className="w-full flex items-center justify-between ">
        <div className="w-1/2 ">
          <img
            className="w-55"
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1548646918/assets/e9/2eeb8f-3764-4e26-8b17-5905a75e7e85/original/2.png"
            alt=""
          />
        </div>

        <div className="w-1/2 text-right">
             <p className="font-semibold text-xl">Sarthak</p>
             <p className="font-bold text-2xl">MP04 AB 1234</p>
             <p className="text-gray-600">Maruti Suzuki Alto</p>
        </div>
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



      <div className="flex items-center gap-4   border-gray-300">
        <TbCashBanknote />
        <div>
          <p className="text-xl font-bold">$193.20</p>
          <p className="text-base text-gray-600 mb-3">Cash Cash</p>
        </div>
      </div>
    </div>
  );
};

export default WaitingForDriver;
