import { Card } from "flowbite-react";
import React from 'react';
import { useNavigate } from "react-router-dom";

const CheckUser = () => {
    const navigate =  useNavigate();
  return (
    <>
     <div className="container mx-auto px-4 py-28">
        <h2 className="text-5xl font-bold mb-4 text-center">Who Are You?</h2>
        <hr className="border-2 w-full border-custom-base-red mb-24"/>

        <div className='flex flex-col md:flex-row items-center justify-center md:space-x-10'>
        <Card
      className="max-w-sm  mb-6 pb-3 cursor-pointer" 
      onClick={()=> navigate("/auth/student-login")}
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc="/1.png"
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white uppercase text-center"> 
       Student
      </h5>
    </Card>
        <Card
      className="max-w-sm mb-6 pb-3 cursor-pointer"
      onClick={()=> navigate("/auth/faculty-login")}
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc="/2.png"
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white uppercase text-center">
        Faculty
      </h5>
     
    </Card>
        </div>
      </div>
    </>
  )
}

export default CheckUser