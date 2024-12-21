import React from "react";
import GetStartedSectionCoverImage from "../../Images/Homepage/GetStartedSectionCoverImage.png";

const GetStarted = () => {
  return (
    <section className="bg-[#F7F7F7] pt-4 px-2 sm:pt-0 sm:px-0  sm:relative">
      <div className="sm:absolute sm:top-10 sm:left-[26%] md:left-[26%]  lg:top-19 lg:left-[26%]">
        <div className="sm:w-[60%] text-center flex flex-col gap-2 lg:gap-5">
          <h2 className="text-2xl lg:text-4xl font-semibold">
            Get Started with StudySync
          </h2>
          <p className="text-sm lg:text-base text-[#8A8A8A]">
            Connect and thrive in a global learning community with StudySync.
            Our innovative platform breaks down geographical barriers, bringing
            together millions of students from diverse backgrounds and cultures.
          </p>
          <div className="flex justify-center">
            <button className="text-white bg-[#006BDE] w-[30%]  py-2 rounded-full">
              Join Us
            </button>
          </div>
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
  );
};

export default GetStarted;
