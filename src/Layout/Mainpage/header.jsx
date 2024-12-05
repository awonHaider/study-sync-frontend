import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { FiBell } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import ProfilePopup from "../../Pages/ProfilePages/";

const MainHeader = () => {
  const [isNotificationPopupVisible, setNotificationPopupVisible] =
    useState(false);
  const [isProfilePopupVisible, setProfilePopupVisible] = useState(false);

  const notifications = [
    {
      title: "New Booking",
      time: "5 mins ago",
      message:
        "Alex from your Chemistry class wants to join your study group. Review their request in Group Settings.",
      action: {
        type: "buttons",
        onAccept: () => alert("Accepted"),
        onReject: () => alert("Rejected"),
      },
    },
    {
      title: "Upcoming Study Session",
      time: "5 mins ago",
      message:
        "Don't forget: You have an upcoming group study session on 'World History' tomorrow at 4 PM EST.",
      action: {
        type: "link",
        label: "Join Class Here",
        url: "void:javascript(0)",
      },
    },
    {
      title: "Resources",
      time: "5 mins ago",
      message:
        "Sarah from your Biology study group shared new study materials. Check them out before today's session at 3 PM.",
      action: {
        type: "link",
        label: "View",
        url: "void:javascript(0)",
      },
    },
    {
      title: "Upcoming Study Session",
      time: "5 mins ago",
      message:
        "Your study session on 'Advanced Calculus' starts in 15 minutes! Join early to test your audio and video.",
      action: {
        type: "link",
        label: "Open",
        url: "void:javascript(0)",
      },
    },
    {
      title: "System Upgrade",
      time: "5 mins ago",
      message:
        "StudySync will be briefly unavailable for updates on Sunday at 2 AM EST. All scheduled sessions will be automatically rescheduled.",
    },
  ];

  const handleNotificationClick = () => {
    setNotificationPopupVisible(true);
  };

  const handleProfileClick = () => {
    setProfilePopupVisible(true);
  };

  const closePopup = () => {
    setNotificationPopupVisible(false);
    setProfilePopupVisible(false);
  };

  return (
    <header className="flex items-center justify-between bg-white p-4 py-6">
      {/* Search Bar */}
      <div className="flex items-center bg-blue-50 rounded-full px-4 py-2 w-full max-w-md">
        <FiSearch className="text-gray-500 mr-2" />
        <input
          type="text"
          placeholder="Search for a room or study group"
          className="flex-grow bg-transparent outline-none text-gray-600"
        />
      </div>

      {/* Right Buttons */}
      <div className="flex items-center space-x-4">
        <button
          className="relative p-2 rounded-full bg-[#E6F0FC] hover:bg-[#9ca3ab]"
          onClick={handleNotificationClick}
        >
          <FiBell className="w-6 h-6 text-[#006BDE]" />
          <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full"></span>
        </button>

        <button
          className="relative p-2 rounded-full bg-[#E6F0FC] hover:bg-[#9ca3ab]"
          onClick={handleProfileClick}
        >
          <CgProfile className="w-6 h-6 text-[#006BDE]" />
        </button>
      </div>

      {/* Notification Popup */}
      {isNotificationPopupVisible && (
        <div
          id="notifications-overlay"
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        >
          <div className="bg-white rounded-lg shadow-lg w-2/5 max-h-[80vh] overflow-y-auto p-6 relative">
            <h2 className="text-xl font-semibold mb-4">Notifications</h2>
            <button
              className="absolute top-4 right-4 bg-gray-300 p-2 rounded-full"
              onClick={closePopup}
            >
              <IoMdClose className="text-gray-600 text-lg" />
            </button>
            <ul className="space-y-4">
              {notifications.map((notification, index) => (
                <li
                  key={index}
                  className="border border-[#65B2FB] rounded-md p-3 bg-[#F1F7FF]"
                >
                  <div className="flex justify-between">
                    <div>
                      <p className="font-semibold">{notification.title}</p>
                      <p className="text-sm text-gray-500">
                        {notification.time}
                      </p>
                      <p className="text-sm mt-2">{notification.message}</p>
                    </div>
                  </div>
                  {notification.action && (
                    <a
                      href={notification.action.url}
                      className="text-blue-500 text-sm"
                    >
                      {notification.action.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Profile Popup */}
      {isProfilePopupVisible && (
        <div
          id="profile-overlay"
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        >
          <div className="bg-white w-2/3 h-5/6 overflow-y-auto p-6 rounded-lg shadow-lg">
            <div className="flex justify-between items-center border-b pb-4">
              <h1 className="text-xl font-bold">Account Settings</h1>
              <button
                className="bg-gray-300 p-2 rounded-full"
                onClick={closePopup}
              >
                <IoMdClose className="text-gray-600 text-lg" />
              </button>
            </div>
            <ProfilePopup />
          </div>
        </div>
      )}
    </header>
  );
};

export default MainHeader;
