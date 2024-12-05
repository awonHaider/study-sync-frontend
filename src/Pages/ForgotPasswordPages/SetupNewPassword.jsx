import React from "react";
import Header from "../../Layout/Homepage/header";
import { FaRegEye } from "react-icons/fa6";

const SetupNewPasswordPage = () => {
  const images = [
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg",
  ];

  return (
    <>
      <Header />
      <section>
        <div className="container mx-auto">
          {/* Main Container */}
          <div className="lg:w-[80%] mx-3 md:mx-6 lg:mx-auto grid grid-cols-7 gap-5 border border-gray-200 shadow-sm rounded-xl">
            {/* left Side - Cover Image */}
            <div className=" hidden lg:flex rounded-xl col-span-7 lg:col-span-3 relative">
              <div className="container mx-auto p-4">
                {/* Gallery Section */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {images.map((src, index) => (
                    <div key={index}>
                      <img
                        className="h-auto max-w-full rounded-lg"
                        src={src}
                        alt={`Gallery image ${index + 1}`}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Right Side - Verify Email */}
            <div className="h-full col-span-7 lg:col-span-4 flex ">
              <div className="w-[100%] bg-white p-4 lg:p-8 rounded-xl ">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4">
                  Setup New Password
                </h2>
                <div className="flex gap-4">
                  <p className="mb-6 text-[#666666]">
                    Setup your new Password !
                  </p>
                </div>
                <form className="space-y-4">
                  <div className="relative">
                    <input
                      type="password"
                      placeholder="New Password"
                      className="w-full border border-gray-300 rounded-lg p-3 pr-10"
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                    >
                      <FaRegEye />
                    </button>
                  </div>

                  <div className="relative">
                    <input
                      type="password"
                      placeholder="Confirm Password"
                      className="w-full border border-gray-300 rounded-lg p-3 pr-10"
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                    >
                      <FaRegEye />
                    </button>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white rounded-full py-3 font-semibold"
                  >
                    Confirm
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SetupNewPasswordPage;
