/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // 👈 Esto es lo importante
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
