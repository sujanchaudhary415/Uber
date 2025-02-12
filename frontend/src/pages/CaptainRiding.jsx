import React, { useRef, useState } from "react";
import { CiLogout } from "react-icons/ci";
import { IoIosArrowUp } from "react-icons/io";
import FinishRide from './../components/FinishRide';
import { useGSAP } from '@gsap/react';
import gsap from "gsap";

const CaptainRiding = () => {
  const [finishRidePanel,setFinishRidePanel]=useState(false);
  const FinishRidePanelRef=useRef(null);

  useGSAP(() => {
    if (FinishRidePanelRef.current) {
      gsap.to(FinishRidePanelRef.current, {
        transform: finishRidePanel ? "translateY(0)" : "translateY(100%)",
      });
    }
  }, [finishRidePanel]);

  return (
    <div className="h-screen w-full overflow-hidden ">
      <div className="flex items-center justify-between ">
        <img
          className="w-16 absolute left-6 top-6 "
          src="https://imgs.search.brave.com/FZq7YFqzVbkjhipVXmxfaZY-RmPwy3wsG0WV1UdM8bs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDUvVWJlci1Mb2dv/LTcwMHgzOTQucG5n"
          alt=""
        />
        <CiLogout className="absolute top-6 right-3 bg-gray-300 h-5 w-5 rounded-full " />
      </div>
      <div className="h-[3/5]">
        <img
          className=" w-full object-center onject cover"
          src="https://imgs.search.brave.com/o-Q6bJ_pg1WafiZikzPkNL3w3nBizjXwgyusJsdxPxw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnNz/dGF0aWMubmV0L2d0/aUk3LmdpZg.gif"
          alt=""
        />
      </div>
      <div className="h-full flex flex-col items-center py-2 bg-yellow-400" onClick={()=>setFinishRidePanel(true)}>
        <IoIosArrowUp className="text-xl text-gray-600"  />
        <div className="flex items-center justify-between gap-12 py-4">
          <p className="font-bold">4 KM away</p>
          <button className="px-6 py-2 bg-green-500 text-white rounded-md">
            Complete Ride
          </button>
        </div>
      </div>
      <div
        ref={FinishRidePanelRef}
        className="px-4 bg-white fixed z-10 bottom-0 w-full flex flex-col gap-3 p-4 translate-y-full "
      >
        <FinishRide setFinishRidePanel={setFinishRidePanel}  />
      </div>
    </div>
  );
};

export default CaptainRiding;
