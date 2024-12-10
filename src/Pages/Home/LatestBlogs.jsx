import React from 'react';

const LatestBlogs = () => {
  const blogs = [
    {
      title: "Those Inequalities Are Inequalities That Occur Within",
      date: "August 6, 2024",
      image: "/bg-12.webp"
    },
    {
      title: "After Decades Of Improvement, Cardiovascular Health Rates.",
      date: "July 4, 2024",
      image: "/bg-13.webp"
    },
    {
      title: "After Decades Of Improvement, Cardiovascular Health Rates.",
      date: "July 4, 2024",
      image: "/bg-14.webp"
    },
    {
      title: "10 Effective Study Tips For College Success",
      date: "June 26, 2024",
      image: "/bg-11.webp"
    }
  ];

  return (
    <section className="py-28 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold mb-8 text-center">LATEST BLOGS</h2>
        <p className="text-center mb-16">
          Whether you're considering a foundation course or an
          undergraduate academics is a place.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {blogs.map((blog, index) => (
            <div key={index} className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
              <img src={blog.image} alt={blog.title} width={300} height={200} className="w-full h-48 object-cover" />
              <div className="p-6">
                <p className="text-gray-600 mb-2">admin {blog.date}</p>
                <h3 className="text-xl font-semibold mb-4">{blog.title}</h3>
                <button className="text-maroon-600 hover:text-maroon-700 font-semibold">Read More</button>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <button className="bg-maroon-600 hover:bg-maroon-700 text-white font-bold py-2 px-4 rounded">
            View All Blogs
          </button>
        </div>
      </div>
    </section>
  );
};

export default LatestBlogs;