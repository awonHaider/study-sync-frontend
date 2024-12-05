import React from "react";
import usersMiniIcons from "../../Images/AboutUs/usersMiniIcons.png";

const AboutUsHead = () => {
  return (
    <section className="mt-10">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-3 max-w-xl mx-auto px-4 lg:px-0">
          <h2 className="text-4xl font-[600]">About Us</h2>
          <p className="text-[#8A8A8A] text-lg text-center">
            Lorem ipsum dolor sit amet consectetur. Pulvinar dolor nunc volutpat
            risus scelerisque arcu.
          </p>
          <div className="flex flex-col md:flex-row gap-3 items-center justify-center md:justify-start mt-4">
            <img src={usersMiniIcons} alt="" className="h-6" />
            <p className="text-[#666666] ">3M + students worldwide</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsHead;
