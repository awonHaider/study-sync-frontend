import React, { useState } from "react";
import imgMainLogo from "../../Images/Logo/studySyncLogo.png";
import imgSignalIcon from "../../Images/Homepage/signalIcon.png";
import imgVideoCallPerson from "../../Images/VideoCall/videoCallImage.png";

import {
  FaChromecast,
  FaRegSmile,
  FaPaperclip,
  FaRegImage,
  FaVideo,
} from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { MdOutlineVideoCameraBack } from "react-icons/md";
import { ImPhoneHangUp } from "react-icons/im";
import { IoMicOutline, IoChatbubblesOutline } from "react-icons/io5";
import {
  HiOutlineEllipsisVertical,
  HiMiniClipboardDocument,
} from "react-icons/hi2";
import { PiLinkSimple } from "react-icons/pi";
import { CiFolderOn } from "react-icons/ci";
import { FiDownload } from "react-icons/fi";

const index = () => {
  const [activeTab, setActiveTab] = useState("Chat");
  const [isCollasped, setCollasp] = useState(false);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handelCollaspeClick = () => {
    setCollasp(!isCollasped);
  };

  const videocallpersons = () => {
    return (
      <div className="h-48 border-2 rounded-xl relative">
        {/* Video Image */}
        <div className="h-[100%] rounded-xl">
          <img
            src={imgVideoCallPerson}
            alt="Person in Video Call"
            className="h-full w-full object-cover rounded-xl"
          />
        </div>

        {/* Blue Icon */}
        <img
          src={imgSignalIcon}
          alt="Signal Icon"
          className="absolute top-2 right-2 h-6 w-6"
        />

        {/* Person Name */}
        <span className="absolute bottom-2 left-2 px-3 py-2 rounded-lg text-sm bg-gray-800 text-white">
          Arthur Morgan
        </span>
      </div>
    );
  };

  return (
    <section>
      {/* Collapse Button */}
      {/* <div className="fixed right-[29%] top-2"> */}
      <div
        className={` absolute top-6 ${
          isCollasped === true ? "right-0 rotate-180" : " right-[29%] "
        }`}
      >
        <button
          onClick={handelCollaspeClick}
          className=" bg-[#F2F2F2] border border-[#DCDCDC] h-full mr-1 p-1 rounded-full shadow-sm"
        >
          <IoIosArrowBack className="text-black rotate-180" />
        </button>
      </div>

      {/* <div className="grid grid-cols-10 h-screen"> */}
      <div
        className={`grid h-screen${
          isCollasped === true ? "" : " grid-cols-10 "
        }`}
      >
        {/* Left Side */}
        <div className="col-span-7 bg-white border-r-2 mr-[1px]">
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 ">
            {/* Left Section: Logo and Back Button */}
            <div className="flex items-center gap-6">
              {/* Main Logo */}
              <div className="h-10">
                <img
                  src={imgMainLogo}
                  alt="Main Logo"
                  className="h-full w-full"
                />
              </div>
              {/* Back Button */}
              <button className="bg-[#F2F2F2] border border-[#DCDCDC] px-3 py-2 rounded-full shadow-sm">
                <IoIosArrowBack className="text-black text-sm" />
              </button>
            </div>

            {/* Center Section: Title and Timer */}
            {/* <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center"> */}
            <div
              className={`absolute flex flex-col items-center ${
                isCollasped === true
                  ? "left-1/2 transform -translate-x-1/2 "
                  : " left-1/3 transform -translate-x-1/3 "
              }`}
            >
              <h2 className="text-lg font-semibold text-black">
                Tech Mentorship Class
              </h2>
              <p className="text-[#D00101] text-sm font-semibold">1:00:56</p>
            </div>
          </div>

          {/* Video Section */}
          <div className="grid grid-flow-col auto-cols-fr grid-cols-3 grid-rows-3 px-5 gap-2 pt-2">
            {/* First Video Person */}

            {isCollasped === true && (
              <>
                {videocallpersons()}
                {videocallpersons()}
                {videocallpersons()}
                {videocallpersons()}
                {videocallpersons()}
                {videocallpersons()}
                {videocallpersons()}
                {videocallpersons()}
                {videocallpersons()}
                {videocallpersons()}
                {videocallpersons()}
                {videocallpersons()}
              </>
            )}

            {isCollasped === false && (
              <>
                {videocallpersons()}
                {videocallpersons()}
                {videocallpersons()}
                {videocallpersons()}
                {videocallpersons()}
                {videocallpersons()}
                {videocallpersons()}
                {videocallpersons()}
                {videocallpersons()}
              </>
            )}
          </div>

          {/* Video Call Options */}
          <div className="flex flex-row justify-center items-center space-x-4 bg-[#E6F0FC] mt-4 py-5 mx-5 rounded-xl">
            <button className="bg-white rounded-full p-2">
              <FaChromecast className="text-2xl" />
            </button>
            <button className="bg-white rounded-full p-2">
              <MdOutlineVideoCameraBack className="text-2xl" />
            </button>
            <button className="bg-[#D00101] rounded-full px-4 py-2">
              <ImPhoneHangUp className="text-2xl text-white" />
            </button>
            <button className="bg-white rounded-full p-2">
              <IoMicOutline className="text-2xl" />
            </button>
            <button className="bg-white rounded-full p-2">
              <HiOutlineEllipsisVertical className="text-2xl" />
            </button>
          </div>
        </div>

        {/* Right Side */}
        {/* <div className="col-span-3 bg-[#F7F7F7] p-4 mx-5 my-2 mb-4 rounded-xl"> */}
        <div
          className={` ${
            isCollasped === true
              ? "hidden"
              : "block col-span-3 bg-[#F7F7F7] p-4 mx-5 my-2 mb-4 rounded-xl"
          }`}
        >
          <div className="pt-6">
            <h2 className="text-xl font-semibold">Tech Mentorship Class</h2>
            <p className="text-[#8A8A8A] text-sm my-2 pl-1">
              Lorem ipsum dolor sit amet consectetur. Quis tellus commodo varius
              ut. Posuere non vehicula purus id eu sed pharetra posuere.{" "}
            </p>
          </div>
          {/* Meeting Link */}
          <div className="flex flex-col items-center p-2 pb-6 ">
            <div className="w-fit bg-[#E6F0FC] text-[#65B2FB] rounded-full font-light text-l py-2 px-4 flex flex-row items-center justify-between gap-5">
              <div className="flex space-x-3 items-center">
                <button>
                  <PiLinkSimple />
                </button>
                <a
                  href={"void:javascript(0)"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm"
                >
                  meeting6473883.studysync/3424
                </a>
                <button>
                  <HiMiniClipboardDocument className="ml-4 h-4 text-[#006BDE]" />
                </button>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex space-x-4 mb-6 justify-around text-sm font-medium border-b-2 border-grey-300">
            <button
              className={`pb-2 flex flex-row items-center gap-2 text-sm ${
                activeTab === "Chat"
                  ? "border-b-2 border-blue-500 text-blue-500"
                  : "text-gray-500"
              }`}
              onClick={() => handleTabClick("Chat")}
            >
              <IoChatbubblesOutline className="text-lg" /> Chat Room
            </button>
            <button
              className={`pb-2 flex flex-row items-center gap-2 text-sm ${
                activeTab === "Files & Attachment"
                  ? "border-b-2 border-blue-500 text-blue-500"
                  : "text-gray-500"
              }`}
              onClick={() => handleTabClick("Files & Attachment")}
            >
              <CiFolderOn className="text-lg" /> Files & Attachment
            </button>
          </div>

          {/* Chat Window */}
          {activeTab === "Chat" && (
            <section>
              <div className="flex flex-col items-center ">
                <p className="text-[#8A8A8A] text-xs">
                  {" "}
                  Please chat responsibly
                </p>
                <p className="text-[#B0B0B0] text-xs"> 7:33 AM</p>
              </div>

              <div className="flex flex-col mt-6">
                <div className="flex flex-row mr-0 mb-2 justify-end">
                  <div className="bg-white p-2 rounded-xl">
                    <p>Hello, is anybody here ?</p>
                    <span className="text-xs text-[#B0B0B0]">7:33 AM</span>
                  </div>
                </div>

                <div className="flex flex-row mr-0 mt-2 gap-4  justify-end">
                  <div className="bg-white p-2 rounded-xl">
                    <p>Yes, i am here ... the class has started already </p>
                    <span className="text-xs text-[#B0B0B0]"> 7:33 AM</span>
                  </div>
                </div>

                {/* Input Area */}
                <div className=" items-center gap-2 mt-36 p-1 border-t bg-white ">
                  {/* Input */}
                  <textarea
                    type="text"
                    onChange={"void:javascript(0)"}
                    placeholder="Type here ......."
                    className="w-full p-4 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                  />
                  <div className="flex w-full flex-row justify-between items-center">
                    {/* Icons */}
                    <div className="flex gap-2 ml-1">
                      <button className="text-gray-500 hover:text-blue-500">
                        <FaRegImage className="text-lg" />
                      </button>
                      <button className="text-gray-500 hover:text-blue-500">
                        <FaPaperclip className="text-lg" />
                      </button>
                      <button className="text-gray-500 hover:text-blue-500">
                        <FaRegSmile className="text-lg" />
                      </button>
                      <button className="text-gray-500 hover:text-blue-500">
                        <FaVideo className="text-lg" />
                      </button>
                    </div>

                    {/* Send Button */}
                    <button
                      onClick={"void:javascript(0)"}
                      className="bg-[#006BDE] text-white px-4 py-2 rounded-lg text-xs"
                    >
                      Send
                    </button>
                  </div>
                </div>
              </div>
            </section>
          )}
          {activeTab === "Files & Attachment" && (
            <section>
              <div className="flex flex-col items-center ">
                <p className="text-[#8A8A8A] text-xs">
                  {" "}
                  Find below files & attachments shared in this class
                </p>
              </div>

              <div className="grid grid-cols-1 mt-6 bg-white p-2 gap-2 rounded-xl">
                <div className="flex flex-row justify-between">
                  <button className="pb-2 flex flex-row items-center gap-2 text-sm ">
                    <CiFolderOn className="text-xl text-[#8A8A8A]" /> History of
                    computer science.pdf
                  </button>
                  <FiDownload className="text-xl text-[#006BDE] mr-4" />
                </div>
                <div className="flex flex-row justify-between">
                  <button className="pb-2 flex flex-row items-center gap-2 text-sm ">
                    <CiFolderOn className="text-xl text-[#8A8A8A]" /> History of
                    computer science.pdf
                  </button>
                  <FiDownload className="text-xl text-[#006BDE] mr-4" />
                </div>
                <div className="flex flex-row justify-between">
                  <button className="pb-2 flex flex-row items-center gap-2 text-sm ">
                    <CiFolderOn className="text-xl text-[#8A8A8A]" /> History of
                    computer science.pdf
                  </button>
                  <FiDownload className="text-xl text-[#006BDE] mr-4" />
                </div>
                <div className="flex flex-row justify-between">
                  <a
                    href="void:javascript(0)"
                    className="pb-2 flex flex-row items-center gap-2 text-sm italic underline"
                  >
                    <PiLinkSimple className="text-lg text-[#8A8A8A] " />{" "}
                    https//:www.studysync.com
                  </a>
                  <HiMiniClipboardDocument className="text-lg text-[#006BDE] mr-4" />
                </div>
              </div>
            </section>
          )}
        </div>
      </div>
    </section>
  );
};

export default index;
