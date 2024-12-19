import React from "react";

const JoinUs = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-16 px-6 sm:px-12 lg:px-24">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Join Our Team</h2>
        <p className="text-lg mb-8">
          Be part of a dynamic and innovative team shaping the future. Collaborate, grow, and achieve your goals with us.
        </p>
        <form className="flex flex-col items-center justify-center gap-4">
          {/* Name Input */}
          <input
            type="text"
            placeholder="Enter your name"
            className="px-4 py-3 w-full sm:w-96 text-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          {/* Email Input */}
          <input
            type="email"
            placeholder="Enter your email address"
            className="px-4 py-3 w-full sm:w-96 text-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          {/* Submit Button */}
          <button
            type="submit"
            className="bg-white text-yellow-600 font-semibold px-6 py-3 rounded-md shadow-md hover:bg-yellow-200 hover:shadow-lg transform transition duration-300"
          >
            Join Now
          </button>
        </form>
        <p className="mt-6 text-sm">
          By joining, you agree to our{" "}
          <a href="/terms" className="underline text-white hover:text-gray-200">
            Terms and Conditions
          </a>.
        </p>
      </div>
    </div>
  );
};

export default JoinUs;
