import React, { useState } from 'react';
import heroImage from "../assets/images/partners/img1.jpeg";

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "What is the mission of the basketball team?",
      answer: "Our mission is to foster teamwork, sportsmanship, and personal growth while competing at the highest levels of the sport.",
    },
    {
      question: "How can I join the basketball team?",
      answer: "You can join by attending our open tryouts or contacting the team manager for more information.",
    },
    {
      question: "Where can I find the team's schedule?",
      answer: "The team schedule is available on our website under the 'Schedule' section or by following our social media channels.",
    },
    {
      question: "Who are the sponsors of the basketball team?",
      answer: "Our sponsors include Nike, Adidas, Under Armour, and Spalding. Their support helps us achieve excellence on and off the court.",
    },
    {
      question: "How can I support the basketball team?",
      answer: "You can support us by attending games, purchasing team merchandise, or becoming a sponsor. Visit our 'Support Us' page for more details.",
    },
  ];

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
    {/* Hero Section */}
          <section
            className="bg-cover bg-center h-96 flex items-center justify-center text-white"
            style={{ backgroundImage: `url(${heroImage})` }}
          >
            <div className="bg-black bg-opacity-50 p-8 rounded">
              <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
            </div>
          </section>

    <div className="container mx-auto px-4 py-10">
      <div className="max-w-3xl mx-auto">
        {faqData.map((faq, index) => (
          <div key={index} className="mb-4 border-b border-gray-200">
            <button
              onClick={() => toggleFaq(index)}
              className="w-full text-left p-4 flex justify-between items-center bg-white hover:bg-gray-50 focus:outline-none"
            >
              <span className="text-lg font-medium text-gray-800">{faq.question}</span>
              <span className="text-gray-500">{activeIndex === index ? '-' : '+'}</span>
            </button>
            {activeIndex === index && (
              <div className="p-4 bg-gray-50 text-gray-700">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Faqs;
