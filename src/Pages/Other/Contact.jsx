const Contact = () => {
  return (
    <div>


      {/* Hero Section */}
      <div className="relative h-72 bg-gray-800">
        <img
          src="https://via.placeholder.com/1500x400"
          alt="Contact Header"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-50">
          <h1 className="text-5xl font-extrabold tracking-wide">Contact Us</h1>
        </div>
      </div>

      {/* General Contact Info */}
      <section className="p-8 bg-gray-50">
        <h2 className="text-center text-3xl font-extrabold mb-8 text-gray-700">
          General Contact Information
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="flex flex-col items-center border border-gray-200 rounded-lg p-6 shadow-lg bg-white max-w-xs">
            <span className="text-4xl">📍</span>
            <p className="mt-4 text-center font-medium text-gray-700">
              400 Broome St, New York, NY 10013, USA
            </p>
          </div>
          <div className="flex flex-col items-center border border-gray-200 rounded-lg p-6 shadow-lg bg-white max-w-xs">
            <span className="text-4xl">📞</span>
            <p className="mt-4 font-medium text-gray-700">+44 20 4154 2541</p>
            <p className="font-medium text-gray-700">+44 20 4154 2542</p>
          </div>
          <div className="flex flex-col items-center border border-gray-200 rounded-lg p-6 shadow-lg bg-white max-w-xs">
            <span className="text-4xl">🕒</span>
            <p className="mt-4 font-medium text-gray-700">Mon-Fri: 9 AM – 6 PM</p>
            <p className="font-medium text-gray-700">Saturday: 9 AM – 4 PM</p>
          </div>
        </div>
      </section>

      {/* Other Campus Contacts */}
      <section className="p-8 bg-white">
        <h2 className="text-center text-3xl font-extrabold mb-8 text-gray-700">
          Other Campus Contacts
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {[
            {
              location: "London",
              address: "University of London, 15 Talbot Square",
              city: "Tyburnia, London W2 1TT, UK",
              phone: "+44 20 4154 2555",
              email: "Unipix.info@edu",
            },
            {
              location: "New York",
              address: "80 Washington Square E",
              city: "New York, NY 10003, USA",
              phone: "+44 20 4154 200",
              email: "Supports.info@edu",
            },
            {
              location: "Boston",
              address: "Center for Computing & Data Sciences",
              city: "665 Commonwealth Ave, Boston, MA 02215, USA",
              phone: "+44 20 4154 2541",
              email: "Example.info@edu",
            },
          ].map((campus, index) => (
            <div
              key={index}
              className="bg-gray-50 shadow-md p-6 rounded-lg border border-gray-200 max-w-sm"
            >
              <h3 className="font-bold text-lg text-gray-800">{campus.location}</h3>
              <p className="mt-2 text-gray-700">{campus.address}</p>
              <p className="text-gray-700">{campus.city}</p>
              <p className="mt-2 text-gray-700 font-medium">{campus.phone}</p>
              <p className="text-gray-700">{campus.email}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Get in Touch */}
      <section className="p-8 bg-gray-50">
        <h2 className="text-center text-3xl font-extrabold mb-8 text-gray-700">
          Get in Touch
        </h2>
        <form className="max-w-xl mx-auto space-y-6 bg-white shadow-lg p-6 rounded-lg border border-gray-200">
          <div>
            <label className="block font-bold mb-2 text-gray-700">Full Name *</label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full border border-gray-300 p-3 rounded-md focus:ring focus:ring-red-300"
            />
          </div>
          <div>
            <label className="block font-bold mb-2 text-gray-700">Email Address *</label>
            <input
              type="email"
              placeholder="Your email"
              className="w-full border border-gray-300 p-3 rounded-md focus:ring focus:ring-red-300"
            />
          </div>
          <div>
            <label className="block font-bold mb-2 text-gray-700">How Can We Help? *</label>
            <textarea
              placeholder="Your message"
              className="w-full border border-gray-300 p-3 rounded-md focus:ring focus:ring-red-300"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-red-600 text-white py-3 rounded-md hover:bg-red-700 font-bold"
          >
            Send Message ➤
          </button>
        </form>
      </section>

      {/* Map Section */}
      <section className="p-8">
        <iframe
          className="w-full h-80 border border-gray-300 rounded-lg shadow-lg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24277.2656999511!2d-0.11982487058223915!3d51.511213896570744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b36c4b47dcf%3A0xa8d0f7592eb1a9e6!2sLondon%20Eye!5e0!3m2!1sen!2sus!4v1696851595787!5m2!1sen!2sus"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>

      {/* Footer */}
      

    </div>
  );
};

export default Contact;
