import React, { useEffect } from "react";
import heroImage from "../assets/images/gallery/g2.jpg"; // Placeholder image for the hero section
import articleImage from "../assets/images/gallery/g1.jpg"; // Placeholder image for articles

const Blog = () => {
  useEffect(() => {
    document.title = "Team Blog";
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
          <h1 className="text-4xl font-bold mb-4">Our Team Blog</h1>
          <p className="text-lg">
            Catch up on the latest news, game highlights, and stories from our
            basketball family.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Featured Articles */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Featured Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
                <img
                  src={articleImage}
                  alt="Featured Article"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">
                    Championship Journey: A Season to Remember
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Highlights and insights from our incredible championship run.
                  </p>
                  <button className="text-blue-600 font-bold hover:underline">
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Recent Posts */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Recent Posts</h2>
          <div className="grid grid-cols-1 gap-4">
            {[1, 2, 3, 4].map((_, index) => (
              <div
                key={index}
                className="flex items-center bg-white shadow-lg rounded-lg overflow-hidden p-4"
              >
                <img
                  src={articleImage}
                  alt="Recent Post"
                  className="w-24 h-24 object-cover rounded-lg mr-4"
                />
                <div>
                  <h3 className="text-lg font-bold">
                    Upcoming Rivalry Game: What to Expect
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Our team is gearing up for an exciting showdown against our
                    biggest rivals.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Blog;
