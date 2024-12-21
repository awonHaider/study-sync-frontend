import React from "react";
import { FiBell, FiSearch } from "react-icons/fi";

const AdminHeader = () => {
  return (
    <section>
      <div className="flex items-center justify-between p-4 bg-white border border-l-0">
        {/* Welcome Message */}
        <div>
          <h1 className="text-xl font-bold text-gray-800">Welcome Admin,</h1>
          <p className="text-md text-[#8A8A8A]">
            Check out your dashboard activities
          </p>
        </div>

        {/* Search Input and Notification */}
        <div className="flex items-center space-x-2">
          {/* Search Bar */}
          <div className="relative flex items-center w-64">
            <FiSearch className="absolute left-3 text-gray-500 w-5 h-5" />
            <input
              type="text"
              placeholder="Search for anything"
              className="w-full pl-10 pr-4 py-2 text-sm border rounded-lg outline-none border-gray-300 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Notification Icon */}
          <button className="relative p-2 rounded-full bg-gray-100 hover:bg-gray-200">
            <FiBell className="w-6 h-6 text-gray-600" />
            <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full"></span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default AdminHeader;
