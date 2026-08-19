/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      '2xl': {'max': '1535px'},

      'xl': {'max': '1279px'},

      'lg': {'max': '1023px'},

      'md': {'max': '875px'},

      'sm': {'max': '700px'},

      'xs': {'max': '600px'},

      'xxs': {'max': '500px'},
    }
  },
  plugins: [],
}

