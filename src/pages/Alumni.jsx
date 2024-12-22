import React, { useState } from "react";
import heroImage from "../assets/images/alumni/img1.jpg";

const Alumni = () => {
  const [selectedAlumnus, setSelectedAlumnus] = useState(null);

  const alumniList = [
    {
      name: "Michael Johnson",
      position: "Point Guard (2010–2014)",
      achievements: "All-time leading scorer and MVP in 2013.",
      bio: "Michael Johnson was instrumental in leading the team to numerous victories. His precision and agility made him a fan favorite. Post-college, he became a successful coach and motivational speaker.",
      image: "https://i.ytimg.com/vi/bls9VgKO0Q0/maxresdefault.jpg",
    },
    {
      name: "Sarah Thompson",
      position: "Shooting Guard (2012–2016)",
      achievements: "Won two championships and holds the record for most three-pointers.",
      bio: "Sarah's ability to hit clutch shots under pressure made her a key player. After graduation, she pursued a career in sports analytics and remains an advocate for women in basketball.",
      image: "https://i.ytimg.com/vi/bls9VgKO0Q0/maxresdefault.jpg",
    },
    {
      name: "David Williams",
      position: "Center (2014–2018)",
      achievements: "Dominated the paint and was Defensive Player of the Year in 2017.",
      bio: "David’s presence in the paint was unmatched. Off the court, he founded a non-profit organization supporting youth sports programs in underprivileged areas.",
      image: "https://i.ytimg.com/vi/bls9VgKO0Q0/maxresdefault.jpg",
    },
    {
      name: "Emily Davis",
      position: "Forward (2016–2020)",
      achievements: "Known for her versatility and leadership on and off the court.",
      bio: "Emily’s leadership was the backbone of the team during her tenure. She is now a professional athlete and an ambassador for mental health awareness in sports.",
      image: "https://i.ytimg.com/vi/bls9VgKO0Q0/maxresdefault.jpg",
    },
  ];

  const closeModal = () => setSelectedAlumnus(null);

  return (
    <>
    {/* Hero Section */}
          <section
            className="bg-cover bg-center h-96 flex items-center justify-center text-white"
            style={{ backgroundImage: `url(${heroImage})` }}
          >
            <div className="bg-black bg-opacity-50 pt-5 pb-5 pr-8 pl-8 rounded">
              <h1 className="text-4xl font-bold mb-4">Alumni</h1>
            </div>
          </section>

    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Alumni List */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {alumniList.map((alumnus, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200"
            >
              <img
                src={alumnus.image}
                alt={alumnus.name}
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">{alumnus.name}</h3>
                <p className="mt-2 text-sm text-gray-600">{alumnus.position}</p>
                <p className="mt-4 text-gray-700">{alumnus.achievements}</p>
                <button
                  onClick={() => setSelectedAlumnus(alumnus)}
                  className="mt-4 inline-block text-blue-600 hover:underline text-sm"
                >
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedAlumnus && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6">
            <button
              onClick={closeModal}
              className="text-gray-500 hover:text-gray-700 absolute top-4 right-4 text-xl font-bold"
            >
              &times;
            </button>
            <img
              src={selectedAlumnus.image}
              alt={selectedAlumnus.name}
              className="h-40 w-full object-cover rounded-md"
            />
            <h3 className="mt-4 text-2xl font-bold text-gray-900">{selectedAlumnus.name}</h3>
            <p className="mt-2 text-sm text-gray-600">{selectedAlumnus.position}</p>
            <p className="mt-4 text-gray-700">{selectedAlumnus.bio}</p>
            <p className="mt-4 text-gray-700 font-semibold">
              Achievements: {selectedAlumnus.achievements}
            </p>
            <button
              onClick={closeModal}
              className="mt-6 w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
    </>
  );
};

export default Alumni;
