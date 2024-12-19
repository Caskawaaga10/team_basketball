import React from "react";

const Sponsors = () => {
  const sponsors = [
    {
      logo: "https://www.datocms-assets.com/48294/1718039566-types-of-logos_4_pepsi.png?auto=format",
      link: "#",
    },
    {
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaHQWQcGdVxTkjSdFrf7p00_c3GKPLzAMDJg&s",
      link: "#",
    },
    {
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdqpMBDIRTUFr8vTsrq5zIA1SEdRw-AW5h8A&s",
      link: "#",
    },
    {
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOTjNrTrw-78PwZxeqfO6cgP2ZoQiJ-6EJxA&s",
      link: "#",
    },
    {
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9aRgk5lMAbKAgFWjBIYyQ1WBb2TKTzCBg2g&s",
      link: "#",
    },
  ];

  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-8 lg:px-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">Our Sponsors</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {sponsors.map((sponsor, index) => (
            <a
              key={index}
              href={sponsor.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center p-4 bg-white rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:shadow-lg"
            >
              <img
                src={sponsor.logo}
                alt={`Sponsor ${index + 1}`}
                className="max-w-full max-h-full object-contain"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
