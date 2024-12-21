import React, { useState } from "react";

const ToggleSwitch = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="flex items-center">
      <span className="font-semibold text-gray-600 me-3">Schedule</span>
      <label className="inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          value=""
          className="sr-only peer"
          checked={isChecked}
          onChange={handleToggle}
        />
        <div
          className={`relative w-11 h-6 rounded-full peer ${
            isChecked ? "bg-blue-600" : "bg-gray-200"
          }`}
        >
          <div
            className={`absolute top-0.5 start-[2px] bg-white border-gray-300 border rounded-full h-5 w-5 transition-all ${
              isChecked
                ? "translate-x-full rtl:-translate-x-full border-white"
                : ""
            }`}
          ></div>
        </div>
      </label>
      <span className="font-semibold text-gray-600 ms-3">Live</span>
    </div>
  );
};

export default ToggleSwitch;
