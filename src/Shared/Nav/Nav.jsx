import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Nav = () => {
  const location = useLocation();
  const navigate =  useNavigate();

  // Check if current page is an authentication page
  const isAuthPage = [
    "/auth/student-login",
    "/auth/faculty-login",
    "/auth/student-register",
    "/auth/faculty-register",
    "/auth/forgot-password",
    "/auth/register/otp",
    "/auth/forgotPass/emailRecap",
    "/auth/reset/emailCheck",
    "/auth/reset/verify-otp",
    "auth/reset/newPassword",
    "/auth/reset/newPassword",
    "/auth/forgotPass/verify-otp",
    "/auth/forgotPass/confirmPass",
    "/auth/check",
    "/auth/register/student-otp",
    "/auth/register/faculty-otp"
  ].includes(location.pathname);

  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Hide Navbar for auth pages
  if (isAuthPage) return null;

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white text-custom-base-red shadow-md"
            : "bg-custom-base-red text-white"
        }`}
      >
        <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 h-full py-8 md:py-4 md:px-7 border-b-2 border-b-white">
          {/* Logo Section */}
          <div className="flex items-center basis-1/4 my-auto ml-5">
            <div className="h-10 w-10">
              <img
                src="./images/officialLogo/logo.jpeg"
                alt="Logo"
                className="h-full w-full object-cover cursor-pointer"
              />
            </div>
            <Link
              to="/"
              className="cursor-pointer ml-3 text-lg font-medium font-logoText flex space-x-2"
            >
              <h1 className="uppercase font-semibold pb-1 border-b-2 border-b-white">Brainwave</h1>
              <h1 className="uppercase font-semibold pt-1">University</h1>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center justify-center basis-1/2">
            <ul className="flex flex-wrap space-x-6 md:space-x-14">
              {[
                { name: "Home", href: "/" },
                { name: "Departments", href: "/department" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <li
                  key={link.name}
                  className={`tracking-wide text-sm font-medium cursor-pointer transition-all duration-300 ${
                    isScrolled ? "text-custom-base-red" : "text-white"
                  }`}
                >
                  <Link to={link.href}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Buttons and Actions */}
          <div className="flex items-center justify-end basis-1/4 space-x-2 mr-5">
            {/* Search Icon */}
            <div className="flex items-center space-x-2 px-5 py-2 cursor-pointer">
              <svg
                className={`w-6 h-6 ${
                  isScrolled ? "text-custom-base-red" : "text-white"
                }`}
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
                  strokeWidth="2"
                  d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>

            {/* Profile Icon */}
            <div className="flex items-center justify-center divide-x divide-custom-gray-footer-icon border border-custom-gray-line rounded px-4 py-2">
              <Link to="/profile" className="cursor-pointer pr-2">
                <svg
                  className={`w-6 h-6 ${
                    isScrolled ? "text-custom-base-red" : "text-white"
                  }`}
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
                    d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a8.949 8.949 0 0 0 4.951-1.488A3.987 3.987 0 0 0 13 16h-2a3.987 3.987 0 0 0-3.951 3.512A8.948 8.948 0 0 0 12 21Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
              </Link>
              <div className="pl-2">
                <svg
                  stroke="currentColor"
                  fill={isScrolled ? "currentColor" : "white"}
                  strokeWidth="0"
                  viewBox="0 0 128 512"
                  className="cursor-pointer w-3 h-3"
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={()=> navigate("/auth/check")}
                >
                  <path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
