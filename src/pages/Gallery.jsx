import React, { useEffect, useState } from "react";
import heroImage from "../assets/images/gallery/e.webp"; // Placeholder image for the hero section
import galleryPhoto1 from "../assets/images/gallery/g1.jpg";
import galleryPhoto2 from "../assets/images/gallery/g2.avif";
import galleryPhoto3 from "../assets/images/gallery/g3.jpg";
import galleryPhoto4 from "../assets/images/gallery/g4.jpg";
import galleryPhoto5 from "../assets/images/gallery/g5.webp";
import galleryPhoto6 from "../assets/images/gallery/g6.webp";

const Gallery = () => {
  const [modalImage, setModalImage] = useState(null);

  useEffect(() => {
    document.title = "Team Gallery";
    window.scrollTo(0, 0);
  }, []);

  const getVideoThumbnail = (videoUrl) => {
    return `https://img.youtube.com/vi/${videoUrl.split("v=")[1]}/hqdefault.jpg`;
  };

  const videoUrls = [
    "https://www.youtube.com/watch?v=U2-JPqrALsA",
    "https://www.youtube.com/watch?v=2Ov3karFwEc",
    "https://www.youtube.com/watch?v=HdgorlTe88A",
    "https://www.youtube.com/watch?v=xeGQVQyUIoM",
  ];

  return (
    <>
      {/* Hero Section */}
      <section
        className="bg-cover bg-center h-96 flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="bg-black bg-opacity-50 p-8 rounded">
          <h1 className="text-4xl font-bold mb-4">Photos and Videos</h1>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Photo Gallery */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Photo Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[galleryPhoto1, galleryPhoto2, galleryPhoto3, galleryPhoto4, galleryPhoto5, galleryPhoto6].map((photo, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer"
                onClick={() => setModalImage(photo)}
              >
                <img
                  src={photo}
                  alt={`Gallery Photo ${index + 1}`}
                  className="w-full h-48 object-cover"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Video Gallery */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Video Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {videoUrls.map((videoUrl, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg overflow-hidden"
              >
                <img
                  src={getVideoThumbnail(videoUrl)}
                  alt={`Video Thumbnail ${index + 1}`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 text-center">
                  <a
                    href={videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                  >
                    Watch Video
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Modal */}
      {modalImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={() => setModalImage(null)}
        >
          <div className="relative">
            <img
              src={modalImage}
              alt="Modal Content"
              className="w-full h-96 rounded-lg"
            />
            <button
              className="absolute top-2 right-2 bg-red-600 text-white p-2 rounded-full"
              onClick={() => setModalImage(null)}
            >
              &#x2715;
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
