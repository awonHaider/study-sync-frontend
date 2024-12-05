import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import Profile from "./Profile";
import NotificationSettings from "./NotificationSettings";
import AccountPrivacy from "./AccountPrivacy";
import Support from "./Support";
import { IoMdClose } from "react-icons/io";
import { FaRegUser } from "react-icons/fa6";
import { FiBell } from "react-icons/fi";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { BiSupport } from "react-icons/bi";

const Index = () => {
  return (
    <div className="bg-white flex flex-row h-full">
      {/* Left Sidebar */}
      <div className="w-1/4 bg-white pt-2  border-r border-grey ">
        <nav className="flex flex-col gap-6 items-start w-full ">
          <Link
            to="profile"
            className="flex items-center gap-2 text-[#8A8A8A] w-full p-2 rounded-[4px] hover:text-[#006BDE] hover:font-medium hover:bg-[#E6F0FC] hover:border-l-2 hover:border-[#006BDE]"
          >
            <FaRegUser className="text-lg" />
            <span>Profile</span>
          </Link>
          <Link
            to="notifications"
            className="flex items-center gap-2 text-[#8A8A8A] w-full p-2 rounded-[4px] hover:text-[#006BDE] hover:font-medium hover:bg-[#E6F0FC] hover:border-l-2 hover:border-[#006BDE]"
          >
            <FiBell className="text-lg" />
            <span>Notification Settings</span>
          </Link>
          <Link
            to="privacy"
            className="flex items-center gap-2 text-[#8A8A8A] w-full p-2 rounded-[4px] hover:text-[#006BDE] hover:font-medium hover:bg-[#E6F0FC] hover:border-l-2 hover:border-[#006BDE]"
          >
            <MdOutlinePrivacyTip className="text-lg" />
            <span>Account Privacy</span>
          </Link>
          <Link
            to="support"
            className="flex items-center gap-2 text-[#8A8A8A] w-full p-2 rounded-[4px] hover:text-[#006BDE] hover:font-medium hover:bg-[#E6F0FC] hover:border-l-2 hover:border-[#006BDE]"
          >
            <BiSupport className="text-lg" />
            <span>Support</span>
          </Link>
        </nav>
      </div>

      {/* Right Panel */}
      <div className="w-3/4 p-1 pl-4">
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/notifications" element={<NotificationSettings />} />
          <Route path="/privacy" element={<AccountPrivacy />} />
          <Route path="/support" element={<Support />} />
        </Routes>
      </div>
    </div>
  );
};

export default Index;
