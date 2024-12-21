import React, { useState } from "react";
import { GrSchedule } from "react-icons/gr";
import { IoTimeSharp } from "react-icons/io5";
import { MdShare } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import Pagination from "../Common/Pagination.jsx";

const MySessions = () => {
  const [activeTab, setActiveTab] = useState("booked");
  const [isStudyGroupPopupVisible, setStudyGroupPopupVisible] = useState(false);
  const [selectedSession, setSelectedSession] = useState(null); // State to manage the selected session

  const getButtonText = () => {
    if (activeTab === "booked") return "Join Now";
    if (activeTab === "created" || activeTab === "completed")
      return "Watch Now";
    return "";
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleSessionClick = (session) => {
    setSelectedSession(session);
    setStudyGroupPopupVisible(true);
  };

  const closePopup = () => {
    setStudyGroupPopupVisible(false);
    setSelectedSession(null);
  };

  const bookedSessions = new Array(12).fill({
    title: "Booked Session",
    description:
      "Lorem ipsum dolor sit amet consectetur. Ut dignissim nulla amet adipiscing nullam cum. Nisl accumsan arcu.",
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

  const createdSessions = new Array(8).fill({
    title: "Created Session",
    description:
      "Lorem ipsum dolor sit amet consectetur. Ut dignissim nulla amet adipiscing nullam cum. Nisl accumsan arcu.",
    date: "Sept 10, 2024",
    time: "2:00 PM - 3:00 PM",
    status: "Completed",
    members: [
      "https://feji.us/yhx9jp",
      "https://feji.us/vr8lo1",
      "https://feji.us/y0xl4c",
      "https://feji.us/vr8lo1",
      "https://feji.us/y0xl4c",
    ],
  });

  const completedSessions = new Array(10).fill({
    title: "Completed Session",
    description:
      "Lorem ipsum dolor sit amet consectetur. Ut dignissim nulla amet adipiscing nullam cum. Nisl accumsan arcu.",
    date: "Sept 1, 2024",
    time: "9:00 AM - 10:00 AM",
    status: "Completed",
    members: [
      "https://feji.us/yhx9jp",
      "https://feji.us/vr8lo1",
      "https://feji.us/y0xl4c",
      "https://feji.us/vr8lo1",
      "https://feji.us/y0xl4c",
    ],
  });

  const getSessionsForTab = () => {
    if (activeTab === "booked") return bookedSessions;
    if (activeTab === "created") return createdSessions;
    if (activeTab === "completed") return completedSessions;
    return [];
  };

  return (
    <>
      <section>
        <div className=" col-span-8 bg-[#F2F2F2] rounded-xl">
          {/* My Session Section */}
          <div className="p-6 max-w-screen-xl mx-auto">
            <h2 className="text-2xl font-semibold mb-4">My Sessions</h2>

            {/* Tabs */}
            <div className="flex space-x-4 mb-6 text-sm font-medium border-b-2 border-grey-300">
              <button
                className={`pb-2 ${
                  activeTab === "booked"
                    ? "border-b-2 border-blue-500 text-blue-500"
                    : "text-gray-500"
                }`}
                onClick={() => handleTabClick("booked")}
              >
                Booked Sessions
              </button>
              <button
                className={`pb-2 ${
                  activeTab === "created"
                    ? "border-b-2 border-blue-500 text-blue-500"
                    : "text-gray-500"
                }`}
                onClick={() => handleTabClick("created")}
              >
                Created Sessions
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
              {getSessionsForTab().map((group, index) => (
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
                      {getButtonText()}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Study Group Popup */}
            {isStudyGroupPopupVisible && (
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
                        <p className="text-[#04C30C] text-sm">
                          {selectedSession?.status}
                        </p>
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
            <Pagination />
          </div>
        </div>
      </section>
    </>
  );
};

export default MySessions;
