/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,html}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "manrope": ["manrope"]
      },
      colors: {
        primary: "#0E2736",
        secondary: "#07141C"
      },
    },
  },
  plugins: [],
}
