import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const SessionManagement = () => {
  const [selectedOption, setSelectedOption] = useState("Daily");

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const sessions = [
    {
      no: 1,
      topic: "React Basics",
      organizer: "John Doe",
      duration: "2 hours",
      sessionDate: "2024-11-10",
      attendees: 50,
      status: "Completed",
    },
    {
      no: 2,
      topic: "Advanced JavaScript",
      organizer: "Jane Smith",
      duration: "3 hours",
      sessionDate: "2024-11-15",
      attendees: 70,
      status: "Scheduled",
    },
    {
      no: 3,
      topic: "UI/UX Design Fundamentals",
      organizer: "Alice Brown",
      duration: "1.5 hours",
      sessionDate: "2024-11-18",
      attendees: 30,
      status: "Completed",
    },
    {
      no: 4,
      topic: "Cloud Computing",
      organizer: "Liam Taylor",
      duration: "2 hours",
      sessionDate: "2024-11-20",
      attendees: 40,
      status: "Cancelled",
    },
  ];

  return (
    <>
      {/* Second Section - Stat Cards */}
      <div className="grid grid-cols-3 gap-4 p-4">
        <div className="p-4 border rounded-lg shadow-sm bg-white">
          <p className="text-sm text-gray-500">Total Sessions</p>
          <h2 className="text-2xl font-bold text-black">200</h2>
        </div>
        <div className="p-4 border rounded-lg shadow-sm bg-white">
          <p className="text-sm text-gray-500">Active Sessions</p>
          <h2 className="text-2xl font-bold text-black">20</h2>
        </div>
        <div className="p-4 border rounded-lg shadow-sm bg-white">
          <p className="text-sm text-gray-500">Completed Sessions</p>
          <h2 className="text-2xl font-bold text-black">180</h2>
        </div>
      </div>

      {/* Third Section - Table */}
      <div className="border mx-4 rounded-lg">
        {/* Top Head */}
        <div className="flex justify-between p-4">
          <h3>Session Management</h3>
          <div className="flex gap-2">
            <select
              value={selectedOption}
              onChange={handleSelectChange}
              className="px-2 py-1 text-sm font-medium text-gray-500 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="Daily">Filter</option>
              <option value="Weekly">Weekly</option>
              <option value="Monthly">Monthly</option>
              <option value="Yearly">Yearly</option>
            </select>
            <select
              value={selectedOption}
              onChange={handleSelectChange}
              className="px-2 py-1 text-sm font-medium text-gray-500 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="Daily">Sort by</option>
              <option value="Weekly">Weekly</option>
              <option value="Monthly">Monthly</option>
              <option value="Yearly">Yearly</option>
            </select>
          </div>
        </div>

        {/* Table Content */}
        <div className="relative overflow-x-auto mb-8">
          <table className="w-full text-sm text-left text-gray-500 min-w-max">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th className="px-8 py-3 w-12 border-r">No</th>
                <th className="px-8 py-3 border-r">Topic</th>
                <th className="px-8 py-3 border-r">Organizer</th>
                <th className="px-8 py-3 border-r">Duration</th>
                <th className="px-8 py-3 border-r">Date of Session</th>
                <th className="px-8 py-3 border-r">No of Attendees</th>
                <th className="px-8 py-3 border-r">Status</th>
                <th className="px-8 py-3 w-12">
                  <BsThreeDotsVertical className="text-lg" />
                </th>
              </tr>
            </thead>
            <tbody>
              {sessions.map((session) => (
                <tr key={session.no} className="bg-white border-b">
                  <td className="px-8 py-4 border-r">{session.no}</td>
                  <td className="px-8 py-4 border-r">{session.topic}</td>
                  <td className="px-8 py-4 border-r">{session.organizer}</td>
                  <td className="px-8 py-4 border-r">{session.duration}</td>
                  <td className="px-8 py-4 border-r">{session.sessionDate}</td>
                  <td className="px-8 py-4 border-r">{session.attendees}</td>
                  <td className="px-8 py-4 border-r">{session.status}</td>
                  <td className="py-4 flex justify-center">
                    <BsThreeDotsVertical className="text-lg" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Pagination */}
        <div className="flex items-center justify-center space-x-2 mb-8">
          {/* Previous Button (disabled) */}
          <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-gray-100 text-gray-400 cursor-not-allowed">
            <FiChevronLeft className="w-4 h-4" />
          </button>

          {/* Page Numbers */}
          <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-white border-2 border-blue-500 text-blue-500 font-semibold">
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
          <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-blue-500 text-white hover:bg-blue-500">
            <FiChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </>
  );
};

export default SessionManagement;
