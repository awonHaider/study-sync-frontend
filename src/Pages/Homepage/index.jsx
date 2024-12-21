import React from "react";
import { useState } from "react";
import PowerOfPeerToPeer from "../../Components/Homepage/PowerOfPeerToPeer";
import TopTwoImages from "../../Components/Homepage/TopTwoImages";
import WhyChooseStudySync from "../../Components/Homepage/WhyChooseStudySync";
import PlatformStats from "../../Components/Homepage/PlatformStats";
import QuestionsAndAnswers from "../../Components/Homepage/QuestionsAndAnswers";
import JoinUs from "../../Components/Common/JoinUs";
import Layout from "../../Layout/Homepage";
import GetStarted from "../../Components/Homepage/GetStarted";

const Homepage = () => {
  // State to track which accordion item is open
  const [openItem, setOpenItem] = useState(null);

  // Toggle open state of an accordion item
  const toggleItem = (item) => {
    setOpenItem(openItem === item ? null : item);
  };
  return (
    <>
      <Layout>
        {/*First Section - Power of Peer to Peer */}
        <PowerOfPeerToPeer />

        {/* Second Section - Two Images */}
        <TopTwoImages />

        {/* Third Section - Why Choose StudySync? */}
        <WhyChooseStudySync />

        {/* Fourth Section - Platform Stats*/}
        <PlatformStats />

        {/* Fifth Section - Get Started with Study Sync */}
        <GetStarted />

        {/* Sixth Section - Question/Answers */}
        <QuestionsAndAnswers />

        {/* Last Section - Join Us */}
        <JoinUs />
      </Layout>
    </>
  );
};

export default Homepage;
