import React from "react";
import studySyncLogoMain from "../../Images/Logo/studySyncLogoMain.png";
import { FaRegUser } from "react-icons/fa6";
import { BsCameraVideo } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import { TfiAnnouncement } from "react-icons/tfi";
import { FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";

const AdminSiderbar = () => {
  return (
    <section className="fixed">
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
    </section>
  );
};

export default AdminSiderbar;
