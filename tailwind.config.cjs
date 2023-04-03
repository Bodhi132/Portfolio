/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        borderColor:'linear-gradient(to right, rgb(254, 202, 202), rgb(252, 165, 165), rgb(254, 240, 138))'
      }
    },
  },
  plugins: [],
}