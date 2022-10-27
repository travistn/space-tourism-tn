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
        'destination-mobile': 'url(../src/assets/destination/background-destination-mobile.jpg)',
        'destination-tablet': 'url(../src/assets/destination/background-destination-tablet.jpg)',
        'destination-desktop': 'url(../src/assets/destination/background-destination-desktop.jpg)',
        'crew-mobile': 'url(../src/assets/crew/background-crew-mobile.jpg)',
        'crew-tablet': 'url(../src/assets/crew/background-crew-tablet.jpg)',
        'crew-desktop': 'url(../src/assets/crew/background-crew-desktop.jpg)',
        'technology-mobile': 'url(../src/assets/technology/background-technology-mobile.jpg)',
        'technology-tablet': 'url(../src/assets/technology/background-technology-tablet.jpg)',
        'technology-desktop': 'url(../src/assets/technology/background-technology-desktop.jpg)',
      },
      backgroundColor: {
        'navbar-links': 'rgba(255, 255, 255, 0.04)',
      },
    },
  },
  plugins: [],
};
