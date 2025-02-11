import React from "react";
import { IoLocationSharp } from "react-icons/io5";

const LocationSearchPanel = ({ setVehiclePanel, setPanelOpen }) => {
  const suggestions = [
    " 24B, Near Kapooer's cafe, Sheryians Coding School, Bhopal",
    "24C, Near Malhotra's cafe, Sheryians Coding School, Bhopal",
    "24D, Near Chaudhary's cafe, Sheryians Coding School, Bhopal",
  ];

  return (
    <div className="px-4 flex items-center gap-1">
      <div className="flex flex-col items-center gap-2">
        {suggestions.map((suggestion, index) => (
          <div
            onClick={() => {
              setVehiclePanel(true);
              setPanelOpen(false);
            }}
            key={index}
            className="flex  items-center gap-2 active:border-2 rounded-lg"
          >
            <IoLocationSharp className="bg-gray-200 w-6 h-6 rounded-full" />

            <h3 className="text-sm border-b-1 border-gray-100 font-semibold py-4">
              {suggestion}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LocationSearchPanel;
