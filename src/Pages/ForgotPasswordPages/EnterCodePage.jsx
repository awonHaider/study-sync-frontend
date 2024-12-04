import React from "react";
import Header from "../../Layout/header";

const EnterCodePage = () => {
  const categories = [
    { name: "All categories", isActive: true },
    { name: "Shoes" },
    { name: "Bags" },
    { name: "Electronics" },
    { name: "Gaming" },
  ];

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
    <section>
      <Header></Header>
      <div className="container mx-auto">
        {/* Main Container */}
        <div className="lg:w-[80%] mx-3 md:mx-6 lg:mx-auto grid grid-cols-7 gap-5 border border-gray-200 shadow-sm rounded-xl">
          {/* left Side - Cover Image */}
          <div className=" lg:h-[420px] hidden lg:flex rounded-xl col-span-7 lg:col-span-3 relative">
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
                Forgot Password
              </h2>
              <div className="flex gap-4">
                <p className="mb-6 text-[#666666]">
                  Enter the code sent to your email address to set a new
                  password !
                </p>
              </div>
              <form className="space-y-6">
                <div className="flex space-x-4 md:mb-6">
                  <input
                    type="text"
                    className="w-12 h-12 text-center text-xl border border-gray-300 rounded-md focus:outline-none"
                    maxLength="1"
                    readOnly
                  />
                  <input
                    type="text"
                    className="w-12 h-12 text-center text-xl border border-gray-300 rounded-md focus:outline-none"
                    maxLength="1"
                    readOnly
                  />
                  <input
                    type="text"
                    className="w-12 h-12 text-center text-xl border border-gray-300 rounded-md focus:outline-none"
                    maxLength="1"
                    readOnly
                  />
                  <input
                    type="text"
                    className="w-12 h-12 text-center text-xl border border-gray-300 rounded-md focus:outline-none"
                    maxLength="1"
                    readOnly
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white rounded-full py-3 font-semibold"
                >
                  Next
                </button>
              </form>
              <p className="text-center text-gray-600 mt-4">
                Didn’t See Code?{" "}
                <button className="text-blue-500 hover:underline">
                  Resend
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnterCodePage;
