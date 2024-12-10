

const Faculty = () => {
  const departments = [
    "Nursing, DNP",
    "M.A. in Education",
    "Business Administration",
    "Economics, BA"
  ];

  return (
    <section className="py-28 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold mb-12 text-left">OUR FACULTY</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {departments.map((dept, index) => (
            <div key={index} className="bg-white p-6 rounded h-48 cursor-pointer my-5">
              <h3 className="text-xl font-semibold mb-2">{dept}</h3>
              <hr className='border border-custom-base-red w-full'/>
              <p className="text-gray-600 pt-10">Learn more about our {dept} program and faculty.</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-14">
        <button className="bg-maroon-600 hover:bg-custom-base-red border-custom-base-red border text-custom-base-red hover:text-white font-bold py-2 px-6 rounded transition-all">
              More Faculty
            </button>
        </div>
      </div>
    </section>
  );
};

export default Faculty;