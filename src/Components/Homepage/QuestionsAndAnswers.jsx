import React from "react";
import mainSectionImage from "../../Images/Homepage/mainSectionImage.png";
import mainSectionImageTwo from "../../Images/Homepage/mainSectionImageTwo.png";
import mainSectionImageThree from "../../Images/Homepage/mainSectionImageThree.png";
import callOptionIcons from "../../Images/Homepage/callOptionIcons.png";
import signalIcon from "../../Images/Homepage/signalIcon.png";
import GetStartedSectionCoverImage from "../../Images/Homepage/GetStartedSectionCoverImage.png";
import JoinUsSectionCover from "../../Images/Homepage/JoinUsSectionCover.png";
import { useState } from "react";
import PowerOfPeerToPeer from "../../Components/Homepage/PowerOfPeerToPeer";
import TopTwoImages from "../../Components/Homepage/TopTwoImages";
import WhyChooseStudySync from "../../Components/Homepage/WhyChooseStudySync";
import PlatformStats from "../../Components/Homepage/PlatformStats";

const QuestionsAndAnswers = () => {
  // State to track which accordion item is open
  const [openItem, setOpenItem] = useState(null);

  // Toggle open state of an accordion item
  const toggleItem = (item) => {
    setOpenItem(openItem === item ? null : item);
  };
  return (
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
                  Flowbite is first conceptualized and designed using the Figma
                  software so everything you see in the library has a design
                  equivalent in our Figma file.
                </p>
                <p className="text-gray-500">
                  Check out the{" "}
                  <a
                    href="https://flowbite.com/figma/"
                    className="text-blue-600 hover:underline"
                  >
                    Figma design system
                  </a>{" "}
                  based on the utility classes from Tailwind CSS and components
                  from Flowbite.
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
                  The main difference is that the core components from Flowbite
                  are open source under the MIT license, whereas Tailwind UI is
                  a paid product. Another difference is that Flowbite relies on
                  smaller and standalone components, whereas Tailwind UI offers
                  sections of pages.
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
  );
};

export default QuestionsAndAnswers;
