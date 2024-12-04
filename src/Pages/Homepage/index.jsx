import React from "react";
import mainSectionImage from "../../Images/Homepage/mainSectionImage.png";
import mainSectionImageTwo from "../../Images/Homepage/mainSectionImageTwo.png";
import mainSectionImageThree from "../../Images/Homepage/mainSectionImageThree.png";
import callOptionIcons from "../../Images/Homepage/callOptionIcons.png";
import signalIcon from "../../Images/Homepage/signalIcon.png";
import GetStartedSectionCoverImage from "../../Images/Homepage/GetStartedSectionCoverImage.png";
import JoinUsSectionCover from "../../Images/Homepage/JoinUsSectionCover.png";
import { useState } from "react";

const Homepage = () => {
  // State to track which accordion item is open
  const [openItem, setOpenItem] = useState(null);

  // Toggle open state of an accordion item
  const toggleItem = (item) => {
    setOpenItem(openItem === item ? null : item);
  };
  return (
    // First Section - Power of Peer to Peer
    <>
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
      {/* Second Section - Two Images */}
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
      {/* Third Section - Why Choose StudySync? */}
      <section>
        <div className="container mx-auto px-3 md:px-6 lg:px-12 mt-16">
          <div className="grid grid-cols-10">
            <div className="col-span-10 md:col-span-4 flex flex-col gap-5 md:pr-8 mt-3">
              <h3 className="text-2xl md:text-3xl text-center md:text-left font-semibold">
                Why Choose StudySync?
              </h3>
              <p className="text-center md:text-left md:text-lg text-[#8A8A8A] tracking-wider">
                Comprehensive peer-to-peer study platform designed to enhance
                collaborative learning among students
              </p>
              <div className="text-[#8A8A8A] font-[500] tracking-wider flex flex-col gap-1 md:gap-3 text-center md:text-left">
                <div className="px-2 py-1 md:py-2 hover:border-l-4 border-[#006BDE] hover:text-[#000] t">
                  <p>Seamless Collaboration</p>
                </div>

                <div className="px-2 py-1 md:py-2 hover:border-l-4 border-[#006BDE] hover:text-[#000]">
                  <p>Video Conferencing</p>
                </div>

                <div className="px-2 py-1 md:py-2 hover:border-l-4 border-[#006BDE] hover:text-[#000]">
                  <p>Real Time Chat</p>
                </div>

                <div className="px-2 py-1 md:py-2 hover:border-l-4 border-[#006BDE] hover:text-[#000]">
                  <p>Interactive Whiteboard</p>
                </div>

                <div className="px-2 py-1 md:py-2 hover:border-l-4 border-[#006BDE] hover:text-[#000]">
                  <p>Resource Sharing</p>
                </div>
              </div>
            </div>
            <div className="col-span-10 md:col-span-6 bg-[#EFEFEF] h-50 rounded-xl"></div>
          </div>
        </div>
      </section>
      {/* Fourth Section - Number Section */}
      <section>
        <div className="container mx-auto">
          <div className="flex justify-center">
            <div className="grid grid-col-1 sm:grid-cols-3 w-[80%] mt-14 text-center gap-6">
              <div>
                <h4 className="text-[3.3rem] font-[500]">200k+</h4>
                <p className="text-[#8A8A8A] text-lg tracking-wider">
                  Registered Students
                </p>
              </div>
              <div>
                <h4 className="text-[3.3rem] font-[500]">50+</h4>
                <p className="text-[#8A8A8A] text-lg tracking-wider">
                  Universities Globally
                </p>
              </div>
              <div>
                <h4 className="text-[3.3rem] font-[500]">20bp</h4>
                <p className="text-[#8A8A8A] text-lg tracking-wider">
                  Data Served
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
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
              Connect and thrive in a global learning community with StudySync.
              Our innovative platform breaks down geographical barriers,
              bringing together millions of students from diverse backgrounds
              and cultures.
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
      <section className="px-3 md:px-6 lg:px-12">
        <div className="container mx-auto mt-14">
          <h2 className="text-center text-4xl">
            We have Answers to your Questions
          </h2>

          <div
            className="mt-10"
            id="accordion-collapse"
            data-accordion="collapse"
          >
            {/* Accordion Item 1 */}
            <div>
              <h2 id="accordion-collapse-heading-1">
                <button
                  type="button"
                  onClick={() => toggleItem(1)}
                  className="flex items-center justify-between w-full p-5 font-medium text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 hover:bg-gray-100 gap-3"
                  aria-expanded={openItem === 1}
                  aria-controls="accordion-collapse-body-1"
                >
                  <span className="">What is Flowbite?</span>
                  <svg
                    data-accordion-icon
                    className={`w-3 h-3 transition-transform duration-200 ${
                      openItem === 1 ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5 5 1 1 5"
                    />
                  </svg>
                </button>
              </h2>
              <div
                id="accordion-collapse-body-1"
                className={`${openItem === 1 ? "" : "hidden"}`}
                aria-labelledby="accordion-collapse-heading-1"
              >
                <div className="p-5 border border-b-0 border-gray-200">
                  <p className="mb-2 text-gray-500">
                    Flowbite is an open-source library of interactive components
                    built on top of Tailwind CSS including buttons, dropdowns,
                    modals, navbars, and more.
                  </p>
                  <p className="text-gray-500">
                    Check out this guide to learn how to{" "}
                    <a
                      href="/docs/getting-started/introduction/"
                      className="text-blue-600 hover:underline"
                    >
                      get started
                    </a>{" "}
                    and start developing websites even faster with components on
                    top of Tailwind CSS.
                  </p>
                </div>
              </div>
            </div>

            {/* Accordion Item 2 */}
            <div>
              <h2 id="accordion-collapse-heading-2">
                <button
                  type="button"
                  onClick={() => toggleItem(2)}
                  className="flex items-center justify-between w-full p-5 font-medium text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 hover:bg-gray-100 gap-3"
                  aria-expanded={openItem === 2}
                  aria-controls="accordion-collapse-body-2"
                >
                  <span>Is there a Figma file available?</span>
                  <svg
                    data-accordion-icon
                    className={`w-3 h-3 transition-transform duration-200 ${
                      openItem === 2 ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5 5 1 1 5"
                    />
                  </svg>
                </button>
              </h2>
              <div
                id="accordion-collapse-body-2"
                className={`${openItem === 2 ? "" : "hidden"}`}
                aria-labelledby="accordion-collapse-heading-2"
              >
                <div className="p-5 border border-b-0 border-gray-200">
                  <p className="mb-2 text-gray-500">
                    Flowbite is first conceptualized and designed using the
                    Figma software so everything you see in the library has a
                    design equivalent in our Figma file.
                  </p>
                  <p className="text-gray-500">
                    Check out the{" "}
                    <a
                      href="https://flowbite.com/figma/"
                      className="text-blue-600 hover:underline"
                    >
                      Figma design system
                    </a>{" "}
                    based on the utility classes from Tailwind CSS and
                    components from Flowbite.
                  </p>
                </div>
              </div>
            </div>

            {/* Accordion Item 3 */}
            <div>
              <h2 id="accordion-collapse-heading-3">
                <button
                  type="button"
                  onClick={() => toggleItem(3)}
                  className="flex items-center justify-between w-full p-5 font-medium text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 hover:bg-gray-100 gap-3"
                  aria-expanded={openItem === 3}
                  aria-controls="accordion-collapse-body-3"
                >
                  <span className="text-left">
                    What are the differences between Flowbite and Tailwind UI?
                  </span>
                  <svg
                    data-accordion-icon
                    className={`w-3 h-3 transition-transform duration-200 ${
                      openItem === 3 ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5 5 1 1 5"
                    />
                  </svg>
                </button>
              </h2>
              <div
                id="accordion-collapse-body-3"
                className={`${openItem === 3 ? "" : "hidden"}`}
                aria-labelledby="accordion-collapse-heading-3"
              >
                <div className="p-5 border border-t-0 border-gray-200">
                  <p className="mb-2 text-gray-500">
                    The main difference is that the core components from
                    Flowbite are open source under the MIT license, whereas
                    Tailwind UI is a paid product. Another difference is that
                    Flowbite relies on smaller and standalone components,
                    whereas Tailwind UI offers sections of pages.
                  </p>
                  <p className="mb-2 text-gray-500">
                    However, we actually recommend using both Flowbite, Flowbite
                    Pro, and even Tailwind UI as there is no technical reason
                    stopping you from using the best of two worlds.
                  </p>
                  <p className="mb-2 text-gray-500">
                    Learn more about these technologies:
                  </p>
                  <ul className="ps-5 text-gray-500 list-disc">
                    <li>
                      <a
                        href="https://flowbite.com/pro/"
                        className="text-blue-600 hover:underline"
                      >
                        Flowbite Pro
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://tailwindui.com/"
                        rel="nofollow"
                        className="text-blue-600 hover:underline"
                      >
                        Tailwind UI
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Last Section - Join Us */}
      <section
        className="bg-cover bg-center py-20 mt-14"
        style={{ backgroundImage: `url(${JoinUsSectionCover})` }}
      >
        <div className="container mx-auto flex items-center justify-start px-8">
          {/* Text Content */}
          <div className="w-full md:w-1/2 p-2 sm:p-4 lg:p-8 rounded-md ">
            <h2 className="text-4xl font-bold mb-4 text-white">Join Us</h2>
            <p className="text-lg text-white mb-6">
              Experience unparalleled visual clarity with Inbuilt's
              state-of-the-art 4K cameras and advanced video compression
              algorithms.
            </p>
            <button className="bg-white text-blue-500 px-6 py-2 rounded-full font-semibold">
              Get Started
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Homepage;
