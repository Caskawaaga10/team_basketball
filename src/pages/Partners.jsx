import React from "react";
import heroImage from "../assets/images/gallery/g2.jpg";

const Partners = () => {
  const partners = [
    { name: "Nike", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmyTCqcNRx4lOw3swbt4EZj_4wKZNsPx-kIA&s", url: "https://www.nike.com" },
    { name: "Adidas", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmyTCqcNRx4lOw3swbt4EZj_4wKZNsPx-kIA&s", url: "https://www.adidas.com" },
    { name: "Gatorade", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmyTCqcNRx4lOw3swbt4EZj_4wKZNsPx-kIA&s", url: "https://www.gatorade.com" },
    { name: "Wilson", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmyTCqcNRx4lOw3swbt4EZj_4wKZNsPx-kIA&s", url: "https://www.wilson.com" },
    // Add more sponsors here
  ];

  return (
    <>
    {/* Hero Section */}
          <section
            className="bg-cover bg-center h-96 flex items-center justify-center text-white"
            style={{ backgroundImage: `url(${heroImage})` }}
          >
            <div className="bg-black bg-opacity-50 p-8 rounded">
              <h1 className="text-4xl font-bold mb-4">Partners</h1>
            </div>
          </section>

    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Partner Logos Grid */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center">
          {partners.map((partner) => (
            <a
              key={partner.name}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center"
            >
              <img
                src={partner.logo}
                alt={`${partner.name} Logo`}
                className="h-16 w-auto object-contain hover:opacity-75 transition-opacity duration-200"
              />
            </a>
          ))}
        </div>

        {/* Additional Images Section */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-gray-900 text-center">Partnership in Action</h3>
          <p className="mt-4 text-center text-gray-600">
            Here are some highlights of how our partners are making a difference, from sponsoring
            our events to supporting our players.
          </p>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgkD-NKU93JTQfNwGFDe2gA58SKg2GtGrVpPDhQJNyTWyZRHPnI6XCn9C7tqPun2up40Q&usqp=CAU"
              alt="Partnership Event 1"
              className="w-full h-48 object-cover rounded-lg shadow-md"
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgkD-NKU93JTQfNwGFDe2gA58SKg2GtGrVpPDhQJNyTWyZRHPnI6XCn9C7tqPun2up40Q&usqp=CAU"
              alt="Partnership Event 2"
              className="w-full h-48 object-cover rounded-lg shadow-md"
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgkD-NKU93JTQfNwGFDe2gA58SKg2GtGrVpPDhQJNyTWyZRHPnI6XCn9C7tqPun2up40Q&usqp=CAU"
              alt="Partnership Event 3"
              className="w-full h-48 object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Partners;
