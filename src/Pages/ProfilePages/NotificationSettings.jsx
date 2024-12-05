import React, { useState } from "react";

const NotificationSettings = () => {
  const [pushNotifications, setPushNotifications] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState(true);

  const handleTogglePush = () => {
    setPushNotifications(!pushNotifications);
  };

  const handleToggleEmail = () => {
    setEmailNotifications(!emailNotifications);
  };

  return (
    <div className="w-full">
      <h2 className="text-xl font-bold mb-6 text-[#8A8A8A]">Notifications</h2>

      <div className="space-y-6">
        {/* Push Notifications */}
        <div className="flex justify-between items-center border-2 border-[#F7F7F7] mb-5 p-2">
          <div>
            <h3 className="text-base font-semibold  pb-2">
              Push Notifications
            </h3>
            <p className="text-sm text-[#B0B0B0]">
              Short messages we send to your device, even when the app is
              closed.
            </p>
          </div>
          <button
            onClick={handleTogglePush}
            className={`relative w-10 h-6 rounded-full ${
              pushNotifications ? "bg-green-500" : "bg-gray-300"
            } transition`}
          >
            <span
              className={`absolute top-[0.145rem] left-1 w-5 h-5 bg-white rounded-full shadow-md transform ${
                pushNotifications ? "translate-x-[13px]" : ""
              } transition`}
            ></span>
          </button>
        </div>

        {/* Email Notifications */}
        <div className="flex justify-between items-center border-2 border-[#F7F7F7] mb-5 p-2">
          <div>
            <h3 className="text-base font-semibold  pb-2">
              Email Notifications
            </h3>
            <p className="text-sm text-[#B0B0B0]">
              Stay updated on your schedual and upcoming features.
            </p>
          </div>
          <button
            onClick={handleToggleEmail}
            className={`relative w-10 h-6 rounded-full ${
              emailNotifications ? "bg-green-500" : "bg-gray-300"
            } transition`}
          >
            <span
              className={`absolute top-[0.145rem] left-1 w-5 h-5 bg-white rounded-full shadow-md transform ${
                emailNotifications ? "translate-x-[13px]" : ""
              } transition`}
            ></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotificationSettings;
