import React, { useEffect } from "react";
import heroImage from "../assets/images/gallery/g2.jpg";
import playerImage1 from "../assets/images/gallery/g2.jpg";
import playerImage2 from "../assets/images/gallery/g5.jpg";
import playerImage3 from "../assets/images/gallery/g7.jpg";

const testimonials = [
  {
    name: "John Doe",
    role: "Team Captain",
    testimonial:
      "Being part of this team has been an incredible experience. The support, camaraderie, and competitive spirit are unmatched!",
    image: playerImage1,
  },
  {
    name: "Jane Smith",
    role: "Point Guard",
    testimonial:
      "I’ve grown so much as a player and as a person here. The coaching staff and my teammates inspire me every day.",
    image: playerImage2,
  },
  {
    name: "Mark Johnson",
    role: "Forward",
    testimonial:
      "This team feels like family. Together, we’ve achieved great things, and I’m excited for what’s ahead!",
    image: playerImage3,
  },
];

const Testimonials = () => {
  useEffect(() => {
    document.title = "Team Testimonials";
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
    {/* Hero Section */}
          <section
            className="bg-cover bg-center h-96 flex items-center justify-center text-white"
            style={{ backgroundImage: `url(${heroImage})` }}
          >
            <div className="bg-black bg-opacity-50 p-8 rounded">
              <h1 className="text-4xl font-bold mb-4">Testimonials</h1>
            </div>
          </section>
    
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold text-center mb-12">What Our Players Say</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold mb-2">{testimonial.name}</h3>
            <p className="text-sm text-gray-500 mb-4">{testimonial.role}</p>
            <p className="text-gray-700 italic">“{testimonial.testimonial}”</p>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Testimonials;
