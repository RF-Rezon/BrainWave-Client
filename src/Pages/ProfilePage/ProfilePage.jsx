import { useProfile } from "../../Providers/ProfileProvider";
import { useState } from "react";
import axios from "axios";
import edit from "../../../public/images/profile/edit.png";

const ProfilePage = () => {
  const { profile, setProfile } = useProfile();
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 10; // 10 days per page

  const totalPages = Math.ceil(
    (profile?.attendance?.length || 0) / recordsPerPage
  );
  const paginatedAttendance = profile?.attendance?.slice(
    (currentPage - 1) * recordsPerPage,
    currentPage * recordsPerPage
  );

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  // State for file uploads
  const [isUploading, setIsUploading] = useState(false);
  const [uploadError, setUploadError] = useState(null);

  const handlePhotoUpload = async (field, file) => {
    setIsUploading(true);
    setUploadError(null);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("field", field);

    try {
      const response = await axios.post("/profile/update-photo", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setProfile((prevProfile) => ({
        ...prevProfile,
        [field]: response.data.url, // Assuming API returns the new URL
      }));
    } catch (err) {
      setUploadError("Failed to update photo. Please try again.");
      console.error("Error updating photo:", err);
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl overflow-hidden">
        {/* Cover Photo */}
        <div className="relative">
          <img
            src={profile?.coverPhoto || "https://via.placeholder.com/800x200"}
            alt="Cover Photo"
            className="w-full h-48 object-cover"
          />
          {/* Edit Cover Photo */}
          <button className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-lg hover:shadow-xl">
            <label className="cursor-pointer flex items-center">
              <img src={edit} alt="Edit Cover Photo" className="w-6 h-6" />
              <input
                type="file"
                className="hidden"
                accept="image/*"
                onChange={(e) => {
                  if (e.target.files[0]) {
                    handlePhotoUpload("coverPhoto", e.target.files[0]);
                  }
                }}
              />
            </label>
          </button>
          {/* Profile Photo */}
          <img
            src={profile?.profilePhoto || "https://via.placeholder.com/150"}
            alt="Profile"
            className="absolute -bottom-16 left-6 w-32 h-32 rounded-full border-4 border-white object-cover"
          />
          {/* Edit Profile Photo */}
          <button className="absolute bottom-2 left-28 bg-white p-2 rounded-full shadow-lg hover:shadow-xl">
            <label className="cursor-pointer flex items-center">
              <img src={edit} alt="Edit Profile Photo" className="w-6 h-6" />
              <input
                type="file"
                className="hidden"
                accept="image/*"
                onChange={(e) => {
                  if (e.target.files[0]) {
                    handlePhotoUpload("profilePhoto", e.target.files[0]);
                  }
                }}
              />
            </label>
          </button>
        </div>

        {/* Profile Info */}
        <div className="px-6 mt-16">
          <h1 className="text-2xl font-semibold text-gray-800">
            {profile?.fName || "Unknown"}
          </h1>
          <p className="text-gray-600 text-sm">@{profile?.username || "N/A"}</p>
          <p className="text-gray-600 mt-2">
            {profile?.bio || "No bio available"}
          </p>
        </div>

        {/* Error Feedback */}
        {uploadError && (
          <div className="px-6 py-4 text-center text-red-500 text-sm">
            {uploadError}
          </div>
        )}

        {/* Loading Indicator */}
        {isUploading && (
          <div className="px-6 py-4 text-center text-blue-500 text-sm">
            Updating photo...
          </div>
        )}

        {/* Profile Details */}
        <div className="px-6 mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-100 rounded-2xl p-4 shadow-sm relative">
            <h2 className="text-lg font-semibold text-gray-800">
              Personal Details
            </h2>
            <ul className="mt-2 text-sm text-gray-600">
              <li>
                <strong>Email:</strong> {profile?.email || "Not provided"}
              </li>
              <li>
                <strong>Phone:</strong> {profile?.phone || "Not provided"}
              </li>
              <li>
                <strong>Location:</strong> {profile?.location || "Not provided"}
              </li>
              <li>
                <strong>Date of Birth:</strong>{" "}
                {profile?.dateOfBirth || "Not provided"}
              </li>
            </ul>
            <button className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-lg hover:shadow-xl">
              <img src={edit} alt="Edit" className="w-6 h-6" />
            </button>
          </div>

          <div className="bg-gray-100 rounded-2xl p-4 shadow-sm relative">
            <h2 className="text-lg font-semibold text-gray-800">
              Educational Details
            </h2>
            <ul className="mt-2 text-sm text-gray-600">
              <li>
                <strong>College Roll:</strong>{" "}
                {profile?.collegeRoll || "Not provided"}
              </li>
              <li>
                <strong>Department:</strong>{" "}
                {profile?.department || "Not provided"}
              </li>
              <li>
                <strong>Session:</strong> {profile?.session || "Not provided"}
              </li>
              <li>
                <strong>Registration Number:</strong>{" "}
                {profile?.registrationNumber || "Not provided"}
              </li>
            </ul>
            <button className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-lg hover:shadow-xl">
              <img src={edit} alt="Edit" className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Attendance Section */}
        <div className="px-6 mt-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Attendance
          </h2>
          {paginatedAttendance?.length > 0 ? (
            paginatedAttendance.map((recordSet, index) => (
              <div
                key={index}
                className="bg-gray-100 rounded-2xl p-4 shadow-sm mb-4"
              >
                <p className="text-sm font-semibold text-gray-700 mb-2">
                  Month: {recordSet.month || "N/A"} ({recordSet.year || "N/A"})
                </p>
                <p>
                  <strong>Total Classes:</strong>{" "}
                  {recordSet.totalClasses || "N/A"}
                </p>
                <p>
                  <strong>Attended Classes:</strong>{" "}
                  {recordSet.attendedClasses || "N/A"}
                </p>
                <p>
                  <strong>Attendance Percentage:</strong>{" "}
                  {recordSet.attendancePercentage || "N/A"}%
                </p>
                <h3 className="text-md font-semibold text-gray-800 mt-4">
                  Recent Attendance:
                </h3>
                <ul className="mt-2 text-sm text-gray-600">
                  {recordSet.recentAttendance?.length > 0 ? (
                    recordSet.recentAttendance.map((record, idx) => (
                      <li
                        key={idx}
                        className={`py-1 flex justify-between ${
                          record.status === "Absent"
                            ? "text-red-500"
                            : "text-green-600"
                        }`}
                      >
                        <span>{record.date || "N/A"}</span>
                        <span>{record.status || "Unknown"}</span>
                      </li>
                    ))
                  ) : (
                    <li>No recent attendance records.</li>
                  )}
                </ul>
              </div>
            ))
          ) : (
            <p>No attendance records available.</p>
          )}

          {/* Pagination Controls */}
          <div className="flex justify-between items-center mt-4">
            <button
              className="px-4 py-2 bg-gray-200 rounded-full shadow-sm hover:bg-gray-300"
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <p className="text-sm">
              Page {currentPage} of {totalPages}
            </p>
            <button
              className="px-4 py-2 bg-gray-200 rounded-full shadow-sm hover:bg-gray-300"
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t mt-6 text-gray-600 text-sm text-center">
          Role:{" "}
          <span className="font-medium text-gray-800">
            {profile?.role || "Student"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
