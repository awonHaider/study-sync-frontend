import React, { useState } from "react";
import resourceSharingImage from "../../Images/Homepage/resourceSharingImage.png";
import videoConferencingImage from "../../Images/Homepage/videoConferencingImage.png";
import realtimeChatImage from "../../Images/Homepage/realtimeChatImage.png";
import aiNoteGeneration from "../../Images/Homepage/aiNoteGenerationImage.png";
import seamlessCollaborationImage from "../../Images/Homepage/seamlessCollaborationImage.png";

const WhyChooseStudySync = () => {
  // State to track the selected feature's image
  const [selectedImage, setSelectedImage] = useState(resourceSharingImage);

  // Options and their corresponding images
  const options = [
    { name: "Seamless Collaboration", image: seamlessCollaborationImage },
    { name: "Video Conferencing", image: videoConferencingImage },
    { name: "Real Time Chat", image: realtimeChatImage },
    { name: "AI Notes Generation", image: aiNoteGeneration },
    { name: "Resource Sharing", image: resourceSharingImage },
  ];

  return (
    <section>
      <div className="container mx-auto px-3 md:px-6 lg:px-12 mt-16">
        <div className="grid grid-cols-10">
          {/* Text Section */}
          <div className="col-span-10 md:col-span-4 flex flex-col gap-5 md:pr-8 mt-3">
            <h3 className="text-2xl md:text-3xl text-center md:text-left font-semibold">
              Why Choose StudySync?
            </h3>
            <p className="text-center md:text-left md:text-lg text-[#8A8A8A] tracking-wider">
              Comprehensive peer-to-peer study platform designed to enhance
              collaborative learning among students
            </p>
            <div className="text-[#8A8A8A] font-[500] tracking-wider flex flex-col gap-1 md:gap-3 text-center md:text-left">
              {options.map((option, index) => (
                <div
                  key={index}
                  className="px-2 py-1 md:py-2 hover:border-l-4 border-[#006BDE] hover:text-[#000] cursor-pointer"
                  onClick={() => setSelectedImage(option.image)} // Set the selected image on click
                >
                  <p>{option.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image Section */}
          <div className="col-span-10 h-[500px] md:col-span-6  rounded-xl overflow-hidden">
            <div className="p-8 h-full bg-[#EFEFEF]">
              <img
                className="w-full h-full object-cover"
                src={selectedImage}
                alt="Feature Highlight"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseStudySync;
