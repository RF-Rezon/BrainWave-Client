import React from 'react';

const UpcomingEvents = () => {
  const events = [
    {
      date: "August 20, 2024",
      title: "Cultural Exchange: Building Global Connections Through",
      image: "./group_stu1.webp"
    },
    {
      date: "August 20, 2024",
      title: "Literary Voices: Celebrating Diverse Narratives in",
      image: "./group_stu2.webp"
    },
    {
      date: "August 20, 2024",
      title: "Bridging Cultures: Global Perspectives in Contemporary",
      image: "./group_stu3.webp"
    }
  ];

  return (
    <section className="pt-28 pb-24 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold mb-16 text-center">UPCOMING EVENTS</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden">
              <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <p className="text-gray-600 mb-2">{event.date}</p>
                <h3 className="text-xl font-semibold mb-4">{event.title}</h3>
                <button className="text-maroon-600 hover:text-maroon-700 font-semibold">Learn More</button>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-16">
        <button className="bg-maroon-600 hover:bg-custom-base-red border-custom-base-red border text-custom-base-red hover:text-white font-bold py-2 px-6 rounded transition-all">
              View All Event
            </button>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
