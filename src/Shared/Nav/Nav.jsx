import { Link, useLocation } from "react-router-dom";

const Nav = () => {
  const location = useLocation();
  const isAuthPage = [
    "/auth/login",
    "/auth/register",
    "/auth/forgot-password",
    "/auth/register/otp",
    "/auth/forgotPass/emailRecap",
    "/auth/forgotPass/verify-otp",
    "/auth/forgotPass/confirmPass",
  ].includes(location.pathname);
  if (isAuthPage) return null;
  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 h-full py-8 md:py-4 bg-custom-base-red md:px-7 border-b-2 border-b-white">
        {/* Logo Section */}
        <div className="flex items-center basis-1/4 my-auto ml-5">
          <div className="h-10 w-10">
            <img
              src="./logo.png"
              alt="Logo"
              className="h-full w-full object-cover cursor-pointer"
            />
          </div>
          <Link
            to="/"
            className="cursor-pointer ml-3 text-lg text-white font-medium font-logoText"
          >
            Tejgaon College
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center justify-center basis-1/2">
          <ul className="flex flex-wrap space-x-6 md:space-x-14">
            {[
              { name: "Home", href: "/" },
              { name: "Academic", href: "/academic" },
              { name: "Events", href: "/events" },
              { name: "Blogs", href: "/blogs" },
              { name: "Contact", href: "/contact" }
            ].map((link) => (
              <li
                key={link.name}
                className="tracking-wide text-sm font-medium text-white hover:text-white cursor-pointer transition-all duration-300 ease-in-out"
              >
                <Link to={link.href}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Buttons and Actions */}
        <div className="flex items-center justify-end basis-1/4 space-x-2 mr-5">
          {/* Trade Button */}

          {/* Connect Wallet */}
          <div className="flex items-center space-x-2 px-5 py-2 cursor-pointer">
            <svg
              class="w-6 h-6 text-white"
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

          {/* Currency Selector */}
          <div className="flex items-center justify-center divide-x divide-custom-gray-footer-icon border border-custom-gray-line rounded px-4 py-2">
            <Link to="/profile" className="cursor-pointer pr-2">
              <svg
                class="w-6 h-6 text-white"
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
                fill="white"
                strokeWidth="0"
                viewBox="0 0 128 512"
                className="cursor-pointer w-3 h-3"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
