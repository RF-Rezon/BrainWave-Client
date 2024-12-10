/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      colors: {
      // Custom color variables
      'custom-base-red': '#890C25',
      
    },
    fontFamily: {
      // Custom font family
      logoText: ['"Poppins"', 'sans-serif'],
      body: ['"Inter"', 'sans-serif'],
    },
  },
  },
  plugins: [flowbite.plugin()],
}

