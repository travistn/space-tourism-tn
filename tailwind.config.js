/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'barlow-condensed': ['Barlow Condensed', 'sans-serif'],
        bellefair: ['Bellefair', 'serif'],
      },
      colors: {
        'color-lavendar': '#d0d6f9',
        'color-black': '#0b0d17',
      },
    },
  },
  plugins: [],
};
