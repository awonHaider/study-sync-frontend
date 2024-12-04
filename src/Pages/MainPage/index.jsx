import React, { useState } from "react";
import Header from "../../Layout/header";
import BookedSessions from "../../Components/MainPage/BookedSessions";
import { ImHome } from "react-icons/im";
import { GrSchedule } from "react-icons/gr";
import { GrResources } from "react-icons/gr";
import { FaArrowRight } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { IoTimeSharp } from "react-icons/io5";
import { Link, Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import MySessions from "./MySession.jsx";

import { MdShare } from "react-icons/md";

import { IoMdClose } from "react-icons/io";

const MainPage = () => {
  return (
    <>
      <Header></Header>
      <section>
        <div>
          {/* Main Container */}
          <div className="grid grid-cols-10 px-5">
            {/* Left Side */}
            <div className=" col-span-2 ">
              <div className="p-4 space-y-4">
                {/* Home Button */}
                <Link
                  to="home"
                  className="flex items-center space-x-2 text-gray-500 hover:bg-blue-100 hover:text-blue-600 p-2 rounded-lg"
                >
                  <ImHome />

                  <span>Home</span>
                </Link>

                {/* My Sessions Button */}
                <Link
                  to="my-sessions"
                  className="flex items-center space-x-2 text-gray-500 hover:bg-blue-100 hover:text-blue-600 p-2 rounded-lg"
                >
                  <GrSchedule />
                  <span>My Sessions</span>
                </Link>

                {/* My Resources Button */}
                <Link
                  to="my-resources"
                  className="flex items-center space-x-2 text-gray-500 hover:bg-blue-100 hover:text-blue-600 p-2 rounded-lg"
                >
                  <GrResources />

                  <span>My Resources</span>
                </Link>
              </div>
            </div>
            {/* Right Side */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/my-sessions" element={<MySessions />} />
            </Routes>
          </div>
        </div>
      </section>
    </>
  );
};

export default MainPage;
