import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="my-4">
      <div className="container mx-auto px-4 md:px-11 flex items-center justify-between">
        {/* Logo */}
        <div className="logo-section">
          <img
            src="src/Images/Logo/studySyncLogo.png"
            alt="Study Sync Logo"
            className="h-12"
          />
        </div>

        {/* Desktop Navigation and Buttons */}
        <div
          className="menu-section hidden lg:flex items-center justify-between w-full ml-8 pl-[4rem] pr-5 py-3 border border-[box-shadow: 0px 0px 1.5px 0px #0000001F;
] rounded-full"
        >
          {/* Navigation Links */}
          <nav className="flex space-x-8 text-gray-700 font-medium">
            <a href="#" className="hover:text-[#006BDE]">
              Home
            </a>
            <a href="#" className="hover:text-[#006BDE]">
              About Us
            </a>
            <a href="#" className="hover:text-[#006BDE]">
              Contact Us
            </a>
          </nav>

          {/* Action Buttons */}
          <div className="flex space-x-4">
            <button className="text-[#006BDE] bg-blue-100 px-6 py-2 rounded-full">
              Join Us
            </button>
            <button className="text-white bg-[#006BDE] px-6 py-2 rounded-full">
              Login
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden flex items-center text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <FiX className="w-6 h-6" />
          ) : (
            <FiMenu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="lg:hidden bg-white shadow-lg">
          <div className="space-y-2 p-4 text-gray-700 font-medium">
            <a href="#" className="block hover:text-[#006BDE]">
              Home
            </a>
            <a href="#" className="block hover:text-[#006BDE]">
              About Us
            </a>
            <a href="#" className="block hover:text-[#006BDE]">
              Contact Us
            </a>
            <button className="block text-blue-500 bg-blue-100 w-full py-2 mt-2 rounded-lg">
              Join Us
            </button>
            <button className="block text-white bg-[#006BDE] w-full py-2 mt-2 rounded-lg">
              Login
            </button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
