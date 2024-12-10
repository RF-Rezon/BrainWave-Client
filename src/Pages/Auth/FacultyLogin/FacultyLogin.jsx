
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import unlock from "../../../../public/images/auth/login/unlock.png";
import logo from "../../../../public/images/officialLogo/logo.jpeg";
import { Api } from "../../../Api/Api";
import { useProfile } from "../../../Providers/ProfileProvider";

const FacultyLogin = () => {

    const navigate = useNavigate();
        const { profile } = useProfile();
        if(profile){
            navigate("/");
        }
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [loginLoading, setLoginLoading] = useState(false);
  const [serverError, setServerError] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormValues((prev) => ({ ...prev, [name]: value }));
    validateField(name, value);
  };

  const validateField = (name, value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let error = "";
    if (name === "email" && !emailRegex.test(value)) {
      error = "Please enter a valid email.";
    } 

    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const hasErrors = Object.values(errors).some((err) => err !== "");
    if (hasErrors) {
      alert("Please fix the errors in the form.");
      return;
    }

    try {
      setLoginLoading(true);
      setServerError("");

      const payload = {
        email: formValues.email,
        password: formValues.password,
      };

      const response = await axios.post(`${Api}/auth/student-login`, payload, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      const token = response.data.token;
      localStorage.setItem("token", token);
      sessionStorage.setItem("token", token);
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
            document.cookie = `token=${token}; path=/; max-age=${
              7 * 24 * 60 * 60
            }; secure`;

    } catch (error) {
      console.error("Login failed:", error.response?.data || error.message);
      setServerError(
        error.response?.data?.message ||
          "Something went wrong. Please try again."
      );
    } finally {
      setLoginLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  return (
    <div className="mt-2">
      <div className="min-h-screen bg-gray-100">
        <div className="w-full">
          <section className="w-full px-8 md:px-2 md:w-1/3 xl:w-[300px] md:mx-auto py-3 flex flex-col pt-12 lg:pt-44">
            <div className="flex-1/3 flex flex-col items-center gap-y-3">
              <div>
                <img
                  src={logo}
                  alt="brainwave"
                  className="w-32 rounded-full"
                  loading="lazy"
                />
              </div>
              <div>
                <p className="text-center text-gray-800 font-medium text-2xl">
                  Faculty Login
                </p>
              </div>
            </div>
            <div className="flex-2/3 pt-9">
              <form onSubmit={handleSubmit}>
                <div className="my-4">
                  <input
                    name="email"
                    value={formValues.email}
                    onChange={handleInputChange}
                    className="py-2 pl-2 w-full border border-gray-300 outline-none rounded-md shadow-md text-sm font-medium"
                    type="email"
                    placeholder="Email"
                  />
                  <p className="text-[10px] text-red-500 font-medium pt-1">
                    {errors.email}
                  </p>
                </div>

                <div className="my-4 relative">
                  <input
                    name="password"
                    value={formValues.password}
                    onChange={handleInputChange}
                    className="py-2 pl-2 w-full border border-gray-300 outline-none rounded-md shadow-md text-sm font-medium"
                    type={passwordVisible ? "text" : "password"}
                    placeholder="Password"
                  />
                  <img
                    src={unlock}
                    alt="Toggle Password Visibility"
                    className="absolute right-3 top-2 cursor-pointer w-6 h-6"
                    onClick={togglePasswordVisibility}
                  />
                  <p className="text-[10px] text-red-500 font-medium pt-1">
                    {errors.password}
                  </p>
                  <Link
                    to="/auth/reset/emailCheck"
                    className="text-xs text-blue-600"
                  >
                    Forgot Password
                  </Link>
                </div>

                <div className="mt-5">
                  <button
                    type="submit"
                    className={`w-full py-2.5 rounded-md border text-sm flex justify-center items-center ${
                      serverError ? "bg-red-600" : "bg-gray-950"
                    }`}
                  >
                    {loginLoading ? (
                      <div className="border-t-2 border-b-2 border-gray-500 w-5 h-5 text-white rounded-full animate-spin"></div>
                    ) : (
                      <p className="text-white">Faculty Login</p>
                    )}
                  </button>
                  <p className="text-gray-800 mt-4 text-xs font-medium text-center">
                    Don&apos;t have an account?{" "}
                    <Link
                      to="/auth/faculty-register"
                      className="font-semibold text-blue-600"
                    >
                      Register
                    </Link>
                    .
                  </p>
                  {serverError && (
                    <p className="text-red-500 text-xs mt-2 text-center">
                      {serverError}
                    </p>
                  )}
                </div>
              </form>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default FacultyLogin;
