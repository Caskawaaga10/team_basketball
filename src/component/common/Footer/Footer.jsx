import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", toggleVisible);
    }
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", toggleVisible);
      }
    };
  }, []);

  return (
    <>
      <footer className="bg-gray-800 text-white pt-10 mt-16 pb-6">
        <div className="max-w-screen-xl mx-auto px-4">
          {/* Logo Section */}
          <div className="flex items-center mb-8">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/3/3e/Telesom_logo.png" // Replace with your logo URL
              alt="Company Logo"
              className="h-16 w-auto mr-4"
            />
            <p className="text-lg font-semibold text-gray-300">
            Casri-Team - Exploring Beyond!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Section */}
            <div className="quick_link">
              <h4 className="text-xl font-semibold mb-4">Company</h4>
              <ul className="space-y-3">
                <li>
                  <NavLink to="/" className="text-gray-400 hover:text-yellow-600">
                    About Us
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/" className="text-gray-400 hover:text-yellow-600">
                    News
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/" className="text-gray-400 hover:text-yellow-600">
                    FAQ
                  </NavLink>
                </li>
              </ul>
            </div>

            {/* Explore Section */}
            <div className="quick_link">
              <h4 className="text-xl font-semibold mb-4">Explore</h4>
              <ul className="space-y-3">
                <li>
                  <NavLink to="/" className="text-gray-400 hover:text-yellow-600">
                    FAQ
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/" className="text-gray-400 hover:text-yellow-600">
                    Tour Listings
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/" className="text-gray-400 hover:text-yellow-600">
                    Destinations
                  </NavLink>
                </li>
              </ul>
            </div>

            {/* Quick Link Section */}
            <div className="quick_link">
              <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <NavLink to="/" className="text-gray-400 hover:text-yellow-600">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/" className="text-gray-400 hover:text-yellow-600">
                    About Us
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/" className="text-gray-400 hover:text-yellow-600">
                    Contact Us
                  </NavLink>
                </li>
              </ul>
            </div>

            {/* Contact Info Section */}
            <div className="location">
              <h4 className="text-xl font-semibold mb-4">Contact Info</h4>
              <p className="text-gray-400">Dehradun, Uttarakhand, India</p>
              <div className="flex items-center mt-3">
                <i className="bi bi-geo-alt text-gray-400 mr-3"></i>
                <a
                  href="mailto:rawatcoder@gmail.com"
                  className="text-gray-400 hover:text-yellow-600"
                >
                  casrigroup@gmail.com
                </a>
              </div>
              <div className="flex items-center mt-3">
                <i className="bi bi-telephone text-gray-400 mr-3"></i>
                <a href="tel:9876543210" className="text-gray-400 hover:text-yellow-600">
                  +123456789
                </a>
              </div>
            </div>
          </div>

          {/* Footer Bottom Section */}
          <div className="py-4 border-t border-gray-700 mt-8">
            <p className="text-center text-gray-400">&copy; 2024 Casaanyo. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <div
        id="back-top"
        onClick={scrollTop}
        className={`fixed bottom-4 right-4 p-3 bg-yellow-600 text-white rounded-full cursor-pointer ${
          visible ? "opacity-100" : "opacity-0"
        } transition-opacity`}
      >
        <i className="bi bi-arrow-up text-xl"></i>
      </div>
    </>
  );
};

export default Footer;
