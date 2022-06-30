/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,html}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "manrope": ["manrope"]
      },
      colors: {
        primary: "#0E2736",
        secondary: "#07141C",
        font: "red-200"
      },
    },
  },
  plugins: [],
}
