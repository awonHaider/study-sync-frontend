import React from "react";
import aboutUsImageOne from "../../Images/AboutUs/aboutUsImageOne.png";
import aboutUsImageTwo from "../../Images/AboutUs/aboutUsImageTwo.png";

const OurValues = () => {
  return (
    <section className="my-14">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-10 max-w-5xl mx-auto gap-6">
          {/* Left Side - Images */}
          <div className="col-span-10 lg:col-span-7 lg:relative h-auto lg:h-[400px]">
            <div className="flex flex-col sm:flex-row sm:gap-4 lg:block items-center">
              {/* First Image */}
              <div className="w-full max-w-[330px] mx-auto sm:mx-0">
                <img className="w-full" src={aboutUsImageOne} alt="" />
              </div>
              {/* Second Image */}
              <div className="w-full max-w-[330px] mx-auto sm:mx-0 sm:mt-0 lg:absolute lg:left-[18rem] lg:top-[7rem] mt-6 lg:mt-0">
                <img className="w-full" src={aboutUsImageTwo} alt="" />
              </div>
            </div>
          </div>

          {/* Right Side - Text */}
          <div className="col-span-10 lg:col-span-3 h-full py-8 lg:py-16">
            <div className="sm:w-[70%] sm:mx-auto lg:w-[100%] p-4 flex flex-col gap-4 text-center lg:text-left">
              <h3 className=" font-semibold text-gray-500 text-xl lg:text-base">
                Our Values
              </h3>
              <h2 className="text-2xl font-bold text-gray-900">
                Lorem ipsum dolor sit amet consectetur. Feugiat vitae ut feugiat
                amet pellentesque.
              </h2>
              <p className="text-gray-500 text-md lg:text-base">
                Lorem ipsum dolor sit amet consectetur. Pulvinar dolor nunc
                volutpat risus scelerisque arcu.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurValues;
