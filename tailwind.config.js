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
      lightBlue: "#D7E6F5",
      lightPink: "#F8EBE6",
    },
    extend: {
      gridTemplateColumns: {
        gridAuto: "repeat(auto-fill, 200px)",
      },
    },
  },
  plugins: [],
};
