import React, { useRef, useState } from "react";
import { IoMdHome } from "react-icons/io";
import { Link } from "react-router-dom";
import CaptainDetails from "./../components/CaptainDetails";
import RidePopUp from "./../components/RidePopUp";
import ConfirmRidePopUp from "./../components/ConfirmRidePopUp";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const CaptainHome = () => {
  const [newRide, setNewRide] = useState(true);
  const NewRidePopUpPanelRef = useRef(null);

  const [ridePopUp, setRidePopUp] = useState(false);
  const ConfirmRidePopUpPanelRef = useRef(null);

  useGSAP(() => {
    if (NewRidePopUpPanelRef.current) {
      gsap.to(NewRidePopUpPanelRef.current, {
        transform: newRide ? "translateY(0)" : "translateY(100%)",
      });
    }
  }, [newRide]);

  useGSAP(() => {
    if (ConfirmRidePopUpPanelRef.current) {
      gsap.to(ConfirmRidePopUpPanelRef.current, {
        transform: ridePopUp ? "translateY(0)" : "translateY(100%)",
      });
    }
  }, [ridePopUp]);

  return (
    <div className="h-screen w-full">
      <Link
        to="/captain-home"
        className="fixed bg-white h-7 w-7 rounded-full flex items-center justify-center right-2 top-2 shadow-md"
      >
        <IoMdHome className="text-lg text-gray-700" />
      </Link>

      <div className="h-3/5">
        <img
          className="w-full h-full object-center object-cover"
          src="https://imgs.search.brave.com/o-Q6bJ_pg1WafiZikzPkNL3w3nBizjXwgyusJsdxPxw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnNz/dGF0aWMubmV0L2d0/aUk3LmdpZg.gif"
          alt="Car animation"
        />
      </div>

      <div className="h-2/5 w-full px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              className="w-10 h-10 rounded-full object-cover"
              src="https://imgs.search.brave.com/wLR3CQ5qeOMSs4xz8-dH-wyDQRIURTe-qWgHrhRk8sY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA2Lzc4LzA5Lzc4/LzM2MF9GXzY3ODA5/Nzg3Nl85a0puRmxS/WUdBZWlic1Z4c3Bx/dENMOVVSOGdpTEF2/Ri5qcGc"
              alt=""
            />
            <p className="font-semibold">Harsh Patel</p>
          </div>
          <div>
            <p className="font-bold text-lg"> ₹295.20</p>
            <p className="text-sm text-gray-500">Earned</p>
          </div>
        </div>

        <div>
          <CaptainDetails />
        </div>
      </div>
      <div
        ref={NewRidePopUpPanelRef}
        className="px-4 bg-white fixed z-10 bottom-0 w-full flex flex-col gap-3 p-4 "
      >
        <RidePopUp setNewRide={setNewRide} setRidePopUp={setRidePopUp} />
      </div>

      <div
        ref={ConfirmRidePopUpPanelRef}
        className="px-4 bg-white fixed z-10 bottom-0 w-full h-screen flex flex-col gap-3 p-4 translate-y-full "
      >
        <ConfirmRidePopUp setRidePopUp={setRidePopUp} setNewRide={setNewRide} />
      </div>
    </div>
  );
};

export default CaptainHome;
