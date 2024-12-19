import React from "react";
import heroImage from "../assets/images/gallery/g3.jpg";

const AboutUs = () => {
  return (
    <>
    {/* Hero Section */}
              <section
                className="bg-cover bg-center h-96 flex items-center justify-center text-white"
                style={{ backgroundImage: `url(${heroImage})` }}
              >
                <div className="bg-black bg-opacity-50 p-8 rounded">
                  <h1 className="text-4xl font-bold mb-4">About Team</h1>
                </div>
              </section>

    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Team Mission and Values */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800">Our Mission</h3>
            <p className="mt-4 text-gray-600">
              Our mission is to inspire and nurture the next generation of
              basketball players while fostering sportsmanship, teamwork, and
              leadership. We strive to create a lasting legacy in the world of
              basketball and in our community.
            </p>

            <h3 className="mt-8 text-2xl font-semibold text-gray-800">
              Our Values
            </h3>
            <ul className="mt-4 text-gray-600 space-y-2">
              <li>🏀 Commitment to Excellence</li>
              <li>🤝 Teamwork and Collaboration</li>
              <li>💪 Perseverance and Hard Work</li>
              <li>🌟 Respect and Integrity</li>
            </ul>
          </div>

          {/* Image or Video Section */}
          <div className="relative">
            <img
              src="https://media.istockphoto.com/id/1755783449/photo/portrait-of-children-holding-a-basketball-ball-at-a-sports-court.webp?a=1&b=1&s=612x612&w=0&k=20&c=_CVkcC0WXcmba1nqYEKQHEB_LOkS1Fnam-Sq1bWJLIo="
              alt="Basketball Team"
              className="rounded-lg shadow-lg w-full h-auto"
            />
            {/* Optionally, replace the image with a video */}
            {/* <video
              src="/path-to-video.mp4"
              controls
              className="rounded-lg shadow-lg w-full h-auto"
            /> */}
          </div>
        </div>

        {/* Achievements Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-gray-800 text-center">
            Our Achievements
          </h3>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <h4 className="text-xl font-bold text-blue-600">5</h4>
              <p className="mt-2 text-gray-600">Championship Titles</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <h4 className="text-xl font-bold text-blue-600">20+</h4>
              <p className="mt-2 text-gray-600">Community Events Hosted</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <h4 className="text-xl font-bold text-blue-600">150+</h4>
              <p className="mt-2 text-gray-600">Players Trained</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <h4 className="text-xl font-bold text-blue-600">10+</h4>
              <p className="mt-2 text-gray-600">Years of Excellence</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default AboutUs;
