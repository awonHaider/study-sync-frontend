import React from "react";
import imgSignalIcon from "../../Images/Homepage/signalIcon.png";
import imgVideoCallPerson from "../../Images/VideoCallPage/videoCallImage.png";

import { FaChromecast } from "react-icons/fa";
import { MdOutlineVideoCameraBack } from "react-icons/md";
import { ImPhoneHangUp } from "react-icons/im";
import { IoMicOutline } from "react-icons/io5";
import { HiOutlineEllipsisVertical } from "react-icons/hi2";

const LoadingScreen = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 relative">
      {/* Background Image */}
      <div className="">
        <div
          className="absolute inset-0 bg-cover bg-center filter blur-sm mb-36 mt-10 mx-10"
          style={{
            backgroundImage: `url(${imgVideoCallPerson})`, // Replace with an actual background image or dynamically load it
          }}
        ></div>
        <img
          src={imgSignalIcon}
          alt="Signal Icon"
          className="absolute top-14 right-14 h-6 w-6 z-10"
        />
      </div>

      {/* Foreground Content */}
      <div className="absolute w-[95%] h-[78%] mb-28 flex flex-col items-center justify-center bg-black bg-opacity-50 rounded-lg shadow-lg  p-6">
        {/* Circular Loading Animation */}
        <div className="w-16 h-16 border-4 border-gray-300 border-t-white  rounded-full animate-spin"></div>
        <h1 className="mt-6 text-lg font-semibold text-white">Hold On</h1>
        <p className="text-sm text-white mt-2">
          We are waiting for the organizer to let you in
        </p>
      </div>

      {/* Video Call Controls */}
      <div className="absolute bottom-6 right-4 left-4 flex flex-row justify-center items-center space-x-4 bg-[#E6F0FC] mt-4 py-5 mx-5 rounded-xl mb-4\2">
        <button className="bg-white rounded-full p-2">
          <FaChromecast className="text-2xl" />
        </button>
        <button className="bg-white rounded-full p-2">
          <MdOutlineVideoCameraBack className="text-2xl" />
        </button>
        <button className="bg-[#D00101] rounded-full px-4 py-2">
          <ImPhoneHangUp className="text-2xl text-white" />
        </button>
        <button className="bg-white rounded-full p-2">
          <IoMicOutline className="text-2xl" />
        </button>
        <button className="bg-white rounded-full p-2">
          <HiOutlineEllipsisVertical className="text-2xl" />
        </button>
      </div>
    </div>
  );
};

export default LoadingScreen;
