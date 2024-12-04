import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white shadow-md py-4">
      <div className="container mx-auto px-4 md:px-11 flex flex-col md:flex-row md:items-center justify-between space-y-4 md:space-y-0">
        {/* Logo Section */}
        <div className="flex items-center">
          <img
            src="src/Images/Logo/studySyncLogo.png"
            alt="Study Sync Logo"
            className="h-[2.7rem]"
          />
        </div>

        {/* Navigation Links */}
        <nav className="flex space-x-9 font-medium pr-6 text-sm md:text-[1rem]">
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
      </div>
    </footer>
  );
};

export default Footer;
