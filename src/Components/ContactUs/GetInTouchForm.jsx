import React from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaFacebookF,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

const GetInTouchForm = () => {
  return (
    <section className="mt-14">
      <div className="container mx-auto bg-[#F6F7F9]">
        <div className="grid grid-cols-10 bg-[#F6F7F9] ">
          {/* left side */}
          <div className=" col-span-4 ">
            <div className="max-w-md mx-auto p-6 ">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Get In Touch
              </h2>
              <p className="text-[#8A8A8A] mb-6">
                Lorem ipsum dolor sit amet consectetur. Pulvinar dolor nunc.
              </p>

              <div className="space-y-4">
                {/* E-Mail */}
                <div className="flex items-center gap-3">
                  <a
                    href="#"
                    className="text-white bg-[#006BDE] p-2 rounded-full "
                  >
                    <FaEnvelope />
                  </a>{" "}
                  <div>
                    <h3 className="font-medium text-gray-800">E-Mail</h3>
                    <p className="text-[#8A8A8A]">
                      Lorem ipsum dolor sit amet consectetur.
                    </p>
                  </div>
                </div>

                {/* Phone Number */}
                <div className="flex items-center gap-3">
                  <a
                    href="#"
                    className="text-white bg-[#006BDE] p-2 rounded-full "
                  >
                    <FaPhoneAlt />
                  </a>{" "}
                  <div>
                    <h3 className="font-medium text-gray-800">Phone Number</h3>
                    <p className="text-[#8A8A8A]">
                      Lorem ipsum dolor sit amet consectetur.
                    </p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-center gap-3">
                  <a
                    href="#"
                    className="text-white bg-[#006BDE] p-2 rounded-full"
                  >
                    <FaMapMarkerAlt />
                  </a>
                  <div>
                    <h3 className="font-medium text-gray-800">Address</h3>
                    <p className="text-[#8A8A8A]">
                      Lorem ipsum dolor sit amet consectetur.
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8">
                <h3 className="font-[600] text-lg text-gray-800 mb-3">
                  Follow Us:
                </h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="text-white bg-[#006BDE] p-3 rounded-full"
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    href="#"
                    className="text-white bg-[#006BDE] p-3 rounded-full"
                  >
                    <FaLinkedinIn />
                  </a>
                  <a
                    href="#"
                    className="text-white bg-[#006BDE] p-3 rounded-full"
                  >
                    <FaWhatsapp />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* right side */}
          <div className=" col-span-6">
            <div className="max-w-lg mx-auto m-6 p-6 border rounded-xl bg-white ">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Send a Message
              </h2>

              {/* Form */}
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />

                  {/* Email Input */}
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>

                {/* Message Input */}
                <textarea
                  placeholder="Your Message"
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                ></textarea>

                {/* Description */}
                <p className="text-sm text-[#B0B0B0]">
                  Lorem ipsum dolor sit amet consectetur. Pulvinar dolor nunc
                  Lorem ipsum dolor sit amet consectetur. Pulvinar dolor nunc.
                </p>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-[#006BDE] text-white py-2 rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouchForm;
