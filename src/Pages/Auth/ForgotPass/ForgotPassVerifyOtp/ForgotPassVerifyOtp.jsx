import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ForgotPassVerifyOtp = () => {
  const [code, setCode] = useState(["", "", "", "", ""]);
  const [error, setError] = useState(false);
  const [timer, setTimer] = useState(120);
  const location = useLocation();
  const navigate = useNavigate();
  console.log("location verify otp", location.state);

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

  const handleVerifyOtp = () => {
    const otp = code.join("");
    setError(false);

    if (otp === location?.state?.data?.otp) {
      navigate("/auth/reset/newPassword", {
        state: { email: location.state.email, otp: otp },
      });
    } else {
      setError(true);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-6 bg-white rounded shadow-md w-full max-w-sm text-center">
        <h1 className="text-xl font-semibold mb-4">Verify OTP</h1>
        <p className="text-black mb-7 font-medium">
          Enter the OTP sent to {location?.state?.data?.email}
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

        <div className="flex items-center mt-6 justify-center space-x-5">
          <button
            onClick={handleVerifyOtp}
            className="w-full text-sm font-medium py-2 rounded-md bg-gray-800 border border-gray-800 hover:bg-gray-700 text-white transition duration-500"
          >
            Verify OTP
          </button>
        </div>
        {error && (
          <p className="text-red-500 text-sm mt-4">
            Invalid OTP. Please try again.
          </p>
        )}
      </div>
    </div>
  );
};

export default ForgotPassVerifyOtp;
