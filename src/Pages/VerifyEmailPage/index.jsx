import React from "react";
import Header from "../../Layout/header";
import verifyEmailPageImage from "../../Images/VerifyEmailPage/verifyEmailPageImage.png";
import signalIcon from "../../Images/VerifyEmailPage/signalIcon.png";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa6";

const VerifyEmailPage = () => {
  return (
    <section>
      <Header></Header>
      <div className="container mx-auto">
        {/* Main Container */}
        <div className="lg:w-[80%] mx-3 md:mx-6 lg:mx-auto grid grid-cols-7 gap-5 border border-gray-200 shadow-sm rounded-xl">
          {/* left Side - Cover Image */}
          <div className=" lg:h-[420px] hidden lg:flex rounded-xl col-span-7 lg:col-span-3 relative">
            <img
              className="w-full h-full object-cover rounded-xl"
              src={verifyEmailPageImage}
              alt=""
            />
            <img
              className="absolute top-3 right-3 w-9"
              src={signalIcon}
              alt=""
            />
          </div>
          {/* Right Side - Verify Email */}
          <div className="h-full col-span-7 lg:col-span-4 flex ">
            <div className="w-[100%] bg-white p-4 lg:p-8 rounded-xl ">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4">
                Verify Account
              </h2>
              <div className="flex gap-4">
                <p className="mb-6 text-[#666666]">
                  Enter the code sent to your email address to verify your
                  account !
                </p>
              </div>
              <form className="space-y-6">
                <div className="flex space-x-4 md:mb-6">
                  <input
                    type="text"
                    className="w-12 h-12 text-center text-xl border border-gray-300 rounded-md focus:outline-none"
                    maxLength="1"
                    readOnly
                  />
                  <input
                    type="text"
                    className="w-12 h-12 text-center text-xl border border-gray-300 rounded-md focus:outline-none"
                    maxLength="1"
                    readOnly
                  />
                  <input
                    type="text"
                    className="w-12 h-12 text-center text-xl border border-gray-300 rounded-md focus:outline-none"
                    maxLength="1"
                    readOnly
                  />
                  <input
                    type="text"
                    className="w-12 h-12 text-center text-xl border border-gray-300 rounded-md focus:outline-none"
                    maxLength="1"
                    readOnly
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white rounded-full py-3 font-semibold"
                >
                  Verify Account
                </button>
              </form>
              <p className="text-center text-gray-600 mt-4">
                Didn’t See Code?{" "}
                <button className="text-blue-500 hover:underline">
                  Resend
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VerifyEmailPage;
