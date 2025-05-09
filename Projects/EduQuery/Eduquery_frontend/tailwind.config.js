/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./index.html",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          300: "#eeeeef",
          200: "#e6e9ed",
          600: "#95989c",
        },
        purple: {
          300: "#d9ddee",
          500: "#9492db",
          600: "#7164c0",
      }
    },
  }
  },
  plugins: [],
}

