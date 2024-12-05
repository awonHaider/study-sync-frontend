import React from "react";
import TopStudySessions from "../../Components/MainPage/TopStudySessions.jsx";
import CreateSession from "../../Components/MainPage/CreateSession.jsx";
import BookedSessions from "../../Components/MainPage/BookedSessions";
import MainSidebar from "../../Layout/Mainpage/sidebar.jsx";
import MainHeader from "../../Layout/Mainpage/header.jsx";

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

              {/* Top Part - Create a Session */}
              <CreateSession />

              {/* Booked Sessions Section */}
              <BookedSessions />

              {/* Top Study Session Section */}
              <TopStudySessions />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MainPage;
