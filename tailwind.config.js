const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
   darkMode: false, // or 'media' or 'class'
   theme: {
     extend: {
       colors: {
         primary: colors.teal
       }
     },
   },
   variants: {
     extend: {},
   },
   plugins: [],
 }