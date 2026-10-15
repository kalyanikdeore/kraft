
import React, { useState } from "react";
import {
  FiMail,
  FiFacebook,
  FiInstagram,
  FiTwitter,
} from "react-icons/fi";
import { dkraftlogo } from "../../assets";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const menuItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/aboutus" },
    { name: "Services", link: "/service" },
    { name: "Internship", link: "/internship" },
    { name: "Contact", link: "/contact" },
  ];

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleApplyNow = () => {
    setIsOpen(false);
    navigate("/apply");
  };

  const scrollToContact = () => {
    const section = document.getElementById("contact");

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    } else {
      navigate("/contact");
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Top Fixed Navbar */}
      <div className="bg-[#132948] text-white fixed w-full z-50 top-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center h-14 sm:h-10 text-sm sm:text-base">

            {/* Contact Info */}
            <div className="flex items-center gap-4 flex-wrap max-w-[70%] sm:max-w-full">
              <div className="hidden sm:flex items-center gap-2 min-w-max">
                <FiMail className="w-4 h-4" />
                <span className="truncate max-w-[120px] sm:max-w-none">
                  dkrafttechnologies@gmail.com
                </span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 sm:gap-3">
              <FiFacebook className="hover:text-[#63a8f2] cursor-pointer w-4 h-4 transition-colors" />

              <FiInstagram
                className="hover:text-[#63a8f2] cursor-pointer w-4 h-4 transition-colors"
                onClick={() =>
                  window.open(
                    "https://www.instagram.com/wedding_store_nashik/",
                    "_blank"
                  )
                }
              />

              <FiTwitter className="hover:text-[#63a8f2] cursor-pointer w-4 h-4 transition-colors" />
            </div>
          </div>
        </div>
      </div>

      {/* Spacer */}
      <div className="h-14 sm:h-10"></div>

      {/* Main Navbar */}
      <nav className="bg-white shadow-lg sticky top-14 sm:top-10 z-40 border-b border-[#63a8f2]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-20">

            {/* Logo */}
            <a
              href="/"
              className="flex items-center cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              <img
                src={dkraftlogo}
                alt="DKRAFT Logo"
                className="h-15 w-auto object-contain"
              />
            </a>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.link}
                  className="text-[#132948] font-medium text-sm tracking-wide hover:text-[#63a8f2] transition duration-300 relative after:absolute after:w-0 after:h-[2px] after:bg-[#63a8f2] after:left-0 after:-bottom-1 hover:after:w-full after:transition-all after:duration-300"
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Desktop Apply Button */}
            <div className="hidden lg:flex items-center gap-6">
              <button
                onClick={handleApplyNow}
                className="bg-gradient-to-r from-[#132948] via-[#132948] to-[#63a8f2] text-white px-6 py-3 rounded-full text-base font-semibold shadow-md hover:shadow-lg hover:opacity-90 transition-all duration-300"
              >
                Apply Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center gap-4">
              <button
                onClick={handleMenuToggle}
                className="text-[#132948] p-3 hover:text-[#63a8f2] transition-colors"
                aria-label="Toggle navigation menu"
              >
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isOpen && (
            <div className="lg:hidden bg-white border-t border-[#63a8f2]/30 mt-2 rounded-lg shadow-lg py-4 space-y-2">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.link}
                  onClick={() => setIsOpen(false)}
                  className="block text-[#132948] px-4 py-4 text-lg hover:bg-[#63a8f2]/10 hover:text-[#63a8f2] transition-all rounded-md mx-2"
                >
                  {item.name}
                </a>
              ))}

              {/* Mobile Apply Button */}
              <div className="px-4 py-3">
                <button
                  onClick={handleApplyNow}
                  className="w-full bg-gradient-to-r from-[#132948] to-[#63a8f2] text-white px-6 py-3 rounded-full text-base font-semibold shadow-md hover:opacity-90 transition-opacity"
                >
                  Apply Now
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
