/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors")

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layout/**/*.{js,ts,jsx,tsx}",
    "./views/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        dark:"#1A1919"
      },
      fontFamily:{
        sans:["Hind Madurai, sans-serif;"],
        heading:["Montserrat, sans-serif"]
      }
    },
  },
  plugins: [],
}
