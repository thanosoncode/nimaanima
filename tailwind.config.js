/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    // screens: {
    //   xs: '480px',
    // },
    extend: {
      boxShadow: {
        soft: '0 0px 10px rgba(0, 0, 0, 0.1)',
        cart: '0px 1px 3px 0px rgba(0,0,0,.3019607843), 0px 4px 8px 3px rgba(0,0,0,.1490196078)',
        hover: '0 0px 10px rgba(0, 0, 0, 0.3)',
      },
      gridTemplateColumns: {
        tight: 'repeat(auto-fill, minmax(190px, 1fr))',
        wide: 'repeat(auto-fill, minmax(300px, 0.4fr))',
        normal: 'repeat(auto-fill, minmax(280px, 1fr))',
      },
      gridAutoRows: {
        tight: 'minmax(280px, auto)',
        wide: 'minmax(220px, auto)',
      },
      screens: {
        xs: { min: '460px', max: '639px' },
      },
      colors: {
        main: {
          400: '#F1641D',
        },
        lightGreen: {
          400: '#DDEBE2',
        },
        someBlue: {
          400: '#D7E6F5',
          500: '#4D6BC6',
          600: '#2E466C',
        },
        lightPink: {
          400: '#F8EBE6',
        },
        lightPeach: {
          400: '#FDEBD2',
        },
      },
    },
  },
  plugins: [],
};
