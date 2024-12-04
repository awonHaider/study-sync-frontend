import React, { useState } from "react";
import Header from "../../Layout/header";
import BookedSessions from "../../Components/MainPage/BookedSessions";
import { ImHome } from "react-icons/im";
import { GrSchedule } from "react-icons/gr";
import { GrResources } from "react-icons/gr";
import { FaArrowRight } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { IoTimeSharp } from "react-icons/io5";

import { MdShare } from "react-icons/md";

import { IoMdClose } from "react-icons/io";

const MySessions = () => {
  const [activeTab, setActiveTab] = useState("ongoing");
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [selectedSession, setSelectedSession] = useState(null); // State to manage the selected session

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleSessionClick = (session) => {
    setSelectedSession(session); // Set the clicked session details
    setIsPopupVisible(true); // Show the popup
  };

  const closePopup = () => {
    setIsPopupVisible(false); // Hide the popup
    setSelectedSession(null); // Clear the selected session
  };

  const studyGroups = new Array(12).fill({
    title: "Tech Mentorship Class",
    description:
      "Lorem ipsum dolor sit amet consectetur. Ut dignissim nulla amet adipiscing nullam cum. Nisl accumsan arcu. ",
    date: "Sept 5, 2024",
    time: "11:00 AM - 12:00 PM",
    status: "Ongoing",
    members: [
      "https://feji.us/yhx9jp",
      "https://feji.us/vr8lo1",
      "https://feji.us/y0xl4c",
      "https://feji.us/vr8lo1",
      "https://feji.us/y0xl4c",
    ],
  });

  return (
    <>
      <div className=" col-span-8 bg-[#F2F2F2] rounded-xl">
        {/* Top Study Session Section */}
        <div className="p-6 max-w-screen-xl mx-auto">
          <h2 className="text-xl font-semibold mb-4">My Sessions</h2>

          {/* Tabs */}
          <div className="flex space-x-4 mb-6 text-sm font-medium border-b-2 border-grey-300">
            <button
              className={`pb-2 ${
                activeTab === "ongoing"
                  ? "border-b-2 border-blue-500 text-blue-500"
                  : "text-gray-500"
              }`}
              onClick={() => handleTabClick("ongoing")}
            >
              Booked Sessions
            </button>

            <button
              className={`pb-2 ${
                activeTab === "completed"
                  ? "border-b-2 border-blue-500 text-blue-500"
                  : "text-gray-500"
              }`}
              onClick={() => handleTabClick("completed")}
            >
              Recorded & Completed Sessions
            </button>
          </div>

          {/* Study Groups Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {studyGroups.map((group, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-xl p-4 bg-white shadow-sm"
                onClick={() => handleSessionClick(group)}
              >
                <h3 className="font-semibold text-lg mb-2">{group.title}</h3>
                <p className="text-gray-500 text-sm mb-4 text-justify">
                  {group.description}
                </p>
                <div className="text-sm bg-[#F7F7F7] text-black mb-2 flex flex-col gap-2 rounded-lg p-2">
                  {group.date} • {group.time}
                  <div className="text-[#04C30C] font-medium text-sm inline-block">
                    {group.status}
                  </div>
                </div>

                <div className="flex items-center justify-between bg-[#B0D1F5] px-2 py-4 rounded-lg">
                  {/* Profile Images */}
                  <div className="flex -space-x-2">
                    {group.members.map((member, idx) => (
                      <img
                        key={idx}
                        src={member}
                        alt="Member"
                        className="w-8 h-8 rounded-full border-2 border-white"
                      />
                    ))}
                  </div>
                  {/* Join Button */}
                  <button className="bg-[#006BDE] text-white text-sm font-semibold py-2 px-4 rounded-full">
                    Join Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Popup Content */}
          {isPopupVisible && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full">
                <div className="flex justify-between mb-7">
                  <div className="pt-2 flex flex-col gap-4">
                    <p className="text-sm flex gap-2 items-center">
                      <GrSchedule className="text-lg" />
                      {selectedSession?.date}
                    </p>
                    <div className="flex gap-3">
                      <p className="text-sm flex gap-2 items-center">
                        <IoTimeSharp className="text-xl" />
                        {selectedSession?.time}
                      </p>
                      <p className="text-[#04C30C] text-sm">Ongoing</p>
                    </div>
                  </div>
                  <div className="flex h-[35px] gap-2 items-center">
                    <button className="bg-[#EBEBEB] text-[#8A8A8A] text-sm font-[500] px-3 py-2 rounded-full flex items-center gap-2">
                      <MdShare className="text-black text-lg" />
                      Share Link
                    </button>
                    <button
                      className="bg-[#EBEBEB] text-white text-sm font-semibold p-2 rounded-full"
                      onClick={closePopup}
                    >
                      <IoMdClose className="text-lg font-bold text-[#8A8A8A]" />
                    </button>
                  </div>
                </div>

                <h3 className="text-2xl font-semibold mb-3">
                  {selectedSession?.title}
                </h3>

                <div className="flex gap-2 items-center mb-3">
                  {/* Profile Images */}
                  <div className="flex -space-x-2">
                    {selectedSession?.members.map((member, idx) => (
                      <img
                        key={idx}
                        src={member}
                        alt="Member"
                        className="w-8 h-8 rounded-full border-2 border-white"
                      />
                    ))}
                  </div>

                  <p className="text-md">30 person joined</p>
                </div>

                <p className="text-gray-600 mb-4">
                  {selectedSession?.description}
                </p>

                <a href="#" className="text-[#006BDE] font-semibold">
                  Click Here to Join
                </a>
              </div>
            </div>
          )}

          {/* Pagination */}
          <div className="flex items-center justify-end space-x-2 mt-6">
            {/* Previous Button (disabled) */}
            <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-gray-100 text-gray-400 cursor-not-allowed">
              <FiChevronLeft className="w-4 h-4" />
            </button>

            {/* Page Numbers */}
            <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-white border-2 border-purple-500 text-purple-500 font-semibold">
              1
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-white text-gray-700 hover:bg-blue-100">
              2
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-white text-gray-400 cursor-default">
              ...
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-white text-gray-700 hover:bg-blue-100">
              9
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-white text-gray-700 hover:bg-blue-100">
              10
            </button>

            {/* Next Button */}
            <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-blue-500 text-white hover:bg-blue-600">
              <FiChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MySessions;
