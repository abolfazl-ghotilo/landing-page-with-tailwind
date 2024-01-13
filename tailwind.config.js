/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    colors:{
      transparent:"transparent",
      primary: "#6b6b6b",
      secondary: "#F8D57E",
      tertiary: "#333333",
      black: "#000000",
      white: "#f3f3f3",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '2rem',
        sm: '2rem',
        lg: '2rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {},
  },
  plugins: [],
}