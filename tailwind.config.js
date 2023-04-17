/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'home_banner': "url('../public/assets/databoard_bg.png')",
        'clocker_banner': "url('../public/assets/clocker_bg.png')",
        'clocker_iphone': "url('../public/assets/iphone_bg.png')",
        'security': "url('../public/assets/Privacy.png')",
        'clocker_iphone': "url('../public/assets/iphone_bg.png')",
        'clocker_iphone': "url('../public/assets/iphone_bg.png')",
        
      },
      colors: {
        'databoard-blue': '#4283E4',
        'dark-text':'#121212',
        'inactive-text': '#838282',
      },
    },
    screens: {
      'xsm': '540px', // min-width
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px'
    },
    colors:{
      'primaryBlue':'#4283E4',
      'blueInactive':'#8BAAE9',
      'grayInactive':'#C3C3C3',
      'inactiveText':'#838282',
      'blackMain':'#121212',
      'pureWhite':' #FEFEFE',
      'defaultBackground':'#F4F4F4',
      'primaryRed':' #FA4F4F'
    },
  },
  plugins: [],
}
