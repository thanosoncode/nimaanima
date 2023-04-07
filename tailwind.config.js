/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      lightGreen: "#DDEBE2",
    },
    extend: {
      gridTemplateColumns: {
        gridAuto: "repeat(auto-fill, 200px)",
      },
    },
  },
  plugins: [],
};
