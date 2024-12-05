import React from "react";
import aboutUsImageThree from "../../Images/AboutUs/aboutUsImageThree.png";
import aboutUsFormBG from "../../Images/AboutUs/aboutUsFormBG.png";

const GrowAndConnectForm = () => {
  return (
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
                    Lorem ipsum dolor sit amet consectetur. Pulvinar dolor nunc
                    volutpat risus scelerisque arcu.
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
              <img className="w-full" src={aboutUsImageThree} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowAndConnectForm;
