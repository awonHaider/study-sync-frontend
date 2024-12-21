import React from "react";
import TopStudySessions from "../../Components/MainPage/TopStudySessions.jsx";
import CreateSession from "../../Components/MainPage/CreateSession.jsx";
import BookedSessions from "../../Components/MainPage/BookedSessions.jsx";

const MainHome = () => {
  return (
    <>
      <section>
        {/* Top Part - Create a Session */}
        <CreateSession />

        {/* Booked Sessions Section */}
        <BookedSessions />

        {/* Top Study Session Section */}
        <TopStudySessions />
      </section>
    </>
  );
};

export default MainHome;
