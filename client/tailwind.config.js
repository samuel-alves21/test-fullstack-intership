/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      amazon_ember: ['Amazon Ember'],
      amazon_display: ['Amazon Ember Display']

    },
    extend: {
      colors: {
        amazon_primary: '#ff9900',
        amazon_secundary: '#eec083',
        amazon_secundary_hover: '#e0b174',
        amazon_tertiaty: '#131921',
        amazon_quaternary: '#232f3e',
        amazon_button: '#ffd814',
        amazon_rating: '#2f8b9b',

      },
    },
  },
  plugins: [],
}
