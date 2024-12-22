import React from "react";
import heroImage from "../assets/images/gallery/g1.jpg";
import merchandise1 from "../assets/images/gallery/g2.avif";
import merchandise2 from "../assets/images/gallery/g3.jpg";
import merchandise3 from "../assets/images/gallery/g4.jpg";
import merchandise4 from "../assets/images/gallery/g5.webp";

const merchandiseItems = [
  {
    id: 1,
    name: "Team Jersey",
    price: "$49.99",
    image: merchandise1,
    description: "High-quality jersey with breathable fabric for optimal performance."
  },
  {
    id: 2,
    name: "Basketball",
    price: "$29.99",
    image: merchandise2,
    description: "Official size and weight basketball for professional use."
  },
  {
    id: 3,
    name: "Team Cap",
    price: "$19.99",
    image: merchandise3,
    description: "Stylish and adjustable team cap for all fans."
  },
  {
    id: 4,
    name: "Water Bottle",
    price: "$14.99",
    image: merchandise4,
    description: "Durable and lightweight water bottle with team logo."
  }
];

const Merchandise = () => {
  return (
    <>
    {/* Hero Section */}
          <section
            className="bg-cover bg-center h-96 flex items-center justify-center text-white"
            style={{ backgroundImage: `url(${heroImage})` }}
          >
            <div className="bg-black bg-opacity-50 p-8 rounded">
              <h1 className="text-4xl font-bold mb-4">Our Merchandise</h1>
            </div>
          </section>

    <div className="container mx-auto px-4 py-8">
      <section className="mb-12">
        <h1 className="text-4xl font-bold text-center mb-6">Team Merchandise</h1>
        <p className="text-lg text-center mb-12 text-gray-700">
          Explore our official merchandise collection. Show your support for the team!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {merchandiseItems.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-gray-800">
                    {item.price}
                  </span>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
    </>
  );
};

export default Merchandise;
