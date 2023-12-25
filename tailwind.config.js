/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark': '#1C2026',
        'ultra': '#0A0B0D',
        'ultra-alfa': '#0A0B0DAA',
        'gray': '#2D3540'
      },
      fontFamily: {
        primary: "Montserrat-Regular",
        secondary: "Montserrat-Bold"
      }
    },
  },
  plugins: [],
}

