import React from "react";
import signUpPageImage from "../../Images/SignUpPage/signUpPageImage.png";
import signalIcon from "../../Images/SignUpPage/signalIcon.png";
import Header from "../../Layout/header";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa6";

const ForgotPasswordPage = () => {
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
        <div className="lg:w-[80%] mx-3 md:mx-6 lg:mx-auto grid grid-cols-7 gap-5 border border-gray-200 shadow-sm rounded-xl">
          <div className=" h-full hidden lg:flex rounded-xl col-span-7 lg:col-span-3 relative">
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
          <div className="h-full col-span-7 lg:col-span-4 flex ">
            <div className="w-[100%] bg-white p-4 lg:p-8 rounded-xl ">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4">
                Forgot Password
              </h2>
              <div className="flex gap-4">
                <p className="mb-6 text-[#666666]">
                  Kindly enter your email address in the field below !
                </p>
              </div>
              <form className="space-y-6">
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full border border-gray-300 rounded-lg p-3"
                />

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white rounded-full py-3 font-semibold"
                >
                  Create Account
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForgotPasswordPage;
