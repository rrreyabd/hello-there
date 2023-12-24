/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'header': "'Shadows Into Light', cursive",
        'main': "'Jost', sans-serif",
      },
      colors: {
        'main': '#0f0f11',
        'container': '#17191c',
        'input': '#16181b',
        'border': 'rgba(165,170,180, 0.2)',
        'text': '#a5aab4',
        'blue': '#18b8ee',
      }
    },
  },
  plugins: [],
}