/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
       screens: {
        '2xlplus': '1630px', // custom breakpoint
      },
      colors: {
        gold1: '#CDAB65',
        gold2: '#F5D5A2',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(to right, #CDAB65, #F5D5A2)',
      },
    },
  },
  plugins: [],
}