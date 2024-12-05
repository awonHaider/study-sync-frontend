import React from "react";
import { ImHome } from "react-icons/im";
import { GrSchedule } from "react-icons/gr";
import { GrResources } from "react-icons/gr";
import studySyncLogoMain from "../../Images/Logo/studySyncLogoMain.png";

const MainSidebar = () => {
  return (
    <>
      <section>
        <div className="p-4 space-y-4">
          <div className="flex items-center gap-2 py-4 mr-4 border-b">
            <div className="w-[70px]">
              <img className="w-full" src={studySyncLogoMain} alt="" />
            </div>
            <h2 className="text-[#006BDE] font-bold text-lg">Study Sync</h2>
          </div>
          {/* Home Button */}
          <div className="flex items-center space-x-2 text-gray-500 hover:bg-blue-100 hover:text-blue-600 p-2 rounded-lg">
            <ImHome />

            <span>Home</span>
          </div>

          {/* My Sessions Button */}
          <div className="flex items-center space-x-2 text-gray-500 hover:bg-blue-100 hover:text-blue-600 p-2 rounded-lg">
            <GrSchedule />
            <span>My sessions</span>
          </div>

          {/* My Resources Button */}
          <div className="flex items-center space-x-2 text-gray-500 hover:bg-blue-100 hover:text-blue-600 p-2 rounded-lg">
            <GrResources />

            <span>My Resources</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default MainSidebar;
