import React from "react";
import studySyncLogo from "../../Images/Logo/studySyncLogo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white shadow-md py-8">
      <div className="container mx-auto px-4 md:px-11 flex flex-col md:flex-row md:items-center justify-between space-y-4 md:space-y-0">
        {/* Logo Section */}
        <Link to="/" className="flex items-center">
          <img
            src={studySyncLogo}
            alt="Study Sync Logo"
            className="h-[2.7rem]"
          />
        </Link>

        {/* Navigation Links */}
        <nav className="flex space-x-9 font-medium pr-6 text-sm md:text-[1rem]">
          <Link to="/" className="hover:text-[#006BDE]">
            Home
          </Link>
          <Link to="/about-us" className="hover:text-[#006BDE]">
            About Us
          </Link>
          <Link to="/contact-us" className="hover:text-[#006BDE]">
            Contact Us
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
