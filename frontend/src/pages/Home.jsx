import React, { useState } from "react";
import { FaArrowDown } from "react-icons/fa";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import LocationSearchPanel from "./../components/LocationSearchPanel";
import VehicleSearchPanel from "./../components/VehicleSearchPanel";
import ConfirmRIdePanel from "../components/ConfirmRIdePanel";
import LookingForDriver from "./../components/LookingForDriver";
import WaitingForDriver from "./../components/WaitingForDriver";

const Home = () => {
  const [pickUp, setPickUp] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
  const panelRef = useRef();
  const panelCloseRef = useRef();
  const [vehiclePanel, setVehiclePanel] = useState(false);
  const vehiclePanelRef = useRef(null);
  const [confirmRidePanel, setConfirmRidePanel] = useState(false);
  const confirmRidePanelRef = useRef(null);

  const [lookingForDriver, setLookingForDriver] = useState(false);
  const lookingForDriverRef = useRef(null);

  const [waitingForDriver, setWaitingForDriver] = useState(false);
  const waitingForDriverRef = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  useGSAP(
    function () {
      if (panelOpen) {
        gsap.to(panelRef.current, {
          height: "80%",
        });
        gsap.to(panelCloseRef.current, {
          opacity: "1",
        });
      } else {
        gsap.to(panelRef.current, {
          height: "0%",
        });
        gsap.to(panelCloseRef.current, {
          opacity: "0",
        });
      }
    },
    [panelOpen]
  );

  useGSAP(() => {
    if (vehiclePanelRef.current) {
      gsap.to(vehiclePanelRef.current, {
        transform: vehiclePanel ? "translateY(0)" : "translateY(100%)",
      });
    }
  }, [vehiclePanel]);
  
  useGSAP(() => {
    if (confirmRidePanelRef.current) {
      gsap.to(confirmRidePanelRef.current, {
        transform: confirmRidePanel ? "translateY(0)" : "translateY(100%)",
      });
    }
  }, [confirmRidePanel]);
  
  useGSAP(() => {
    if (lookingForDriverRef.current) {
      gsap.to(lookingForDriverRef.current, {
        transform: lookingForDriver ? "translateY(0)" : "translateY(100%)",
      });
    }
  }, [lookingForDriver]);
  
  useGSAP(() => {
    if (waitingForDriverRef.current) {
      gsap.to(waitingForDriverRef.current, {
        transform: waitingForDriver ? "translateY(0)" : "translateY(100%)",
      });
    }
  }, [waitingForDriver]);

  return (
    <div className="h-screen relative overflow-hidden">
      <img
        className="w-16 absolute left-6 top-6 "
        src="https://imgs.search.brave.com/FZq7YFqzVbkjhipVXmxfaZY-RmPwy3wsG0WV1UdM8bs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDUvVWJlci1Mb2dv/LTcwMHgzOTQucG5n"
        alt=""
      />

      <div className="h-[80%] w-screen">
        {/**temporary map  */}
        <img
          className="w-full h-full  object-cover"
          src="https://imgs.search.brave.com/o-Q6bJ_pg1WafiZikzPkNL3w3nBizjXwgyusJsdxPxw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnNz/dGF0aWMubmV0L2d0/aUk3LmdpZg.gif"
          alt=""
        />
      </div>

      <div className="flex flex-col justify-end h-screen absolute top-0">
        <div className="h-[20%] px-4 py-1 bg-white">
          <div className="flex items-center justify-between ">
            <h3 className="text-xl font-semibold mb-2">Find a trip</h3>
            <FaArrowDown
              ref={panelCloseRef}
              onClick={() => setPanelOpen(false)}
              className="opacity-0"
            />
          </div>
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
            className="relative mt-4"
          >
            <input
              onClick={() => setPanelOpen(true)}
              onChange={(e) => setPickUp(e.target.value)}
              value={pickUp}
              type="text"
              className=" bg-[#eeee] w-full px-10 py-1 mb-3 rounded"
              placeholder="Add a pickup location"
            />
            <input
              onClick={() => setPanelOpen(true)}
              onChange={(e) => setDestination(e.target.value)}
              value={destination}
              type="text"
              placeholder="Enter your destination rounded"
              className=" bg-[#eeee] w-full px-10 py-1"
            />
            <div className="absolute top-2 left-2 bg-gray-950 h-1 w-1 rounded"></div>
            <div className="absolute top-4 left-2 rounded-full w-1 h-10 bg-gray-900">
              <div className="absolute top-11 left-0 bg-gray-950 h-1 w-1 rounded"></div>
            </div>
          </form>
        </div>
        <div ref={panelRef} className="bg-white h-0 ">
          <LocationSearchPanel
            setVehiclePanel={setVehiclePanel}
            setPanelOpen={setPanelOpen}
          />
        </div>

        <div
          ref={vehiclePanelRef}
          className="px-4 bg-white fixed z-10 bottom-0 w-full flex flex-col gap-3 p-4 translate-y-full"
        >
          <VehicleSearchPanel
            setVehiclePanel={setVehiclePanel}
            setPanelOpen={setPanelOpen}
            setConfirmRidePanel={setConfirmRidePanel}
          />
        </div>

        {confirmRidePanel && (
          <div
            ref={confirmRidePanelRef}
            className="px-4 bg-white fixed z-10 bottom-0 w-full flex flex-col gap-3 p-1 translate-y-full"
          >
            <ConfirmRIdePanel
              setVehiclePanel={setVehiclePanel}
              setConfirmRidePanel={setConfirmRidePanel}
              setLookingForDriver={setLookingForDriver}
            />
          </div>
        )}

        {lookingForDriver && (
          <div
            ref={lookingForDriverRef}
            className="px-4 bg-white fixed z-10 bottom-0 w-full flex flex-col gap-3 p-4 translate-y-full"
          >
            <LookingForDriver setLookingForDriver={setLookingForDriver} />
          </div>
        )}

        <div
          ref={waitingForDriverRef}
          className="px-4 bg-white fixed z-10 bottom-0 w-full flex flex-col gap-3 p-4 translate-y-full  "
        >
          <WaitingForDriver setWaitingForDriver={setWaitingForDriver} />
        </div>
      </div>
    </div>
  );
};

export default Home;
