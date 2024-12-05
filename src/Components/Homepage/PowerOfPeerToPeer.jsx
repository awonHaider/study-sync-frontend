import React from "react";
import mainSectionImage from "../../Images/Homepage/mainSectionImage.png";
import callOptionIcons from "../../Images/Homepage/callOptionIcons.png";
import signalIcon from "../../Images/Homepage/signalIcon.png";
const PowerOfPeerToPeer = () => {
  return (
    <section>
      <div className="container mx-auto px-3 md:px-6 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-4">
          {/* Left section takes 2/3 on larger screens and full width on smaller screens */}
          <div className="col-span-1 sm:col-span-1 lg:col-span-2 bg-[#EFEFEF] rounded-xl p-5 flex flex-col gap-11 md:gap-[7rem]">
            <div className="flex flex-col gap-5">
              <div>
                <h2 className="font-[500] text-center md:text-left text-3xl md:text-4xl">
                  Unlock the Power of Peer-to-Peer
                </h2>
                <h2 className="font-[500] text-center md:text-left text-3xl md:text-4xl ">
                  Learning
                </h2>
              </div>
              <p className="text-[#8A8A8A] md:text-xl text-center md:text-left ">
                Comprehensive peer-to-peer study platform designed to enhance
                <span className="block">
                  {" "}
                  collaborative learning among students
                </span>
              </p>
              <button className=" self-center md:self-start text-white bg-[#006BDE] px-6 py-2 rounded-full w-[9rem]">
                Try For Free
              </button>
            </div>

            <div className="flex flex-col md:flex-row gap-3 items-center justify-center md:justify-start ">
              <img
                src="src\Images\Homepage\usersMiniIcons.png"
                alt=""
                className="h-6"
              />
              <p className="text-[#666666] ">3M + students worldwide</p>
            </div>
          </div>

          {/* Right section takes full width on smaller screens */}
          <div className="col-span- sm:col-span-1 lg:col-span-1  rounded-xl overflow-hidden relative">
            <img
              src={mainSectionImage}
              alt="Main section image"
              className=" object-cover object-top w-full h-[250px] sm:h-[100%] md:h-full"
            />

            <img
              className="absolute sm:h-8 lg:h-10 bottom-3 left-[3rem] md:left-[4.5rem]"
              src={callOptionIcons}
              alt="Call Option Icons"
            />

            <img
              className="absolute top-3 right-3"
              src={signalIcon}
              alt="Call Option Icons"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PowerOfPeerToPeer;
