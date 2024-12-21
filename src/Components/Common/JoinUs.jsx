import React from "react";
import JoinUsSectionCover from "../../Images/Homepage/JoinUsSectionCover.png";

const JoinUs = () => {
  return (
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
  );
};

export default JoinUs;
