import axios from "axios";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Api } from "../../../../Api/Api";

const ForgotPassNewPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const location = useLocation();
  console.log("location of new password", location.state);
  const navigate = useNavigate();

  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    try {
      setLoading(true);
      setError("");
      setSuccessMessage("");

      const response = await axios.post(
        `${Api}/auth/forgot-password/reset-password`,
        {
          email: location.state?.email, 
         newPassword: password,
         otp:location.state?.otp

        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        setSuccessMessage("Password updated successfully.");
        setTimeout(() => navigate("/"), 2000);
      }
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
          <h1 className="text-2xl font-semibold text-gray-800">
            Reset Password
          </h1>
          <p className="text-sm text-gray-600">
            Enter your new password to reset your account.
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-lg shadow-md"
        >
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              New Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={handlePasswordChange}
              className="mt-1 block w-full p-2 focus:outline-none border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Enter new password"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="confirm-password"
              className="block text-sm font-medium text-gray-700"
            >
              Confirm Password
            </label>
            <input
              id="confirm-password"
              type="password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              className="mt-1 block w-full p-2 focus:outline-none border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Confirm new password"
            />
          </div>
          {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
          <button
            type="submit"
            className={`w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
              loading ? "bg-gray-600" : "bg-gray-900 hover:bg-gray-800"
            }`}
            disabled={loading}
          >
            {loading ? "Updating..." : "Update Password"}
          </button>
          {successMessage && (
            <p className="text-green-500 text-sm mt-4 text-center">
              {successMessage}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default ForgotPassNewPassword;
