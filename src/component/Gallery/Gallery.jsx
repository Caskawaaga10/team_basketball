import React, { useState, useEffect } from "react";

// Importing images from the assets/image folder
import img1 from "../../assets/images/gallery/g1.jpg";
import img2 from "../../assets/images/gallery/g2.jpg";
import img3 from "../../assets/images/gallery/g3.jpg";
import img4 from "../../assets/images/gallery/g4.jpg";
import img5 from "../../assets/images/gallery/g5.jpg";
import img6 from "../../assets/images/gallery/g6.jpg";

const Gallery = () => {
  const images = [
    { thumbnail: img1, full: img1 },
    { thumbnail: img2, full: img2 },
    { thumbnail: img3, full: img3 },
    { thumbnail: img4, full: img4 },
    { thumbnail: img5, full: img5 },
    { thumbnail: img6, full: img6 },
  ];

  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Open the modal to view the selected image
  const openModal = (image) => {
    setSelectedImage(image);
  };

  // Close the modal
  const closeModal = () => {
    setSelectedImage(null);
  };

  // Auto slide the images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // 3000ms = 3 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return (
    <>
      <div className="p-6 text-center bg-gray-100 rounded-lg">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 uppercase tracking-wide">
          Photo Gallery
        </h1>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          Highlighting team photos, action shots, and memorable moments.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative group cursor-pointer transform transition-all duration-300 ease-in-out overflow-hidden rounded-lg shadow-md hover:scale-105"
              onClick={() => openModal(image)}
            >
              <img
                src={image.thumbnail}
                alt={`Gallery image ${index + 1}`}
                className={`w-full h-74 object-cover rounded-lg ${
                  index === currentImageIndex ? "ring-4 ring-blue-500" : ""
                }`}
              />
            </div>
          ))}
        </div>

        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
            onClick={closeModal}
          >
            <div
              className="relative max-w-4xl max-h-4xl overflow-hidden rounded-lg bg-white shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-white bg-gray-800 p-2 rounded-full focus:outline-none"
              >
                &times;
              </button>
              <img
                src={selectedImage.full}
                alt="Selected"
                className="w-full h-auto object-contain rounded-lg"
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Gallery;
