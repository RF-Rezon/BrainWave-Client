import React from "react";

const About = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center space-x-10">
          <div className="basis-1/2">
    <div className="w-full">

            <img src="./group.webp" className="object-cover w-full h-full" alt="" />
    </div>
          </div>
          <div className="basis-1/2">
          <h2 className="text-5xl font-bold mb-8 text-start pt-8 md:pt-0">
          ABOUT OUR <br /> UNIVERSITY 
        </h2>
        <div className="flex flex-wrap items-center">
          <div className="w-full mb-8 md:mb-0">
            <p className="text-lg mb-4">
              At University Unipix, we believe in the transformative power of
              education and the boundless potential within every individual.
              Established in 1971, we have been dedicated to fostering
              intellectual curiosity, academic excellence, and a vibrant campus
              community.
            </p>
            <button className="bg-maroon-600 hover:bg-maroon-700 text-white font-bold py-2 px-4 rounded">
              View Our Programs
            </button>
          </div>
        </div>
          </div>
        </div>
       <hr className="w-full text-gray-500 md:hidden block"/>
        <div className="md:mt-20 mt-16 flex flex-wrap justify-around text-center">
          <div className="w-full sm:w-1/2 md:w-1/4 mb-8">
            <h3 className="text-3xl font-bold mb-2">20,000</h3>
            <p>Undergraduate & Graduate Students</p>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4 mb-8">
            <h3 className="text-3xl font-bold mb-2">16,214</h3>
            <p>Unipix University Faculty & Staff</p>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4 mb-8">
            <h3 className="text-3xl font-bold mb-2">500k</h3>
            <p>Unipix University Alumni Worldwide</p>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4 mb-8">
            <h3 className="text-3xl font-bold mb-2">25,000</h3>
            <p>Undergraduate & Graduate Students</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
