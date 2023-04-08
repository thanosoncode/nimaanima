/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightGreen: {
          400: "#DDEBE2",
        },
        lightBlue: {
          400: "#D7E6F5",
        },
        lightPink: {
          400: "#F8EBE6",
        },
      },
    },
  },
  plugins: [],
};
