import React, { useState, useEffect } from 'react';
import sliderImg from "../../assets/images/slider/1.png";
import sliderImg1 from "../../assets/images/slider/2.png";
import video from "../../assets/images/gallery/video.mp4"; // Replace with your video file
import { NavLink } from 'react-router-dom';

const Banner = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  // Slides: includes both images and video
  const slides = [
    { type: 'image', src: sliderImg },
    { type: 'image', src: sliderImg1 },
    { type: 'video', src: video },
  ];

  const nextSlide = () => {
    setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlideIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              currentSlideIndex === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            {slide.type === 'image' ? (
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.src})` }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
              </div>
            ) : (
              <div className="relative w-full h-full">
                <video
                  className="absolute inset-0 w-full h-full object-cover"
                  src={slide.src}
                  autoPlay
                  loop
                  muted
                >
                </video>
                {/* Gradient Overlay on Video */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black to-transparent opacity-50"></div>
              </div>
            )}
          </div>
        ))}

        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center z-20 px-6 sm:px-10">
  <h1 className="text-white text-8xl sm:text-7xl md:text-7xl font-extrabold leading-tight mb-6 tracking-widest drop-shadow-lg">
    <span className="text-white">Unleash Your Potential<br/></span> with the <span className="text-yellow-500">Basketball Team</span>!
  </h1>
  <p className="text-white text-lg sm:text-xl md:text-2xl font-medium mb-8 max-w-4xl mx-auto">
    Join us for the ultimate journey in sports, teamwork, and victory. Whether you're on the court or in the stands, become part of something bigger. <span className="font-bold text-yellow-400">Together, we rise!</span> Ready to take the shot? 
  </p>
  <NavLink
  to="/login"
  className="px-8 py-4 bg-yellow-600 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-yellow-700 transition-all duration-300"
  >
    Join Team Now!
    </NavLink>
</div>


        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-4xl bg-yellow-600 bg-opacity-50 p-4 rounded-full hover:bg-opacity-90 transition duration-300 z-30"
        >
          ‹
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-4xl bg-yellow-600 bg-opacity-50 p-4 rounded-full hover:bg-opacity-0 transition duration-300 z-30"
        >
          ›
        </button>
      </div>
    </section>
  );
};

export default Banner;
