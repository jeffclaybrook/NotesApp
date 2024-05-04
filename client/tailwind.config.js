/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    fontFamily: {
      display: ["Inter", "sans-serif"]
    },
    extend: {
      colors: {
        primary: "#2B85FF",
        secondary: "#EF863E"
      }
    }
  },
  plugins: []
}