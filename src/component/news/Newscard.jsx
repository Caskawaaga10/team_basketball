import React, { useState } from "react";

const Newscard = () => {
  const [selectedNews, setSelectedNews] = useState(null);

  const newsData = [
    {
      title: "Breaking News: Technology Advances",
      description:
        "Stay up-to-date with the latest developments in technology. New innovations are shaping the future of the world.",
      details:
        "Technology is evolving at an unprecedented pace. From AI breakthroughs to advancements in quantum computing, the tech landscape is undergoing transformative changes that are shaping the future of industries worldwide.",
      image:
        "https://plus.unsplash.com/premium_photo-1676634832352-d443dae59c8d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Sports Highlights: Last Night's Game",
      description:
        "Catch up on the exciting moments from last night's football game. Highlights and key plays you won’t want to miss.",
      details:
        "The game was electrifying, with a nail-biting finish that kept fans on the edge of their seats. Relive the key moments, spectacular goals, and player performances that made it unforgettable.",
      image:
        "https://images.unsplash.com/photo-1663576748377-cafb47103042?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Global Finance: Stock Market Surge",
      description:
        "A significant surge in the global stock market. Experts discuss the reasons behind this trend and what it means for investors.",
      details:
        "The stock market witnessed a remarkable surge, driven by strong earnings reports and economic recovery optimism. Analysts provide insights into what this means for global markets and investors.",
      image:
        "https://images.unsplash.com/photo-1659523851113-04fe948554a3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const closeModal = () => setSelectedNews(null);

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">Latest News</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {newsData.map((item, index) => (
          <div
            key={index}
            className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300"
          >
            <img src={item.image} alt={item.title} className="w-full h-56 object-cover" />
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800">{item.title}</h2>
              <p className="text-gray-600 mt-2">{item.description}</p>
              <button
                onClick={() => setSelectedNews(item)}
                className="mt-4 text-indigo-600 hover:text-indigo-800 font-medium"
              >
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedNews && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 relative">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl font-bold"
            >
              &times;
            </button>
            <img
              src={selectedNews.image}
              alt={selectedNews.title}
              className="w-full h-56 object-cover rounded-md"
            />
            <h3 className="mt-4 text-2xl font-bold text-gray-900">{selectedNews.title}</h3>
            <p className="mt-2 text-gray-600">{selectedNews.details}</p>
            <button
              onClick={closeModal}
              className="mt-6 w-full py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Newscard;
