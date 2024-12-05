import React from "react";
import { FaRegUser } from "react-icons/fa";

const Profile = () => {
  return (
    <div className="w-full ">
      <h2 className="text-xl font-bold mb-6 text-[#8A8A8A]">Profile</h2>
      {/* <h2 className="text-xl font-bold mb-6">Profile</h2> */}

      <div className="flex items-center mb-8">
        {/* Profile Picture */}
        <div className="w-20 h-20 rounded-full overflow-hidden border border-gray-300">
          <FaRegUser className="w-full h-full text-gray-400" />
        </div>

        {/* Profile Picture Buttons */}
        <div className="ml-4 mt-12">
          <button className="bg-[#006BDE] text-white px-4 py-2 rounded-md text-xs font-medium">
            Change Picture
          </button>
          <button className="ml-2 bg-[#FBE5E5] text-red-600 px-4 py-2 rounded-md text-xs font-medium">
            Delete Picture
          </button>
        </div>
      </div>

      {/* Profile Details Form */}
      <form className="space-y-4">
        {/* Profile Name */}
        <div>
          <label className="block text-sm font-medium text-[#8A8A8A] mb-1">
            Profile Name
          </label>
          <input
            type="text"
            value="Ali Hussein"
            className="w-full p-2 border border-gray-300 rounded-md bg-[#F8F8F8] focus:ring-blue-500 focus:border-blue-500 text-gray-800"
          />
        </div>

        {/* Username */}
        <div>
          <label className="block text-sm font-medium text-[#8A8A8A] mb-1">
            Username
          </label>
          <input
            type="text"
            value="@ Ali_Hussein Study sync"
            className="w-full p-2 border border-gray-300 rounded-md bg-[#F8F8F8] text-gray-800"
          />
        </div>

        {/* Email Address */}
        <div>
          <label className="block text-sm font-medium text-[#8A8A8A] mb-1">
            Email Address
          </label>
          <input
            type="email"
            value="AliHussein@gmail.com"
            className="w-full p-2 border border-gray-300 bg-[#F8F8F8] rounded-md text-gray-800"
          />
        </div>

        {/* Save Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-blue-600 transition disabled:opacity-50 disabled:cursor-not-allowed"
            disabled
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
