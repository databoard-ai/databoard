/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {

    },
    screens: {
      'xsm': '540px', // min-width
    },
    colors:{
      'primaryBlue':'#4283E4',
      'blueInactive':'#8BAAE9',
      'grayInactive':'#C3C3C3',
      'inactiveText':'#838282',
      'blackMain':'#121212',
      'pureWhite':' #FEFEFE',
      'primaryRed':' #FA4F4F'
    },
    fontFamily:{
      'montserrat':['Montserrat', 'sans-serif']
    }
  },
  plugins: [],
}
