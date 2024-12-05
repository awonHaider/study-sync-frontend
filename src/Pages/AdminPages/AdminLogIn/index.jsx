import React from "react";
import { FaRegEye } from "react-icons/fa6";

import studySyncLogoMain from "../../../Images/Logo/studySyncLogoMain.png";

const AdminLogIn = () => {
  return (
    <section className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="container mx-auto">
        <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg text-center">
          <div className="flex justify-center mb-6">
            <div className="w-[150px]">
              <img src={studySyncLogoMain} alt="StudySync Logo" />
            </div>
          </div>

          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-800">Welcome Admin</h1>
            <p className="text-[#8A8A8A]">Login to get started!</p>
          </div>

          <form className="space-y-4">
            <input
              type="email"
              placeholder="Email address"
              className="w-full border border-gray-300 rounded-lg p-3"
            />
            <div className="relative">
              <input
                type="password"
                placeholder="Password"
                className="w-full border border-gray-300 rounded-lg p-3 pr-10"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-3 flex items-center text-gray-500"
              >
                <FaRegEye />
              </button>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white rounded py-3 font-semibold"
            >
              Login
            </button>
          </form>

          <a href="#" className="text-[#006BDE] font-semibold block mt-4">
            Reset Password
          </a>
        </div>
      </div>
    </section>
  );
};

export default AdminLogIn;
