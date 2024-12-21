import React from "react";
import { Routes, Route } from "react-router-dom";
import UserManagement from "./UserManagement";
import SessionManagement from "./SessionManagement.jsx";
import UserSupport from "./UserSupport.jsx";
import Annoucements from "./Announcements.jsx";
import AdminSiderbar from "../../../Layout/AdminDashboard/sidebar.jsx";
import AdminHeader from "../../../Layout/AdminDashboard/header.jsx";

const AdminDashboard = () => {
  return (
    <>
      <section className="max-w-screen-xl mx-auto">
        <div>
          {/* Main Container */}
          <div className="grid grid-cols-10 pl-5">
            {/* Left Side - Sidebar */}
            <div className=" col-span-2 border-r">
              <AdminSiderbar />
            </div>
            {/* Right Side */}
            <div className=" col-span-8 rounded-xl">
              {/* First Section - Header */}
              <AdminHeader />

              {/* Main Body Content - User, Session Management */}
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
