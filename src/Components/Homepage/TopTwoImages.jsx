import React from "react";
import mainSectionImageTwo from "../../Images/Homepage/mainSectionImageTwo.png";
import mainSectionImageThree from "../../Images/Homepage/mainSectionImageThree.png";
import signalIcon from "../../Images/Homepage/signalIcon.png";

const TopTwoImages = () => {
  return (
    <section>
      <div className="container mx-auto px-3 md:px-6 lg:px-12 mt-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className=" rounded-xl overflow-hidden relative">
            <img
              src={mainSectionImageTwo}
              alt="Main section image"
              className=" object-cover w-full h-[250px] md:h-[400px]"
            />

            <img
              className="absolute top-3 right-3"
              src={signalIcon}
              alt="Call Option Icons"
            />
          </div>
          <div className=" rounded-xl overflow-hidden relative">
            <img
              src={mainSectionImageThree}
              alt="Main section image"
              className=" object-cover w-full h-[250px] md:h-[400px]"
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

export default TopTwoImages;
