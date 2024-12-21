import React from "react";
import { Routes, Route } from "react-router-dom";
import MainSidebar from "../../Layout/Mainpage/sidebar.jsx";
import MainHeader from "../../Layout/Mainpage/header.jsx";
import MainHome from "./MainHome.jsx";
import MySessions from "./MySessions.jsx";
import UserSupport from "./UserSupport.jsx";

const MainPage = () => {
  return (
    <>
      <section>
        <div>
          {/* Main Container */}
          <div className="grid grid-cols-10 px-5">
            {/* Left Sidebar */}
            <div className=" col-span-2 ">
              <MainSidebar />
            </div>
            {/* Right Side - Main Content*/}

            <div className=" col-span-8 bg-[#F2F2F2] rounded-xl border-l">
              {/* Header for Mainpage */}
              <MainHeader />

              <Routes>
                <Route path="/" element={<MainHome />} />
                <Route path="/home" element={<MainHome />} />
                <Route path="/my-sessions" element={<MySessions />} />
                <Route path="/user-support" element={<UserSupport />} />
              </Routes>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MainPage;
