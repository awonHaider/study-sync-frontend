import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import successIcon from "../../Images/ForgotPassword/successIcon.png";
import { PiLinkSimple } from "react-icons/pi";
import { HiMiniClipboardDocument } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";
import ToggleSwitch from "./ToggleSwitch";

const CreateSession = () => {
  const [isCreateGroupPopupVisible, setCreateGroupPopupVisible] =
    useState(false);
  const [isSuccessPopupVisible, setSuccessPopupVisible] = useState(false);

  const handleCreateGroupClick = () => {
    setCreateGroupPopupVisible(true);
  };

  const handelCreateSessionClick = () => {
    setCreateGroupPopupVisible(false);
    setSuccessPopupVisible(true);
  };

  const closePopup = () => {
    setCreateGroupPopupVisible(false);
    setSuccessPopupVisible(false);
  };

  return (
    <>
      <section>
        <div>
          {/* Top Part - Create a Session */}
          <div className="flex items-center justify-between bg-[#8ABBF0] pl-6 pr-10 py-7 rounded-lg">
            <div className=" flex flex-col gap-2">
              <h2 className="text-2xl font-semibold">Hello Anna,</h2>
              <p className="text-sm  mt-1">
                Lorem ipsum dolor sit amet consectetur. Ut sit ullamcorper
                interdum mattis suspendisse at neque et.
              </p>
            </div>

            <button
              className="bg-blue-600 text-white px-4 py-2 rounded-full flex items-center space-x-2 hover:bg-blue-700"
              onClick={() => handleCreateGroupClick()}
            >
              <span className="font-[500]">Create a Session</span>
              <FaArrowRight />
            </button>
          </div>

          <div>
            {/* Create a group Popup */}
            {isCreateGroupPopupVisible && (
              <div
                id="create-group-overlay"
                className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 "
              >
                <div className="bg-white rounded-lg shadow-lg w-[45%] p-6 h-[90vh] overflow-auto">
                  <div className="flex flex-row ">
                    <h2 className="text-2xl font-semibold mb-4 h-[35px] flex-1">
                      Create a Session
                    </h2>

                    <button
                      className="bg-[#EBEBEB] text-white h-[35px] text-sm font-semibold p-2 rounded-full "
                      onClick={closePopup}
                    >
                      <IoMdClose className="text-lg font-bold text-[#8A8A8A]" />
                    </button>
                  </div>

                  <p className="text-sm text-gray-500 mb-6">
                    Lorem ipsum dolor sit amet consectetur. Ut dignissim justo
                    nibh diam adipiscing nullam cum. Nisl accumsan arcu faucibus
                    lectus.
                  </p>
                  <form>
                    <div className="mb-4 border border-gray-300 rounded-lg p-2 flex justify-center">
                      <ToggleSwitch />
                    </div>
                    <div className="mb-4">
                      {/* <label className="block text-sm font-medium mb-1">
                            Session Topic
                          </label> */}
                      <input
                        type="text"
                        className="w-full border border-gray-300 rounded-lg p-2"
                        placeholder="Enter session topic"
                      />
                    </div>
                    <div className="mb-4">
                      {/* <label className="block text-sm font-medium mb-1">
                            Number of Students
                          </label> */}
                      <input
                        type="number"
                        className="w-full border border-gray-300 rounded-lg p-2"
                        placeholder="Enter number of students"
                      />
                    </div>
                    <div className="mb-4">
                      {/* <label className="block text-sm font-medium mb-1">
                            Date
                          </label> */}
                      <input
                        type="date"
                        className="w-full border border-gray-300 rounded-lg p-2"
                      />
                    </div>
                    <div className=" mb-4">
                      {/* <label className="block text-sm font-medium mb-1">
                            Start Time
                          </label> */}
                      <input
                        type="time"
                        className="w-full border border-gray-300 rounded-lg p-2"
                      />
                    </div>
                    <div className=" mb-4">
                      {/* <label className="block text-sm font-medium mb-1">
                            End Time
                          </label> */}
                      <input
                        type="time"
                        className="w-full border border-gray-300 rounded-lg p-2"
                      />
                    </div>

                    <div className="mb-6">
                      {/* <label className="block text-sm font-medium mb-1">
                            Description
                          </label> */}
                      <textarea
                        rows="4"
                        className="w-full border border-gray-300 rounded-lg p-2"
                        placeholder="Enter description (not more than 500 words)"
                      ></textarea>
                      <div className="pt-[2px] flex flex-row-reverse text-xs">
                        <p>Not more than 500 words</p>
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
                      onClick={() => handelCreateSessionClick()}
                    >
                      Create Group
                    </button>
                  </form>
                </div>
              </div>
            )}
          </div>

          <div>
            {/* Success Popup */}
            {isSuccessPopupVisible && (
              <div
                id="group-created-overlay"
                className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
              >
                <div className="bg-white rounded-lg shadow-lg w-[37%] p-6 relative">
                  <button
                    className="bg-[#EBEBEB] text-white h-[35px] text-sm font-semibold p-2 rounded-full absolute top-4 right-4"
                    onClick={closePopup}
                  >
                    <IoMdClose className="text-lg font-bold text-[#8A8A8A]" />
                  </button>

                  <div className=" flex flex-col gap-8 py-12 mx-auto items-center p-2">
                    <div className="flex flex-col items-center gap-4">
                      <img
                        className="h-[140px] w-[140px] mb-8"
                        src={successIcon}
                        alt=""
                      />

                      <h2 className=" text-center text-xl sm:text-2xl font-semibold mb-2">
                        Group created successfully !!
                      </h2>
                      <p className=" text-[#B0B0B0] text-center mb-4 text-sm">
                        Lorem ipsum dolor sit amet consectetur. Ut dignissim
                        justo nibh diam adipiscing nullam cum. Nisl accumsan
                        arcu faucibus lectus. Lorem ipsum dolor sit amet
                        consectetur. Ut dignissim justo nibh diam adipiscing
                        nulla
                      </p>
                    </div>
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
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default CreateSession;
