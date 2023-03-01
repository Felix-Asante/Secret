/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
module.exports = {
  content: ['./App.{ts,tsx}', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ...colors,
        green: '#007849',
        greenShade: '#35976a',
        blue: '#00A9F2',
        gray: '#d0d2d6',
        gray100: '#F1F3F6',
        orange100: '#FFE5CE',
        light: '#ffff',
      },
    },
  },
  plugins: [],
};
