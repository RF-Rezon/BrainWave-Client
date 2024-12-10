import axios from "axios";
import { useState } from "react";
import edit from "../../../public/images/profile/edit.png";
import { useProfile } from "../../Providers/ProfileProvider";

const ProfilePage = () => {
  const { profile, loading, error, refetch } = useProfile(); // Include loading and error
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 10; // 10 days per page

  // Handle paginated attendance safely
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

  // Display loading or error states
  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <p>Loading profile...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <p className="text-red-500">Error: {error}</p>
        <button
          onClick={refetch}
          className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          Retry
        </button>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <p>No profile data found.</p>
      </div>
    );
  }

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

        {/* Additional sections remain unchanged */}
        {/* Attendance, Details, and Pagination */}
      </div>
    </div>
  );
};

export default ProfilePage;
