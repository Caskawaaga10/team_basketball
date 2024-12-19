import React, { useEffect } from "react";
import image from "../assets/images/new/contact-us.png";
import heroImage from "../assets/images/gallery/g3.jpg";

const ContactUs = () => {
  useEffect(() => {
    document.title = "Contact Us";
    window.scroll(0, 0);
  }, []);

  return (
    <>
    {/* Hero Section */}
          <section
            className="bg-cover bg-center h-96 flex items-center justify-center text-white"
            style={{ backgroundImage: `url(${heroImage})` }}
          >
            <div className="bg-black bg-opacity-50 p-8 rounded">
              <h1 className="text-4xl font-bold mb-4">ContactUs</h1>
            </div>
          </section>

      {/* Main Section */}
      <section className="contact pt-14">
        <div className="container mx-auto px-4">
          {/* Introduction */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              Let's connect and get to know each other
            </h1>
            <p className="text-gray-600">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {/* Call Us */}
            <div className="bg-white shadow-md rounded-lg p-6 text-center">
              <div className="flex justify-center items-center mb-4">
                <div className="bg-blue-100 p-4 rounded-full">
                  <i className="bi bi-headset text-blue-500 text-3xl"></i>
                </div>
              </div>
              <h3 className="font-bold text-lg mb-2">Call Us</h3>
              <p className="text-gray-600 mb-4">
                Lorem Ipsum is simply dummy text.
              </p>
              <div>
                <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded mr-2">
                  <i className="bi bi-phone"></i> +12 3456 789
                </button>
                <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded">
                  <i className="bi bi-telephone"></i> +12 3456 789
                </button>
              </div>
            </div>

            {/* Email Us */}
            <div className="bg-white shadow-md rounded-lg p-6 text-center">
              <div className="flex justify-center items-center mb-4">
                <div className="bg-red-100 p-4 rounded-full">
                  <i className="bi bi-envelope text-red-500 text-3xl"></i>
                </div>
              </div>
              <h3 className="font-bold text-lg mb-2">Email Us</h3>
              <p className="text-gray-600 mb-4">
                Lorem Ipsum is simply dummy text.
              </p>
              <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded">
                <i className="bi bi-envelope"></i> demo@gmail.com
              </button>
            </div>

            {/* Social Media */}
<div className="bg-white shadow-md rounded-lg p-6 text-center">
  <div className="flex justify-center items-center mb-4">
    <div className="bg-yellow-100 p-4 rounded-full">
      <i className="bi bi-globe text-yellow-500 text-3xl"></i>
    </div>
  </div>
  <h3 className="font-bold text-lg mb-2">Social Media</h3>
  <p className="text-gray-600 mb-4">
    Lorem Ipsum is simply dummy text.
  </p>
  <div className="flex justify-center space-x-4 text-gray-600">
    <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" title="YouTube">
      <i className="bi bi-youtube text-xl hover:text-red-600"></i>
    </a>
    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" title="Instagram">
      <i className="bi bi-instagram text-xl hover:text-pink-500"></i>
    </a>
    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" title="Twitter">
      <i className="bi bi-twitter text-xl hover:text-blue-400"></i>
    </a>
    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" title="Facebook">
      <i className="bi bi-facebook text-xl hover:text-blue-600"></i>
    </a>
  </div>
</div>

          </div>

          {/* Contact Form and Image */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 items-center">
            {/* Image */}
            <div className="hidden md:block">
              <img src={image} alt="Contact Us" className="rounded-lg shadow-md" />
            </div>

            {/* Form */}
            <div className="bg-gray-100 p-8 shadow-md rounded-lg">
              <h2 className="text-xl font-bold mb-6">Send us a message</h2>
              <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    placeholder="Message"
                    className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows="5"
                  ></textarea>
                </div>
                <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
