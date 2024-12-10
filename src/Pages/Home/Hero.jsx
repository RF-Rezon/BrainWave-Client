import React from 'react'

const Hero = () => {
  return (
   <>
    <div className="max-h-screen bg-custom-base-red w-full relative pb-36 md:pb-44">
        <div className="w-4/5 mx-auto flex items-center justify-center gap-6 p-16 md:pt-52">
          <div className="w-1/5 hidden md:block">
            <img
              src="./img-52.webp.png"
              className="object-cover h-full w-full"
              alt="model"
            />
          </div>
          <div className="md:w-4/5 w-full md:pt-6 relative">
         
            <div className="flex">
              <span className="w-12 h-12">
                <img src="./cap.png" alt="cap" className="object-cover" />
              </span>
              <p className=" text-white font-semibold md:text-xl pl-3 md:pl-0 text-base">
                Where education meets excellence.
              </p>
            </div>
            <p className="md:text-8xl text-4xl text-white font-semibold uppercase md:pl-40 pl-0 pt-6 md:pt-0">
              Brainwave
            </p>
            <div className="absolute md:ml-3 md:left-24 -bottom-40 md:-bottom-0">
              <div className="w-16 h-16 ">
                <img
                  src="./Vector.png"
                  className="object-cover w-full"
                  alt="vector"
                />
              </div>
              <div className="h-28 w-28 rounded-full bg-custom-base-red flex items-center justify-center ml-20 animate-spin relative">
               <img className='rounded-full bg-transparent' src="./images/officialLogo/2ndlogo.png" alt="" />
              </div>
             
            </div>
            <p className="md:text-8xl text-4xl text-white font-semibold uppercase md:text-end md:pr-48 pr-0 text-center">
              University
            </p>
            <p className="md:text-end text-white font-medium md:text-xl pt-8 md:pr-32 text-base text-center pb-6">
              Empowering minds, shaping futures. Be a builder.{" "}
            </p>

            <div className="flex items-center justify-center md:pl-32">
              <button className="px-6 py-2 text-sm font-medium h-10 rounded-md outline-none cursor-pointer bg-white text-custom-base-red flex items-center justify-center gap-x-1 hover:scale-105 transition-all mt-3">
                View Our Program
                <span className="-rotate-90 hover:translate-x-2 transition-all">
                  <svg
                    class="w-6 h-6 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 19V5m0 14-4-4m4 4 4-4"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>

      </div>
   </>
  )
}

export default Hero