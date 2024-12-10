import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Delete from "../../../../public/images/auth/register/delete.png";
import upload from "../../../../public/images/auth/register/upload.png";
import logo from "../../../../public/images/officialLogo/logo.jpeg";
import { Api } from "../../../Api/Api";
import RegisterSchema from "./RegisterSchema";

const uploadImageToCloudinary = async (file) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "ml_default");

  try {
    const response = await axios.post(
      `https://api.cloudinary.com/v1_1/dr5jpj9qs/image/upload`,
      formData
    );
    return response.data.secure_url; // URL of the uploaded image
  } catch (error) {
    console.error("Error uploading image:", error);
    return null;
  }
};

const FacultyRegister = () => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    facultyName: "",
    email: "",
    password: "",
    confirmPassword: "",
    facultyId: "",
  });
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [errors, setErrors] = useState({});
  const [registerLoading, setregisterLoading] = useState(false);
  const [serverError, setServerError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
    validateField(name, value);
  };

  const validateField = (name, value) => {
    const schema = RegisterSchema[name];
    if (schema) {
      if (name === "confirmPassword") {
        setErrors((prev) => ({
          ...prev,
          [name]: value !== formValues.password ? schema.errorMessage : "",
        }));
      } else {
        setErrors((prev) => ({
          ...prev,
          [name]: schema.regex.test(value) ? "" : schema.errorMessage,
        }));
      }
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setPreview(previewUrl);
      setSelectedFile(file);
    }
  };

  const handleDeleteImage = () => {
    setPreview(null);
    setSelectedFile(null);
    document.getElementById("profilePhoto").value = null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const hasErrors = Object.values(errors).some((err) => err !== "");
    if (hasErrors) {
      alert("Please fix the errors in the form.");
      return;
    }

    try {
      setregisterLoading(true);
      setServerError("");

      let photoUrl = null;
      if (selectedFile) {
        photoUrl = await uploadImageToCloudinary(selectedFile);
      }

      const payload = {
        facultyName: formValues.facultyName,
        email: formValues.email,
        password: formValues.password,
        facultyId: formValues.facultyId,
        photo: photoUrl,
      };

      const response = await axios.post(
        `${Api}/faculty-auth/faculty-register`,
        payload,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      console.log(response);
      if (response.status === 201) {
        navigate("/auth/register/faculty-otp", { state: { data: response.data, email: formValues.email } });
      }

      setFormValues({
        facultyName: "",
        email: "",
        password: "",
        confirmPassword: "",
        facultyId: "",
      });
      setErrors({});
      setPreview(null);
      setSelectedFile(null);
    } catch (error) {
      console.error(
        "Registration failed:",
        error.response?.data || error.message
      );
      setServerError(
        error.response?.data?.message ||
          "Something went wrong. Please try again."
      );
    } finally {
      setregisterLoading(false);
    }
  };

  return (
    <div className="mt-2">
      <div className="min-h-screen bg-gray-100">
        <div className="w-full">
          <section className="w-full px-8 md:px-2 md:w-1/3 xl:w-[400px] md:mx-auto py-3 flex flex-col pt-10">
            <div className="flex-1/3 flex flex-col items-center gap-y-3">
              <div>
                <img
                  src={logo}
                  alt="university-logo"
                  className="w-32 rounded-full"
                  loading="lazy"
                />
              </div>
              <div>
                <p className="text-center text-gray-800 font-medium text-2xl">
                  Faculty Registration
                </p>
              </div>
            </div>
            <div className="flex-2/3 pt-9">
              <form onSubmit={handleSubmit}>
                <div className="my-4">
                  <input
                    name="facultyName"
                    value={formValues.facultyName}
                    onChange={handleInputChange}
                    className="py-2 pl-2 w-full border border-gray-300 outline-none rounded-md shadow-md text-sm font-medium"
                    type="text"
                    placeholder="Full Name"
                  />
                  <p className="text-[10px] text-red-500 font-medium pt-1">
                    {errors.facultyName}
                  </p>
                </div>

                <div className="my-4">
                  <input
                    name="facultyId"
                    value={formValues.facultyId}
                    onChange={handleInputChange}
                    className="py-2 pl-2 w-full border border-gray-300 outline-none rounded-md shadow-md text-sm font-medium"
                    type="text"
                    placeholder="Faculty ID"
                  />
                  <p className="text-[10px] text-red-500 font-medium pt-1">
                    {errors.facultyId}
                  </p>
                </div>

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

                <div className="my-4">
                  <input
                    name="password"
                    value={formValues.password}
                    onChange={handleInputChange}
                    className="py-2 pl-2 w-full border border-gray-300 outline-none rounded-md shadow-md text-sm font-medium"
                    type="password"
                    placeholder="Password"
                  />
                  <p className="text-[10px] text-red-500 font-medium pt-1">
                    {errors.password}
                  </p>
                </div>

                <div className="my-4 relative">
                  <input
                    name="confirmPassword"
                    value={formValues.confirmPassword}
                    onChange={handleInputChange}
                    className="py-2 pl-2 w-full border border-gray-300 outline-none rounded-md shadow-md text-sm font-medium"
                    type="password"
                    placeholder="Confirm Password"
                  />
                  <p className="text-[10px] text-red-500 font-medium pt-1">
                    {errors.confirmPassword}
                  </p>
                </div>

                <div className="flex items-center justify-center relative border border-gray-400 rounded-lg">
                  <input
                    type="file"
                    id="profilePhoto"
                    onChange={handleFileChange}
                    className="absolute inset-0 opacity-0 cursor-pointer"
                  />
                  <div className="flex items-center justify-center py-3 flex-col gap-1">
                    <img
                      src={upload}
                      className="w-6"
                      loading="lazy"
                      alt="Upload Icon"
                    />
                    <p className="text-xs">Your Photo</p>
                  </div>
                </div>

                {preview && (
                  <div className="my-4 flex justify-center relative">
                    <img
                      src={preview}
                      alt="Preview"
                      className="w-24 h-24 rounded-full object-cover"
                    />
                    <img
                      src={Delete}
                      alt="Delete"
                      className="absolute top-0 right-0 w-6 cursor-pointer"
                      onClick={handleDeleteImage}
                    />
                  </div>
                )}
                <div className="mt-5">
                  <button
                    type="submit"
                    className={`w-full py-2.5 rounded-md border text-sm flex justify-center items-center ${
                      serverError ? "bg-red-600" : "bg-gray-950"
                    }`}
                  >
                    {registerLoading ? (
                      <div className="border-t-2 border-b-2 border-gray-500 text-white w-5 h-5 text-sm rounded-full animate-spin"></div>
                    ) : (
                        <p className="text-white">Create Faculty Account</p>
                    )}
                  </button>
                  <p className="text-gray-800 mt-4 text-xs font-medium text-center">
                    Already have an account?
                    <Link to="/auth/faculty-login" className="font-semibold text-blue-600">
                      SignIn
                    </Link>
                    .
                  </p>
                </div>
                <p className="text-xs text-red-500 mt-2">{serverError}</p>
              </form>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default FacultyRegister;
