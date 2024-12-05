import React from "react";

const WhyChooseStudySync = () => {
  return (
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
  );
};

export default WhyChooseStudySync;
