import React, { useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import UserManagement from "./UserManagement";
import SessionManagement from "./SessionManagement.jsx";
import UserSupport from "./UserSupport.jsx";
import Annoucements from "./Announcements.jsx";

import studySyncLogoMain from "../../../Images/Logo/studySyncLogoMain.png";
import { FaRegUser } from "react-icons/fa6";
import { BsCameraVideo } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import { TfiAnnouncement } from "react-icons/tfi";
import { FiLogOut } from "react-icons/fi";
import { FiBell, FiSearch } from "react-icons/fi";

const AdminDashboard = () => {
  return (
    <>
      <section className="max-w-screen-xl mx-auto">
        <div className="">
          {/* Main Container */}
          <div className="grid grid-cols-10 pl-5">
            {/* Left Side - Sidebar */}
            <div className=" col-span-2 border-r">
              {/* Logo - StudySync  */}
              <div className="flex items-center gap-2 py-8 mr-6 border-b">
                <div className="w-[80px]">
                  <img className="w-full" src={studySyncLogoMain} alt="" />
                </div>
                <h2 className="text-[#006BDE] font-bold text-xl">Study Sync</h2>
              </div>

              <div className="p-4 pl-0 space-y-3 text-sm">
                {/* User Management Button */}
                <Link
                  to="/user-management"
                  className="flex items-center space-x-2 text-gray-500 hover:bg-[#006BDE] hover:text-[#FEFEFE] p-2 rounded-lg"
                >
                  <FaRegUser />

                  <span>User Management</span>
                </Link>

                {/* My Session Management Button */}
                <Link
                  to="/session-management"
                  className="flex items-center space-x-2 text-gray-500 hover:bg-[#006BDE] hover:text-[#FEFEFE]  p-2 rounded-lg"
                >
                  <BsCameraVideo />
                  <span>Session Management</span>
                </Link>

                {/* My User Support Button */}
                <Link
                  to="/user-support"
                  className="flex items-center space-x-2 text-gray-500 hover:bg-[#006BDE] hover:text-[#FEFEFE]  p-2 rounded-lg"
                >
                  <BiSupport />

                  <span> User Support</span>
                </Link>

                {/* announcements Button */}
                <Link
                  to="/announcements"
                  className="flex items-center space-x-2 text-gray-500 hover:bg-[#006BDE] hover:text-[#FEFEFE]  p-2 rounded-lg"
                >
                  <TfiAnnouncement />

                  <span> Announcement</span>
                </Link>
              </div>

              <div className="border-t py-4 mt-4 mr-6 text-sm">
                <a href="">
                  <div className="flex items-center space-x-2 text-gray-500 hover:bg-[#006BDE] hover:text-[#FEFEFE] p-2 rounded-lg">
                    <FiLogOut />

                    <span>Logout</span>
                  </div>
                </a>
              </div>
            </div>
            {/* Right Side */}
            <div className=" col-span-8 rounded-xl">
              {/* First Section - Header */}
              <div className="flex items-center justify-between p-4 bg-white border border-l-0">
                {/* Welcome Message */}
                <div>
                  <h1 className="text-xl font-bold text-gray-800">
                    Welcome Admin,
                  </h1>
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

              {/* Session Management */}

              <Routes>
                <Route path="/" element={<UserManagement />} />
                <Route path="/user-management" element={<UserManagement />} />
                <Route
                  path="/session-management"
                  element={<SessionManagement />}
                />
                <Route path="/user-support" element={<UserSupport />} />
                <Route path="/announcements" element={<Annoucements />} />
              </Routes>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdminDashboard;
