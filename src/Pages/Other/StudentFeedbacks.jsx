import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Api } from '../../Api/Api';

const StudentFeedbacks = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  
  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const response = await axios.get(`${Api}/student-feedback/student-feedback`); // Replace with your API URL
        setFeedbacks(response.data.feedbacks);
      } catch (error) {
        console.error('Error fetching feedbacks:', error);
      }
    };

    fetchFeedbacks();
  }, []);

  return (
    <section className="pt-28 pb-32 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold mb-12 text-center">STUDENT FEEDBACKS</h2>
        <p className="text-center mb-12">
          Your opinion matters, and by providing feedback, you contribute
          to the continuous enhancement of our academic programs,
          support services, and campus life.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {feedbacks.map((feedback) => (
              <div
                key={feedback._id}
                className="bg-gray-200 h-full rounded-lg p-6"
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
                      <p className="text-sm mb-4 pt-3 text-custom-base-red">
                      {feedback.comments}
                      </p>
                    </div>
                    <Rating
                    style={{ maxWidth: 120 }}
                    value={feedback.rating}
                    readOnly
                  />
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default StudentFeedbacks;
