/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'header': "'Shadows Into Light', cursive",
        'main': "'Jost', sans-serif",
      },
      colors: {
        'main': '#241b35',
        'secondary': '#342a45',
      }
    },
  },
  plugins: [],
}