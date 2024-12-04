import React from "react";
import aboutUsImageOne from "../../Images/AboutUspage/aboutUsImageOne.png";
import aboutUsImageTwo from "../../Images/AboutUspage/aboutUsImageTwo.png";
import aboutUsImageThree from "../../Images/AboutUspage/aboutUsImageThree.png";
import aboutUsFormBG from "../../Images/AboutUspage/aboutUsFormBG.png";

const AboutUsPage = () => {
  return (
    <>
      {/* First Section - About Us */}
      <section className="mt-10">
        <div className="container mx-auto">
          <div className="flex flex-col items-center gap-3 max-w-xl mx-auto px-4 lg:px-0">
            <h2 className="text-4xl font-[600]">About Us</h2>
            <p className="text-[#8A8A8A] text-lg text-center">
              Lorem ipsum dolor sit amet consectetur. Pulvinar dolor nunc
              volutpat risus scelerisque arcu.
            </p>
            <div className="flex flex-col md:flex-row gap-3 items-center justify-center md:justify-start mt-4">
              <img
                src="src\Images\Homepage\usersMiniIcons.png"
                alt=""
                className="h-6"
              />
              <p className="text-[#666666] ">3M + students worldwide</p>
            </div>
          </div>
        </div>
      </section>

      {/* Second Section - Our Values */}
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
                  Lorem ipsum dolor sit amet consectetur. Feugiat vitae ut
                  feugiat amet pellentesque.
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

      {/* Third Section - Grow and Connect*/}
      <section className="my-14">
        <div className="container mx-auto px-4">
          <div
            className="grid grid-cols-1 sm:grid-cols-10 max-w-6xl mx-auto bg-cover bg-center"
            style={{ backgroundImage: `url(${aboutUsFormBG})` }}
          >
            {/* Left Side - Form */}
            <div className="col-span-1 sm:col-span-6 px-6 sm:px-4 lg:px-8 lg:max-w-2xl">
              <section className="py-12 md:py-[70px] lg:py-20">
                <div className="container mx-auto max-w-4xl">
                  {/* Heading and Text */}
                  <div className="mb-6 text-center sm:text-left">
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                      Grow and Connect with us
                    </h2>
                    <p className="text-[#8A8A8A] mt-2 text-sm sm:text-base">
                      Lorem ipsum dolor sit amet consectetur. Pulvinar dolor
                      nunc volutpat risus scelerisque arcu.
                    </p>
                  </div>
                  {/* Input and Button */}
                  <form className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
                    <input
                      type="email"
                      placeholder="Enter your email here ...."
                      className="w-full sm:flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                      type="submit"
                      className="w-full sm:w-auto px-6 py-3 bg-[#006BDE] text-white font-medium rounded-md hover:bg-blue-600 transition"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </section>
            </div>

            {/* Right Side - Image */}
            <div className="col-span-1 sm:col-span-4 pb-10 sm:py-10 flex justify-center sm:justify-start pl-0 pr-0 sm:pl-4 sm:pr-4 md:pl-8 md:pr-8 lg:pl-20 ">
              <div className="w-full max-w-[300px]">
                <img className="w-full" src={aboutUsImageOne} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUsPage;
