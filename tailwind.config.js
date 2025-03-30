// eslint-disable-next-line no-undef
const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        theme: {
          DEFAULT: colors.slate[900],
          background: colors.slate,
          foreground: colors.teal,
          text: colors.white
        }
      }
    },
  },
  plugins: [],
}