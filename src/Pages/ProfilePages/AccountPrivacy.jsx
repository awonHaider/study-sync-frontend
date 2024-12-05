import React, { useState } from "react";

const AccountPrivacy = () => {
  const [isVideoCamera, setVideoCamera] = useState(false);
  const [isMicrophone, setMicrophone] = useState(false);

  const handleToggleVideo = () => {
    setVideoCamera(!isVideoCamera);
  };

  const handleToggleMicrophone = () => {
    setMicrophone(!isMicrophone);
  };

  return (
    <div className="w-full">
      <h2 className="text-xl font-bold mb-6 text-[#8A8A8A]">Account Privacy</h2>

      <div className="space-y-6">
        {/* Push Notifications */}
        <div className="flex justify-between items-center border-2 border-[#F7F7F7] mb-5 p-2">
          <div>
            <h3 className="text-base font-semibold  pb-2">
              Video Camera settings
            </h3>
            <p className="text-sm text-[#B0B0B0]">
              Turn Camera on or off when joining a group session
            </p>
          </div>
          <button
            onClick={handleToggleVideo}
            className={`relative w-10 h-6 rounded-full ${
              isVideoCamera ? "bg-green-500" : "bg-gray-300"
            } transition`}
          >
            <span
              className={`absolute top-[0.145rem] left-1 w-5 h-5 bg-white rounded-full shadow-md transform ${
                isVideoCamera ? "translate-x-[13px]" : ""
              } transition`}
            ></span>
          </button>
        </div>

        {/* Email Notifications */}
        <div className="flex justify-between items-center border-2 border-[#F7F7F7] mb-5 p-2">
          <div>
            <h3 className="text-base font-semibold  pb-2">
              Microphone Settings
            </h3>
            <p className="text-sm text-[#B0B0B0]">
              Turn microphone on or off when joining a group session
            </p>
          </div>
          <button
            onClick={handleToggleMicrophone}
            className={`relative w-10 h-6 rounded-full ${
              isMicrophone ? "bg-green-500" : "bg-gray-300"
            } transition`}
          >
            <span
              className={`absolute top-[0.145rem] left-1 w-5 h-5 bg-white rounded-full shadow-md transform ${
                isMicrophone ? "translate-x-[13px]" : ""
              } transition`}
            ></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountPrivacy;
