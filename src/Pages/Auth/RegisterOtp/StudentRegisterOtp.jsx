import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import like from "../../../../public/images/auth/register/like.gif";
import successSound from "../../../../public/images/auth/register/success.mp3";
import { Api } from "../../../Api/Api";

const StudentRegisterOtp = () => {
  const [code, setCode] = useState(["", "", "", "", ""]);
  const [timer, setTimer] = useState(120);
  const [isSuccess, setIsSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleChange = (e, index) => {
    const value = e.target.value.slice(-1);
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    if (value && index < code.length - 1) {
      document.getElementById(`code-${index + 1}`).focus();
    }
  };

  useEffect(() => {
    if (timer > 0) {
      const countdown = setInterval(() => setTimer((prev) => prev - 1), 1000);
      return () => clearInterval(countdown);
    }
  }, [timer]);

  const handleContinue = async () => {
    const otp = code.join("");
    setLoading(true);
    setError(false);
    try {
      const response = await axios.post(
        `${Api}/student-auth/student-register-verify-otp`,
        {
          email: location?.state?.email,
          otp,
        },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("OTP Verification Response:", response);
      if (response.status === 201) {
        setIsSuccess(true);
        playRingtone();
        setTimeout(() => navigate("/"), 4000);
      }
    } catch (error) {
      console.error(
        "Error verifying OTP:",
        error.response?.data || error.message
      );
      setError(true);
      setLoading(false);
    }
  };

  const playRingtone = () => {
    const audio = new Audio(successSound);
    audio.play();
  };

  if (isSuccess) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <img
            src={like}
            alt="Success"
            loading="eager"
            className="w-24 rounded-2xl h-24 mx-auto mb-4"
          />
          <h2 className="text-2xl font-semibold">Welcome to Tejgaon College</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-6 bg-white rounded shadow-md w-full max-w-sm text-center">
        <h1 className="text-xl font-semibold mb-4">Verify Your Email</h1>
        <p className="text-black mb-7 font-medium">
          Enter the code sent to {location.state?.data?.email}
        </p>
        <div className="flex justify-center gap-2 mb-6">
          {code.map((value, index) => (
            <input
              key={index}
              id={`code-${index}`}
              type="text"
              maxLength="1"
              value={value}
              onChange={(e) => handleChange(e, index)}
              className="w-12 h-12 border text-center text-xl rounded focus:outline-none focus:ring focus:ring-gray-800"
            />
          ))}
        </div>

        <p className="text-sm text-gray-500 mb-4">
          Code expires in{" "}
          <span className="font-medium">
            {Math.floor(timer / 60)}:{String(timer % 60).padStart(2, "0")}
          </span>
        </p>
        <button
          onClick={() => setTimer(120)}
          disabled={timer > 0}
          className={`text-sm font-medium ${
            timer > 0
              ? "text-gray-400 cursor-not-allowed"
              : "text-gray-700 cursor-pointer"
          }`}
        >
          Resend Code
        </button>

        <div className="flex items-center mt-6 justify-center space-x-5 ">
          <Link
            to="/auth/register"
            className="w-full text-sm font-medium py-2 rounded-md  outline-none border-gray-800 border  hover:bg-red-400 transition duration-500"
          >
            Cancel
          </Link>
          <button
            onClick={handleContinue}
            disabled={loading}
            className={`w-full text-sm font-medium py-2 rounded-md outline-none ${
              loading ? "bg-gray-400" : error ? "bg-red-600" : "bg-gray-800"
            } border border-gray-800 hover:bg-gray-800 text-white transition duration-500`}
          >
            {loading ? (
              <div className="w-5 h-5 border-4 border-t-4 border-gray-300 rounded-full animate-spin mx-auto"></div>
            ) : (
              "Continue"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudentRegisterOtp;
