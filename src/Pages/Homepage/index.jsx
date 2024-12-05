import React from "react";
import { useState } from "react";
import GetStartedSectionCoverImage from "../../Images/Homepage/GetStartedSectionCoverImage.png";
import PowerOfPeerToPeer from "../../Components/Homepage/PowerOfPeerToPeer";
import TopTwoImages from "../../Components/Homepage/TopTwoImages";
import WhyChooseStudySync from "../../Components/Homepage/WhyChooseStudySync";
import PlatformStats from "../../Components/Homepage/PlatformStats";
import QuestionsAndAnswers from "../../Components/Homepage/QuestionsAndAnswers";
import JoinUs from "../../Components/Common/JoinUs";
import Layout from "../../Layout/Homepage";

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
        {/* <section>
        <div className="container mx-auto mt-14">
          <div className="px-3 md:px-6 lg:px-12 relative">
            <img
              src={GetStartedSectionCoverImage}
              alt=""
              className="w-full h-auto"
            />
            <div className="w-[40%] text-center flex flex-col gap-5 absolute top-[20%] left-1/2 transform -translate-x-1/2 items-center justify-center">
              <h2 className="text-4xl font-semibold">
                Get Started with StudySync
              </h2>
              <p className="text-[#8A8A8A]">
                Connect and thrive in a global learning community with
                StudySync. Our innovative platform breaks down geographical
                barriers, bringing together millions of students from diverse
                backgrounds and cultures.
              </p>
              <button className="text-white bg-[#006BDE] px-9 py-2 rounded-full">
                Join Us
              </button>
            </div>
          </div>
        </div>
      </section> */}
        <section className="lg:relative">
          <div className="lg:absolute lg:top-20 lg:left-[26%]">
            <div className="w-[60%] text-center flex flex-col gap-5">
              <h2 className="text-4xl font-semibold">
                Get Started with StudySync
              </h2>
              <p className="text-[#8A8A8A]">
                Connect and thrive in a global learning community with
                StudySync. Our innovative platform breaks down geographical
                barriers, bringing together millions of students from diverse
                backgrounds and cultures.
              </p>
              <button className="text-white bg-[#006BDE] w-[30%]  py-2 rounded-full">
                Join Us
              </button>
            </div>
          </div>

          <div>
            {" "}
            <img
              src={GetStartedSectionCoverImage}
              alt=""
              className="w-full h-auto"
            />
          </div>
        </section>

        {/* Sixth Section - Question/Answers */}
        <QuestionsAndAnswers />

        {/* Last Section - Join Us */}
        <JoinUs />
      </Layout>
    </>
  );
};

export default Homepage;
