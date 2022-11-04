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
      'defaultBackground':'#F4F4F4',
      'primaryRed':' #FA4F4F',
      'mainBlack':'#121212'
    },
    fontFamily:{
      'montserrat':['Montserrat', 'sans-serif']
    }
  },
  plugins: [],
}
