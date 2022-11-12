/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,html}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["manrope"],
      },
      colors: {
        primary: "#0E2736",
        secondary: "#07141C",
        font: "red-200",
      },
    },
  },
  plugins: [],
};
