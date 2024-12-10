/* eslint-disable react/prop-types */
import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { Api } from "../Api/Api";

const ProfileContext = createContext();

export const useProfile = () => useContext(ProfileContext);

const ProfileProvider = ({ children }) => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProfile = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await axios.get(
        `${Api}/student-profile/student-profile`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`, // Retrieve token from localStorage
          },
          withCredentials: true,
        }
      );

      setProfile(response.data.profile);
    } catch (err) {
      console.error("Error fetching profile:", err.message);
      setError(
        err.response?.data?.message ||
          "Failed to fetch profile. Please try again."
      );
      setProfile(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  const value = {
    profile,
    loading,
    error,
    setProfile,
    refetch: fetchProfile,
  };

  return (
    <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>
  );
};

export default ProfileProvider;
