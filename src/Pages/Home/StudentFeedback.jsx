import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import axios from "axios";
import { Carousel, } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Api } from '../../Api/Api';

const StudentFeedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  const navigate =  useNavigate();

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const response = await axios.get(
           `${Api}/student-feedback/student-feedback`
        ); // Replace with your API URL
       

        const allFeedbacks = response.data.feedbacks;
        const filteredFeedbacks = allFeedbacks.slice(0, 4); // Fetch first 3 cards
        setFeedbacks(filteredFeedbacks);
      } catch (error) {
        console.error("Error fetching feedbacks:", error);
      }
    };

    fetchFeedbacks();
  }, []);

  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold mb-12 text-center">
          STUDENT FEEDBACK
        </h2>
        <p className="text-center mb-12">
          Your opinion matters, and by providing feedback, you contribute to the
          continuous enhancement of our academic programs, support services, and
          campus life.
        </p>

        <div className="h-56 w-full md:w-2/3 mx-auto flex items-center sm:h-64 xl:h-80 2xl:h-96">
          <Carousel>
            {feedbacks.map((feedback) => (
              <div
                key={feedback._id}
                className="bg-gray-100 h-full rounded-lg p-6 border-x-custom-base-red border-x-[80px]"
              >
                <div className="flex items-center justify-center h-full space-x-5">
                  <div className="basis-1/3">
                    <div className="flex items-center justify-center h-full">
                      <img
                        src={feedback.image}
                        alt="Profile"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="basis-2/3">
                    <div>
                      <h3 className="font-semibold ">{feedback.studentName}</h3>
                      <p className="text-sm mb-4 text-custom-base-red">
                      {feedback.comments}
                      </p>
                    </div>
          
                    <div className="flex">
                    <Rating
                    style={{ maxWidth: 120 }}
                    value={feedback.rating}
                    readOnly
                  />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
        <div className="flex items-center justify-center mt-16">
          <button onClick={()=> navigate('/studentFeedbacks')} className="bg-maroon-600 hover:bg-custom-base-red border-custom-base-red border text-custom-base-red hover:text-white font-bold py-2 px-6 rounded transition-all">
                View All Feedbacks
              </button>
        </div>
      </div>
    </section>
  );
};

export default StudentFeedback;
