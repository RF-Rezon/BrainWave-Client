/** @type {import('tailwindcss').Config} */
import flowbite from "flowbite-react/tailwind";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      colors: {
      // Custom color variables
      'custom-base-red': '#890C25',
    },
    fontFamily: {
      base: ["Inter", "sans-serif"], // For base text
      heading: ["PT Sans", "sans-serif"], // For headings
    }
  },
  },
  plugins: [flowbite],
}

