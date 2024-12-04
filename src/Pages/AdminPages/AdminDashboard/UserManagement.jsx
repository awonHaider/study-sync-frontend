import React, { useState } from "react";

import { BsThreeDotsVertical } from "react-icons/bs";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const UserManagement = () => {
  const [selectedOption, setSelectedOption] = useState("Daily");

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const users = [
    {
      no: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      username: "johndoe",
      joiningDate: "2022-01-01",
    },
    {
      no: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      username: "janesmith",
      joiningDate: "2022-02-15",
    },
    {
      no: 3,
      name: "Bob Johnson",
      email: "bob.johnson@example.com",
      username: "bobjohnson",
      joiningDate: "2023-03-20",
    },
    {
      no: 4,
      name: "Alice Brown",
      email: "alice.brown@example.com",
      username: "alicebrown",
      joiningDate: "2023-05-18",
    },
    {
      no: 5,
      name: "Charlie Wilson",
      email: "charlie.wilson@example.com",
      username: "charliewilson",
      joiningDate: "2023-06-30",
    },
    {
      no: 6,
      name: "Emma Davis",
      email: "emma.davis@example.com",
      username: "emmadavis",
      joiningDate: "2023-08-10",
    },
    {
      no: 7,
      name: "Liam Taylor",
      email: "liam.taylor@example.com",
      username: "liamtaylor",
      joiningDate: "2023-09-01",
    },
    {
      no: 8,
      name: "Sophia Moore",
      email: "sophia.moore@example.com",
      username: "sophiamoore",
      joiningDate: "2023-10-15",
    },
  ];

  return (
    <>
      {/* Second Section - Stat Cards */}
      <div className="grid grid-cols-3 gap-4 p-4">
        {/* Total Users Card */}
        <div className="p-4 border rounded-lg shadow-sm bg-white">
          <p className="text-sm text-gray-500">Total Users</p>
          <h2 className="text-2xl font-bold text-black">345,646</h2>
        </div>

        {/* Active Users Card */}
        <div className="p-4 border rounded-lg shadow-sm bg-white">
          <p className="text-sm text-gray-500">Active Users</p>
          <h2 className="text-2xl font-bold text-black">345,646</h2>
        </div>

        {/* New Signups Card */}
        <div className="p-4 border rounded-lg shadow-sm bg-white flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500">New Signups</p>
            <h2 className="text-2xl font-bold text-black">100</h2>
          </div>
          <div>
            <select
              value={selectedOption}
              onChange={handleSelectChange}
              className="px-2 py-1 text-sm font-medium text-gray-500 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="Daily">Daily</option>
              <option value="Weekly">Weekly</option>
              <option value="Monthly">Monthly</option>
              <option value="Yearly">Yearly</option>
            </select>
          </div>
        </div>
      </div>

      {/* Third Section - Table */}
      <div className=" border mx-4 rounded-lg">
        {/* Top Head */}
        <div className="flex justify-between p-4">
          <h3>Registered Clients</h3>
          <div className="flex gap-2">
            <div>
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
            </div>
            <div>
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
        </div>

        {/* Table Content */}
        <div className="relative overflow-x-auto mb-8">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-2 py-3 w-12 border-r">
                  No
                </th>
                <th scope="col" className="px-6 py-3 border-r">
                  Name
                </th>
                <th scope="col" className="px-6 py-3 border-r">
                  Email
                </th>
                <th scope="col" className="px-6 py-3 border-r">
                  Username
                </th>
                <th scope="col" className="px-6 py-3 border-r">
                  Date of Joining
                </th>
                <th scope="col" className="px-4 py-3 w-12">
                  <BsThreeDotsVertical className="text-lg" />
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.no} className="bg-white border-b">
                  <td className="px-2 py-4 border-r">{user.no}</td>
                  <td className="px-6 py-4 border-r">{user.name}</td>
                  <td className="px-6 py-4 border-r">{user.email}</td>
                  <td className="px-6 py-4 border-r">{user.username}</td>
                  <td className="px-6 py-4 border-r">{user.joiningDate}</td>
                  <td className=" py-4 flex justify-center">
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

export default UserManagement;
