/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'barlow-condensed': ['Barlow Condensed', 'sans-serif'],
        barlow: ['Barlow', 'sans-serif'],
        bellefair: ['Bellefair', 'serif'],
      },
      colors: {
        'color-lavendar': '#d0d6f9',
        'color-black': '#0b0d17',
      },
      backgroundImage: {
        'home-desktop': "url('../src/assets/home/background-home-desktop.jpg')",
        'home-tablet': "url('../src/assets/home/background-home-tablet.jpg')",
        'home-mobile': "url('../src/assets/home/background-home-mobile.jpg')",
      },
      backgroundColor: {
        'navbar-links': 'rgba(255, 255, 255, 0.04)',
      },
    },
  },
  plugins: [],
};
