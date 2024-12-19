import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [sticky, setSticky] = useState(false);
  const [dropdown, setDropdown] = useState({
    aboutUs: false,
    tours: false,
    destinations: false,
  });

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    setSticky(scrollTop >= 120);
  };

  const toggleDropdown = (section) => {
    setDropdown({
      aboutUs: false,
      tours: false,
      destinations: false,
      [section]: !dropdown[section], // Toggle the clicked dropdown
    });
  };

  const closeAllDropdowns = () => {
    setDropdown({
      aboutUs: false,
      tours: false,
      destinations: false,
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`${
        sticky ? "bg-white shadow-lg" : "bg-transparent"
      } fixed top-0 left-0 right-0 z-50 transition-all duration-300`}
    >
      <div className="max-w-screen-xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <NavLink
            to="/"
            className={`text-3xl font-bold ${
              sticky ? "text-gray-900" : "text-white"
            } hover:text-yellow-600`}
            onClick={closeAllDropdowns}
          >
            Casri-Team
          </NavLink>

          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-8 relative">
            <NavLink
              to="/"
              className={`text-lg font-semibold ${
                sticky ? "text-gray-900" : "text-white"
              } hover:text-yellow-600`}
              onClick={closeAllDropdowns}
            >
              Home
            </NavLink>

            {/* About Us Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown("aboutUs")}
                className={`flex items-center text-lg font-semibold ${
                  sticky ? "text-gray-900" : "text-white"
                } hover:text-yellow-600`}
              >
                About Us
                <i
                  className={`ml-2 ${
                    dropdown.aboutUs ? "bi bi-chevron-up" : "bi bi-chevron-down"
                  }`}
                ></i>
              </button>
              {dropdown.aboutUs && (
                <div className="absolute left-0 mt-2 bg-white shadow-lg rounded-lg w-48">
                  <ul className="space-y-3">
                    <li>
                      <NavLink
                        to="/about-us/our-team"
                        className="text-gray-400 hover:text-yellow-600 block px-4 py-2"
                        onClick={closeAllDropdowns}
                      >
                        Our Team
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/about-us/partners"
                        className="text-gray-400 hover:text-yellow-600 block px-4 py-2"
                        onClick={closeAllDropdowns}
                      >
                        Partners
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/about-us/alumni"
                        className="text-gray-400 hover:text-yellow-600 block px-4 py-2"
                        onClick={closeAllDropdowns}
                      >
                        Alumni
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/about-us/faqs"
                        className="text-gray-400 hover:text-yellow-600 block px-4 py-2"
                        onClick={closeAllDropdowns}
                      >
                        FAQs
                      </NavLink>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* Other dropdowns follow the same pattern */}
            {/* Tours Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown("tours")}
                className={`flex items-center text-lg font-semibold ${
                  sticky ? "text-gray-900" : "text-white"
                } hover:text-yellow-600`}
              >
                Resources
                <i
                  className={`ml-2 ${
                    dropdown.tours ? "bi bi-chevron-up" : "bi bi-chevron-down"
                  }`}
                ></i>
              </button>
              {dropdown.tours && (
                <div className="absolute left-0 mt-2 bg-white shadow-lg rounded-lg w-48">
                  <ul className="space-y-3">
                    <li>
                      <NavLink
                        to="/resources/gallery"
                        className="text-gray-400 hover:text-yellow-600 block px-4 py-2"
                        onClick={closeAllDropdowns}
                      >
                        Gallery
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/resources/blog"
                        className="text-gray-400 hover:text-yellow-600 block px-4 py-2"
                        onClick={closeAllDropdowns}
                      >
                        Blog
                      </NavLink>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* Destinations Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown("destinations")}
                className={`flex items-center text-lg font-semibold ${
                  sticky ? "text-gray-900" : "text-white"
                } hover:text-yellow-600`}
              >
                Events
                <i
                  className={`ml-2 ${
                    dropdown.destinations
                      ? "bi bi-chevron-up"
                      : "bi bi-chevron-down"
                  }`}
                ></i>
              </button>
              {dropdown.destinations && (
                <div className="absolute left-0 mt-2 bg-white shadow-lg rounded-lg w-48">
                  <ul className="space-y-3">
                    <li>
                      <NavLink
                        to="/events/merchandise"
                        className="text-gray-400 hover:text-yellow-600 block px-4 py-2"
                        onClick={closeAllDropdowns}
                      >
                        Merchandise
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/events/testimonials"
                        className="text-gray-400 hover:text-yellow-600 block px-4 py-2"
                        onClick={closeAllDropdowns}
                      >
                        Testimonials
                      </NavLink>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* Contact Link */}
            <NavLink
              to="/contact"
              className={`text-lg font-semibold ${
                sticky ? "text-gray-900" : "text-white"
              } hover:text-yellow-600`}
              onClick={closeAllDropdowns}
            >
              Contact-Us
            </NavLink>
          </nav>

          {/* SignIn Button */}
          <NavLink
            to="/login"
            className={`hidden md:inline-block px-6 py-2 ${
              sticky ? "text-white bg-yellow-600" : "bg-yellow-600 text-white"
            } rounded-full font-semibold hover:bg-yellow-700 transition duration-300`}
          >
            SignIn
          </NavLink>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              className={`${
                sticky ? "text-gray-900" : "text-white"
              } focus:outline-none`}
            >
              <i className="bi bi-list text-xl"></i>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
