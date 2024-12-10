import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../../../public/images/officialLogo/logo.jpeg";
import { Api } from "../../../../Api/Api";

const ForgotPassEmailCheck = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setError("");
    setSuccessMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError("Please enter a valid email.");
      return;
    }

    try {
      setLoading(true);
      setError("");
      setSuccessMessage("");

      const response = await axios.post(
        `${Api}/auth/forgot-password/verify-email`,
        {
          email,
        }
      );
      console.log("email find api",response.data)

      setSuccessMessage(response.data.message || "OTP sent to your email.");
      setTimeout(() => {
        navigate("/auth/reset/verify-otp", {
          state: { data: response.data, email: email },
        });
      }, 2000);
    } catch (err) {
      setError(
        err.response?.data?.message || "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center pt-12 lg:pt-36">
      <div className="w-full px-8 md:w-1/3 xl:w-[400px]">
        <div className="text-center mb-8">
          <img src={logo} alt="Logo" className="w-32 mx-auto rounded-full" />
          <h1 className="text-2xl font-semibold text-gray-800 mt-4">
            Forgot Password
          </h1>
          <p className="text-sm text-gray-600">
            Enter your email to reset your password.
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-lg shadow-md"
        >
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={handleEmailChange}
              className="mt-1 block w-full p-2 focus:outline-none border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Enter your email"
            />
            {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
          </div>
          <button
            type="submit"
            className={`w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
              loading ? "bg-gray-600" : "bg-gray-900 hover:bg-gray-800"
            }`}
            disabled={loading}
          >
            {loading ? "Sending..." : "Send OTP"}
          </button>
          {successMessage && (
            <p className="text-green-500 text-sm mt-4 text-center">
              {successMessage}
            </p>
          )}
        </form>
        <p className="text-center text-gray-800 mt-4 text-sm">
          Remember your password?{" "}
          <Link to="/auth/login" className="font-medium text-blue-600">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassEmailCheck;
