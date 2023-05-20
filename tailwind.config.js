/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: { min: "480px", max: "640px" },
      },
      colors: {
        main: {
          400: "#F1641D",
        },
        lightGreen: {
          400: "#DDEBE2",
        },
        someBlue: {
          400: "#D7E6F5",
          500: "#4D6BC6",
          600: "#2E466C",
        },
        lightPink: {
          400: "#F8EBE6",
        },
      },
    },
  },
  plugins: [],
};
