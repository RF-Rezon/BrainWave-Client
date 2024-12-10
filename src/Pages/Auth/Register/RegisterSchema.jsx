// RegisterSchema.jsx

const RegisterSchema = {
  fullName: {
    regex: /^[a-zA-Z\s]{3,50}$/,
    errorMessage: "Enter 3-50 letters only.",
  },
  username: {
    regex: /^[a-zA-Z0-9_]{3,16}$/,
    errorMessage: "Enter 3-16 characters",
  },
  classRoll: {
    regex: /^[0-9]{1,7}$/,
    errorMessage: "Enter up to 6 digits.",
  },
  email: {
    regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    errorMessage: "Invalid email format.",
  },
  password: {
    regex: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,20}$/,
    errorMessage: "6-20 chars with 1 letter & 1 number.",
  },
  confirmPassword: {
    errorMessage: "Passwords do not match.",
  },
};

export default RegisterSchema;
